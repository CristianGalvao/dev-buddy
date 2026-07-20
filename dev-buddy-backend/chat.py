import os
from dotenv import load_dotenv
from langchain_chroma import Chroma
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_groq import ChatGroq

load_dotenv()

# Setup
embeddings = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")
db = Chroma(persist_directory="./vector_db", embedding_function=embeddings)
llm = ChatGroq(groq_api_key=os.getenv("GROQ_API_KEY"), model="llama-3.3-70b-versatile", temperature=0)

print("Dev-Buddy Iniciado (Modo manual)")
while True:
    query = input("\nVocê: ")
    if query.lower() == "sair": break
    
    # 1. Busca manual no banco
    docs = db.similarity_search(query, k=2)
    contexto = "\n".join([d.page_content for d in docs])
    
    # 2. Envio manual para o LLM (sem usar 'chains')
    resposta = llm.invoke(f"Contexto: {contexto}\n\nPergunta: {query}")
    print(f"Dev-Buddy: {resposta.content}")
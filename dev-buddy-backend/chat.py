from langchain_chroma import Chroma
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain_groq import ChatGroq
from langchain.chains import RetrievalQA
import os

embeddings = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")
db = Chroma(persist_directory="./vector_db", embedding_function=embeddings)

llm = ChatGroq(os.getenv('groq_api_key'), model_name="llama3-70b-8192")

qa_chain = RetrievalQA.from_chain_type(llm, retriever=db.as_retriever())


print("Dev-Buddy CLI - Pergunte algo sobre os docs:")
while True:
    query = input("\nVocê: ")
    if query.lower() == "sair": break
    response = qa_chain.invoke(query)
    print(f"Dev-Buddy: {response['result']}")
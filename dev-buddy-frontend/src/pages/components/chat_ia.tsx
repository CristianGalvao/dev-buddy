
import { Send,  Bot } from 'lucide-react';

export default function ChatScreen() {


  return (
    <div className="flex h-screen bg-transparent text-white p-4">

      <main className="flex-1 ml-0 flex flex-col bg-[#1a1c24]/30 rounded-3xl border border-white/5">
        <div className="flex-1 overflow-y-auto p-8 space-y-6">

            <div className="flex gap-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shrink-0">
                    <Bot size={18} />
                </div>
                <div className="bg-white/5 p-4 rounded-2xl max-w-2xl border border-white/10">
                    <p className="text-sm leading-relaxed">
                        Olá, Cristian! Como SRE, você precisará clonar o repo <b>core-infra</b>. 
                        Como seu perfil é Pleno, aqui está o comando direto: <br/>
                        <code className="bg-black p-2 rounded block mt-2 text-blue-300">git clone --depth 1 git@github.com:empresa/core-infra.git</code>
                    </p>
                </div>
            </div>
        </div>

        <div className="p-4">
            <div className="relative">
                <input 
                    placeholder="Pergunte sobre ambientes ou setups..." 
                    className="w-full bg-[#1a1c24] border border-white/10 rounded-2xl py-4 pl-4 pr-14 text-white focus:outline-none"
                />
                <button className="absolute right-2 top-2 p-2 bg-blue-600 rounded-xl hover:bg-blue-700">
                    <Send size={18} />
                </button>
            </div>
        </div>
      </main>
    </div>
  );
}
import backgroundLogin from '../assets/background-login.png';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

function App() {

  return (

    <div className="min-h-screen flex bg-[#050505] text-white font-sans">
      <div className="hidden lg:flex flex-col justify-center items-center p-12 w-1/2 bg-[#0d1117]">

        <img
          src={backgroundLogin}
          alt="Dev Workspace"
          className="w-auto h-auto object-contain mx-auto mb-10"
        />

        <h1 className="text-4xl font-bold mb-4 text-center">Bem-Vindo ao Dev-Buddy!</h1>
        <p className="text-gray-400 text-center max-w-sm">
          Seu copiloto de integração. Acesse o conhecimento coletivo da equipe e acelere seu onboarding com respostas precisas
        </p>
      </div>


      <div className='w-full lg:w-1/2 flex items-center justify-center p-8'>
        <div className='w-full max-w-sm space-y-6'>
          <div className='hidden flex-col lg:flex justify-center items-center mb-8 font-bold text-2xl'>

            <img src={logo} className='w-[20%]' />

          </div>
          <div className="lg:hidden flex justify-center mb-8 font-bold text-2xl">Dev-Buddy</div>

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Olá, vamos começar!</h2>
            <p className="text-gray-400 text-sm">Faça login na sua conta.</p>
          </div>

          <div className="space-y-3 cursor-pointer">
            <button className=" !cursor-pointer w-full flex items-center justify-center gap-3 bg-[#0d1117] text-white py-3 rounded-lg font-medium border border-gray-700 hover:border-blue-500 hover:shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-all duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              <span>Continue com GitHub</span>
            </button>
          </div>

          <div className="relative flex items-center py-2">
            <div className="flex-grow border-t border-gray-800"></div>
            <span className="px-4 text-xs text-gray-500 uppercase">ou use seu e-mail</span>
            <div className="flex-grow border-t border-gray-800"></div>
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1.5">E-mail</label>
              <input type="email" className="w-full p-2.5 rounded-lg bg-[#0d1117] border border-gray-800 focus:border-blue-600 outline-none transition" placeholder="seu@email.com" />
            </div>
            <div>
              <div className="flex justify-between mb-1.5">
                <label className="text-sm text-gray-400">Senha</label>
                <a href="#" className="text-sm text-blue-500 hover:underline">Esqueceu a Senha?</a>
              </div>
              <input type="password" className="w-full p-2.5 rounded-lg bg-[#0d1117] border border-gray-800 focus:border-blue-600 outline-none transition" placeholder="••••••••" />
            </div>
            <button className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition mt-2">
              Entrar
            </button>
          </form>

          <p className="text-center text-sm text-gray-400 mt-6">
            Não tem uma conta? <a href="#" className="text-blue-500 hover:underline"><Link to="/register">Registre-se</Link></a>
          </p>

        </div>
      </div>
    </div>
  );
}

export default App
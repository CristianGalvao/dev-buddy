export default function ForgetPassword() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center p-4 bg-[#0d1117] ">
      <div className="w-full max-w-md p-8 bg-[#0d1117]  rounded-xl border border-gray-700 shadow-xl text-center">
        
        <div className="mb-6 flex justify-center text-blue-500">
           <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
           </svg>
        </div>

        <h1 className="text-2xl font-bold text-white mb-3">Esqueceu a senha?</h1>
        <p className="text-gray-400 text-sm mb-6">
          Não se preocupe! Informe seu e-mail cadastrado e enviaremos um link para você redefinir sua senha.
        </p>

        <form className="space-y-4">
          <input 
            type="email" 
            placeholder="Seu e-mail" 
            className="w-full p-3 bg-[#050505] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
          />
          
          <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all">
            Enviar link de recuperação
          </button>
        </form>

        <div className="mt-6">
           <a href="/" className="text-sm text-blue-500 hover:underline">
             Voltar para o login
           </a>
        </div>

      </div>
    </div>
  )
}
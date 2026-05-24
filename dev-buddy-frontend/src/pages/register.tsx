import logo from '../assets/logo.png';

export default function Register() {
    return (

        <div className="w-full min-h-screen flex justify-center items-center  flex-col">
            <div className=" w-full lg:w-[30%]  p-8 h-auto p-10 justify-center items-center flex-col flex text-center bg-[#0d1117]  rounded-lg font-medium border border-gray-700 border-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" >

                <img src={logo} className='w-[12%] mb-6 mt-8' />
                <h1 className="mb-6 font-bold text-3xl">Cadastre-se!</h1>

                <p className="text-sm text-gray-400 w-full max-w-md mx-auto">
                    Crie sua conta para acessar o conhecimento técnico da equipe e acelere seu fluxo de trabalho.
                </p>

                <div className='w-[100%] h-auto p-5 mt-8'>

                    <form className="space-y-4">
                        

                        <div>

                            <label className='block text-sm text-gray-400 mb-1.5 text-left'>Nome</label>
                            <input type='text' className='w-full p-2.5 rounded-lg bg-[#0d1117] border border-gray-800 focus:border-blue-600 outline-none transition'></input>

                        </div>

                        
                        <div>

                            <label className='block text-sm text-gray-400 mb-1.5 text-left'>Sobrenome</label>
                            <input type='text' className='w-full p-2.5 rounded-lg bg-[#0d1117] border border-gray-800 focus:border-blue-600 outline-none transition'></input>

                        </div>


                        <div>
                            <label className="block text-sm text-gray-400 mb-1.5 text-left">E-mail</label>
                            <input type="email" className="w-full p-2.5 rounded-lg bg-[#0d1117] border border-gray-800 focus:border-blue-600 outline-none transition" placeholder="seu@email.com" />
                        </div>

                        <div>

                            <div className="flex justify-between mb-1.5">
                                <label className="text-sm text-gray-400">Senha</label>
                            </div>
                            <input type="password" className="w-full p-2.5 rounded-lg bg-[#0d1117] border border-gray-800 focus:border-blue-600 outline-none transition" placeholder="••••••••" />

                        </div>


                        <div>

                            <div className="flex justify-between mb-1.5">
                                <label className="text-sm text-gray-400">Confirmar Senha</label>
                            </div>
                            <input type="password" className="w-full p-2.5 rounded-lg bg-[#0d1117] border border-gray-800 focus:border-blue-600 outline-none transition" placeholder="••••••••" />

                        </div>

                        <button className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition mt-2">
                            Cadastrar
                        </button>
                    </form>

                </div>
            </div>
        </div>
    )
}
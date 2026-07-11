import { Home, MessageSquare, Star, LayoutGrid, BarChart2, Settings,UserCircle } from 'lucide-react';

export default function Sidebar({ activePage, onNavigate }: { activePage: string, onNavigate: (page: string) => void }) {

  const menuItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'chat', label: 'Chat IA', icon: MessageSquare },
    { id: 'trilhas', label: 'Trilhas', icon: Star },
    { id: 'meu_acessos', label: 'Meus Acessos', icon: UserCircle },
    { id: 'projetos', label: 'Projetos', icon: LayoutGrid },
    { id: 'analytics', label: 'Analytics', icon: BarChart2 },
    { id: 'config', label: 'Configurações', icon: Settings },

  ]


  return (
    <aside className="w-64 bg-[#1a1c24]/50 backdrop-blur-md border border-white/10 rounded-3xl flex flex-col py-8 px-4">

      <h2 className="text-white font-bold text-xl mb-10 px-4 tracking-wider">Dev-Buddy</h2>
      <nav className="flex flex-col space-y-2 flex-grow">

        {menuItems.map((item) => {
          const Icon = item.icon;

          return (

            <MenuItem
              key={item.id}
              icon={<Icon size={20} />}
              label={item.label}
              active={activePage == item.id}
              onClick={() => onNavigate(item.id)}
            />

          )
        })}

      </nav>


      <div className="mt-auto pt-6 border-t border-white/10 px-2">
        <div className="flex items-center gap-3">


          <div className="w-10 h-10 bg-gray-700 rounded-full overflow-hidden border border-white/10">
            <img src="https://github.com/shadcn.png" alt="User" />
          </div>


          <div>
            <p className="text-white text-sm font-medium">Cristian Galvao</p>
            <p className="text-gray-500 text-xs">SRE</p>
          </div>

        </div>
      </div>
    </aside>
  );
}

function MenuItem({ icon, label, active, onClick }: any) {
  return (
    <button onClick={onClick} className={`flex w-full items-center gap-4 px-4 py-3 rounded-xl transition-all ${active ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}>
      {icon}
      <span className="font-medium">{label}</span>
    </button>
  );
}
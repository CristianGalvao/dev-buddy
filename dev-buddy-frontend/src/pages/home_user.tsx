import { useState } from 'react';
import Sidebar from './Sidebar'; 
import Chat_IA from './components/chat_ia'


export default function Home_user() {
  const [activePage, setActivePage] = useState('home');

  const renderContent = () => {
    switch (activePage) {
      case 'chat':
        return <Chat_IA />;
    }
  };

return (
    <div className="flex h-screen w-full overflow-hidden bg-gray-900 text-white">
      <Sidebar activePage={activePage} onNavigate={setActivePage} />
      
      <main className="flex-1  overflow-auto">
        {renderContent()}
      </main>
    </div>
  );
}
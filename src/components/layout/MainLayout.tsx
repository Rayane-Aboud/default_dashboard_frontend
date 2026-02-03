import { ReactNode, useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import './MainLayout.css';

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="main-layout">
      <Header toggleSidebar={toggleSidebar} />
      
      <div className="layout-container">
        <Sidebar isOpen={sidebarOpen} />
        
        <main className={`layout-content ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
          <div className="content-wrapper">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
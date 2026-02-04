import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  LayoutDashboard, 
  Car, 
  Users, 
  Wrench, 
  BarChart3, 
  Settings 
} from 'lucide-react';
import './Sidebar.css';

interface SidebarProps {
  isOpen: boolean;
}

export default function Sidebar({ isOpen }: SidebarProps) {
  const { t } = useTranslation();

  const navItems = [
    { path: '/dashboard', labelKey: 'dashboard', icon: LayoutDashboard },
    { path: '/vehicles', labelKey: 'vehicles', icon: Car },
    { path: '/drivers', labelKey: 'drivers', icon: Users },
    { path: '/maintenance', labelKey: 'maintenance', icon: Wrench },
    { path: '/reports', labelKey: 'reports', icon: BarChart3 },
    { path: '/settings', labelKey: 'settings', icon: Settings },
  ];

  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <nav className="sidebar-nav">
        <ul className="nav-list">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) => 
                    `nav-item ${isActive ? 'active' : ''}`
                  }
                  title={t(item.labelKey)}
                >
                  <Icon className="nav-icon" size={20} strokeWidth={2} />
                  <span className="nav-label">{t(item.labelKey)}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Sidebar.css';

interface SidebarProps {
  isOpen: boolean;
}

export default function Sidebar({ isOpen }: SidebarProps) {
  const { t } = useTranslation();

  const navItems = [
    { path: '/dashboard', labelKey: 'dashboard', icon: '📊' },
    { path: '/vehicles', labelKey: 'vehicles', icon: '🚗' },
    { path: '/drivers', labelKey: 'drivers', icon: '👤' },
    { path: '/maintenance', labelKey: 'maintenance', icon: '🔧' },
    { path: '/reports', labelKey: 'reports', icon: '📈' },
    { path: '/settings', labelKey: 'settings', icon: '⚙️' },
  ];

  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <nav className="sidebar-nav">
        <ul className="nav-list">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) => 
                  `nav-item ${isActive ? 'active' : ''}`
                }
                title={t(item.labelKey)}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{t(item.labelKey)}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
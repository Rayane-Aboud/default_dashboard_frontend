import { useAuthStore } from '@/features/auth/store/authStore';
import { useThemeStore } from '@/app/useThemeStore';
import { useTranslation } from 'react-i18next';
import './Header.css';

interface HeaderProps {
  toggleSidebar: () => void;
}

export default function Header({ toggleSidebar }: HeaderProps) {
  const { user, logout } = useAuthStore();
  const { theme, toggleTheme } = useThemeStore();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="header">
      <div className="header-left">
        <button className="hamburger-btn" onClick={toggleSidebar} aria-label="Toggle sidebar">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <h1 className="header-title">{t('fleetManager')}</h1>
      </div>

      <div className="header-right">
        {/* Language Switcher */}
        <div className="language-switcher">
          <button
            className={`lang-btn ${i18n.language === 'en' ? 'active' : ''}`}
            onClick={() => changeLanguage('en')}
            title="English"
          >
            EN
          </button>
          <button
            className={`lang-btn ${i18n.language === 'de' ? 'active' : ''}`}
            onClick={() => changeLanguage('de')}
            title="Deutsch"
          >
            DE
          </button>
          <button
            className={`lang-btn ${i18n.language === 'fr' ? 'active' : ''}`}
            onClick={() => changeLanguage('fr')}
            title="Français"
          >
            FR
          </button>
        </div>

        {/* Theme Toggle */}
        <button 
          className="theme-toggle-btn" 
          onClick={toggleTheme}
          aria-label="Toggle theme"
          title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
        >
          {theme === 'light' ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          )}
        </button>

        {user && (
          <>
            <div className="user-info">
              <span className="user-name">{user.name}</span>
              <span className="user-role">{user.role}</span>
            </div>
            <button className="logout-btn" onClick={logout}>
              {t('logout')}
            </button>
          </>
        )}
      </div>
    </header>
  );
}
import { useAuthStore } from '@/features/auth/store/authStore';
import { useTranslation } from 'react-i18next';
import './Dashboard.css';

export default function Dashboard() {
  const user = useAuthStore((state) => state.user);
  const { t } = useTranslation();

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-title">{t('dashboard')}</h1>
        <p className="dashboard-subtitle">{t('welcomeBackUser', { name: user?.name })}</p>
      </div>

      <div className="dashboard-grid">
        {/* Stats Cards */}
        <div className="stat-card">
          <div className="stat-icon" style={{ background: '#dbeafe' }}>
            🚗
          </div>
          <div className="stat-content">
            <h3 className="stat-label">{t('totalVehicles')}</h3>
            <p className="stat-value">156</p>
            <span className="stat-change positive">+12% {t('fromLastMonth')}</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon" style={{ background: '#dcfce7' }}>
            ✅
          </div>
          <div className="stat-content">
            <h3 className="stat-label">{t('active')}</h3>
            <p className="stat-value">142</p>
            <span className="stat-change positive">+5.2%</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon" style={{ background: '#fef3c7' }}>
            🔧
          </div>
          <div className="stat-content">
            <h3 className="stat-label">{t('inMaintenance')}</h3>
            <p className="stat-value">8</p>
            <span className="stat-change neutral">{t('sameAsLastWeek')}</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon" style={{ background: '#fee2e2' }}>
            ⚠️
          </div>
          <div className="stat-content">
            <h3 className="stat-label">{t('outOfService')}</h3>
            <p className="stat-value">6</p>
            <span className="stat-change negative">+2 {t('thisWeek')}</span>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="activity-section">
        <h2 className="section-title">{t('recentActivity')}</h2>
        <div className="activity-list">
          <div className="activity-item">
            <div className="activity-icon">🚗</div>
            <div className="activity-content">
              <p className="activity-title">Vehicle VH-001 completed maintenance</p>
              <span className="activity-time">2 hours ago</span>
            </div>
          </div>
          <div className="activity-item">
            <div className="activity-icon">👤</div>
            <div className="activity-content">
              <p className="activity-title">New driver Sarah Johnson added</p>
              <span className="activity-time">5 hours ago</span>
            </div>
          </div>
          <div className="activity-item">
            <div className="activity-icon">📊</div>
            <div className="activity-content">
              <p className="activity-title">Monthly report generated</p>
              <span className="activity-time">1 day ago</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="quick-actions">
        <h2 className="section-title">{t('quickActions')}</h2>
        <div className="actions-grid">
          <button className="action-btn">
            <span className="action-icon">➕</span>
            {t('addVehicle')}
          </button>
          <button className="action-btn">
            <span className="action-icon">👤</span>
            {t('addDriver')}
          </button>
          <button className="action-btn">
            <span className="action-icon">🔧</span>
            {t('scheduleMaintenance')}
          </button>
          <button className="action-btn">
            <span className="action-icon">📈</span>
            {t('viewReports')}
          </button>
        </div>
      </div>
    </div>
  );
}
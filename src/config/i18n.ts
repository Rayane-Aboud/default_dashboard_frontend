import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation resources
const resources = {
  en: {
    translation: {
      // Navigation
      dashboard: 'Dashboard',
      vehicles: 'Vehicles',
      drivers: 'Drivers',
      maintenance: 'Maintenance',
      reports: 'Reports',
      settings: 'Settings',
      
      // Header
      fleetManager: 'Fleet Manager',
      logout: 'Logout',
      
      // Auth
      welcomeBack: 'Welcome Back',
      signInToAccount: 'Sign in to your Fleet Manager account',
      emailAddress: 'Email Address',
      password: 'Password',
      confirmPassword: 'Confirm Password',
      rememberMe: 'Remember me',
      forgotPassword: 'Forgot password?',
      signIn: 'Sign In',
      signingIn: 'Signing in...',
      dontHaveAccount: "Don't have an account?",
      signUp: 'Sign up',
      createAccount: 'Create Account',
      joinFleetManager: 'Join Fleet Manager today',
      fullName: 'Full Name',
      creatingAccount: 'Creating account...',
      alreadyHaveAccount: 'Already have an account?',
      agreeToTerms: 'I agree to the Terms and Conditions',
      
      // Dashboard
      welcomeBackUser: 'Welcome back, {{name}}!',
      totalVehicles: 'Total Vehicles',
      active: 'Active',
      inMaintenance: 'In Maintenance',
      outOfService: 'Out of Service',
      recentActivity: 'Recent Activity',
      quickActions: 'Quick Actions',
      addVehicle: 'Add Vehicle',
      addDriver: 'Add Driver',
      scheduleMaintenance: 'Schedule Maintenance',
      viewReports: 'View Reports',
      
      // Stats
      fromLastMonth: 'from last month',
      sameAsLastWeek: 'Same as last week',
      thisWeek: 'this week',
      
      // Errors
      invalidCredentials: 'Invalid email or password',
      passwordsDoNotMatch: 'Passwords do not match',
      passwordTooShort: 'Password must be at least 6 characters',
      accountCreationFailed: 'Failed to create account. Please try again.',
    },
  },
  de: {
    translation: {
      // Navigation
      dashboard: 'Dashboard',
      vehicles: 'Fahrzeuge',
      drivers: 'Fahrer',
      maintenance: 'Wartung',
      reports: 'Berichte',
      settings: 'Einstellungen',
      
      // Header
      fleetManager: 'Flottenmanager',
      logout: 'Abmelden',
      
      // Auth
      welcomeBack: 'Willkommen zurück',
      signInToAccount: 'Melden Sie sich bei Ihrem Flottenmanager-Konto an',
      emailAddress: 'E-Mail-Adresse',
      password: 'Passwort',
      confirmPassword: 'Passwort bestätigen',
      rememberMe: 'Angemeldet bleiben',
      forgotPassword: 'Passwort vergessen?',
      signIn: 'Anmelden',
      signingIn: 'Anmeldung läuft...',
      dontHaveAccount: 'Noch kein Konto?',
      signUp: 'Registrieren',
      createAccount: 'Konto erstellen',
      joinFleetManager: 'Treten Sie heute dem Flottenmanager bei',
      fullName: 'Vollständiger Name',
      creatingAccount: 'Konto wird erstellt...',
      alreadyHaveAccount: 'Bereits ein Konto?',
      agreeToTerms: 'Ich stimme den Nutzungsbedingungen zu',
      
      // Dashboard
      welcomeBackUser: 'Willkommen zurück, {{name}}!',
      totalVehicles: 'Fahrzeuge gesamt',
      active: 'Aktiv',
      inMaintenance: 'In Wartung',
      outOfService: 'Außer Betrieb',
      recentActivity: 'Letzte Aktivitäten',
      quickActions: 'Schnellaktionen',
      addVehicle: 'Fahrzeug hinzufügen',
      addDriver: 'Fahrer hinzufügen',
      scheduleMaintenance: 'Wartung planen',
      viewReports: 'Berichte anzeigen',
      
      // Stats
      fromLastMonth: 'vom letzten Monat',
      sameAsLastWeek: 'Wie letzte Woche',
      thisWeek: 'diese Woche',
      
      // Errors
      invalidCredentials: 'Ungültige E-Mail oder Passwort',
      passwordsDoNotMatch: 'Passwörter stimmen nicht überein',
      passwordTooShort: 'Passwort muss mindestens 6 Zeichen lang sein',
      accountCreationFailed: 'Konto konnte nicht erstellt werden. Bitte versuchen Sie es erneut.',
    },
  },
  fr: {
    translation: {
      // Navigation
      dashboard: 'Tableau de bord',
      vehicles: 'Véhicules',
      drivers: 'Conducteurs',
      maintenance: 'Maintenance',
      reports: 'Rapports',
      settings: 'Paramètres',
      
      // Header
      fleetManager: 'Gestionnaire de flotte',
      logout: 'Déconnexion',
      
      // Auth
      welcomeBack: 'Bon retour',
      signInToAccount: 'Connectez-vous à votre compte Fleet Manager',
      emailAddress: 'Adresse e-mail',
      password: 'Mot de passe',
      confirmPassword: 'Confirmer le mot de passe',
      rememberMe: 'Se souvenir de moi',
      forgotPassword: 'Mot de passe oublié?',
      signIn: 'Se connecter',
      signingIn: 'Connexion...',
      dontHaveAccount: "Vous n'avez pas de compte?",
      signUp: "S'inscrire",
      createAccount: 'Créer un compte',
      joinFleetManager: 'Rejoignez Fleet Manager aujourd\'hui',
      fullName: 'Nom complet',
      creatingAccount: 'Création du compte...',
      alreadyHaveAccount: 'Vous avez déjà un compte?',
      agreeToTerms: "J'accepte les conditions d'utilisation",
      
      // Dashboard
      welcomeBackUser: 'Bon retour, {{name}}!',
      totalVehicles: 'Total des véhicules',
      active: 'Actif',
      inMaintenance: 'En maintenance',
      outOfService: 'Hors service',
      recentActivity: 'Activité récente',
      quickActions: 'Actions rapides',
      addVehicle: 'Ajouter un véhicule',
      addDriver: 'Ajouter un conducteur',
      scheduleMaintenance: 'Planifier la maintenance',
      viewReports: 'Voir les rapports',
      
      // Stats
      fromLastMonth: 'du mois dernier',
      sameAsLastWeek: 'Comme la semaine dernière',
      thisWeek: 'cette semaine',
      
      // Errors
      invalidCredentials: 'E-mail ou mot de passe invalide',
      passwordsDoNotMatch: 'Les mots de passe ne correspondent pas',
      passwordTooShort: 'Le mot de passe doit contenir au moins 6 caractères',
      accountCreationFailed: 'Échec de la création du compte. Veuillez réessayer.',
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
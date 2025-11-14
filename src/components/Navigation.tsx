import Icon from '@/components/ui/icon';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: 'home' | 'courses' | 'schedule' | 'profile' | 'achievements') => void;
}

const Navigation = ({ activeSection, onSectionChange }: NavigationProps) => {
  const navItems = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'courses', label: 'Курсы', icon: 'BookOpen' },
    { id: 'schedule', label: 'Расписание', icon: 'Calendar' },
    { id: 'profile', label: 'Профиль', icon: 'User' },
    { id: 'achievements', label: 'Достижения', icon: 'Award' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Icon name="GraduationCap" size={28} className="text-primary" />
            <span className="text-xl font-bold text-foreground">EduPlatform</span>
          </div>
          
          <div className="flex space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id as any)}
                className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors ${
                  activeSection === item.id
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                }`}
              >
                <Icon name={item.icon} size={18} />
                <span className="hidden sm:inline">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

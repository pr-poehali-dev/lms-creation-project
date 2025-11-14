import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const achievements = [
  {
    id: 1,
    title: 'Первый шаг',
    description: 'Завершил первый урок',
    icon: 'Footprints',
    earned: true,
    date: '1 октября 2024',
    color: 'bg-blue-500',
  },
  {
    id: 2,
    title: 'Знаток математики',
    description: 'Завершил 20 уроков по математике',
    icon: 'Calculator',
    earned: true,
    date: '5 ноября 2024',
    color: 'bg-purple-500',
  },
  {
    id: 3,
    title: 'Неделя подряд',
    description: 'Занимался 7 дней без перерыва',
    icon: 'Flame',
    earned: true,
    date: '10 ноября 2024',
    color: 'bg-orange-500',
  },
  {
    id: 4,
    title: 'Отличник',
    description: 'Сдал 10 тестов на 100%',
    icon: 'Star',
    earned: true,
    date: '12 ноября 2024',
    color: 'bg-yellow-500',
  },
  {
    id: 5,
    title: 'Марафонец',
    description: 'Учился 30 дней подряд',
    icon: 'Trophy',
    earned: false,
    progress: 22,
    color: 'bg-green-500',
  },
  {
    id: 6,
    title: 'Полиглот',
    description: 'Завершил 3 языковых курса',
    icon: 'Languages',
    earned: false,
    progress: 1,
    color: 'bg-pink-500',
  },
  {
    id: 7,
    title: 'Ученый',
    description: 'Изучил все естественные науки',
    icon: 'Microscope',
    earned: false,
    progress: 2,
    color: 'bg-teal-500',
  },
  {
    id: 8,
    title: 'Исследователь',
    description: 'Завершил 50 уроков',
    icon: 'Compass',
    earned: false,
    progress: 38,
    color: 'bg-indigo-500',
  },
];

const Achievements = () => {
  const earnedCount = achievements.filter(a => a.earned).length;
  const totalCount = achievements.length;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 text-foreground">Мои достижения</h1>
        <p className="text-muted-foreground">
          Получено {earnedCount} из {totalCount} достижений
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {achievements.map((achievement) => (
          <Card
            key={achievement.id}
            className={`p-6 transition-all ${
              achievement.earned
                ? 'border-primary/50 shadow-md'
                : 'opacity-60 grayscale hover:grayscale-0 hover:opacity-100'
            }`}
          >
            <div className="text-center">
              <div
                className={`w-20 h-20 mx-auto mb-4 ${achievement.color} rounded-full flex items-center justify-center ${
                  !achievement.earned && 'opacity-50'
                }`}
              >
                <Icon name={achievement.icon} size={40} className="text-white" />
              </div>

              <h3 className="text-lg font-semibold mb-2 text-card-foreground">
                {achievement.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                {achievement.description}
              </p>

              {achievement.earned ? (
                <Badge className="gap-1">
                  <Icon name="CheckCircle" size={14} />
                  {achievement.date}
                </Badge>
              ) : (
                <div className="space-y-2">
                  <Badge variant="secondary" className="gap-1">
                    <Icon name="Lock" size={14} />
                    Не получено
                  </Badge>
                  {achievement.progress !== undefined && (
                    <p className="text-xs text-muted-foreground">
                      Прогресс: {achievement.progress}/{achievement.description.match(/\d+/)?.[0] || 100}
                    </p>
                  )}
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Achievements;

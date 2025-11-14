import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const courses = [
  {
    id: 1,
    title: 'Математика 9 класс',
    description: 'Алгебра и геометрия для подготовки к ОГЭ',
    progress: 65,
    lessons: 24,
    completed: 16,
    level: 'Средний',
    icon: 'Calculator',
  },
  {
    id: 2,
    title: 'Русский язык',
    description: 'Грамматика, орфография и пунктуация',
    progress: 45,
    lessons: 20,
    completed: 9,
    level: 'Базовый',
    icon: 'BookText',
  },
  {
    id: 3,
    title: 'Физика',
    description: 'Механика, термодинамика, электричество',
    progress: 30,
    lessons: 18,
    completed: 5,
    level: 'Продвинутый',
    icon: 'Atom',
  },
  {
    id: 4,
    title: 'История России',
    description: 'От Древней Руси до современности',
    progress: 80,
    lessons: 15,
    completed: 12,
    level: 'Базовый',
    icon: 'Landmark',
  },
  {
    id: 5,
    title: 'Английский язык',
    description: 'Грамматика и разговорная практика',
    progress: 55,
    lessons: 30,
    completed: 17,
    level: 'Средний',
    icon: 'Languages',
  },
  {
    id: 6,
    title: 'Биология',
    description: 'Живые организмы и их взаимодействие',
    progress: 40,
    lessons: 16,
    completed: 6,
    level: 'Базовый',
    icon: 'Sprout',
  },
];

const CoursesList = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 text-foreground">Мои курсы</h1>
        <p className="text-muted-foreground">Продолжай обучение и достигай целей</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Card key={course.id} className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name={course.icon} size={24} className="text-primary" />
              </div>
              <Badge variant="secondary">{course.level}</Badge>
            </div>

            <h3 className="text-xl font-semibold mb-2 text-card-foreground">{course.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{course.description}</p>

            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Прогресс</span>
                  <span className="font-medium text-foreground">{course.progress}%</span>
                </div>
                <Progress value={course.progress} />
              </div>

              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>{course.completed} из {course.lessons} уроков</span>
              </div>

              <Button className="w-full gap-2">
                <Icon name="Play" size={16} />
                Продолжить
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CoursesList;

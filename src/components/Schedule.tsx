import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const scheduleData = [
  {
    id: 1,
    day: 'Понедельник',
    date: '14 ноября',
    lessons: [
      { time: '09:00', subject: 'Математика', teacher: 'Иванова А.С.', type: 'live' },
      { time: '10:30', subject: 'Русский язык', teacher: 'Петров В.И.', type: 'video' },
      { time: '12:00', subject: 'Физика', teacher: 'Сидорова М.П.', type: 'live' },
    ],
  },
  {
    id: 2,
    day: 'Вторник',
    date: '15 ноября',
    lessons: [
      { time: '09:00', subject: 'История', teacher: 'Николаев Д.А.', type: 'video' },
      { time: '10:30', subject: 'Английский язык', teacher: 'Смирнова О.В.', type: 'live' },
      { time: '14:00', subject: 'Биология', teacher: 'Козлова Е.Н.', type: 'video' },
    ],
  },
  {
    id: 3,
    day: 'Среда',
    date: '16 ноября',
    lessons: [
      { time: '09:00', subject: 'Математика', teacher: 'Иванова А.С.', type: 'live' },
      { time: '11:00', subject: 'Химия', teacher: 'Морозов П.К.', type: 'video' },
    ],
  },
];

const Schedule = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 text-foreground">Расписание занятий</h1>
        <p className="text-muted-foreground">Твое расписание на эту неделю</p>
      </div>

      <div className="space-y-6">
        {scheduleData.map((day) => (
          <Card key={day.id} className="p-6">
            <div className="mb-4">
              <h2 className="text-2xl font-semibold text-card-foreground">{day.day}</h2>
              <p className="text-sm text-muted-foreground">{day.date}</p>
            </div>

            <div className="space-y-3">
              {day.lessons.map((lesson, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-center min-w-[60px]">
                      <Icon name="Clock" size={16} className="mx-auto mb-1 text-muted-foreground" />
                      <span className="text-sm font-medium text-foreground">{lesson.time}</span>
                    </div>
                    
                    <div className="h-12 w-px bg-border" />
                    
                    <div>
                      <h3 className="font-semibold text-foreground">{lesson.subject}</h3>
                      <p className="text-sm text-muted-foreground">{lesson.teacher}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    {lesson.type === 'live' ? (
                      <Badge className="gap-1">
                        <Icon name="Video" size={14} />
                        Прямой эфир
                      </Badge>
                    ) : (
                      <Badge variant="secondary" className="gap-1">
                        <Icon name="Play" size={14} />
                        Видеоурок
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Schedule;

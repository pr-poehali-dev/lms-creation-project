import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Profile = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Мой профиль</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 md:col-span-1">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon name="User" size={48} className="text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-1 text-card-foreground">Анна Смирнова</h2>
              <p className="text-muted-foreground mb-4">9 класс</p>
              <Button variant="outline" className="w-full gap-2">
                <Icon name="Settings" size={16} />
                Настройки
              </Button>
            </div>
          </Card>

          <div className="md:col-span-2 space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">Статистика обучения</h3>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name="BookOpen" size={20} className="text-primary" />
                    <span className="text-sm text-muted-foreground">Курсов в процессе</span>
                  </div>
                  <p className="text-3xl font-bold text-foreground">6</p>
                </div>

                <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name="CheckCircle" size={20} className="text-accent" />
                    <span className="text-sm text-muted-foreground">Завершено уроков</span>
                  </div>
                  <p className="text-3xl font-bold text-foreground">65</p>
                </div>

                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name="Clock" size={20} className="text-primary" />
                    <span className="text-sm text-muted-foreground">Часов обучения</span>
                  </div>
                  <p className="text-3xl font-bold text-foreground">42</p>
                </div>

                <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name="Award" size={20} className="text-accent" />
                    <span className="text-sm text-muted-foreground">Достижений</span>
                  </div>
                  <p className="text-3xl font-bold text-foreground">12</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">Активность</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Математика</span>
                    <span className="text-sm font-medium text-foreground">65%</span>
                  </div>
                  <Progress value={65} />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Английский язык</span>
                    <span className="text-sm font-medium text-foreground">55%</span>
                  </div>
                  <Progress value={55} />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Русский язык</span>
                    <span className="text-sm font-medium text-foreground">45%</span>
                  </div>
                  <Progress value={45} />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Биология</span>
                    <span className="text-sm font-medium text-foreground">40%</span>
                  </div>
                  <Progress value={40} />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

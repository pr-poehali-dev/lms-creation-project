import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hero = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6 text-foreground">
          Добро пожаловать в EduPlatform
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Современная образовательная платформа для школьников. Учись в удобном темпе, отслеживай прогресс и достигай новых вершин.
        </p>
        <div className="flex justify-center gap-4 mb-16">
          <Button size="lg" className="gap-2">
            <Icon name="PlayCircle" size={20} />
            Начать обучение
          </Button>
          <Button size="lg" variant="outline" className="gap-2">
            <Icon name="Info" size={20} />
            Узнать больше
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="p-6 rounded-lg bg-card border border-border">
            <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
              <Icon name="BookOpen" size={24} className="text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-card-foreground">50+ курсов</h3>
            <p className="text-muted-foreground">По всем школьным предметам</p>
          </div>

          <div className="p-6 rounded-lg bg-card border border-border">
            <div className="w-12 h-12 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
              <Icon name="Users" size={24} className="text-accent" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-card-foreground">Опытные учителя</h3>
            <p className="text-muted-foreground">Профессионалы своего дела</p>
          </div>

          <div className="p-6 rounded-lg bg-card border border-border">
            <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
              <Icon name="Trophy" size={24} className="text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-card-foreground">Достижения</h3>
            <p className="text-muted-foreground">Отслеживай свой прогресс</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

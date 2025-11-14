import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import CoursesList from '@/components/CoursesList';
import Schedule from '@/components/Schedule';
import Profile from '@/components/Profile';
import Achievements from '@/components/Achievements';

type Section = 'home' | 'courses' | 'schedule' | 'profile' | 'achievements';

const Index = () => {
  const [activeSection, setActiveSection] = useState<Section>('home');

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />
      
      <main className="pt-16">
        {activeSection === 'home' && <Hero />}
        {activeSection === 'courses' && <CoursesList />}
        {activeSection === 'schedule' && <Schedule />}
        {activeSection === 'profile' && <Profile />}
        {activeSection === 'achievements' && <Achievements />}
      </main>
    </div>
  );
};

export default Index;

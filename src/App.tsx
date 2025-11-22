import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { MockupShowcase } from './components/MockupShowcase';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';
import { ProjectDetail } from './components/ProjectDetail';
import { VisualDesigns } from './components/VisualDesigns';
import { LanguageProvider } from './contexts/LanguageContext';
import { useState } from 'react';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<'home' | 'visual-designs'>('home');

  if (selectedProject) {
    return (
      <LanguageProvider>
        <ProjectDetail 
          projectId={selectedProject} 
          onBack={() => setSelectedProject(null)} 
        />
      </LanguageProvider>
    );
  }

  if (currentPage === 'visual-designs') {
    return (
      <LanguageProvider>
        <VisualDesigns onBack={() => setCurrentPage('home')} />
      </LanguageProvider>
    );
  }

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Navigation onNavigateToVisualDesigns={() => setCurrentPage('visual-designs')} />
        <Hero />
        <Projects onProjectClick={(id) => setSelectedProject(id)} />
        <MockupShowcase onViewMore={() => setCurrentPage('visual-designs')} />
        <Contact />
      </div>
    </LanguageProvider>
  );
}
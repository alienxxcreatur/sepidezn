import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, X } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface VisualDesignsProps {
  onBack: () => void;
}

interface Design {
  id: number;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  images: string[];
}

const designs: Design[] = [
  {
    id: 1,
    title: 'CEO Assist App',
    category: 'Mobile Design',
    description: 'A bilingual chatbot application that helps users learn business skills interactively with AI-powered assistance and personalized learning paths.',
    thumbnail: 'from-purple-500 to-indigo-600',
    images: ['from-purple-500 to-indigo-600', 'from-purple-400 to-indigo-500', 'from-purple-600 to-indigo-700']
  },
  {
    id: 2,
    title: 'AI Task Manager App',
    category: 'Mobile Design',
    description: 'Intelligent task management application with AI-powered prioritization, smart scheduling, and productivity insights.',
    thumbnail: 'from-cyan-500 to-blue-600',
    images: ['from-cyan-500 to-blue-600', 'from-cyan-400 to-blue-500', 'from-cyan-600 to-blue-700']
  },
  {
    id: 3,
    title: 'AI Reminder App',
    category: 'Mobile Design',
    description: 'Smart reminder application that uses AI to learn your patterns and provide contextual reminders at the perfect time.',
    thumbnail: 'from-pink-500 to-rose-600',
    images: ['from-pink-500 to-rose-600', 'from-pink-400 to-rose-500', 'from-pink-600 to-rose-700']
  },
  {
    id: 4,
    title: 'Charity Payment Kiosk',
    category: 'Kiosk Design',
    description: 'Self-service kiosk interface for charitable donations with intuitive navigation and secure payment processing.',
    thumbnail: 'from-orange-500 to-amber-600',
    images: ['from-orange-500 to-amber-600', 'from-orange-400 to-amber-500', 'from-orange-600 to-amber-700']
  },
  {
    id: 5,
    title: 'Shemsh Landing',
    category: 'Web Design',
    description: 'Modern landing page design for a fintech platform with clean aesthetics and conversion-focused layout.',
    thumbnail: 'from-green-500 to-emerald-600',
    images: ['from-green-500 to-emerald-600', 'from-green-400 to-emerald-500', 'from-green-600 to-emerald-700']
  },
  {
    id: 6,
    title: 'Aniresan Landing',
    category: 'Web Design',
    description: 'Creative landing page for an animation studio showcasing portfolio work with dynamic transitions and engaging visuals.',
    thumbnail: 'from-violet-500 to-purple-600',
    images: ['from-violet-500 to-purple-600', 'from-violet-400 to-purple-500', 'from-violet-600 to-purple-700']
  }
];

export function VisualDesigns({ onBack }: VisualDesignsProps) {
  const [selectedDesign, setSelectedDesign] = useState<Design | null>(null);
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#1F1BF5]/5 to-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 mb-8 text-neutral-600 hover:text-[#1F1BF5] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            {t('visualDesigns.back')}
          </button>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl mb-4">
              {t('visualDesigns.title')} <span className="text-[#1F1BF5]">{t('visualDesigns.titleHighlight')}</span>
            </h1>
            <p className="text-xl text-neutral-600">
              {t('visualDesigns.description')}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designs.map((design, index) => (
            <motion.div
              key={design.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedDesign(design)}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[3/4] mb-4">
                {/* Design Preview */}
                <div className={`absolute inset-0 bg-gradient-to-br ${design.thumbnail} transition-transform duration-500 group-hover:scale-110`}>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <div className="text-6xl mb-4">
                      {design.category === 'Mobile Design' ? '📱' : design.category === 'Kiosk Design' ? '🖥️' : '💻'}
                    </div>
                    <div className="text-sm tracking-wider opacity-90">{design.category.toUpperCase()}</div>
                  </div>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#1F1BF5]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-lg">{t('visualDesigns.viewDetails')}</span>
                </div>
              </div>
              
              <h3 className="text-xl mb-2 group-hover:text-[#1F1BF5] transition-colors">
                {design.title}
              </h3>
              <p className="text-neutral-600 text-sm">{design.category}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedDesign && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 overflow-y-auto"
            onClick={() => setSelectedDesign(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-white border-b border-neutral-200 p-6 flex justify-between items-center rounded-t-3xl z-10">
                <div>
                  <h2 className="text-3xl mb-2">{selectedDesign.title}</h2>
                  <p className="text-[#1F1BF5]">{selectedDesign.category}</p>
                </div>
                <button
                  onClick={() => setSelectedDesign(null)}
                  className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-neutral-100 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                {/* Description */}
                <div className="mb-8">
                  <h3 className="text-xl mb-3">{t('visualDesigns.aboutDesign')}</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {selectedDesign.description}
                  </p>
                </div>

                {/* Image Containers */}
                <div className="space-y-6">
                  <h3 className="text-xl">{t('visualDesigns.designScreens')}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {selectedDesign.images.map((gradient, imgIndex) => (
                      <div key={imgIndex} className="group">
                        <div className="relative overflow-hidden rounded-xl aspect-[9/16] mb-2">
                          <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`}>
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-white/90">
                              <div className="text-4xl mb-2">
                                {selectedDesign.category === 'Mobile Design' ? '📱' : selectedDesign.category === 'Kiosk Design' ? '🖥️' : '💻'}
                              </div>
                              <div className="text-xs tracking-wider">Screen {imgIndex + 1}</div>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-neutral-600 text-center">
                          {t('visualDesigns.variation')} {imgIndex + 1}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional Info */}
                <div className="mt-8 p-6 bg-gradient-to-br from-[#1F1BF5]/5 to-transparent rounded-2xl">
                  <h3 className="text-xl mb-3">{t('visualDesigns.designDetails')}</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-neutral-600 mb-1">{t('visualDesigns.category')}</p>
                      <p>{selectedDesign.category}</p>
                    </div>
                    <div>
                      <p className="text-neutral-600 mb-1">{t('visualDesigns.type')}</p>
                      <p>{selectedDesign.category === 'Mobile Design' ? 'Mobile App' : selectedDesign.category === 'Kiosk Design' ? 'Kiosk Interface' : 'Web Application'}</p>
                    </div>
                    <div>
                      <p className="text-neutral-600 mb-1">{t('visualDesigns.screens')}</p>
                      <p>{selectedDesign.images.length} {t('visualDesigns.variations')}</p>
                    </div>
                    <div>
                      <p className="text-neutral-600 mb-1">{t('visualDesigns.status')}</p>
                      <p>{t('visualDesigns.completed')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

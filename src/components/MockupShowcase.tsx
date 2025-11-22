import { motion } from 'motion/react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { DesignShowcaseModal } from './DesignShowcaseModal';

const mockups = [
  { 
    id: 1, 
    type: 'phone', 
    gradient: 'from-purple-500 to-indigo-600',
    title: 'Mobile Banking App',
    description: 'A modern mobile banking application with intuitive navigation and secure transactions.',
    category: 'Mobile Design',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800'
  },
  { 
    id: 2, 
    type: 'laptop', 
    gradient: 'from-cyan-500 to-blue-600',
    title: 'Dashboard Analytics',
    description: 'Comprehensive analytics dashboard for business intelligence and data visualization.',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200'
  },
  { 
    id: 3, 
    type: 'phone', 
    gradient: 'from-pink-500 to-rose-600',
    title: 'Fitness Tracker',
    description: 'Health and fitness tracking app with personalized workout plans.',
    category: 'Mobile Design',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800'
  },
  { 
    id: 4, 
    type: 'laptop', 
    gradient: 'from-orange-500 to-amber-600',
    title: 'E-commerce Platform',
    description: 'Full-featured e-commerce platform with modern shopping experience.',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200'
  },
  { 
    id: 5, 
    type: 'phone', 
    gradient: 'from-green-500 to-emerald-600',
    title: 'Food Delivery App',
    description: 'Seamless food ordering and delivery experience.',
    category: 'Mobile Design',
    image: 'https://images.unsplash.com/photo-1609477319776-0af5cb4e6046?w=800'
  },
  { 
    id: 6, 
    type: 'laptop', 
    gradient: 'from-violet-500 to-purple-600',
    title: 'Project Management Tool',
    description: 'Collaborative project management and team coordination platform.',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1200'
  },
  { 
    id: 7, 
    type: 'phone', 
    gradient: 'from-blue-500 to-cyan-600',
    title: 'Travel Booking App',
    description: 'Easy travel planning and booking application.',
    category: 'Mobile Design',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800'
  },
  { 
    id: 8, 
    type: 'laptop', 
    gradient: 'from-rose-500 to-pink-600',
    title: 'Creative Portfolio',
    description: 'Stunning portfolio website for creative professionals.',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200'
  },
];

interface MockupShowcaseProps {
  onViewMore: () => void;
}

export function MockupShowcase({ onViewMore }: MockupShowcaseProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [selectedMockup, setSelectedMockup] = useState<typeof mockups[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useLanguage();

  const handleMockupClick = (mockup: typeof mockups[0]) => {
    setSelectedMockup(mockup);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedMockup(null), 200);
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 600;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#1F1BF5]/5 to-white overflow-hidden">
      <div className="mb-12 text-center px-6">
        <h2 className="text-4xl mb-4">
          {t('showcase.title')} <span className="text-[#1F1BF5]">{t('showcase.titleHighlight')}</span>
        </h2>
        <p className="text-neutral-600 mb-6">{t('showcase.subtitle')}</p>
        <motion.button
          onClick={onViewMore}
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#1F1BF5] text-white rounded-full"
        >
          {t('showcase.viewMore')}
          <ArrowRight className="w-4 h-4" />
        </motion.button>
      </div>

      <div className="relative">
        {/* Left Arrow */}
        {showLeftArrow && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#1F1BF5] hover:text-white transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Right Arrow */}
        {showRightArrow && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#1F1BF5] hover:text-white transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-12 overflow-x-auto px-8 items-center scrollbar-hide"
          style={{ scrollBehavior: 'smooth' }}
        >
          {mockups.map((mockup) => (
            <div
              key={mockup.id}
              className="flex-shrink-0 cursor-pointer group"
              style={{ height: '520px', display: 'flex', alignItems: 'center' }}
              onClick={() => handleMockupClick(mockup)}
            >
              {mockup.type === 'phone' ? (
                <div className="relative transition-transform group-hover:scale-105" style={{ height: '520px' }}>
                  {/* Phone Frame */}
                  <div className="relative w-[260px] h-full bg-neutral-900 rounded-[3.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.3)] group-hover:shadow-[0_25px_70px_rgba(31,27,245,0.4)] transition-shadow p-3 border-[6px] border-neutral-800">
                    {/* Inner Screen */}
                    <div className="relative w-full h-full bg-black rounded-[2.75rem] overflow-hidden">
                      {/* Screen Content */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${mockup.gradient}`}>
                        {/* Status Bar */}
                        <div className="absolute top-0 left-0 right-0 h-12 flex items-center justify-between px-8 text-white text-xs z-20">
                          <span>9:41</span>
                          <div className="flex gap-1">
                            <div className="w-4 h-4">📶</div>
                            <div className="w-4 h-4">📶</div>
                            <div className="w-4 h-4">🔋</div>
                          </div>
                        </div>
                        
                        {/* Notch */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-8 bg-black rounded-b-3xl z-10 flex items-center justify-center">
                          <div className="w-16 h-1.5 bg-neutral-800 rounded-full mt-2" />
                        </div>
                        
                        {/* App Preview Content */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white/90 pt-12 pb-8">
                          <div className="text-5xl mb-4">📱</div>
                          <div className="text-sm tracking-wider">UI DESIGN</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Volume Buttons */}
                    <div className="absolute left-0 top-32 w-1 h-12 bg-neutral-800 rounded-l-sm -translate-x-1" />
                    <div className="absolute left-0 top-48 w-1 h-12 bg-neutral-800 rounded-l-sm -translate-x-1" />
                    
                    {/* Power Button */}
                    <div className="absolute right-0 top-40 w-1 h-16 bg-neutral-800 rounded-r-sm translate-x-1" />
                  </div>
                </div>
              ) : (
                <div className="relative" style={{ height: '520px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  {/* Laptop */}
                  <div>
                    {/* Screen */}
                    <div className="relative w-[520px] bg-neutral-900 rounded-t-2xl p-3 shadow-[0_-5px_30px_rgba(0,0,0,0.3)] border-t-[8px] border-x-[8px] border-neutral-800">
                      {/* Webcam */}
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-neutral-700 rounded-full z-10" />
                      
                      {/* Display */}
                      <div className={`w-full h-[472px] bg-gradient-to-br ${mockup.gradient} rounded-t-lg overflow-hidden relative`}>
                        {/* Browser Chrome */}
                        <div className="absolute top-0 left-0 right-0 h-10 bg-neutral-800/50 backdrop-blur-sm flex items-center px-4 gap-2">
                          <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                          </div>
                          <div className="flex-1 h-6 bg-neutral-700/50 rounded mx-4" />
                        </div>
                        
                        {/* Web Content */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white/90 pt-10">
                          <div className="text-5xl mb-4">💻</div>
                          <div className="text-sm tracking-wider">WEB DESIGN</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Base/Keyboard */}
                    <div className="relative w-[520px] h-4 bg-gradient-to-b from-neutral-800 to-neutral-700 rounded-b-2xl shadow-[0_10px_40px_rgba(0,0,0,0.4)]">
                      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-48 h-2 bg-neutral-600 rounded-t-lg" />
                    </div>
                    
                    {/* Shadow underneath */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4/5 h-4 bg-black/20 blur-xl rounded-full" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {isModalOpen && selectedMockup && (
        <DesignShowcaseModal
          isOpen={isModalOpen}
          mockup={selectedMockup}
          onClose={closeModal}
        />
      )}
    </section>
  );
}
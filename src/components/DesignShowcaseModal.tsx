import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface DesignShowcaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  mockup: {
    title: string;
    description: string;
    image: string;
    category: string;
  } | null;
}

export function DesignShowcaseModal({ isOpen, onClose, mockup }: DesignShowcaseModalProps) {
  if (!mockup) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 overflow-y-auto"
          >
            <div className="min-h-screen bg-white">
              {/* Header */}
              <div className="relative bg-[#1F1BF5] text-white overflow-hidden">
                {/* Close Button */}
                <div className="absolute top-8 left-8 z-20">
                  <button
                    onClick={onClose}
                    className="flex items-center gap-2 px-6 py-3 bg-white text-neutral-900 rounded-full hover:bg-neutral-100 transition-colors"
                  >
                    <X className="w-5 h-5" />
                    <span>Close</span>
                  </button>
                </div>

                {/* Image Container */}
                <div className="relative h-[500px] flex items-center justify-center p-12 pt-24">
                  <div className="relative max-w-4xl w-full">
                    <ImageWithFallback
                      src={mockup.image}
                      alt={mockup.title}
                      className="w-full h-auto rounded-2xl shadow-2xl"
                    />
                  </div>
                </div>

                {/* Project Overview Box */}
                <div className="relative -mt-16 px-12 pb-12 z-10">
                  <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 shadow-2xl">
                    <div className="flex items-center justify-between mb-6">
                      <span className="px-4 py-2 bg-[#1F1BF5]/10 text-[#1F1BF5] rounded-full">
                        {mockup.category}
                      </span>
                      <h2 className="text-2xl text-neutral-900">{mockup.title}</h2>
                    </div>
                    <div>
                      <p className="text-xl text-neutral-700 leading-relaxed text-center">
                        {mockup.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Area - Can be expanded with more details */}
              <div className="max-w-6xl mx-auto p-8 md:p-12">
                <div className="bg-gradient-to-br from-[#1F1BF5]/5 to-neutral-100 rounded-3xl p-8">
                  <h3 className="text-2xl mb-4 text-[#1F1BF5]">About This Design</h3>
                  <p className="text-lg text-neutral-700 leading-relaxed">
                    {mockup.description}
                  </p>
                </div>

                {/* Large Image Display */}
                <div className="mt-8">
                  <ImageWithFallback
                    src={mockup.image}
                    alt={mockup.title}
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
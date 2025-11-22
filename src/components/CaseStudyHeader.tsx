import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CaseStudyHeaderProps {
  title: string;
  description: string;
  image: string;
  onBack: () => void;
}

export function CaseStudyHeader({ title, description, image, onBack }: CaseStudyHeaderProps) {
  return (
    <div className="relative bg-gradient-to-br from-[#1F1BF5] to-[#1F1BF5]/80 text-white overflow-hidden">
      {/* Hero Image */}
      <div className="relative h-[400px] w-full">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1F1BF5]/80 via-[#1F1BF5]/60 to-[#1F1BF5]" />
      </div>

      {/* Header Content */}
      <div className="relative p-12">
        <button
          onClick={onBack}
          className="mb-8 flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Projects</span>
        </button>
        
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm mb-4">Case Study</span>
            <h1 className="text-5xl mb-4">{title}</h1>
            <p className="text-xl text-white/80">{description}</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

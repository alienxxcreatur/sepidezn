import { motion } from 'motion/react';
import { ArrowDown, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Hero() {
  const { t } = useLanguage();
  
  const scrollToWork = () => {
    const element = document.getElementById('work');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden bg-gradient-to-br from-white via-[#1F1BF5]/5 to-[#1F1BF5]/10">
      {/* Animated background shapes */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-20 right-20 w-72 h-72 bg-[#1F1BF5]/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          rotate: [360, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-20 left-20 w-96 h-96 bg-[#1F1BF5]/20 rounded-full blur-3xl"
      />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-[#1F1BF5]/10 rounded-full border border-[#1F1BF5]/20"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-[#1F1BF5]" />
            <span className="text-[#1F1BF5]">
              UI/UX Designer & Creative Thinker
            </span>
          </motion.div>
          
          <h1 className="mb-6 text-7xl tracking-tight">
            <span className="block mb-2">Hi, I'm</span>
            <span className="text-[#1F1BF5] inline-block">
              Sepide Zeinalzadegan
            </span>
          </h1>
          
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto mb-12 leading-relaxed">
            I design <span className="text-[#1F1BF5] font-medium">thoughtful interfaces</span> that blend 
            <span className="text-[#1F1BF5] font-medium"> aesthetics</span> with 
            <span className="text-[#1F1BF5] font-medium"> functionality</span>.
            Creating experiences that users don't just use — they love.
          </p>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-neutral-500">Scroll</span>
          <ArrowDown className="w-5 h-5 text-[#1F1BF5]" />
        </div>
      </motion.div>
    </section>
  );
}
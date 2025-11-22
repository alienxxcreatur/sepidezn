import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Mail, Linkedin, Phone } from 'lucide-react';
import { DribbbleIcon } from './icons/DribbbleIcon';
import { useLanguage } from '../contexts/LanguageContext';

const socials = [
  { icon: Phone, label: 'Phone', value: '+989398731528', href: 'tel:+989398731528' },
  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/sepide-zn', href: 'https://www.linkedin.com/in/sepide-zn' },
  { icon: DribbbleIcon, label: 'Dribbble', value: 'dribbble.com/sepidzn', href: 'https://dribbble.com/sepidzn' },
  { icon: Mail, label: 'Email', value: 'sepid.zn@gmail.com', href: 'mailto:sepid.zn@gmail.com' },
];

export function Contact() {
  const { ref, isInView } = useInView();
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden bg-gradient-to-br from-[#1F1BF5]/5 via-[#1F1BF5]/10 to-[#1F1BF5]/5">
      {/* Animated background elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-0 right-0 w-96 h-96 bg-[#1F1BF5]/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-0 left-0 w-80 h-80 bg-[#1F1BF5]/20 rounded-full blur-3xl"
      />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            className="inline-block px-4 py-2 bg-[#1F1BF5]/10 rounded-full text-[#1F1BF5] mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
          >
            {t('nav.getInTouch')}
          </motion.span>
          
          <h2 className="text-6xl mb-6">
            {t('contact.title')} <br />
            <span className="text-[#1F1BF5]">
              {t('contact.titleHighlight')}
            </span>
          </h2>
          
          <p className="text-xl text-neutral-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            {t('contact.subtitle')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-3xl mx-auto">
            {socials.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group p-6 bg-white rounded-2xl border border-neutral-200 transition-all hover:border-[#1F1BF5] hover:shadow-lg"
                  aria-label={social.label}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex-1 text-left">
                      <div className="text-sm text-neutral-500 mb-1">{t(`contact.${social.label.toLowerCase()}`)}</div>
                      <div className="text-lg">{social.value}</div>
                    </div>
                    <div className="w-12 h-12 bg-[#1F1BF5]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-[#1F1BF5]" />
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>

          <motion.div 
            className="pt-12 border-t border-neutral-300"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
          >
            <p className="text-neutral-500 mb-2">
              Designed & Built with <span className="text-[#1F1BF5]">♥</span>
            </p>
            <p className="text-neutral-400">
              © 2024 Portfolio. All rights reserved.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

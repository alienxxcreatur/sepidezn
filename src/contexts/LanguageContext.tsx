import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fa';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.resume': 'Resume',
    'nav.visualDesigns': 'Visual Designs',
    'nav.getInTouch': 'Get In Touch',
    'nav.portfolio': 'Portfolio',
    
    // Hero
    'hero.greeting': 'Hi, I\'m',
    'hero.name': 'Your Name',
    'hero.title': 'UI/UX Designer',
    'hero.description': 'Crafting intuitive and engaging digital experiences through thoughtful design and user-centered solutions.',
    'hero.viewWork': 'View My Work',
    'hero.contact': 'Contact Me',
    
    // Projects
    'projects.title': 'Featured',
    'projects.titleHighlight': 'Projects',
    'projects.subtitle': 'A selection of my recent work',
    'projects.viewCase': 'View Case Study',
    
    // Design Showcase
    'showcase.title': 'Design',
    'showcase.titleHighlight': 'Showcase',
    'showcase.subtitle': 'Explore our latest interface designs',
    'showcase.viewMore': 'View More',
    
    // Contact
    'contact.title': 'Let\'s Work',
    'contact.titleHighlight': 'Together',
    'contact.subtitle': 'Have a project in mind? Let\'s create something amazing together.',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.linkedin': 'LinkedIn',
    'contact.dribbble': 'Dribbble',
    
    // Visual Designs
    'visualDesigns.back': 'Back to Home',
    'visualDesigns.title': 'Visual',
    'visualDesigns.titleHighlight': 'Designs',
    'visualDesigns.description': 'Explore a curated collection of my visual design work, showcasing creativity, attention to detail, and innovative solutions across various design disciplines.',
    'visualDesigns.viewDetails': 'View Details',
    'visualDesigns.aboutDesign': 'About This Design',
    'visualDesigns.designScreens': 'Design Screens',
    'visualDesigns.designDetails': 'Design Details',
    'visualDesigns.category': 'Category',
    'visualDesigns.type': 'Type',
    'visualDesigns.screens': 'Screens',
    'visualDesigns.status': 'Status',
    'visualDesigns.completed': 'Completed',
    'visualDesigns.variations': 'variations',
    'visualDesigns.variation': 'Design variation',
    
    // Project Detail
    'projectDetail.back': 'Back to Projects',
    'projectDetail.overview': 'Project Overview',
    'projectDetail.challenge': 'The Challenge',
    'projectDetail.solution': 'The Solution',
    'projectDetail.results': 'Results & Impact',
    
    // Project Names
    'project.walletApp': 'Wallet App',
    'project.ibcentra': 'IBCentra',
    'project.foodKiosk': 'Food Kiosk',
    'project.rasaCode': 'Rasa Code',
    'project.visera': 'Visera',
    'project.fiotrix': 'Fiotrix',
    'project.barpardaz': 'Barpardaz',
    'project.ceoAssist': 'CEO Assist App',
    'project.aiTaskManager': 'AI Task Manager App',
    'project.aiReminder': 'AI Reminder App',
    'project.charityKiosk': 'Charity Payment Kiosk',
    'project.shemsh': 'Shemsh Landing',
    'project.aniresan': 'Aniresan Landing',
  },
  fa: {
    // Navigation
    'nav.home': 'خانه',
    'nav.resume': 'رزومه',
    'nav.visualDesigns': 'طراحی‌های بصری',
    'nav.getInTouch': 'تماس با من',
    'nav.portfolio': 'نمونه کارها',
    
    // Hero
    'hero.greeting': 'سلام، من',
    'hero.name': 'نام شما',
    'hero.title': 'طراح UI/UX',
    'hero.description': 'خلق تجربیات دیجیتال شهودی و جذاب از طریق طراحی متفکرانه و راه‌حل‌های کاربرمحور.',
    'hero.viewWork': 'مشاهده کارها',
    'hero.contact': 'تماس با من',
    
    // Projects
    'projects.title': 'پروژه‌های',
    'projects.titleHighlight': 'برگزیده',
    'projects.subtitle': 'نمونه‌ای از کارهای اخیر من',
    'projects.viewCase': 'مشاهده مطالعه موردی',
    
    // Design Showcase
    'showcase.title': 'نمایشگاه',
    'showcase.titleHighlight': 'طراحی',
    'showcase.subtitle': 'آخرین طراحی‌های رابط کاربری را کاوش کنید',
    'showcase.viewMore': 'مشاهده بیشتر',
    
    // Contact
    'contact.title': 'بیایید با هم',
    'contact.titleHighlight': 'کار کنیم',
    'contact.subtitle': 'پروژه‌ای در ذهن دارید؟ بیایید چیزی شگفت‌انگیز بسازیم.',
    'contact.phone': 'تلفن',
    'contact.email': 'ایمیل',
    'contact.linkedin': 'لینکدین',
    'contact.dribbble': 'دریبل',
    
    // Visual Designs
    'visualDesigns.back': 'بازگشت به خانه',
    'visualDesigns.title': 'طراحی‌های',
    'visualDesigns.titleHighlight': 'بصری',
    'visualDesigns.description': 'مجموعه‌ای منتخب از کارهای طراحی بصری من را کاوش کنید که خلاقیت، توجه به جزئیات و راه‌حل‌های نوآورانه را در رشته‌های مختلف طراحی به نمایش می‌گذارد.',
    'visualDesigns.viewDetails': 'مشاهده جزئیات',
    'visualDesigns.aboutDesign': 'درباره این طراحی',
    'visualDesigns.designScreens': 'صفحات طراحی',
    'visualDesigns.designDetails': 'جزئیات طراحی',
    'visualDesigns.category': 'دسته‌بندی',
    'visualDesigns.type': 'نوع',
    'visualDesigns.screens': 'صفحات',
    'visualDesigns.status': 'وضعیت',
    'visualDesigns.completed': 'تکمیل شده',
    'visualDesigns.variations': 'تنوع',
    'visualDesigns.variation': 'تنوع طراحی',
    
    // Project Detail
    'projectDetail.back': 'بازگشت به پروژه‌ها',
    'projectDetail.overview': 'نمای کلی پروژه',
    'projectDetail.challenge': 'چالش',
    'projectDetail.solution': 'راه‌حل',
    'projectDetail.results': 'نتایج و تاثیر',
    
    // Project Names
    'project.walletApp': 'اپلیکیشن کیف پول',
    'project.ibcentra': 'آی‌بی‌سنترا',
    'project.foodKiosk': 'کیوسک غذا',
    'project.rasaCode': 'رسا کد',
    'project.visera': 'ویسرا',
    'project.fiotrix': 'فیوتریکس',
    'project.barpardaz': 'بارپرداز',
    'project.ceoAssist': 'اپلیکیشن دستیار مدیر',
    'project.aiTaskManager': 'اپلیکیشن مدیریت وظایف هوشمند',
    'project.aiReminder': 'اپلیکیشن یادآور هوشمند',
    'project.charityKiosk': 'کیوسک پرداخت خیریه',
    'project.shemsh': 'لندینگ شمش',
    'project.aniresan': 'لندینگ انی‌رسان',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'fa' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      <div dir={language === 'fa' ? 'rtl' : 'ltr'} className="font-sans">
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

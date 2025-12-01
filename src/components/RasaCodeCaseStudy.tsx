import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { ArrowRight,X, ArrowLeft, Monitor, Users, TestTube, Lightbulb, Layers, Moon, Sun, Code, CheckCircle2, AlertCircle, Settings, BarChart3, Shield, Layout, Smartphone, Database, GraduationCap, Target, Workflow, Pen } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';


interface RasaCodeCaseStudyProps {
  onBack: () => void;
}

export function RasaCodeCaseStudy({ onBack }: RasaCodeCaseStudyProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(-1);

  // آدرس تصاویر برای هر بخش
  const kioskImages = [
    '/assets/images/casestudy/rasacode/kiosk/1.webp',
    '/assets/images/casestudy/rasacode/kiosk/2.webp',
    '/assets/images/casestudy/rasacode/kiosk/3.webp',
    '/assets/images/casestudy/rasacode/kiosk/4.webp',
    '/assets/images/casestudy/rasacode/kiosk/5.webp',
    '/assets/images/casestudy/rasacode/kiosk/6.webp',
    '/assets/images/casestudy/rasacode/kiosk/7.webp',
    '/assets/images/casestudy/rasacode/kiosk/8.webp',
  ];

  const userImages = [
    '/assets/images/casestudy/rasacode/users/1.webp',
    '/assets/images/casestudy/rasacode/users/2.webp',
    '/assets/images/casestudy/rasacode/users/3.webp',
    '/assets/images/casestudy/rasacode/users/4.webp',
  ];

  const salesImages = [
    '/assets/images/casestudy/rasacode/sales/1.webp',
    '/assets/images/casestudy/rasacode/sales/2.webp',
    '/assets/images/casestudy/rasacode/sales/3.webp',
  ];

  const lightImages = [
    '/assets/images/casestudy/rasacode/kiosk/light/1.webp',
    '/assets/images/casestudy/rasacode/kiosk/light/2.webp',
    '/assets/images/casestudy/rasacode/kiosk/light/3.webp',
    '/assets/images/casestudy/rasacode/kiosk/light/4.webp',
    '/assets/images/casestudy/rasacode/kiosk/light/5.webp',
    '/assets/images/casestudy/rasacode/kiosk/light/6.webp',
    '/assets/images/casestudy/rasacode/kiosk/light/7.webp',
    '/assets/images/casestudy/rasacode/kiosk/light/8.webp',
    '/assets/images/casestudy/rasacode/kiosk/light/9.webp',
    '/assets/images/casestudy/rasacode/kiosk/light/10.webp',
    '/assets/images/casestudy/rasacode/kiosk/light/11.webp',

    
  ];

 
  
   // Handle image click to open modal and set the current image
  const openImage = (index: number ,imagesource:Array) => {
    setSelectedImage(imagesource[index]); // Change this based on which array (kioskImages, userImages, salesImages) you are using
    setCurrentImageIndex(index);
  };

  // Handle closing the modal
  const closeImage = () => {
    setSelectedImage(null);
    setCurrentImageIndex(-1);
  };

  // Handle changing the image in the modal (next or previous)
  const changeImage = (direction: 'left' | 'right' , imagesource:Array) => {
    let newIndex = currentImageIndex;
    if (direction === 'left') {
      newIndex = currentImageIndex === 0 ? imagesource.length - 1 : currentImageIndex - 1;
    } else if (direction === 'right') {
      newIndex = currentImageIndex === imagesource.length - 1 ? 0 : currentImageIndex + 1;
    }
    setSelectedImage(imagesource[newIndex]); // Again, choose from the correct array
    setCurrentImageIndex(newIndex);
  };

  // Handle keyboard arrow keys for image navigation
  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      changeImage('left');
    } else if (event.key === 'ArrowRight') {
      changeImage('right');
    }
  };

  useEffect(() => {
    if (selectedImage) {
      window.addEventListener('keydown', handleKeyPress);
    } else {
      window.removeEventListener('keydown', handleKeyPress);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [selectedImage]);

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Header */}
      <div className="relative bg-[#1F1BF5] text-white overflow-hidden">
        {/* Back Button */}
        <div className="absolute top-8 right-8 z-20">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-6 py-3 bg-white text-neutral-900 rounded-full hover:bg-neutral-100 transition-colors"
          >
            <ArrowRight className="w-5 h-5" />
            <span>بازگشت</span>
          </button>
        </div>

        {/* Image Container */}
        <div className="relative h-[500px] flex items-center justify-center p-12 pt-24">
          <div className="relative max-w-2xl w-full">
            <ImageWithFallback
              src="../../assets/images/casestudy/rasacode/rasacode_header.webp"
              alt="سامانه مدیریتی کیوسک"
              className="w-full h-auto rounded-2xl "
            />
          </div>
        </div>

        {/* Project Overview Box */}
        <div className="relative -mt-16 px-12 pb-12 z-10">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 shadow-2xl">
            <div className="text-right">
              <p className="text-xl text-neutral-700 leading-relaxed mb-4">
                <span className="text-[#1F1BF5]">سامانه مدیریتی کیوسک‌های پرداخت</span> یک سیستم جامع برای مانیتورینگ و مدیریت کیوسک‌های پرداخت است.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed">
                این سامانه به تیم‌های نگهداری و پشتیبانی امکان می‌دهد تا وضعیت کیوسک‌ها را در زمان واقعی رصد کنند، مشکلات را سریع شناسایی و رفع کرده، و عملکرد کلی سیستم را بهبود بخشند.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto p-8 md:p-12">
        {/* معرفی پروژه */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8 justify-start">
            <div className="w-16 h-16 bg-[#1F1BF5]/10 rounded-2xl flex items-center justify-center">
              <Monitor className="w-8 h-8 text-[#1F1BF5]" />
            </div>
            <h2 className="text-4xl">معرفی پروژه</h2>
            
          </div>
          
          <div className="bg-gradient-to-br from-[#1F1BF5]/5 to-[#1F1BF5]/10 rounded-3xl p-8 border-r-4 border-[#1F1BF5] mb-8">
            <p className="text-xl text-neutral-700 leading-relaxed text-right mb-6">
              من توی شرکتی کار می‌کردم که تخصصش طراحی و ساخت انواع کیوسک‌های پرداخت بود—از کیوسک‌های رستورانی گرفته تا خیریه، داروخانه و موارد مشابه. توی این پروژه، دو نقش اصلی داشتم:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/70 rounded-2xl p-6">
                <div className="flex items-center gap-3 justify-start mb-3">
                  <div className="w-12 h-12 bg-[#1F1BF5]/10 rounded-xl flex items-center justify-center">
                    <Smartphone className="w-6 h-6 text-[#1F1BF5]" />
                  </div>
                  <h3 className="text-lg">طراحی رابط کاربری کیوسک‌ها</h3>
                  
                </div>
                <p className="text-neutral-600 text-right leading-relaxed">
                  طراحی رابط کاربری برای خود کیوسک‌های پرداخت
                </p>
              </div>

              <div className="bg-white/70 rounded-2xl p-6">
                <div className="flex items-center gap-3 justify-start mb-3">
                  <div className="w-12 h-12 bg-[#1F1BF5]/10 rounded-xl flex items-center justify-center">
                    <Settings className="w-6 h-6 text-[#1F1BF5]" />
                  </div>
                  <h3 className="text-lg">سامانه مدیریتی</h3>
                  
                </div>
                <p className="text-neutral-600 text-right leading-relaxed">
                  کنترل، مدیریت و مانیتورینگ کیوسک‌ها و تراکنش‌ها
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-3xl p-8">
            <p className="text-2xl text-[#1F1BF5] text-right mb-6">این کیس استادی برای مورد دوم یعنی سامانه مدیریتی است!</p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 text-right">
                <div className="flex items-center gap-2 justify-start mb-2">
                  <span className="text-sm text-neutral-500">نقش من</span>
                  <Users className="w-4 h-4 text-[#1F1BF5]" />
                </div>
                <p className="text-lg">طراح UI/UX</p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 text-right">
                <div className="flex items-center gap-2 justify-start mb-2">
                  <span className="text-sm text-neutral-500">مدت زمان</span>
                  <BarChart3 className="w-4 h-4 text-[#1F1BF5]" />
                </div>
                <p className="text-lg">حدود ۱ سال</p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 text-right">
                <div className="flex items-center gap-2 justify-start mb-2">
                  <span className="text-sm text-neutral-500">محیط کاری</span>
                  <Workflow className="w-4 h-4 text-[#1F1BF5]" />
                </div>
                <p className="text-lg">تیم ۳-۴ نفره (دورکاری)</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* شناخت کاربران */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8 justify-start">
            <div className="w-16 h-16 bg-[#1F1BF5]/10 rounded-2xl flex items-center justify-center">
              <Users className="w-8 h-8 text-[#1F1BF5]" />
            </div>
            <h2 className="text-4xl">شناخت کاربران و رفتار طراحی</h2>
            
          </div>

          <p className="text-xl text-neutral-700 text-right mb-8 leading-relaxed">
            ما دو دسته کاربر اصلی داشتیم:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* کاربر 1 */}
            <div className="bg-gradient-to-br from-[#1F1BF5]/5 to-blue-50 rounded-3xl p-8 border-r-4 border-[#1F1BF5]">
              <div className="flex items-center gap-3 justify-start mb-6">
                 <div className="w-14 h-14 bg-[#1F1BF5] rounded-2xl flex items-center justify-center">
                  <Code className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl text-[#1F1BF5]">تیم فنی</h3>
               
              </div>
              <p className="text-lg text-neutral-700 text-right leading-relaxed">
                تیم فنی خودمون که باید با سامانه کار می‌کرد برای پشتیبانی و مانیتورینگ
              </p>
            </div>

            {/* کاربر 2 */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border-r-4 border-green-500">
              <div className="flex items-center gap-3 justify-start mb-6">
                <div className="w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl text-green-900">مشتری‌ها</h3>
                
              </div>
              <p className="text-lg text-neutral-700 text-right leading-relaxed">
                مشتری‌هایی که کیوسک‌ها رو تهیه می‌کردن، معمولاً آشنا با سیستم‌های اداری ایرانی و نیازمند فضای ساده و آشنا
              </p>
            </div>
          </div>

          <div className="mt-6 bg-white rounded-3xl p-8 border border-neutral-200 shadow-lg">
            <p className="text-xl text-neutral-700 text-right leading-relaxed">
              با توجه به این تفاوت، سعی کردم طراحی رو طوری انجام بدم که <span className="text-[#1F1BF5]">هم کارایی بالا برای تیم فنی</span> داشته باشه، <span className="text-[#1F1BF5]">هم برای مشتری‌ها قابل فهم و کاربردی</span> باشه.
            </p>
          </div>
        </motion.section>

        {/* روش تصمیم‌گیری */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8 justify-start">
            <div className="w-16 h-16 bg-[#1F1BF5]/10 rounded-2xl flex items-center justify-center">
              <TestTube className="w-8 h-8 text-[#1F1BF5]" />
            </div>
            <h2 className="text-4xl">روش تصمیم‌گیری و تست‌ها</h2>
            
          </div>

          <div className="bg-gradient-to-br from-[#1F1BF5]/5 to-purple-50 rounded-3xl p-8 border-r-4 border-[#1F1BF5]">
            <p className="text-xl text-neutral-700 leading-relaxed text-right mb-6">
              توی تصمیم‌گیری‌های طراحی از A/B تست ساده استفاده می‌کردم. وقتی بین چند گزینه مردد بودم، یه طراحی اولیه از هرکدوم می‌زدم و با تیم درباره‌ش بحث می‌کردیم.
            </p>
            
            <div className="bg-white/70 rounded-2xl p-6">
              <div className="flex items-start gap-3 justify-end">
                <Database className="w-8 h-8 text-[#1F1BF5] flex-shrink-0 mt-1" />
                <p className="text-lg text-neutral-800 text-right flex-1 leading-relaxed">
                  این فرآیند باعث شد تصمیماتمون، هم از نظر فنی قابل اجرا باشن، هم از نظر تجربه کاربری بهتر. نتیجه و علت انتخابش داکیومنت میشد چون گاهی برمیگشتیم به راه حل‌های قبلی و دوباره بررسیشون میکردیم!
                </p>
                
              </div>
            </div>
          </div>
        </motion.section>

        {/* چالش‌ها و یادگیری‌ها */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8 justify-start">
            <div className="w-16 h-16 bg-[#1F1BF5]/10 rounded-2xl flex items-center justify-center">
              <Target className="w-8 h-8 text-[#1F1BF5]" />
            </div>
            <h2 className="text-4xl">چالش‌ها و یادگیری‌های اولیه</h2>
            
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8 mb-6">
            <p className="text-xl text-neutral-800 text-right mb-6 leading-relaxed">
              این پروژه اولین تجربه جدی کاری من بود، بنابراین با خیلی از چالش‌های واقعی طراحی در فضای عملیاتی روبه‌رو شدم. به‌مرور یاد گرفتم:
            </p>
          </div>

          <div className="grid gap-6 align">
            <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-lg">
              <div className="flex itcenter gap-4 justify-start">
                <div className="bg-[#1F1BF5]/10 rounded-2xl w-14 h-14 flex items-center justify-center flex-shrink-0">
                   <Database className="w-7 h-7 text-[#1F1BF5]" />
                </div>
                <div className="text-right flex-1">
                  <p className="text-lg text-neutral-700 leading-relaxed">
                    چطور طراحی‌هام رو با ساختار بک‌اند هماهنگ کنم—مخصوصاً برای سطوح دسترسی و معماری‌های داده متفاوت
                  </p>
                </div>
               
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-lg">
              <div className="flex items-center gap-4 justify-start">
                <div className="bg-[#1F1BF5]/10 rounded-2xl w-14 h-14 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-7 h-7 text-[#1F1BF5]" />
                </div>
                <div className="text-right flex-1">
                  <p className="text-lg text-neutral-700 leading-relaxed">
                    اهمیت ساختار سلسله‌مراتبی سازمانی در طراحی داشبورد و دسترسی‌ها
                  </p>
                </div>
                
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-lg">
              <div className="flex items-center gap-4 justify-start">
                <div className="bg-[#1F1BF5]/10 rounded-2xl w-14 h-14 flex items-center justify-center flex-shrink-0">
                  <Monitor className="w-7 h-7 text-[#1F1BF5]" />
                </div>
                <div className="text-right flex-1">
                  <p className="text-lg text-neutral-700 leading-relaxed">
                    درک محدودیت‌های فنی سخت‌افزار کیوسک‌ها و تأثیر اون‌ها بر طراحی UI
                  </p>
                </div>
                
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-lg">
              <div className="flex items-center gap-4 justify-start">
                 <div className="bg-[#1F1BF5]/10 rounded-2xl w-14 h-14 flex items-center justify-center flex-shrink-0">
                  <Code className="w-7 h-7 text-[#1F1BF5]" />
                </div>
                <div className="text-right flex-1">
                  <p className="text-lg text-neutral-700 leading-relaxed">
                    هماهنگی با تیم توسعه برای طراحی قابل‌پیاده‌سازی (به‌جای فقط طراحی ایده‌آل)
                  </p>
                </div>
               
              </div>
            </div>
          </div>
        </motion.section>

        {/* سبک طراحی */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8 justify-start">
            <div className="w-16 h-16 bg-[#1F1BF5]/10 rounded-2xl flex items-center justify-center">
              <Layers className="w-8 h-8 text-[#1F1BF5]" />
            </div>
            <h2 className="text-4xl">سبک طراحی و دیزاین سیستم</h2>
            
          </div>

          <div className="space-y-6">
            {/* دارک مود و لایت مود */}
            <div className="bg-gradient-to-br from-[#1F1BF5]/5 to-neutral-100 rounded-3xl p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-neutral-900 rounded-2xl p-6 text-white">
                  <div className="flex items-center gap-3 justify-start mb-4">
                     <Moon className="w-6 h-6" />
                    <h3 className="text-xl">دارک مود</h3>
                   
                  </div>
                  <p className="text-neutral-300 text-right leading-relaxed">
                    برای تیم فنی و استفاده طولانی‌مدت
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 border-2 border-neutral-200">
                  <div className="flex items-center gap-3 justify-start mb-4">
                     <Sun className="w-6 h-6 text-[#1F1BF5]" />
                    <h3 className="text-xl">لایت مود</h3>
                   
                  </div>
                  <p className="text-neutral-700 text-right leading-relaxed">
                    برای مشتری‌ها و تجربه خوشایند
                  </p>
                </div>
              </div>

              <p className="text-lg text-neutral-700 text-right leading-relaxed">
                چون کاربران اصلی اولیه‌ی سامانه، خودمون (تیم فنی) بودیم، از اول طراحی رو با <span className="text-[#1F1BF5]">دارک‌مود</span> شروع کردم. بعداً برای مشتری‌ها، <span className="text-[#1F1BF5]">لایت‌مود</span> هم اضافه شد.
              </p>
            </div>

            {/* Neumorphism */}
            <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-lg">
              <div className="flex items-start gap-4 justify-end mb-6">
                <Layout className="w-12 h-12 text-[#1F1BF5] flex-shrink-0" />
                <div className="text-right flex-1">
                  <h3 className="text-2xl text-[#1F1BF5] mb-3">استفاده هوشمند از Neumorphism</h3>
                  <p className="text-lg text-neutral-700 leading-relaxed">
                    برای اینکه ظاهر طراحی یکنواخت و خشک نشه، به‌صورت خیلی کنترل‌شده‌ای از neumorphism استفاده کردم؛ فقط تا جایی که به تجربه کاربری آسیبی نزنه یا باعث سختی در پیاده‌سازی نشه.
                  </p>
                </div>
                
              </div>
            </div>

            {/* Design System */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border-r-4 border-purple-500">
              <div className="flex items-center gap-3 justify-start mb-6">
                <div className="w-14 h-14 bg-purple-500 rounded-2xl flex items-center justify-center">
                  <Layers className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl text-purple-900">دیزاین سیستم اختصاصی</h3>
                
              </div>
              <p className="text-lg text-neutral-700 text-right leading-relaxed">
                از لحاظ طراحی سیستم هم از قواعد و اندازه‌های <span className="text-purple-700">Tailwind</span> پیروی کردم، ولی تلاش کردم یک طراحی سیستم اختصاصی خودم بسازم که روی قواعد Tailwind بنا شده باشه. این تجربه باعث شد با وجود سختی‌ها و خطاهایی که اول کار داشتم، درک عمیق‌تری از یکپارچگی طراحی و ساختار مؤلفه‌ها پیدا کنم.
              </p>
            </div>
          </div>
        </motion.section>

        {/* چالش‌های حل شده */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8 justify-start">
            <div className="w-16 h-16 bg-[#1F1BF5]/10 rounded-2xl flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8 text-[#1F1BF5]" />
            </div>
            <h2 className="text-4xl">چالش‌ها و پیچیدگی‌های حل‌شده</h2>
            
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 mb-6">
            <p className="text-xl text-neutral-800 text-right leading-relaxed mb-6">
              این پروژه پر از ساختارهای پیچیده بود، به‌خصوص:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-lg">
              <div className="flex items-start gap-4 justify-end mb-4">
                <div className="text-right flex-1">
                  <h3 className="text-xl mb-3 text-[#1F1BF5]">پیکربندی دقیق کیوسک‌ها</h3>
                  <p clasه با داده‌های تخصصی بیزینسیsName="text-neutral-700 leading-relaxed">
                    طراحی رابط پیچیده برای تنظیمات دقیق کیوسک‌ها
                  </p>
                </div>
                <div className="bg-[#1F1BF5] rounded-2xl w-14 h-14 flex items-center justify-center flex-shrink-0">
                  <Settings className="w-7 h-7 text-white" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-lg">
              <div className="flex items-start gap-4 justify-end mb-4">
                <div className="text-right flex-1">
                  <h3 className="text-xl mb-3 text-[#1F1BF5]">سلسله‌مراتب سازمانی</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    تعریف و مدیریت سطوح دسترسی مختلف
                  </p>
                </div>
                <div className="bg-[#1F1BF5] rounded-2xl w-14 h-14 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-7 h-7 text-white" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#1F1BF5]/5 to-blue-50 rounded-3xl p-8 border-r-4 border-[#1F1BF5]">
            <div className="flex items-start gap-4 justify-end mb-6">
              <div className="text-right flex-1">
                <h3 className="text-2xl text-[#1F1BF5] mb-4">رویکرد Desktop-First با تفکر Responsive</h3>
                <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                  پروژه Desktop-first بود، اما از همون اول حواسم به ریسپانسیو بودن اجزا بود.
                </p>
                <div className="bg-white/70 rounded-2xl p-6">
                  <div className="flex items-start gap-3 justify-end">
                    <p className="text-lg text-neutral-800 text-right flex-1 leading-relaxed">
                      برای همین، از جداول سنگین کمتر استفاده کردیم و بیشتر <span className="text-[#1F1BF5]">کارت‌محور</span> جلو رفتیم تا راحت‌تر توی نسخه‌های موبایل هم پیاده‌سازی بشن.
                    </p>
                    <Smartphone className="w-8 h-8 text-[#1F1BF5] flex-shrink-0 mt-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-white rounded-3xl p-8 border border-neutral-200 shadow-lg">
            <p className="text-xl text-neutral-700 text-right leading-relaxed">
              با توجه به داده‌های متنوع و سناریوهای مختلفی که وجود داشت، تمام تلاشم این بود که در تمام سیستم، یه <span className="text-[#1F1BF5]">Consistency حفظ کنم</span> و برای هر نیازی، راه حلی پیدا کنم که انسجام طراحی رو به‌هم نزنه.
            </p>
          </div>
        </motion.section>
{/* گالری */}
      
        <div className="max-w-6xl mx-auto p-8 md:p-12">
       <div className="flex items-center gap-4 mb-8 justify-start">
            <div className="w-16 h-16 bg-[#1F1BF5]/10 rounded-2xl flex items-center justify-center">
              <Pen className="w-8 h-8 text-[#1F1BF5]" />
            </div>
            <h2 className="text-4xl">طراحی نهایی</h2>
            
          </div>

        {/* گالری */}
        {/* <div className="grid md:grid-cols-4 gap-6 ">
          {kioskImages.map((image, index) => (
            <div key={index} className="relative group cursor-pointer" onClick={() => openImage(index)}>
              <ImageWithFallback
                src={image}
                alt={`تصویر کیوسک ${index + 1}`}
                className="w-full h-full aspect-square rounded-lg object-cover transition-all duration-300 transform group-hover:scale-110"
                loading="lazy"
              />
            </div>
          ))}
        </div> */}

         <div className="mb-16 mt-16">
          <h3 className="text-2xl mb-4">مدیریت کیوسک</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {kioskImages.map((image, index) => (
              <div key={index} className="relative group cursor-pointer" onClick={() => openImage(index,kioskImages)}>
                <ImageWithFallback
                  src={image}
                  alt={`تصویر کیوسک ${index + 1}`}
                  className="w-full h-full aspect-square rounded-lg object-cover transition-all duration-300 transform group-hover:scale-110"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
           {/* مدیریت کاربران */}
        <div className="mb-16 mt-16">
          <h3 className="text-2xl mb-4">مدیریت کاربران</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {userImages.map((image, index) => (
              <div key={index} className="relative group cursor-pointer" onClick={() => openImage(index,userImages)}>
                <ImageWithFallback
                  src={image}
                  alt={`تصویر کاربران ${index + 1}`}
                  className="w-full h-full aspect-square rounded-lg object-cover transition-all duration-300 transform group-hover:scale-110"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* مدیریت فروش */}
        <div className="mb-16">
          <h3 className="text-2xl mb-4">مدیریت فروش</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {salesImages.map((image, index) => (
              <div key={index} className="relative group cursor-pointer" onClick={() => openImage(index ,salesImages)}>
                <ImageWithFallback
                  src={image}
                  alt={`تصویر فروش ${index + 1}`}
                  className="w-full h-full aspect-square rounded-lg object-cover transition-all duration-300 transform group-hover:scale-110"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
          {/* مدیریت فروش */}
        <div className="mb-16">
          <h3 className="text-2xl mb-4"> ورژن لایت</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {lightImages.map((image, index) => (
              <div key={index} className="relative group cursor-pointer" onClick={() => openImage(index ,lightImages)}>
                <ImageWithFallback
                  src={image}
                  alt={`تصویر لایت ${index + 1}`}
                  className="w-full h-full aspect-square rounded-lg object-cover transition-all duration-300 transform group-hover:scale-110"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeImage}
        >
          <motion.div
            className="relative bg-white rounded-lg p-4 w-4/5"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside
          >
           

            {/* Image */}
            <div className="relative">
              <img
                src={selectedImage}
                alt="تصویر بزرگ"
                className="max-w-full max-h-[70vh] object-contain rounded-lg"
              />

               {/* Close Button */}
            <div className="absolute top-2 right-2 z-60">
              <button onClick={closeImage} className="text-white bg-black rounded-full p-2">
                <X className="w-6 h-6" />
              </button>
            </div>

              {/* Left and Right Navigation */}
              <div className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer hover:bg-gray-700 p-2 rounded-full" onClick={() => changeImage('left')}>
                <ArrowLeft className="w-8 h-8 text-white" />
              </div>
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer hover:bg-gray-700 p-2 rounded-full" onClick={() => changeImage('right')}>
                <ArrowRight className="w-8 h-8 text-white" />
              </div>
            </div>
          </motion.div>
        </div>
      )}


        {/* یادگیری‌ها */}
        {/* <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mb-8"
        >
          <div className="flex items-center gap-4 mb-8 justify-end">
            <h2 className="text-4xl">یادگیری‌ها</h2>
            <div className="w-16 h-16 bg-[#1F1BF5]/10 rounded-2xl flex items-center justify-center">
              <GraduationCap className="w-8 h-8 text-[#1F1BF5]" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#1F1BF5] to-[#1F1BF5]/80 rounded-3xl p-8 text-white">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-5xl">🎓</div>
              <h3 className="text-3xl">تجربه‌ای همه‌جانبه</h3>
            </div>
            <p className="text-xl leading-relaxed text-right mb-6">
              این پروژه برای من مثل یه مدرسه بود؛ همه‌چیز رو در عمل یاد گرفتم.
            </p>
            <div className="bg-white/10 rounded-2xl p-6">
              <p className="text-xl leading-relaxed text-right">
                از همون اول با چالش‌های واقعی روبرو شدم و مجبور شدم یاد بگیرم چطور تصمیم‌هام در طراحی روی کل تیم اثر می‌ذاره.
              </p>
            </div>
          </div>
        </motion.section> */}
      </div>
    </div>
  );
}
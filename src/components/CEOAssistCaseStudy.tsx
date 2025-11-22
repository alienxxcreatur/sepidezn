import { motion } from 'motion/react';
import { ArrowRight, MessageSquare, Brain, Globe, Palette, Layers, Zap, Users, Target, Ticket, Home, CheckCircle2, Sparkles, FileText } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CEOAssistCaseStudyProps {
  onBack: () => void;
}

export function CEOAssistCaseStudy({ onBack }: CEOAssistCaseStudyProps) {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Header */}
      <div className="relative bg-[#1F1BF5] text-white overflow-hidden">
        {/* Back Button */}
        <div className="absolute top-8 left-8 z-20">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-6 py-3 bg-white text-neutral-900 rounded-full hover:bg-neutral-100 transition-colors"
          >
            <ArrowRight className="w-5 h-5" />
            <span>Back</span>
          </button>
        </div>

        {/* Image Container */}
        <div className="relative h-[500px] flex items-center justify-center p-12 pt-24">
          <div className="relative max-w-4xl w-full">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGFzc2lzdGFudCUyMGFpfGVufDF8fHx8MTc2MjcyMTY1MHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="CEO Assist"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        {/* Project Overview Box */}
        <div className="relative -mt-16 px-12 pb-12 z-10">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 shadow-2xl">
            <h2 className="text-2xl text-center text-neutral-900 mb-6">Project Overview</h2>
            <div className="text-right">
              <p className="text-xl text-neutral-700 leading-relaxed mb-4">
                <span className="text-[#1F1BF5]">CEO Assist</span> یک اپلیکیشن چت‌بات هوش مصنوعی است که با داده‌های تخصصی بیزینسی تقویت شده و به دو گروه اصلی کاربر—یادگیرندگان بیزینس و صاحبان کسب‌وکار—کمک می‌کند تا تصمیمات بهتری بگیرند.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed">
                این پروژه با هدف ایجاد تجربه‌ای ساده برای تصمیم‌گیری‌های پیچیده طراحی شده است. اپلیکیشن به‌صورت دوزبانه با استفاده از Figma Variables طراحی شد و شامل صفحه اصلی هوشمند، سیستم چت، و بخش تیکتینگ می‌باشد.
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
          <div className="flex items-center gap-4 mb-8 justify-end">
            <h2 className="text-4xl">معرفی پروژه</h2>
            <div className="w-16 h-16 bg-[#1F1BF5]/10 rounded-2xl flex items-center justify-center">
              <Brain className="w-8 h-8 text-[#1F1BF5]" />
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-[#1F1BF5]/5 to-[#1F1BF5]/10 rounded-3xl p-8 border-r-4 border-[#1F1BF5]">
            <p className="text-xl text-neutral-700 leading-relaxed text-right mb-6">
              توی این پروژه مسئول طراحی یه اپلیکیشن چت‌بات هوش مصنوعی بودم که با <span className="text-[#1F1BF5]">داده‌های تخصصی بیزینسی</span> تقویت شده بود تا به دو گروه اصلی کاربر—کسایی که دارن بیزینس یاد می‌گیرن یا خودشون کسب‌وکار دارن—کمک کنه راحت‌تر مسیرشونو پیدا کنن یا تصمیم بگیرن.
            </p>
            
            <div className="bg-white/70 rounded-2xl p-6 mb-6">
              <div className="flex items-start gap-3 justify-end">
                <p className="text-lg text-neutral-800 text-right flex-1 leading-relaxed">
                  هرچند فلو کلی اپلیکیشن خیلی پیچیده نبود، اما طراحی تجربه‌ای که <span className="text-[#1F1BF5]">هم ساده باشه، هم هوشمند و کاربردی</span>، برام یه چالش جدی بود.
                </p>
                <Target className="w-8 h-8 text-[#1F1BF5] flex-shrink-0 mt-1" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/70 rounded-2xl p-6">
                <div className="flex items-center gap-3 justify-end mb-3">
                  <h3 className="text-lg">دوزبانه بودن</h3>
                  <Globe className="w-6 h-6 text-[#1F1BF5]" />
                </div>
                <p className="text-neutral-700 text-right leading-relaxed">
                  اپلیکیشن به‌صورت دوزبانه طراحی شد
                </p>
              </div>

              <div className="bg-white/70 rounded-2xl p-6">
                <div className="flex items-center gap-3 justify-end mb-3">
                  <h3 className="text-lg">رنگ‌تم اختصاصی</h3>
                  <Palette className="w-6 h-6 text-[#1F1BF5]" />
                </div>
                <p className="text-neutral-700 text-right leading-relaxed">
                  برای هر زبان رنگ‌تم جداگانه با Figma Variables
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* بخش‌های اپلیکیشن */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8 justify-end">
            <h2 className="text-4xl">بخش‌های اپلیکیشن</h2>
            <div className="w-16 h-16 bg-[#1F1BF5]/10 rounded-2xl flex items-center justify-center">
              <Layers className="w-8 h-8 text-[#1F1BF5]" />
            </div>
          </div>

          <div className="space-y-6">
            {/* صفحه اصلی */}
            <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-lg">
              <div className="flex items-start gap-4 justify-end">
                <div className="text-right flex-1">
                  <h3 className="text-2xl mb-4 text-[#1F1BF5]">صفحه اصلی هوشمند</h3>
                  <p className="text-lg text-neutral-700 leading-relaxed">
                    یه صفحه اصلی که براساس <span className="text-[#1F1BF5]">اطلاعات و رفتار کاربر</span>، یه سری Quick Action هدفمند بهش پیشنهاد می‌داد
                  </p>
                </div>
                <div className="bg-[#1F1BF5] rounded-2xl w-14 h-14 flex items-center justify-center flex-shrink-0">
                  <Home className="w-7 h-7 text-white" />
                </div>
              </div>
            </div>

            {/* چت اصلی */}
            <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-lg">
              <div className="flex items-start gap-4 justify-end">
                <div className="text-right flex-1">
                  <h3 className="text-2xl mb-4 text-[#1F1BF5]">چت و تاریخچه</h3>
                  <p className="text-lg text-neutral-700 leading-relaxed">
                    صفحه چت اصلی و تاریخچه گفتگوها
                  </p>
                </div>
                <div className="bg-[#1F1BF5] rounded-2xl w-14 h-14 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-7 h-7 text-white" />
                </div>
              </div>
            </div>

            {/* تیکت */}
            <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-lg">
              <div className="flex items-start gap-4 justify-end">
                <div className="text-right flex-1">
                  <h3 className="text-2xl mb-4 text-[#1F1BF5]">سیستم تیکتینگ</h3>
                  <p className="text-lg text-neutral-700 leading-relaxed">
                    بخش ایجاد تیکت برای مشکلات و درخواست‌ها
                  </p>
                </div>
                <div className="bg-[#1F1BF5] rounded-2xl w-14 h-14 flex items-center justify-center flex-shrink-0">
                  <Ticket className="w-7 h-7 text-white" />
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* گروه‌های کاربری */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8 justify-end">
            <h2 className="text-4xl">گروه‌های کاربری</h2>
            <div className="w-16 h-16 bg-[#1F1BF5]/10 rounded-2xl flex items-center justify-center">
              <Users className="w-8 h-8 text-[#1F1BF5]" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-[#1F1BF5]/5 to-blue-50 rounded-3xl p-8 border-r-4 border-[#1F1BF5]">
              <div className="flex items-center gap-3 justify-end mb-6">
                <h3 className="text-2xl text-[#1F1BF5]">یادگیرندگان بیزینس</h3>
                <Users className="w-8 h-8 text-[#1F1BF5]" />
              </div>
              <p className="text-lg text-neutral-700 text-right leading-relaxed">
                کسایی که دارن بیزینس یاد می‌گیرن و به دنبال راهنمایی و اطلاعات تخصصی هستند
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border-r-4 border-green-500">
              <div className="flex items-center gap-3 justify-end mb-6">
                <h3 className="text-2xl text-green-900">صاحبان کسب‌وکار</h3>
                <Target className="w-8 h-8 text-green-600" />
              </div>
              <p className="text-lg text-neutral-700 text-right leading-relaxed">
                کسانی که خودشون کسب‌وکار دارن و برای تصمیم‌گیری‌های بهتر نیاز به مشاوره دارند
              </p>
            </div>
          </div>
        </motion.section>

        {/* طراحی دوزبانه */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8 justify-end">
            <h2 className="text-4xl">سیستم طراحی دوزبانه</h2>
            <div className="w-16 h-16 bg-[#1F1BF5]/10 rounded-2xl flex items-center justify-center">
              <Palette className="w-8 h-8 text-[#1F1BF5]" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#1F1BF5]/5 to-purple-50 rounded-3xl p-8 border-r-4 border-[#1F1BF5]">
            <div className="flex items-center gap-3 justify-end mb-6">
              <h3 className="text-2xl text-[#1F1BF5]">Figma Variables</h3>
              <Sparkles className="w-8 h-8 text-[#1F1BF5]" />
            </div>
            
            <p className="text-xl text-neutral-700 leading-relaxed text-right mb-6">
              برای هر زبان یه رنگ‌تم اختصاصی در نظر گرفتیم که با <span className="text-[#1F1BF5]">variable های فیگما</span> مدیریت شد و توی ساختار طراحی کلی لحاظ شده بود.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/70 rounded-2xl p-6">
                <h4 className="text-lg mb-3 text-[#1F1BF5] text-right">مدیریت متمرکز</h4>
                <p className="text-neutral-700 text-right leading-relaxed">
                  استفاده از Variables برای کنترل راحت‌تر تم‌ها
                </p>
              </div>
              
              <div className="bg-white/70 rounded-2xl p-6">
                <h4 className="text-lg mb-3 text-[#1F1BF5] text-right">یکپارچگی طراحی</h4>
                <p className="text-neutral-700 text-right leading-relaxed">
                  حفظ انسجام در تمامی بخش‌های اپلیکیشن
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* لندینگ پیج */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8 justify-end">
            <h2 className="text-4xl">طراحی لندینگ‌پیج</h2>
            <div className="w-16 h-16 bg-[#1F1BF5]/10 rounded-2xl flex items-center justify-center">
              <FileText className="w-8 h-8 text-[#1F1BF5]" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border-r-4 border-purple-500">
            <p className="text-xl text-neutral-700 leading-relaxed text-right mb-6">
              طراحی لندینگ‌پیج‌های این محصول هم با من بود؛ جایی که باید <span className="text-purple-700">ترکیب دقیقی از جذابیت بصری و محتوای هوشمندانه</span> ارائه می‌دادیم تا بتونیم کاربر رو قانع کنیم وارد اپلیکیشن بشه.
            </p>
            
            <div className="bg-white/70 rounded-2xl p-6">
              <div className="flex items-start gap-3 justify-end">
                <p className="text-lg text-neutral-800 text-right flex-1 leading-relaxed">
                  برای همین به تمام کامپوننت‌ها با دقت فکر شد و هر بخش با هدف مشخصی طراحی و مستندسازی شد.
                </p>
                <CheckCircle2 className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
              </div>
            </div>
          </div>

          <div className="mt-6 aspect-video bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-3xl border-2 border-dashed border-neutral-300 flex items-center justify-center">
            <div className="text-center text-neutral-400">
              <FileText className="w-16 h-16 mx-auto mb-4" />
              <p className="text-2xl mb-2">لندینگ‌پیج</p>
              <p className="text-lg">صفحات معرفی محصول</p>
            </div>
          </div>
        </motion.section>

        {/* ویژگی‌های کلیدی */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8 justify-end">
            <h2 className="text-4xl">ویژگی‌های کلیدی</h2>
            <div className="w-16 h-16 bg-[#1F1BF5]/10 rounded-2xl flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-[#1F1BF5]" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-lg">
              <div className="flex items-center gap-3 justify-end mb-4">
                <h3 className="text-xl text-[#1F1BF5]">ساده و کاربردی</h3>
                <Zap className="w-7 h-7 text-[#1F1BF5]" />
              </div>
              <p className="text-lg text-neutral-700 text-right leading-relaxed">
                تجربه ساده برای تصمیم‌گیری‌های پیچیده
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-lg">
              <div className="flex items-center gap-3 justify-end mb-4">
                <h3 className="text-xl text-[#1F1BF5]">هوش مصنوعی</h3>
                <Brain className="w-7 h-7 text-[#1F1BF5]" />
              </div>
              <p className="text-lg text-neutral-700 text-right leading-relaxed">
                تقویت شده با داده‌های تخصصی بیزینسی
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-lg">
              <div className="flex items-center gap-3 justify-end mb-4">
                <h3 className="text-xl text-[#1F1BF5]">دوزبانه</h3>
                <Globe className="w-7 h-7 text-[#1F1BF5]" />
              </div>
              <p className="text-lg text-neutral-700 text-right leading-relaxed">
                پشتیبانی کامل از دو زبان با تم‌های مجزا
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-lg">
              <div className="flex items-center gap-3 justify-end mb-4">
                <h3 className="text-xl text-[#1F1BF5]">Quick Actions</h3>
                <Zap className="w-7 h-7 text-[#1F1BF5]" />
              </div>
              <p className="text-lg text-neutral-700 text-right leading-relaxed">
                پیشنهادات هوشمند بر اساس رفتار کاربر
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-lg">
              <div className="flex items-center gap-3 justify-end mb-4">
                <h3 className="text-xl text-[#1F1BF5]">تاریخچه چت</h3>
                <MessageSquare className="w-7 h-7 text-[#1F1BF5]" />
              </div>
              <p className="text-lg text-neutral-700 text-right leading-relaxed">
                دسترسی آسان به گفتگوهای قبلی
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-lg">
              <div className="flex items-center gap-3 justify-end mb-4">
                <h3 className="text-xl text-[#1F1BF5]">پشتیبانی تیکتی</h3>
                <Ticket className="w-7 h-7 text-[#1F1BF5]" />
              </div>
              <p className="text-lg text-neutral-700 text-right leading-relaxed">
                سیستم تیکتینگ برای حل مشکلات
              </p>
            </div>
          </div>
        </motion.section>

        {/* چالش طراحی */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8 justify-end">
            <h2 className="text-4xl">چالش طراحی</h2>
            <div className="w-16 h-16 bg-[#1F1BF5]/10 rounded-2xl flex items-center justify-center">
              <Target className="w-8 h-8 text-[#1F1BF5]" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8 border-r-4 border-orange-500">
            <p className="text-2xl text-orange-900 text-right mb-6 leading-relaxed">
              چطور می‌توانستیم یک تجربه ساده و روان ایجاد کنیم که در عین حال به‌اندازه کافی هوشمند و کاربردی باشد؟
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/70 rounded-2xl p-6">
                <h4 className="text-lg mb-3 text-orange-800 text-right">سادگی</h4>
                <p className="text-neutral-700 text-right leading-relaxed">
                  فلو ساده و قابل فهم برای همه کاربران
                </p>
              </div>
              
              <div className="bg-white/70 rounded-2xl p-6">
                <h4 className="text-lg mb-3 text-orange-800 text-right">هوشمندی</h4>
                <p className="text-neutral-700 text-right leading-relaxed">
                  پیشنهادات دقیق بر اساس رفتار و نیاز کاربر
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* نتیجه */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="mb-8"
        >
          <div className="bg-gradient-to-br from-[#1F1BF5] to-[#1F1BF5]/80 rounded-3xl p-8 text-white">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-5xl">🎯</div>
              <h3 className="text-3xl">نتیجه طراحی</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-3 justify-end mb-3">
                  <h4 className="text-xl">تجربه یکپارچه</h4>
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <p className="text-lg leading-relaxed text-right text-white/90">
                  سیستم طراحی جامع و منسجم
                </p>
              </div>
              <div className="bg-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-3 justify-end mb-3">
                  <h4 className="text-xl">دوزبانه کامل</h4>
                  <Globe className="w-6 h-6" />
                </div>
                <p className="text-lg leading-relaxed text-right text-white/90">
                  پشتیبانی از دو زبان با تم‌های اختصاصی
                </p>
              </div>
              <div className="bg-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-3 justify-end mb-3">
                  <h4 className="text-xl">ساده و هوشمند</h4>
                  <Brain className="w-6 h-6" />
                </div>
                <p className="text-lg leading-relaxed text-right text-white/90">
                  ترکیب سادگی و هوش مصنوعی پیشرفته
                </p>
              </div>
              <div className="bg-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-3 justify-end mb-3">
                  <h4 className="text-xl">کاربرپسند</h4>
                  <Users className="w-6 h-6" />
                </div>
                <p className="text-lg leading-relaxed text-right text-white/90">
                  مناسب برای دو گروه مختلف کاربری
                </p>
              </div>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="mt-8 aspect-video bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-3xl border-2 border-dashed border-neutral-300 flex items-center justify-center">
            <div className="text-center text-neutral-400">
              <div className="flex items-center justify-center gap-4 mb-4">
                <MessageSquare className="w-12 h-12" />
                <Brain className="w-12 h-12" />
                <Globe className="w-12 h-12" />
              </div>
              <p className="text-2xl mb-2">نمایش اپلیکیشن</p>
              <p className="text-lg">رابط کاربری و صفحات مختلف</p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
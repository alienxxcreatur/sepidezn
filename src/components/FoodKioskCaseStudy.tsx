import { motion } from 'motion/react';
import { ArrowRight, UtensilsCrossed, Clock, Users, Target, Heart, MessageCircle, Ear, Eye, Hand, AlertCircle, Zap, CheckCircle2, Layers, FileText, Sparkles, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface FoodKioskCaseStudyProps {
  onBack: () => void;
}

export function FoodKioskCaseStudy({ onBack }: FoodKioskCaseStudyProps) {
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
              src="https://images.unsplash.com/photo-1613652038578-a9a988b54a60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwb3JkZXJpbmclMjBraW9za3xlbnwxfHx8fDE3NjI3MDc4NDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="کیوسک سفارش‌دهی غذا"
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
                <span className="text-[#1F1BF5]">کیوسک سفارش‌دهی غذا</span> یک سیستم خودکار سفارش‌گیری برای رستوران‌ها است که با هدف ساده‌سازی فرآیند سفارش‌دهی و کاهش زمان انتظار مشتریان طراحی شده است.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed">
                این پروژه چالش‌هایی همچون پیچیدگی در ثبت سفارش، زمان‌بر بودن خدمات در ساعات شلوغ، و نمایش ناکارآمد اطلاعات را با طراحی رابط کاربری ساده، بهینه‌سازی جریان کار، و تطبیق‌پذیری برای ساعات شلوغی حل می‌کند.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto p-8 md:p-12">
        {/* تعریف مشکل */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8 justify-end">
            <h2 className="text-4xl">تعریف مشکل</h2>
            <div className="w-16 h-16 bg-[#1F1BF5]/10 rounded-2xl flex items-center justify-center">
              <AlertCircle className="w-8 h-8 text-[#1F1BF5]" />
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-[#1F1BF5]/5 to-[#1F1BF5]/10 rounded-3xl p-8 border-r-4 border-[#1F1BF5]">
            <p className="text-xl text-neutral-700 leading-relaxed text-right mb-6">
              در بسیاری از رستوران‌ها، فرآیند سفارش‌دهی و پرداخت با چالش‌هایی همچون <span className="text-[#1F1BF5]">پیچیدگی در ثبت سفارش</span>، <span className="text-[#1F1BF5]">زمان‌بر بودن خدمات</span> در ساعات شلوغ، و <span className="text-[#1F1BF5]">نمایش ناکارآمد اطلاعات</span> همراه است.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/70 rounded-2xl p-6">
                <div className="flex items-start gap-3 justify-end">
                  <div className="text-right flex-1">
                    <p className="text-lg text-neutral-700 leading-relaxed">
                      مشتریان اغلب به دلیل منوهای پیچیده یا مراحل طولانی در ثبت سفارش دچار سردرگمی می‌شوند، به‌ویژه کسانی که تجربه کمی از کار با سیستم‌های دیجیتال دارند.
                    </p>
                  </div>
                  <Users className="w-8 h-8 text-[#1F1BF5] flex-shrink-0 mt-1" />
                </div>
              </div>

              <div className="bg-white/70 rounded-2xl p-6">
                <div className="flex items-start gap-3 justify-end">
                  <div className="text-right flex-1">
                    <p className="text-lg text-neutral-700 leading-relaxed">
                      این مشکلات در ساعات اوج مراجعه تشدید می‌شود و صف‌های طولانی باعث کاهش سرعت خدمات‌رسانی و افزایش نارضایتی می‌شود.
                    </p>
                  </div>
                  <Clock className="w-8 h-8 text-[#1F1BF5] flex-shrink-0 mt-1" />
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* چالش‌ها */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8 justify-end">
            <h2 className="text-4xl">چالش‌ها</h2>
            <div className="w-16 h-16 bg-[#1F1BF5]/10 rounded-2xl flex items-center justify-center">
              <Target className="w-8 h-8 text-[#1F1BF5]" />
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-lg">
              <div className="flex items-start gap-4 justify-end">
                <div className="text-right flex-1">
                  <h3 className="text-2xl mb-3 text-[#1F1BF5]">سادگی در عین جامعیت</h3>
                  <p className="text-lg text-neutral-700 leading-relaxed">
                    ایجاد یک طراحی که هم ساده باشد و هم تمام نیازهای کاربران را پوشش دهد.
                  </p>
                </div>
                <div className="bg-[#1F1BF5] rounded-2xl w-14 h-14 flex items-center justify-center flex-shrink-0">
                  <Layers className="w-7 h-7 text-white" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-lg">
              <div className="flex items-start gap-4 justify-end">
                <div className="text-right flex-1">
                  <h3 className="text-2xl mb-3 text-[#1F1BF5]">سفارشی‌سازی برای انواع رستوران‌ها</h3>
                  <p className="text-lg text-neutral-700 leading-relaxed">
                    هر رستوران ممکن است منوها و نیازهای متفاوتی داشته باشد. طراحی سیستمی که بتواند به‌راحتی برای رستوران‌های کوچک و بزرگ قابل تنظیم باشد.
                  </p>
                </div>
                <div className="bg-[#1F1BF5] rounded-2xl w-14 h-14 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-lg">
              <div className="flex items-start gap-4 justify-end">
                <div className="text-right flex-1">
                  <h3 className="text-2xl mb-3 text-[#1F1BF5]">حفظ سرعت و کارایی در زمان شلوغی</h3>
                  <p className="text-lg text-neutral-700 leading-relaxed">
                    کیوسک باید در شرایط شلوغی رستوران به‌گونه‌ای عمل کند که سفارش‌دهی برای مشتریان سریع باشد و مشکلی ایجاد نشود.
                  </p>
                </div>
                <div className="bg-[#1F1BF5] rounded-2xl w-14 h-14 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-7 h-7 text-white" />
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* راه‌حل‌ها */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8 justify-end">
            <h2 className="text-4xl">راه‌حل‌ها</h2>
            <div className="w-16 h-16 bg-[#1F1BF5]/10 rounded-2xl flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8 text-[#1F1BF5]" />
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#1F1BF5]/5 to-blue-50 rounded-3xl p-8 border-r-4 border-[#1F1BF5]">
              <div className="flex items-center gap-3 justify-end mb-4">
                <h3 className="text-2xl text-[#1F1BF5]">طراحی رابط کاربری ساده و کاربرپسند</h3>
                <UtensilsCrossed className="w-8 h-8 text-[#1F1BF5]" />
              </div>
              <p className="text-lg text-neutral-700 text-right leading-relaxed mb-4">
                رابط کاربری کیوسک به‌گونه‌ای طراحی شده است که مشتریان بتوانند با <span className="text-[#1F1BF5]">حداقل تعداد لمس صفحه</span>، سفارش خود را ثبت کنند.
              </p>
              <div className="bg-white/70 rounded-2xl p-6">
                <p className="text-lg text-neutral-800 text-right leading-relaxed">
                  تمامی اطلاعات کلیدی از جمله جزئیات سبد خرید، کل هزینه، دسته‌بندی‌های منو و آیتم‌ها در صفحه اصلی نمایش داده می‌شوند. این طراحی باعث کاهش سردرگمی کاربران و ساده‌سازی فرآیند سفارش‌دهی می‌شود.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border-r-4 border-green-500">
              <div className="flex items-center gap-3 justify-end mb-4">
                <h3 className="text-2xl text-green-900">بهینه‌سازی جریان کار برای سرعت بیشتر</h3>
                <Zap className="w-8 h-8 text-green-600" />
              </div>
              <p className="text-lg text-neutral-700 text-right leading-relaxed mb-4">
                جریان کاری کیوسک به‌گونه‌ای طراحی شده که سرعت ثبت سفارش افزایش یابد. <span className="text-green-700">مراحل غیرضروری حذف شده</span> و سیستم به‌صورت خودکار اقداماتی مانند نمایش جزئیات سبد خرید و محاسبه کل هزینه را انجام می‌دهد.
              </p>
              <div className="bg-white/70 rounded-2xl p-6">
                <p className="text-lg text-neutral-800 text-right leading-relaxed">
                  همچنین، دسته‌بندی‌های منو و آیتم‌ها به‌صورت سازمان‌یافته نمایش داده می‌شوند تا دسترسی سریع‌تری فراهم شود.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border-r-4 border-purple-500">
              <div className="flex items-center gap-3 justify-end mb-4">
                <h3 className="text-2xl text-purple-900">تطبیق‌پذیری برای ساعات شلوغی</h3>
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <p className="text-lg text-neutral-700 text-right leading-relaxed mb-4">
                سیستم به‌گونه‌ای طراحی شده است که در ساعات اوج مراجعه، سفارش‌ها به‌صورت سریع و بدون اختلال پردازش شوند.
              </p>
              <div className="bg-white/70 rounded-2xl p-6">
                <p className="text-lg text-neutral-800 text-right leading-relaxed">
                  طراحی فرآیندها به‌گونه‌ای است که از تداخل سفارش‌ها جلوگیری شود و مشتریان بتوانند بدون انتظار طولانی، سفارش خود را ثبت کنند.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* پرسونا */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8 justify-end">
            <h2 className="text-4xl">پرسونا</h2>
            <div className="w-16 h-16 bg-[#1F1BF5]/10 rounded-2xl flex items-center justify-center">
              <Users className="w-8 h-8 text-[#1F1BF5]" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#1F1BF5]/5 to-neutral-100 rounded-3xl p-8">
            <div className="flex items-center gap-6 mb-8 justify-end">
              <div className="text-right">
                <h3 className="text-3xl mb-2 text-[#1F1BF5]">علی حسینی</h3>
                <p className="text-xl text-neutral-600">کارمند اداری</p>
              </div>
              <div className="w-24 h-24 bg-[#1F1BF5] rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="w-12 h-12 text-white" />
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-2xl p-6 text-right">
                <p className="text-sm text-neutral-500 mb-2">سن</p>
                <p className="text-xl">۳۵ سال</p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 text-right">
                <p className="text-sm text-neutral-500 mb-2">وضعیت تأهل</p>
                <p className="text-lg">متأهل، دارای دو فرزند</p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 text-right">
                <p className="text-sm text-neutral-500 mb-2">محل سکونت</p>
                <p className="text-xl">تهران</p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 text-right">
                <p className="text-sm text-neutral-500 mb-2">تجربه تکنولوژی</p>
                <p className="text-xl">متوسط</p>
              </div>
            </div>

            <div className="bg-white/70 rounded-2xl p-6 mb-6">
              <p className="text-lg text-neutral-700 text-right leading-relaxed">
                علی معمولاً به رستوران‌های شلوغ می‌رود و به سرعت می‌خواهد سفارش خود را ثبت کند تا بتواند وقت بیشتری را با خانواده‌اش بگذراند. به‌طور کلی با تکنولوژی آشنا است و از گوشی هوشمند، پرداخت آنلاین و اپلیکیشن‌های مختلف استفاده می‌کند.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-white rounded-2xl p-4 text-center">
                <p className="text-lg text-neutral-700">محتاط در تکنولوژی</p>
              </div>
              <div className="bg-white rounded-2xl p-4 text-center">
                <p className="text-lg text-neutral-700">نیاز به استقلال</p>
              </div>
              <div className="bg-white rounded-2xl p-4 text-center">
                <p className="text-lg text-neutral-700">پرمشغله</p>
              </div>
              <div className="bg-white rounded-2xl p-4 text-center">
                <p className="text-lg text-neutral-700">توجه به جزئیات</p>
              </div>
            </div>
          </div>

          {/* Goals, Motivations, Pain Points */}
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-lg">
              <div className="flex items-center gap-3 justify-end mb-6">
                <h3 className="text-2xl text-[#1F1BF5]">اهداف</h3>
                <Target className="w-8 h-8 text-[#1F1BF5]" />
              </div>
              <ul className="space-y-3 text-right">
                <li className="flex items-start gap-2 justify-end">
                  <span className="text-lg text-neutral-700">صرفه‌جویی در زمان سفارش‌دهی</span>
                  <CheckCircle2 className="w-5 h-5 text-[#1F1BF5] flex-shrink-0 mt-1" />
                </li>
                <li className="flex items-start gap-2 justify-end">
                  <span className="text-lg text-neutral-700">دریافت اطلاعات دقیق در مورد هزینه‌ها</span>
                  <CheckCircle2 className="w-5 h-5 text-[#1F1BF5] flex-shrink-0 mt-1" />
                </li>
                <li className="flex items-start gap-2 justify-end">
                  <span className="text-lg text-neutral-700">ثبت سفارش بدون نیاز به کمک</span>
                  <CheckCircle2 className="w-5 h-5 text-[#1F1BF5] flex-shrink-0 mt-1" />
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-lg">
              <div className="flex items-center gap-3 justify-end mb-6">
                <h3 className="text-2xl text-[#1F1BF5]">انگیزه‌ها</h3>
                <Heart className="w-8 h-8 text-[#1F1BF5]" />
              </div>
              <ul className="space-y-3 text-right">
                <li className="flex items-start gap-2 justify-end">
                  <span className="text-lg text-neutral-700">سرعت و راحتی در فرآیند سفارش</span>
                  <Zap className="w-5 h-5 text-[#1F1BF5] flex-shrink-0 mt-1" />
                </li>
                <li className="flex items-start gap-2 justify-end">
                  <span className="text-lg text-neutral-700">کنترل بیشتر روی انتخاب‌ها</span>
                  <Zap className="w-5 h-5 text-[#1F1BF5] flex-shrink-0 mt-1" />
                </li>
                <li className="flex items-start gap-2 justify-end">
                  <span className="text-lg text-neutral-700">صرفه‌جویی در زمان</span>
                  <Zap className="w-5 h-5 text-[#1F1BF5] flex-shrink-0 mt-1" />
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-lg">
              <div className="flex items-center gap-3 justify-end mb-6">
                <h3 className="text-2xl text-[#1F1BF5]">نقاط درد</h3>
                <AlertCircle className="w-8 h-8 text-[#1F1BF5]" />
              </div>
              <ul className="space-y-3 text-right">
                <li className="flex items-start gap-2 justify-end">
                  <span className="text-lg text-neutral-700">سردرگمی در منوهای پیچیده</span>
                  <AlertCircle className="w-5 h-5 text-[#1F1BF5] flex-shrink-0 mt-1" />
                </li>
                <li className="flex items-start gap-2 justify-end">
                  <span className="text-lg text-neutral-700">لمس‌های متعدد برای سفارش</span>
                  <AlertCircle className="w-5 h-5 text-[#1F1BF5] flex-shrink-0 mt-1" />
                </li>
                <li className="flex items-start gap-2 justify-end">
                  <span className="text-lg text-neutral-700">طولانی بودن زمان پردازش</span>
                  <AlertCircle className="w-5 h-5 text-[#1F1BF5] flex-shrink-0 mt-1" />
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Empathy Map */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8 justify-end">
            <h2 className="text-4xl">نقشه همدلی</h2>
            <div className="w-16 h-16 bg-[#1F1BF5]/10 rounded-2xl flex items-center justify-center">
              <Heart className="w-8 h-8 text-[#1F1BF5]" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-[#1F1BF5]/5 rounded-3xl p-8">
              <div className="flex items-center gap-3 justify-end mb-6">
                <h3 className="text-2xl text-[#1F1BF5]">می‌گوید</h3>
                <MessageCircle className="w-8 h-8 text-[#1F1BF5]" />
              </div>
              <div className="space-y-3">
                <div className="bg-white rounded-2xl p-4">
                  <p className="text-lg text-neutral-700 text-right">"من دوست دارم سریع سفارش بدهم."</p>
                </div>
                <div className="bg-white rounded-2xl p-4">
                  <p className="text-lg text-neutral-700 text-right">"چرا مراحل سفارش اینقدر پیچیده است؟"</p>
                </div>
                <div className="bg-white rounded-2xl p-4">
                  <p className="text-lg text-neutral-700 text-right">"چطور می‌توانم کل هزینه‌ها را سریع مشاهده کنم؟"</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8">
              <div className="flex items-center gap-3 justify-end mb-6">
                <h3 className="text-2xl text-green-900">می‌شنود</h3>
                <Ear className="w-8 h-8 text-green-600" />
              </div>
              <div className="space-y-3">
                <div className="bg-white rounded-2xl p-4">
                  <p className="text-lg text-neutral-700 text-right">"کیوسک‌های جدید ثبت سفارش را سریعتر انجام می‌دهند."</p>
                </div>
                <div className="bg-white rounded-2xl p-4">
                  <p className="text-lg text-neutral-700 text-right">"در کیوسک‌ها همه چیز راحت قابل مشاهده است."</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8">
              <div className="flex items-center gap-3 justify-end mb-6">
                <h3 className="text-2xl text-purple-900">انجام می‌دهد</h3>
                <Hand className="w-8 h-8 text-purple-600" />
              </div>
              <div className="space-y-3">
                <div className="bg-white rounded-2xl p-4">
                  <p className="text-lg text-neutral-700 text-right">فرآیند سفارش را سریع و بدون پیچیدگی انجام می‌دهد</p>
                </div>
                <div className="bg-white rounded-2xl p-4">
                  <p className="text-lg text-neutral-700 text-right">در مواقع شلوغی به دنبال روش‌های تسریع است</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8">
              <div className="flex items-center gap-3 justify-end mb-6">
                <h3 className="text-2xl text-orange-900">احساس می‌کند</h3>
                <Heart className="w-8 h-8 text-orange-600" />
              </div>
              <div className="space-y-3">
                <div className="bg-white rounded-2xl p-4">
                  <p className="text-lg text-neutral-700 text-right">احساس ناامیدی در صورت پیچیدگی سیستم</p>
                </div>
                <div className="bg-white rounded-2xl p-4">
                  <p className="text-lg text-neutral-700 text-right">احساس اطمینان زمانی که اطلاعات واضح است</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Information Architecture & User Flow */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mb-16"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-4 mb-6 justify-end">
                <h2 className="text-3xl">معماری اطلاعات</h2>
                <Layers className="w-8 h-8 text-[#1F1BF5]" />
              </div>
              <div className="aspect-video bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-3xl border-2 border-dashed border-neutral-300 flex items-center justify-center">
                <div className="text-center text-neutral-400">
                  <Layers className="w-12 h-12 mx-auto mb-4" />
                  <p className="text-xl">Information Architecture</p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-6 justify-end">
                <h2 className="text-3xl">جریان کاربر</h2>
                <TrendingUp className="w-8 h-8 text-[#1F1BF5]" />
              </div>
              <div className="aspect-video bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-3xl border-2 border-dashed border-neutral-300 flex items-center justify-center">
                <div className="text-center text-neutral-400">
                  <TrendingUp className="w-12 h-12 mx-auto mb-4" />
                  <p className="text-xl">User Flow</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Wireframes */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8 justify-end">
            <h2 className="text-4xl">وایرفریم‌ها</h2>
            <div className="w-16 h-16 bg-[#1F1BF5]/10 rounded-2xl flex items-center justify-center">
              <FileText className="w-8 h-8 text-[#1F1BF5]" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#1F1BF5]/5 to-neutral-100 rounded-3xl p-8 mb-6">
            <p className="text-xl text-neutral-700 text-right leading-relaxed">
              این وایرفریم‌ها با طراحی نهایی تفاوت دارند. در طول فرآیند طراحی به دلیل نیازهای جدید و آزمایشاتی که انجام دادیم تغییراتی ایجاد شد. این تغییرات برای <span className="text-[#1F1BF5]">بهبود تجربه کاربری</span> و <span className="text-[#1F1BF5]">هم‌راستا شدن با نیازهای پروژه</span> و کاربران بود.
            </p>
          </div>

          <div className="aspect-video bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-3xl border-2 border-dashed border-neutral-300 flex items-center justify-center">
            <div className="text-center text-neutral-400">
              <FileText className="w-16 h-16 mx-auto mb-4" />
              <p className="text-2xl mb-2">Wireframes</p>
              <p className="text-lg">نمایش اولیه طراحی‌ها قبل از نهایی‌سازی</p>
            </div>
          </div>
        </motion.section>

        {/* تحقیقات منو */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8 justify-end">
            <h2 className="text-4xl">تحقیقات طراحی منو</h2>
            <div className="w-16 h-16 bg-[#1F1BF5]/10 rounded-2xl flex items-center justify-center">
              <UtensilsCrossed className="w-8 h-8 text-[#1F1BF5]" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#1F1BF5]/5 to-purple-50 rounded-3xl p-8 border-r-4 border-[#1F1BF5] mb-6">
            <p className="text-xl text-neutral-700 leading-relaxed text-right mb-6">
              برای طراحی منوی کیوسک با بهترین تجربه کاربری، ما تحقیقات گسترده‌ای روی منوهای رستوران‌ها و کافه‌های مختلف انجام دادیم.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white/70 rounded-2xl p-6">
                <h4 className="text-lg mb-3 text-[#1F1BF5] text-right">دسته‌بندی‌ها</h4>
                <p className="text-neutral-700 text-right leading-relaxed">
                  بررسی انواع دسته‌بندی و ساختار منو
                </p>
              </div>
              
              <div className="bg-white/70 rounded-2xl p-6">
                <h4 className="text-lg mb-3 text-[#1F1BF5] text-right">تعداد آیتم‌ها</h4>
                <p className="text-neutral-700 text-right leading-relaxed">
                  تعداد بهینه آیتم‌ها در هر دسته
                </p>
              </div>
              
              <div className="bg-white/70 rounded-2xl p-6">
                <h4 className="text-lg mb-3 text-[#1F1BF5] text-right">نحوه چینش</h4>
                <p className="text-neutral-700 text-right leading-relaxed">
                  بهترین شیوه نمایش و دسترسی
                </p>
              </div>
            </div>

            <div className="bg-white/70 rounded-2xl p-6">
              <p className="text-lg text-neutral-800 text-right leading-relaxed">
                این فرآیند به ما این امکان را داد تا منوی کیوسک را به شکلی طراحی کنیم که کاربران با <span className="text-[#1F1BF5]">کمترین تلاش و زمان</span>، بتوانند به راحتی آیتم‌های مورد نظر خود را پیدا کنند.
              </p>
            </div>
          </div>

          <div className="aspect-video bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-3xl border-2 border-dashed border-neutral-300 flex items-center justify-center">
            <div className="text-center text-neutral-400">
              <UtensilsCrossed className="w-16 h-16 mx-auto mb-4" />
              <p className="text-2xl mb-2">تحقیقات منو</p>
              <p className="text-lg">تحلیل منوهای رستوران‌های مختلف</p>
            </div>
          </div>
        </motion.section>

        {/* Final Designs */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="mb-8"
        >
          <div className="flex items-center gap-4 mb-8 justify-end">
            <h2 className="text-4xl">طراحی‌های نهایی</h2>
            <div className="w-16 h-16 bg-[#1F1BF5]/10 rounded-2xl flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-[#1F1BF5]" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#1F1BF5]/5 to-blue-50 rounded-3xl p-8 border-r-4 border-[#1F1BF5] mb-6">
            <p className="text-xl text-neutral-700 leading-relaxed text-right mb-6">
              برای اینکه طراحی کیوسک مناسب هر نوع رستورانی باشد، <span className="text-[#1F1BF5]">صفحات نخست متفاوتی</span> طراحی شده است تا یکپارچگی و زیبایی حفظ شود.
            </p>
            
            <div className="bg-white/70 rounded-2xl p-6">
              <p className="text-lg text-neutral-800 text-right leading-relaxed">
                این صفحات به هر رستوران امکان می‌دهند که متناسب با هویت برند خود شخصی‌سازی کنند. همچنین یک صفحه عمومی برای تمامی رستوران‌ها طراحی شده که امکانات کیوسک را به‌طور ساده و کاربرپسند ارائه می‌دهد.
              </p>
            </div>
          </div>

          <div className="aspect-video bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-3xl border-2 border-dashed border-neutral-300 flex items-center justify-center mb-8">
            <div className="text-center text-neutral-400">
              <Sparkles className="w-16 h-16 mx-auto mb-4" />
              <p className="text-2xl mb-2">طراحی‌های نهایی</p>
              <p className="text-lg">صفحات نخست سفارشی برای رستوران‌های مختلف</p>
            </div>
          </div>

          {/* نتیجه */}
          <div className="bg-gradient-to-br from-[#1F1BF5] to-[#1F1BF5]/80 rounded-3xl p-8 text-white">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-5xl">✨</div>
              <h3 className="text-3xl">نتایج طراحی</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-3 justify-end mb-3">
                  <h4 className="text-xl">کاهش زمان سفارش</h4>
                  <Zap className="w-6 h-6" />
                </div>
                <p className="text-lg leading-relaxed text-right text-white/90">
                  سفارش‌دهی با کمترین تعداد لمس صفحه
                </p>
              </div>
              <div className="bg-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-3 justify-end mb-3">
                  <h4 className="text-xl">افزایش رضایت</h4>
                  <Heart className="w-6 h-6" />
                </div>
                <p className="text-lg leading-relaxed text-right text-white/90">
                  تجربه ساده و قابل فهم برای همه کاربران
                </p>
              </div>
              <div className="bg-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-3 justify-end mb-3">
                  <h4 className="text-xl">سفارشی‌سازی آسان</h4>
                  <Sparkles className="w-6 h-6" />
                </div>
                <p className="text-lg leading-relaxed text-right text-white/90">
                  قابلیت تنظیم برای هر نوع رستورانی
                </p>
              </div>
              <div className="bg-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-3 justify-end mb-3">
                  <h4 className="text-xl">کارایی بالا</h4>
                  <TrendingUp className="w-6 h-6" />
                </div>
                <p className="text-lg leading-relaxed text-right text-white/90">
                  عملکرد سریع در ساعات شلوغی
                </p>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
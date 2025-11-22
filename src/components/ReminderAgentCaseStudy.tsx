import { motion } from 'motion/react';
import { ArrowRight, Target, Users, Lightbulb, MessageSquare, Clock, Zap, AlertCircle, Bot, Mic, Type, TrendingUp, Heart, Brain, Search, User, Home, Briefcase, GraduationCap, MapPin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ReminderAgentCaseStudyProps {
  onBack: () => void;
}

export function ReminderAgentCaseStudy({ onBack }: ReminderAgentCaseStudyProps) {
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
          <div className="relative max-w-4xl w-full">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMGNoYXRib3QlMjBhc3Npc3RhbnR8ZW58MXx8fHwxNzYyNzIxNjUwfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="چت‌بات هوش مصنوعی"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        {/* Project Overview Box */}
        <div className="relative -mt-16 px-12 pb-12 z-10">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 shadow-2xl">
            <h2 className="text-2xl text-center text-neutral-900 mb-6">بررسی اجمالی پروژه</h2>
            <div className="text-right">
              <p className="text-xl text-neutral-700 leading-relaxed mb-4">
                <span className="text-[#1F1BF5]">چت‌بات هوش مصنوعی</span> یک دستیار هوشمند برای مدیریت داشبورد کسب‌وکار است که با استفاده از تکنولوژی‌های پیشرفته هوش مصنوعی طراحی شده است.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed">
                این پروژه با هدف کمک به کاربران در مدیریت بهتر کسب‌وکار و افزایش بهره‌وری از طریق دستیار صوتی و متنی طراحی شده است. چالش اصلی طراحی تجربه‌ای ساده و طبیعی برای تعامل با هوش مصنوعی بود.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto p-8 md:p-12">
        {/* معرفی */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8 justify-end">
            <h2 className="text-4xl">معرفی محصول</h2>
            <div className="w-16 h-16 bg-[#1F1BF5]/10 rounded-2xl flex items-center justify-center">
              <Bot className="w-8 h-8 text-[#1F1BF5]" />
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-[#1F1BF5]/5 to-[#1F1BF5]/10 rounded-3xl p-8 border-r-4 border-[#1F1BF5]">
            <p className="text-xl text-neutral-700 leading-relaxed text-right mb-6">
              چت‌باتی مبتنی بر هوش مصنوعی که به صاحبان کسب‌وکارها کمک می‌کند تا به‌راحتی کارهای خود را در داشبورد انجام دهند. از طریق دستورات ساده صوتی یا متنی، کاربران می‌توانند وظایف را مدیریت کنند، به اطلاعات دسترسی داشته باشند و بدون پیچیدگی رابط‌های کاربری، اقدامات مورد نظر خود را انجام دهند.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/70 rounded-2xl p-6">
                <div className="flex items-center gap-3 justify-end mb-3">
                  <h3 className="text-lg">دستورات صوتی</h3>
                  <div className="w-12 h-12 bg-[#1F1BF5]/10 rounded-xl flex items-center justify-center">
                    <Mic className="w-6 h-6 text-[#1F1BF5]" />
                  </div>
                </div>
                <p className="text-neutral-600 text-right leading-relaxed">
                  امکان مدیریت وظایف از طریق گفتار طبیعی
                </p>
              </div>

              <div className="bg-white/70 rounded-2xl p-6">
                <div className="flex items-center gap-3 justify-end mb-3">
                  <h3 className="text-lg">دستورات متنی</h3>
                  <div className="w-12 h-12 bg-[#1F1BF5]/10 rounded-xl flex items-center justify-center">
                    <Type className="w-6 h-6 text-[#1F1BF5]" />
                  </div>
                </div>
                <p className="text-neutral-600 text-right leading-relaxed">
                  ارتباط ساده و سریع از طریق متن
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* شرح مساله */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8 justify-end">
            <h2 className="text-4xl">شرح مسئله</h2>
            <div className="w-16 h-16 bg-[#1F1BF5]/10 rounded-2xl flex items-center justify-center">
              <Target className="w-8 h-8 text-[#1F1BF5]" />
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 border-r-4 border-red-500">
            <p className="text-2xl text-neutral-800 leading-relaxed text-right mb-4">
              صاحبان کسب‌وکار معمولاً داشبوردها را پیچیده و وقت‌گیر می‌یابند.
            </p>
            <p className="text-xl text-neutral-700 leading-relaxed text-right">
              این امر منجر به احساس ناامیدی می‌شود و آن‌ها را از تمرکز بر کسب‌وکارشان باز می‌دارد.
            </p>
          </div>
        </motion.section>

        {/* اهداف کلی */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8 justify-end">
            <h2 className="text-4xl">اهداف کلی</h2>
            <div className="w-16 h-16 bg-[#1F1BF5]/10 rounded-2xl flex items-center justify-center">
              <Lightbulb className="w-8 h-8 text-[#1F1BF5]" />
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-[#1F1BF5]/5 to-blue-50 rounded-3xl p-8">
            <p className="text-xl text-neutral-700 leading-relaxed text-right mb-8">
              این چت‌بات هدف دارد راهی ساده برای تعامل کاربران با داشبوردها از طریق دستورات صوتی یا متنی فراهم کند. این ابزار به کاربران کمک می‌کند تا وظایف خود را سریع‌تر انجام دهند، از سردرگمی جلوگیری کرده و بهره‌وری را بهبود ببخشند.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 border-r-4 border-[#1F1BF5]">
                <div className="flex items-start gap-3 justify-end">
                  <p className="text-lg text-neutral-700 text-right flex-1 leading-relaxed">
                    زمان و بار کاری را در مقایسه با جستجوی دستی کاهش می‌دهد
                  </p>
                  <Clock className="w-6 h-6 text-[#1F1BF5] flex-shrink-0 mt-1" />
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border-r-4 border-[#1F1BF5]">
                <div className="flex items-start gap-3 justify-end">
                  <p className="text-lg text-neutral-700 text-right flex-1 leading-relaxed">
                    مناسب برای کاربران غیر فنی بدون نیاز به درک ساختار داشبورد
                  </p>
                  <Users className="w-6 h-6 text-[#1F1BF5] flex-shrink-0 mt-1" />
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border-r-4 border-[#1F1BF5]">
                <div className="flex items-start gap-3 justify-end">
                  <p className="text-lg text-neutral-700 text-right flex-1 leading-relaxed">
                    افزایش اعتماد از طریق شفافیت و مدیریت خطا
                  </p>
                  <TrendingUp className="w-6 h-6 text-[#1F1BF5] flex-shrink-0 mt-1" />
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border-r-4 border-[#1F1BF5]">
                <div className="flex items-start gap-3 justify-end">
                  <p className="text-lg text-neutral-700 text-right flex-1 leading-relaxed">
                    صرفه‌جویی در زمان با خودکارسازی وظایف تکراری
                  </p>
                  <Zap className="w-6 h-6 text-[#1F1BF5] flex-shrink-0 mt-1" />
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* چالش‌ها */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8 justify-end">
            <h2 className="text-4xl">چالش‌های کاربران</h2>
            <div className="w-16 h-16 bg-[#1F1BF5]/10 rounded-2xl flex items-center justify-center">
              <AlertCircle className="w-8 h-8 text-[#1F1BF5]" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* چالش 1 */}
            <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-lg">
              <div className="flex items-start gap-4 justify-end mb-4">
                <div className="text-right flex-1">
                  <h3 className="text-xl mb-3 text-[#1F1BF5]">پیمایش پیچیده</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    کاربران اغلب در پیدا کردن قابلیت‌ها یا بخش‌های مناسب در داشبورد به دلیل طراحی پیچیده آن دچار مشکل می‌شوند.
                  </p>
                </div>
                <div className="bg-[#1F1BF5] rounded-2xl w-14 h-14 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl">۱</span>
                </div>
              </div>
            </div>

            {/* چالش 2 */}
            <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-lg">
              <div className="flex items-start gap-4 justify-end mb-4">
                <div className="text-right flex-1">
                  <h3 className="text-xl mb-3 text-[#1F1BF5]">وظایف زمان‌بر</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    انجام دستی وظایف روتین یا تکراری ممکن است ناکارآمد و برای کاربران خسته‌کننده باشد.
                  </p>
                </div>
                <div className="bg-[#1F1BF5] rounded-2xl w-14 h-14 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl">۲</span>
                </div>
              </div>
            </div>

            {/* چالش 3 */}
            <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-lg">
              <div className="flex items-start gap-4 justify-end mb-4">
                <div className="text-right flex-1">
                  <h3 className="text-xl mb-3 text-[#1F1BF5]">موانع فنی</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    کاربران غیر فنی ممکن است به دلیل ساختار داشبورد دچار سردرگمی شده و با خطاها یا تأخیرهای مکرر روبه‌رو شوند.
                  </p>
                </div>
                <div className="bg-[#1F1BF5] rounded-2xl w-14 h-14 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl">۳</span>
                </div>
              </div>
            </div>

            {/* چالش 4 */}
            <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-lg">
              <div className="flex items-start gap-4 justify-end mb-4">
                <div className="text-right flex-1">
                  <h3 className="text-xl mb-3 text-[#1F1BF5]">بار کاری زیاد</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    کاربران ممکن است با مدیریت همزمان وظایف متعدد بدون راهنمایی شفاف احساس فشار کنند.
                  </p>
                </div>
                <div className="bg-[#1F1BF5] rounded-2xl w-14 h-14 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl">۴</span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* پرسونای کاربر */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8 justify-end">
            <h2 className="text-4xl">پرسونای کاربر</h2>
            <div className="w-16 h-16 bg-[#1F1BF5]/10 rounded-2xl flex items-center justify-center">
              <User className="w-8 h-8 text-[#1F1BF5]" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#1F1BF5]/5 to-purple-50 rounded-3xl p-8 border-r-4 border-[#1F1BF5]">
            <div className="mb-8">
              <p className="text-lg text-neutral-700 leading-relaxed text-right">
                برای دستیابی به درک جامع از نیازها و دغدغه‌های کاربران، تحقیقات اولیه و ثانویه انجام شد. این رویکرد فراگیر مشارکت‌کنندگانی با پیشینه‌های متنوع را در بر گرفته است.
              </p>
            </div>

            {/* کارت پرسونا */}
            <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-lg mb-6">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                {/* تصویر و نام */}
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-[#1F1BF5] to-[#1F1BF5]/80 rounded-full flex items-center justify-center text-white text-5xl mb-4">
                    👨‍💼
                  </div>
                  <h3 className="text-2xl mb-2">علی حسینی</h3>
                  <p className="text-neutral-600">صاحب کسب‌وکار کوچک</p>
                </div>

                {/* اطلاعات شخصی - ستون 1 */}
                <div className="space-y-4 text-right">
                  <div>
                    <div className="flex items-center gap-2 justify-end mb-2">
                      <span className="text-sm text-neutral-500">سن</span>
                      <User className="w-4 h-4 text-[#1F1BF5]" />
                    </div>
                    <p className="text-xl">۴۲ سال</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 justify-end mb-2">
                      <span className="text-sm text-neutral-500">خانواده</span>
                      <Home className="w-4 h-4 text-[#1F1BF5]" />
                    </div>
                    <p className="text-xl">متاهل دارای ۲ فرزند</p>
                  </div>
                </div>

                {/* اطلاعات شخصی - ستون 2 */}
                <div className="space-y-4 text-right">
                  <div>
                    <div className="flex items-center gap-2 justify-end mb-2">
                      <span className="text-sm text-neutral-500">تحصیلات</span>
                      <GraduationCap className="w-4 h-4 text-[#1F1BF5]" />
                    </div>
                    <p className="text-xl">لیسانس مدیریت</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 justify-end mb-2">
                      <span className="text-sm text-neutral-500">محل زندگی</span>
                      <MapPin className="w-4 h-4 text-[#1F1BF5]" />
                    </div>
                    <p className="text-xl">تهران</p>
                  </div>
                </div>
              </div>

              {/* توضیحات */}
              <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-2xl p-6">
                <p className="text-lg text-neutral-700 leading-relaxed text-right">
                  علی مالک یک کسب‌وکار کوچک اما در حال رشد در حوزه سلامت است. او در کمک به مراجعان برای دستیابی به تعادل بهتر بین کار و زندگی و بهبود سلامت روانی تخصص دارد. با وجود علاقه به کارش، <span className="text-[#1F1BF5]">مدیریت بخش‌های کسب‌وکار مانند مدیریت کاربران، پیگیری مالی و به‌روزرسانی خدمات</span> برای او چالش‌برانگیز و پراسترس است.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* نقشه همدلی */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8 justify-end">
            <h2 className="text-4xl">نقشه همدلی با کاربر</h2>
            <div className="w-16 h-16 bg-[#1F1BF5]/10 rounded-2xl flex items-center justify-center">
              <Heart className="w-8 h-8 text-[#1F1BF5]" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* فکر می‌کند */}
            <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-lg">
              <div className="flex items-center gap-3 justify-end mb-6">
                <h3 className="text-2xl text-[#1F1BF5]">فکر می‌کند</h3>
                <div className="w-14 h-14 bg-[#1F1BF5]/10 rounded-xl flex items-center justify-center">
                  <Brain className="w-7 h-7 text-[#1F1BF5]" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-4">
                  <p className="text-neutral-700 text-right leading-relaxed">
                    💭 کاش کسی بود که تمام این کارهای اداری را برای من انجام می‌داد
                  </p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-4">
                  <p className="text-neutral-700 text-right leading-relaxed">
                    💭 اگر در داشبورد اشتباه کنم، آیا اطلاعات کسب‌وکارم به مشکل می‌خورد؟
                  </p>
                </div>
              </div>
            </div>

            {/* احساس می‌کند */}
            <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-lg">
              <div className="flex items-center gap-3 justify-end mb-6">
                <h3 className="text-2xl text-[#1F1BF5]">احساس می‌کند</h3>
                <div className="w-14 h-14 bg-[#1F1BF5]/10 rounded-xl flex items-center justify-center">
                  <Heart className="w-7 h-7 text-[#1F1BF5]" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-4">
                  <p className="text-neutral-700 text-right leading-relaxed">
                    😔 احساس ناامیدی وقتی نمی‌تواند سریع چیزی را که نیاز دارد پیدا کند
                  </p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-4">
                  <p className="text-neutral-700 text-right leading-relaxed">
                    😰 احساس فشار زمانی که با گزینه‌ها و دکمه‌های متعدد روبه‌رو می‌شود
                  </p>
                </div>
              </div>
            </div>

            {/* انجام می‌دهد */}
            <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-lg">
              <div className="flex items-center gap-3 justify-end mb-6">
                <h3 className="text-2xl text-[#1F1BF5]">انجام می‌دهد</h3>
                <div className="w-14 h-14 bg-[#1F1BF5]/10 rounded-xl flex items-center justify-center">
                  <Search className="w-7 h-7 text-[#1F1BF5]" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-4">
                  <p className="text-neutral-700 text-right leading-relaxed">
                    🖱️ به امید پیدا کردن گزینه صحیح به صورت تصادفی روی گزینه‌ها کلیک می‌کند
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-4">
                  <p className="text-neutral-700 text-right leading-relaxed">
                    🤝 از اعضای تیم کمک می‌گیرد یا در اینترنت جستجو می‌کند
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-4">
                  <p className="text-neutral-700 text-right leading-relaxed">
                    ⏰ منصرف می‌شود و تصمیم می‌گیرد بعداً برگردد اما اغلب فراموش می‌کند
                  </p>
                </div>
              </div>
            </div>

            {/* می‌گوید */}
            <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-lg">
              <div className="flex items-center gap-3 justify-end mb-6">
                <h3 className="text-2xl text-[#1F1BF5]">می‌گوید</h3>
                <div className="w-14 h-14 bg-[#1F1BF5]/10 rounded-xl flex items-center justify-center">
                  <MessageSquare className="w-7 h-7 text-[#1F1BF5]" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-4">
                  <p className="text-neutral-700 text-right leading-relaxed">
                    💬 "کاش می‌توانستم به سیستم بگویم چه کاری انجام دهد"
                  </p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-4">
                  <p className="text-neutral-700 text-right leading-relaxed">
                    💬 "چرا این کار این‌قدر مراحل دارد؟ باید آسان‌تر باشد"
                  </p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-4">
                  <p className="text-neutral-700 text-right leading-relaxed">
                    💬 "همیشه فراموش می‌کنم این تنظیم کجاست"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* جمع‌بندی */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mb-8"
        >
          <div className="bg-gradient-to-br from-[#1F1BF5] to-[#1F1BF5]/80 rounded-3xl p-8 text-white">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-5xl">✨</div>
              <h2 className="text-3xl">راه‌حل طراحی‌شده</h2>
            </div>
            <p className="text-xl leading-relaxed text-right mb-6">
              با درک عمیق از چالش‌های علی و کاربران مشابه، چت‌بات هوش مصنوعی طراحی شد که:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-2xl p-6">
                <p className="text-lg leading-relaxed text-right">
                  🎯 به‌جای پیمایش در منوها، کافیست بگوید یا بنویسد چه کاری نیاز دارد
                </p>
              </div>
              <div className="bg-white/10 rounded-2xl p-6">
                <p className="text-lg leading-relaxed text-right">
                  ⚡ وظایف تکراری را به‌صورت خودکار انجام می‌دهد
                </p>
              </div>
              <div className="bg-white/10 rounded-2xl p-6">
                <p className="text-lg leading-relaxed text-right">
                  🛡️ با راهنمایی واضح، احتمال خطا را کاهش می‌دهد
                </p>
              </div>
              <div className="bg-white/10 rounded-2xl p-6">
                <p className="text-lg leading-relaxed text-right">
                  💡 بدون نیاز به یادآوری محل تنظیمات، همه چیز در دسترس است
                </p>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
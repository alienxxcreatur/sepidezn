import { motion } from 'motion/react';
import { ArrowRight, Target, Users, TrendingUp, CheckCircle2, AlertCircle, DollarSign, Calendar, CreditCard, ChevronRight, Sparkles, Clock, Shield } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface BarpardazCaseStudyProps {
  onBack: () => void;
}

export function BarpardazCaseStudy({ onBack }: BarpardazCaseStudyProps) {
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
              src="https://images.unsplash.com/photo-1621470777049-006c9b58119a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWF2eSUyMG1hY2hpbmVyeSUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjI3MjE2NTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="بارپرداز"
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
                <span className="text-[#1F1BF5]">بارپرداز</span> یک اپلیکیشن فین‌تک است که برای خرید تجهیزات و قطعات ماشین‌های سنگین طراحی شده است.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed">
                رانندگان و مالکان ماشین‌های سنگین می‌توانند با شرایط اعتباری و اقساطی تجهیزات مورد نیازشان را بدون پرداخت نقدی سنگین تهیه کنند. چالش اصلی طراحی تجربه‌ای بود که در عین سادگی، اعتماد مالی، شفافیت و سهولت تصمیم‌گیری را فراهم کند.
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
          <div className="flex items-center gap-4 mb-6 justify-end">
            <h2 className="text-4xl">معرفی</h2>
            <div className="w-16 h-16 bg-[#1F1BF5]/10 rounded-2xl flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-[#1F1BF5]" />
            </div>
          </div>
          <div className="bg-gradient-to-br from-[#1F1BF5]/5 to-[#1F1BF5]/10 rounded-3xl p-8 border-r-4 border-[#1F1BF5]">
            <p className="text-xl text-neutral-700 leading-relaxed text-right">
              بارپرداز یک اپلیکیشن فین‌تک است که برای خرید تجهیزات و قطعات ماشین‌های سنگین (مثل لاستیک، لوازم مصرفی و قطعات مکانیکی) طراحی شده است. هدف اپلیکیشن این است که رانندگان و مالکان ماشین‌های سنگین بتوانند با شرایط اعتباری و اقساطی تجهیزات مورد نیازشان را بدون پرداخت نقدی سنگین تهیه کنند.
            </p>
            <div className="mt-6 bg-white/50 rounded-2xl p-6">
              <p className="text-lg text-neutral-800 leading-relaxed">
                چالش اصلی ما در این پروژه، طراحی تجربه‌ای بود که در عین سادگی، اعتماد مالی، شفافیت و سهولت تصمیم‌گیری را برای این گروه کاربران فراهم کند.
              </p>
            </div>
          </div>
        </motion.section>

        {/* تعریف مسئله */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6 justify-end">
            <h2 className="text-4xl">تعریف مسئله</h2>
            <div className="w-16 h-16 bg-[#1F1BF5]/10 rounded-2xl flex items-center justify-center">
              <Target className="w-8 h-8 text-[#1F1BF5]" />
            </div>
          </div>
          
          <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-lg mb-6">
            <h3 className="text-2xl mb-6 text-right">مدل اولیه اپلیکیشن:</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 justify-end">
                <p className="text-lg text-neutral-700 text-right flex-1">کاربر پس از ثبت‌نام، ۳۰ میلیون تومان اعتبار رایگان دریافت می‌کرد</p>
                <div className="w-2 h-2 bg-[#1F1BF5] rounded-full mt-3 flex-shrink-0" />
              </div>
              <div className="flex items-start gap-3 justify-end">
                <p className="text-lg text-neutral-700 text-right flex-1">سه پلن اشتراک: ۱۰۰، ۲۰۰ و ۳۰۰ میلیون تومانی با نیاز به پیش‌پرداخت</p>
                <div className="w-2 h-2 bg-[#1F1BF5] rounded-full mt-3 flex-shrink-0" />
              </div>
              <div className="flex items-start gap-3 justify-end">
                <p className="text-lg text-neutral-700 text-right flex-1">خریدها در قالب ۴ قسط سه‌ماهه انجام می‌شد</p>
                <div className="w-2 h-2 bg-[#1F1BF5] rounded-full mt-3 flex-shrink-0" />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 border-r-4 border-red-500">
            <h3 className="text-2xl mb-4 text-right text-red-900">مشکلات کشف‌شده:</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 justify-end">
                <p className="text-lg text-neutral-800 text-right flex-1">پرداخت پیش‌پرداخت برای فعال‌سازی اشتراک برای بسیاری از کاربران خوشایند نبود</p>
                <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
              </div>
              <div className="flex items-start gap-3 justify-end">
                <p className="text-lg text-neutral-800 text-right flex-1">اعتبار اولیه‌ی ۳۰ میلیون تومان عملاً برای خرید واقعی کفایت نمی‌کرد</p>
                <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
              </div>
              <div className="flex items-start gap-3 justify-end">
                <p className="text-lg text-neutral-800 text-right flex-1">فرایند انتخاب بین پلن‌های مختلف گیج‌کننده بود</p>
                <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
              </div>
            </div>
          </div>
        </motion.section>

        {/* شناخت کاربران و تحقیقات */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6 justify-end">
            <h2 className="text-4xl">شناخت کاربران و تحقیقات</h2>
            <div className="w-16 h-16 bg-[#1F1BF5]/10 rounded-2xl flex items-center justify-center">
              <Users className="w-8 h-8 text-[#1F1BF5]" />
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-[#1F1BF5]/5 to-purple-50 rounded-3xl p-8">
            <div className="mb-6">
              <h3 className="text-2xl mb-4 text-right text-[#1F1BF5]">پرسونای اصلی:</h3>
              <p className="text-xl text-neutral-700 leading-relaxed text-right">
                رانندگان و صاحبان ماشین‌های سنگین؛ افرادی که عمدتاً در جاده و سفر هستند، زمان محدودی دارند و عموماً چندان درگیر جزئیات متنی طولانی یا فرایندهای پیچیده نمی‌شوند.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 mb-6">
              <h4 className="text-xl mb-4 text-right">یافته‌های کلیدی از تحقیقات میدانی:</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3 justify-end">
                  <p className="text-lg text-neutral-700 text-right flex-1">اکثر آن‌ها با تلفن هوشمند و اپلیکیشن‌های مالی آشنا هستند</p>
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                </div>
                <div className="flex items-start gap-3 justify-end">
                  <p className="text-lg text-neutral-700 text-right flex-1">مشکل اصلی کمبود زمان و تمرکز برای درگیر شدن با فرایندهای پیچیده بود</p>
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                </div>
                <div className="flex items-start gap-3 justify-end">
                  <p className="text-lg text-neutral-700 text-right flex-1">بخشی از کاربران ترجیح می‌دادند بدون پیش‌پرداخت خرید کنند</p>
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* اهداف طراحی */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6 justify-end">
            <h2 className="text-4xl">اهداف طراحی</h2>
            <div className="w-16 h-16 bg-[#1F1BF5]/10 rounded-2xl flex items-center justify-center">
              <Target className="w-8 h-8 text-[#1F1BF5]" />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8 border border-neutral-200 shadow-lg">
              <div className="flex justify-end mb-4">
                <div className="w-12 h-12 bg-[#1F1BF5] rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-xl mb-3 text-right">افزایش اعتماد مالی</h3>
              <p className="text-neutral-600 leading-relaxed text-right">
                شفاف‌سازی مدل اعتبار و حذف پیش‌پرداخت‌های غیرضروری
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-neutral-200 shadow-lg">
              <div className="flex justify-end mb-4">
                <div className="w-12 h-12 bg-[#1F1BF5] rounded-xl flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-xl mb-3 text-right">افزایش ارزش ادراک‌شده</h3>
              <p className="text-neutral-600 leading-relaxed text-right">
                کاربر بتواند واقعاً با اعتبار اولیه خرید meaningful انجام دهد
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-neutral-200 shadow-lg">
              <div className="flex justify-end mb-4">
                <div className="w-12 h-12 bg-[#1F1BF5] rounded-xl flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-xl mb-3 text-right">ساده‌سازی تصمیم‌گیری</h3>
              <p className="text-neutral-600 leading-relaxed text-right">
                در انتخاب پلن‌ها و روش بازپرداخت
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-neutral-200 shadow-lg">
              <div className="flex justify-end mb-4">
                <div className="w-12 h-12 bg-[#1F1BF5] rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-xl mb-3 text-right">افزایش انعطاف‌پذیری</h3>
              <p className="text-neutral-600 leading-relaxed text-right">
                در بازپرداخت اقساط و مدیریت بدهی‌ها
              </p>
            </div>
          </div>
        </motion.section>

        {/* راه‌حل‌های طراحی - Part 1 */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8 justify-end">
            <h2 className="text-4xl">۱. ری‌دیزاین مدل اعتبار و بازپرداخت</h2>
            <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center">
              <CreditCard className="w-8 h-8 text-green-500" />
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl mb-6 text-right text-[#1F1BF5]">راه‌حل‌های پیاده‌سازی شده:</h3>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border-r-4 border-green-500">
                <div className="flex items-start gap-4 justify-end mb-4">
                  <div className="text-right flex-1">
                    <h4 className="text-2xl mb-3 text-green-900">۱. افزایش اعتبار اولیه</h4>
                    <p className="text-lg text-neutral-700 leading-relaxed">
                      اعتبار رایگان اولیه از <span className="line-through text-red-500">۳۰ میلیون</span> به <span className="text-green-600">۱۰۰ میلیون تومان</span> افزایش یافت تا کاربر از همان ابتدا احساس کند می‌تواند خرید جدی انجام دهد.
                    </p>
                  </div>
                  <div className="bg-green-500 rounded-2xl w-16 h-16 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-2xl">۱</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 border-r-4 border-blue-500">
                <div className="flex items-start gap-4 justify-end mb-4">
                  <div className="text-right flex-1">
                    <h4 className="text-2xl mb-3 text-blue-900">۲. ساده‌سازی ساختار اشتراک‌ها</h4>
                    <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                      سه پلن قبلی با <span className="text-blue-600">یک پن ساده‌تر</span> جایگزین شد:
                    </p>
                    <div className="bg-white/70 rounded-2xl p-6">
                      <p className="text-lg text-neutral-800 leading-relaxed">
                        یک اشتراک ۳۰۰ میلیون تومانی که برای فعال‌سازی آن، کاربر فقط درصدی از همان ۳۰۰ میلیون را پرداخت می‌کند. این کار، تصمیم‌گیری را به‌شدت ساده کرد.
                      </p>
                    </div>
                  </div>
                  <div className="bg-blue-500 rounded-2xl w-16 h-16 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-2xl">۲</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border-r-4 border-purple-500">
                <div className="flex items-start gap-4 justify-end mb-4">
                  <div className="text-right flex-1">
                    <h4 className="text-2xl mb-3 text-purple-900">۳. افزودن مدل بازپرداخت داینامیک</h4>
                    <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                      در کنار مدل چهارقسطی بدون سود، یک مدل بازپرداخت بلندمدت و متغیر اضافه شد:
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 justify-end bg-white/70 rounded-xl p-4">
                        <span className="text-lg text-neutral-800 flex-1 text-right">بدون پیش‌پرداخت</span>
                        <CheckCircle2 className="w-6 h-6 text-purple-500 flex-shrink-0" />
                      </div>
                      <div className="flex items-center gap-3 justify-end bg-white/70 rounded-xl p-4">
                        <span className="text-lg text-neutral-800 flex-1 text-right">امکان انتخاب تعداد اقساط بر اساس توان مالی</span>
                        <CheckCircle2 className="w-6 h-6 text-purple-500 flex-shrink-0" />
                      </div>
                      <div className="flex items-center gap-3 justify-end bg-white/70 rounded-xl p-4">
                        <span className="text-lg text-neutral-800 flex-1 text-right">افزایش سقف مدت بازپرداخت متناسب با مبلغ خرید</span>
                        <CheckCircle2 className="w-6 h-6 text-purple-500 flex-shrink-0" />
                      </div>
                    </div>
                  </div>
                  <div className="bg-purple-500 rounded-2xl w-16 h-16 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-2xl">۳</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* سه صفحه نمایش در یک ردیف با sticky notes */}
          <div className="mb-8">
            <h3 className="text-2xl mb-6 text-right text-neutral-700">نمونه‌های طراحی:</h3>
            <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-3xl p-8">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Screen 1 */}
                <div className="relative">
                  <div className="aspect-[9/16] bg-white rounded-3xl border-2 border-neutral-200 shadow-xl flex items-center justify-center mb-4">
                    <div className="text-center text-neutral-400">
                      <div className="text-4xl mb-2">📱</div>
                      <p className="text-sm">صفحه انتخاب اعتبار</p>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="bg-yellow-100 border-b-4 border-yellow-300 rounded-lg p-4 shadow-lg transform rotate-1">
                      <p className="text-sm text-neutral-800 leading-relaxed text-right">
                        💡 اعتبار ۱۰۰ میلیون تومانی به‌صورت برجسته نمایش داده می‌شود تا کاربر احساس ارزش بیشتری داشته باشد
                      </p>
                    </div>
                  </div>
                </div>

                {/* Screen 2 */}
                <div className="relative">
                  <div className="aspect-[9/16] bg-white rounded-3xl border-2 border-neutral-200 shadow-xl flex items-center justify-center mb-4">
                    <div className="text-center text-neutral-400">
                      <div className="text-4xl mb-2">📱</div>
                      <p className="text-sm">صفحه انتخاب پلن</p>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="bg-blue-100 border-b-4 border-blue-300 rounded-lg p-4 shadow-lg transform -rotate-1">
                      <p className="text-sm text-neutral-800 leading-relaxed text-right">
                        ✨ یک پلن ساده ۳۰۰ میلیونی به‌جای سه پلن مختلف - تصمیم‌گیری راحت‌تر شد
                      </p>
                    </div>
                  </div>
                </div>

                {/* Screen 3 */}
                <div className="relative">
                  <div className="aspect-[9/16] bg-white rounded-3xl border-2 border-neutral-200 shadow-xl flex items-center justify-center mb-4">
                    <div className="text-center text-neutral-400">
                      <div className="text-4xl mb-2">📱</div>
                      <p className="text-sm">انتخاب روش بازپرداخت</p>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="bg-green-100 border-b-4 border-green-300 rounded-lg p-4 shadow-lg transform rotate-2">
                      <p className="text-sm text-neutral-800 leading-relaxed text-right">
                        🎯 دو گزینه واضح: چهارقسطی بدون سود یا بازپرداخت بلندمدت با انعطاف بیشتر
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* راه‌حل‌های طراحی - Part 2 */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8 justify-end">
            <h2 className="text-4xl">۲. ری‌دیزاین مدیریت اقساط</h2>
            <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center">
              <Calendar className="w-8 h-8 text-orange-500" />
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-lg mb-6">
            <h3 className="text-2xl mb-4 text-right text-[#1F1BF5]">مشکلات قبلی:</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 justify-end">
                <p className="text-lg text-neutral-700 text-right flex-1">پرداخت محدود به یک خرید خاص بود</p>
                <AlertCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
              </div>
              <div className="flex items-start gap-3 justify-end">
                <p className="text-lg text-neutral-700 text-right flex-1">طراحی بصری شلوغ و پر از جزئیات غیرضروری</p>
                <AlertCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
              </div>
              <div className="flex items-start gap-3 justify-end">
                <p className="text-lg text-neutral-700 text-right flex-1">عدم هم‌خوانی با مدل جدید بازپرداخت داینامیک</p>
                <AlertCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#1F1BF5]/5 to-blue-50 rounded-3xl p-8">
              <h3 className="text-2xl mb-6 text-right text-[#1F1BF5]">راه‌حل‌های جدید:</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-2xl p-6">
                  <div className="flex items-start gap-4 justify-end">
                    <div className="text-right flex-1">
                      <h4 className="text-xl mb-2">امکان انتخاب اقساط دلخواه</h4>
                      <p className="text-neutral-600 leading-relaxed">
                        کاربر می‌تواند چند قسط از چند خرید مختلف را هم‌زمان انتخاب و پرداخت کند
                      </p>
                    </div>
                    <CheckCircle2 className="w-8 h-8 text-green-500 flex-shrink-0" />
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6">
                  <div className="flex items-start gap-4 justify-end">
                    <div className="text-right flex-1">
                      <h4 className="text-xl mb-2">ساده‌سازی کارت‌های اقساط</h4>
                      <p className="text-neutral-600 leading-relaxed">
                        فقط اطلاعات کلیدی: مبلغ قسط، تاریخ سررسید، وضعیت و نام فروشگاه
                      </p>
                    </div>
                    <CheckCircle2 className="w-8 h-8 text-green-500 flex-shrink-0" />
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6">
                  <div className="flex items-start gap-4 justify-end">
                    <div className="text-right flex-1">
                      <h4 className="text-xl mb-2">ساختار قابل گسترش</h4>
                      <p className="text-neutral-600 leading-relaxed">
                        هر خرید به صورت یک بلاک قابل گسترش برای مدیریت بهتر اقساط
                      </p>
                    </div>
                    <CheckCircle2 className="w-8 h-8 text-green-500 flex-shrink-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* نتایج */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8 justify-end">
            <h2 className="text-4xl">نتایج و تاثیرات</h2>
            <div className="w-16 h-16 bg-[#1F1BF5]/10 rounded-2xl flex items-center justify-center">
              <TrendingUp className="w-8 h-8 text-[#1F1BF5]" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-8 text-white shadow-xl">
              <div className="text-5xl mb-4">۲.۵×</div>
              <p className="text-xl">افزایش نرخ تکمیل خرید</p>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-3xl p-8 text-white shadow-xl">
              <div className="text-5xl mb-4">۴۰٪</div>
              <p className="text-xl">کاهش رها کردن فرایند پرداخت</p>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl p-8 text-white shadow-xl">
              <div className="text-5xl mb-4">+</div>
              <p className="text-xl">بهبود رضایت کاربران</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#1F1BF5]/5 to-purple-50 rounded-3xl p-8 border-r-4 border-[#1F1BF5]">
            <h3 className="text-2xl mb-4 text-right">بازخورد کاربران:</h3>
            <p className="text-xl text-neutral-700 leading-relaxed text-right">
              کاربران در مصاحبه‌ها، تجربه‌ی جدید را <span className="text-[#1F1BF5]">«ساده‌تر»</span>، <span className="text-[#1F1BF5]">«شفاف‌تر»</span> و <span className="text-[#1F1BF5]">«قابل‌اعتمادتر»</span> توصیف کردند. در بخش مدیریت اقساط، احساس می‌کردند کنترل بیشتری روی بدهی‌ها و پرداخت‌ها دارند.
            </p>
          </div>
        </motion.section>

        {/* آموخته‌های کلیدی */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="mb-8"
        >
          <div className="flex items-center gap-4 mb-8 justify-end">
            <h2 className="text-4xl">آموخته‌های کلیدی</h2>
            <div className="w-16 h-16 bg-[#1F1BF5]/10 rounded-2xl flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-[#1F1BF5]" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8 border border-[#1F1BF5]/20 shadow-lg">
              <div className="text-4xl mb-4">🎯</div>
              <p className="text-lg text-neutral-700 leading-relaxed text-right">
                درک رفتار مالی و محدودیت‌های واقعی کاربر مهم‌تر از خود طراحی رابط است
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-[#1F1BF5]/20 shadow-lg">
              <div className="text-4xl mb-4">💡</div>
              <p className="text-lg text-neutral-700 leading-relaxed text-right">
                کاربران همیشه دنبال رایگان بودن نیستند؛ آن‌ها به دنبال پیش‌بینی‌پذیری و کنترل هستند
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-[#1F1BF5]/20 shadow-lg">
              <div className="text-4xl mb-4">🔒</div>
              <p className="text-lg text-neutral-700 leading-relaxed text-right">
                در محصولات فین‌تکی، طراحی باید بر اساس سه اصل باشد: اعتماد، شفافیت و سادگی تصمیم‌گیری
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-[#1F1BF5]/20 shadow-lg">
              <div className="text-4xl mb-4">✨</div>
              <p className="text-lg text-neutral-700 leading-relaxed text-right">
                حتی در یک فلو که به‌نظر فقط «پرداخت» است، طراحی خوب می‌تواند احساس کنترل و آرامش ایجاد کند
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
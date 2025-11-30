import { motion } from "motion/react";
import {
    ArrowRight,
    Target,
    Users,
    TrendingUp,
    CheckCircle2,
    AlertCircle,
    DollarSign,
    Calendar,
    CreditCard,
    ChevronRight,
    Sparkles,
    Clock,
    Shield,
    FileText,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

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
                            src="../../assets/images/casestudy/barpardaz/barpardaz_header.png"
                            alt="بارپرداز"
                            className="w-full h-auto rounded-2xl "
                        />
                    </div>
                </div>

                {/* Project Overview Box */}
                <div className="relative -mt-16 px-12 pb-12 z-10">
                    <div className="max-w-5xl mx-auto bg-white rounded-3xl p-8 pt[64px]">
                        <h2 className="text-2xl text-right text-neutral-900 mb-6">
                            بررسی اجمالی پروژه
                        </h2>
                        <div className="text-right">
                            <p className="text-xl text-neutral-700 leading-relaxed mb-4">
                                <span className="text-[#1F1BF5]">بارپرداز</span>{" "}
                                یک اپلیکیشن فین‌تک است که برای خرید تجهیزات و
                                قطعات ماشین‌های سنگین طراحی شده است.
                            </p>
                            <p className="text-lg text-neutral-600 leading-relaxed">
                                رانندگان و مالکان ماشین‌های سنگین میتوانند با
                                شرایط اعتباری و اقساطی تجهیزات مورد نیازشان را
                                بدون پرداخت نقدی سنگین تهیه کنند.
                            </p>

                            <div className="mt-6 bg-gradient-to-br from-[#1F1BF5]/5 to-[#1F1BF5]/10 rounded-2xl p-6">
                                <p className="text-lg text-neutral-800 leading-relaxed">
                                    چالش اصلی ما در این پروژه، طراحی تجربه‌ای
                                    بود که در عین سادگی، اعتماد مالی، شفافیت و
                                    سهولت تصمیم‌گیری را برای این گروه کاربران
                                    فراهم کند.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-6xl mx-auto p-8 md:p-12">
                {/* معرفی */}

                {/* تعریف مسئله */}
                <motion.section
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-4 mb-6 justify-start">
                        <div className="w-16 h-16 bg-[#1F1BF5]/10 rounded-2xl flex items-center justify-center">
                            <Target className="w-8 h-8 text-[#1F1BF5]" />
                        </div>
                        <h2 className="text-4xl">تعریف مسئله</h2>
                    </div>

                    <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-lg mb-6">
                        <h3 className="text-2xl mb-6 text-right">
                            مدل اولیه اپلیکیشن:
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3 justify-end">
                                <div className="w-2 h-2 bg-[#1F1BF5] rounded-full mt-3 flex-shrink-0" />
                                <p className="text-lg text-neutral-700 text-right flex-1">
                                    کاربر پس از ثبت‌نام، ۳۰ میلیون تومان اعتبار
                                    رایگان دریافت می‌کرد
                                </p>
                            </div>
                            <div className="flex items-start gap-3 justify-end">
                                <div className="w-2 h-2 bg-[#1F1BF5] rounded-full mt-3 flex-shrink-0" />
                                <p className="text-lg text-neutral-700 text-right flex-1">
                                    سه پلن اشتراک: ۱۰۰، ۲۰۰ و ۳۰۰ میلیون تومانی
                                    با نیاز به پیش‌پرداخت
                                </p>
                            </div>
                            <div className="flex items-start gap-3 justify-end">
                                <div className="w-2 h-2 bg-[#1F1BF5] rounded-full mt-3 flex-shrink-0" />
                                <p className="text-lg text-neutral-700 text-right flex-1">
                                    خریدها در قالب ۴ قسط سه‌ماهه انجام می‌شد
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 border-r-4 border-red-500">
                        <h3 className="text-2xl mb-4 text-right text-red-900">
                            مشکلات کشف‌شده:
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3 justify-end">
                                <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                                <p className="text-lg text-neutral-800 text-right flex-1">
                                    پرداخت پیش‌پرداخت برای فعال‌سازی اشتراک برای
                                    بسیاری از کاربران خوشایند نبود
                                </p>
                            </div>
                            <div className="flex items-start gap-3 justify-end">
                                <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                                <p className="text-lg text-neutral-800 text-right flex-1">
                                    اعتبار اولیه‌ی ۳۰ میلیون تومان عملاً برای
                                    خرید واقعی کفایت نمی‌کرد
                                </p>
                            </div>
                            <div className="flex items-start gap-3 justify-end">
                                <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                                <p className="text-lg text-neutral-800 text-right flex-1">
                                    فرایند انتخاب بین پلن‌های مختلف گیج‌کننده
                                    بود
                                </p>
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
                    <div className="flex items-center gap-4 mb-6 justify-start">
                        <div className="w-16 h-16 bg-[#1F1BF5]/10 rounded-2xl flex items-center justify-center">
                            <Users className="w-8 h-8 text-[#1F1BF5]" />
                        </div>
                        <h2 className="text-4xl">شناخت کاربران و تحقیقات</h2>
                    </div>

                    <div className="bg-gradient-to-br from-[#1F1BF5]/5 to-purple-50 rounded-3xl p-8">
                        <div className="mb-6">
                            <h3 className="text-2xl mb-4 text-right text-[#1F1BF5]">
                                پرسونای اصلی:
                            </h3>
                            <p className="text-xl text-neutral-700 leading-relaxed text-right">
                                رانندگان و صاحبان ماشین‌های سنگین؛ افرادی که
                                عمدتاً در جاده و سفر هستند، زمان محدودی دارند و
                                عموماً چندان درگیر جزئیات متنی طولانی یا
                                فرایندهای پیچیده نمی‌شوند.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 mb-6">
                            <h4 className="text-xl mb-4 text-right">
                                یافته‌های کلیدی از تحقیقات میدانی:
                            </h4>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3 justify-end">
                                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                                    <p className="text-lg text-neutral-700 text-right flex-1">
                                        اکثر آن‌ها با تلفن هوشمند و اپلیکیشن‌های
                                        مالی آشنا هستند
                                    </p>
                                </div>
                                <div className="flex items-start gap-3 justify-end">
                                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                                    <p className="text-lg text-neutral-700 text-right flex-1">
                                        مشکل اصلی کمبود زمان و تمرکز برای درگیر
                                        شدن با فرایندهای پیچیده بود
                                    </p>
                                </div>
                                <div className="flex items-start gap-3 justify-end">
                                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                                    <p className="text-lg text-neutral-700 text-right flex-1">
                                        بخشی از کاربران ترجیح می‌دادند بدون
                                        پیش‌پرداخت خرید کنند
                                    </p>
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
                    <div className="flex items-center gap-4 mb-6 justify-start">
                        <div className="w-16 h-16 bg-[#1F1BF5]/10 rounded-2xl flex items-center justify-center">
                            <Target className="w-8 h-8 text-[#1F1BF5]" />
                        </div>
                        <h2 className="text-4xl">اهداف طراحی</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-2xl p-8 border border-neutral-200 shadow-lg">
                            <div className="flex justify-start mb-4">
                                <div className="w-12 h-12 bg-[#1F1BF5] rounded-xl flex items-center justify-center">
                                    <Shield className="w-6 h-6 text-white" />
                                </div>
                            </div>
                            <h3 className="text-xl mb-3 text-right">
                                افزایش اعتماد مالی
                            </h3>
                            <p className="text-neutral-600 leading-relaxed text-right">
                                شفاف‌سازی مدل اعتبار و حذف پیش‌پرداخت‌های
                                غیرضروری
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 border border-neutral-200 shadow-lg">
                            <div className="flex justify-start mb-4">
                                <div className="w-12 h-12 bg-[#1F1BF5] rounded-xl flex items-center justify-center">
                                    <DollarSign className="w-6 h-6 text-white" />
                                </div>
                            </div>
                            <h3 className="text-xl mb-3 text-right">
                                افزایش ارزش ادراک‌شده
                            </h3>
                            <p className="text-neutral-600 leading-relaxed text-right">
                                کاربر بتواند واقعاً با اعتبار اولیه خرید
                                meaningful انجام دهد
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 border border-neutral-200 shadow-lg">
                            <div className="flex justify-start mb-4">
                                <div className="w-12 h-12 bg-[#1F1BF5] rounded-xl flex items-center justify-center">
                                    <CheckCircle2 className="w-6 h-6 text-white" />
                                </div>
                            </div>
                            <h3 className="text-xl mb-3 text-right">
                                ساده‌سازی تصمیم‌گیری
                            </h3>
                            <p className="text-neutral-600 leading-relaxed text-right">
                                در انتخاب پلن‌ها و روش بازپرداخت
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 border border-neutral-200 shadow-lg">
                            <div className="flex justify-start mb-4">
                                <div className="w-12 h-12 bg-[#1F1BF5] rounded-xl flex items-center justify-center">
                                    <Calendar className="w-6 h-6 text-white" />
                                </div>
                            </div>
                            <h3 className="text-xl mb-3 text-right">
                                افزایش انعطاف‌پذیری
                            </h3>
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
                    <div className="flex items-center gap-4 mb-8 justify-start">
                        <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center">
                            <CreditCard className="w-8 h-8 text-green-500" />
                        </div>
                        <h2 className="text-4xl">
                            ری‌دیزاین مدل اعتبار و بازپرداخت
                        </h2>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-2xl mb-6 text-right text-[#1F1BF5]">
                            راه‌حل‌های پیاده‌سازی شده:
                        </h3>

                        <div className="space-y-6">
                            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border-r-4 border-green-500">
                                <div className="flex items-start gap-4 justify-end mb-4">
                                    <div className="bg-green-500 rounded-2xl w-16 h-16 flex items-center justify-center flex-shrink-0">
                                        <span className="text-white text-2xl">
                                            ۱
                                        </span>
                                    </div>
                                    <div className="text-right flex-1">
                                        <h4 className="text-2xl mb-3 text-green-900">
                                            افزایش اعتبار اولیه
                                        </h4>
                                        <p className="text-lg text-neutral-700 leading-relaxed">
                                            اعتبار رایگان اولیه از{" "}
                                            <span className="line-through text-red-500">
                                                ۳۰ میلیون
                                            </span>{" "}
                                            به{" "}
                                            <span className="text-green-600">
                                                ۱۰۰ میلیون تومان
                                            </span>{" "}
                                            افزایش یافت تا کاربر از همان ابتدا
                                            احساس کند می‌تواند خرید جدی انجام
                                            دهد.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 border-r-4 border-blue-500">
                                <div className="flex items-start gap-4 justify-end mb-4">
                                    <div className="bg-blue-500 rounded-2xl w-16 h-16 flex items-center justify-center flex-shrink-0">
                                        <span className="text-white text-2xl">
                                            ۲
                                        </span>
                                    </div>
                                    <div className="text-right flex-1">
                                        <h4 className="text-2xl mb-3 text-blue-900">
                                            ساده‌سازی ساختار اشتراک‌ها
                                        </h4>
                                        <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                                            سه پلن قبلی با{" "}
                                            <span className="text-blue-600">
                                                یک پن ساده‌تر
                                            </span>{" "}
                                            جایگزین شد:
                                        </p>

                                        <div className="bg-white/70 rounded-2xl p-6">
                                            <p className="text-lg text-neutral-800 leading-relaxed">
                                                یک اشتراک ۳۰۰ میلیون تومانی که
                                                برای فعال‌سازی آن، کاربر فقط
                                                درصدی از همان ۳۰۰ میلیون را
                                                پرداخت می‌کند. این کار،
                                                تصمیم‌گیری را به‌شدت ساده کرد.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border-r-4 border-purple-500">
                                <div className="flex items-start gap-4 justify-end mb-4">
                                    <div className="bg-purple-500 rounded-2xl w-16 h-16 flex items-center justify-center flex-shrink-0">
                                        <span className="text-white text-2xl">
                                            ۳
                                        </span>
                                    </div>
                                    <div className="text-right flex-1">
                                        <h4 className="text-2xl mb-3 text-purple-900">
                                            افزودن مدل بازپرداخت داینامیک
                                        </h4>
                                        <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                                            در کنار مدل چهارقسطی بدون سود، یک
                                            مدل بازپرداخت بلندمدت و متغیر اضافه
                                            شد:
                                        </p>
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-3 justify-end bg-white/70 rounded-xl p-4">
                                                <CheckCircle2 className="w-6 h-6 text-purple-500 flex-shrink-0" />
                                                <span className="text-lg text-neutral-800 flex-1 text-right">
                                                    امکان انتخاب تعداد اقساط بر
                                                    اساس توان مالی
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-3 justify-end bg-white/70 rounded-xl p-4">
                                                <CheckCircle2 className="w-6 h-6 text-purple-500 flex-shrink-0" />
                                                <span className="text-lg text-neutral-800 flex-1 text-right">
                                                    افزایش سقف مدت بازپرداخت
                                                    متناسب با مبلغ خرید
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* سه صفحه نمایش در یک ردیف با sticky notes */}
                    <h3 className="text-2xl mb-6 text-right text-red-500">
                        طراحی قبلی :
                    </h3>
                    <div className="installment-old mb-8">
                        <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-3xl p-8 mb-8">
                            <div className="grid md:grid-cols-3 gap-8">
                                {/* Screen 1 */}
                                <div className="relative  items-center justify-center">
                                    <div className="bg-white rounded-3xl border-2 border-neutral-200 shadow-xl mb-4 overflow-hidden flex items-center justify-center">
                                        <ImageWithFallback
                                            src="/assets/images/casestudy/barpardaz/installment/old/Paymentbarcode.png"
                                            alt="صفحه انتخاب اعتبار"
                                            className="w-full h-auto object-contain"
                                        />
                                    </div>
                                    <div className="relative"></div>
                                </div>
                                {/* Screen 2 */}
                                <div className="relative  items-center justify-center">
                                    <div className="bg-white rounded-3xl border-2 border-neutral-200 shadow-xl mb-4 overflow-hidden flex items-center justify-center">
                                        <ImageWithFallback
                                            src="/assets/images/casestudy/barpardaz/installment/old/Purchase.png"
                                            alt="صفحه انتخاب اعتبار"
                                            className="w-full h-auto object-contain"
                                        />
                                    </div>
                                    <div className="relative"></div>
                                </div>
                                {/* Screen 1 */}
                                <div className="relative items-center justify-center">
                                    <div className="bg-white rounded-3xl border-2 border-neutral-200 shadow-xl mb-4 overflow-hidden flex items-center justify-center mb-8">
                                        <ImageWithFallback
                                            src="/assets/images/casestudy/barpardaz/installment/old/succ.png"
                                            alt="صفحه انتخاب اعتبار"
                                            className="w-full h-auto object-contain"
                                        />
                                    </div>
                                    <div className="relative"></div>
                                </div>
                            </div>
                        </div>
                        <h3 className="text-2xl mb-6 text-right text-green-500">
                            طراحی جدید :
                        </h3>
                        <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-3xl p-8 mb-8">
                            <div className="grid md:grid-cols-3 gap-8">
                                {/* Screen 1 */}
                                <div className="relative">
                                    <div className="bg-white rounded-3xl border-2 border-neutral-200 shadow-xl mb-4 overflow-hidden flex items-center justify-center">
                                        <ImageWithFallback
                                            src="/assets/images/casestudy/barpardaz/installment/new/0.png"
                                            alt="صفحه انتخاب اعتبار"
                                            className="w-full h-auto object-contain"
                                        />
                                    </div>
                                    <div className="relative">
                                        <div className="bg-green-100 border-b-4 border-green-300 rounded-lg p-4 shadow-lg transform rotate-2">
                                            <p className="text-sm text-neutral-800 leading-relaxed text-right">
                                                با توجه به اینکه فلو پیچیده‌تر
                                                شد، بهتر بود روند خرید از حالت
                                                مدال خارج شده و فریم اصلی خودش
                                                را داشته باشد. این تغییر به
                                                سهولت در دسترسی به مراحل مختلف
                                                خرید کمک می‌کند.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* Screen 2 */}
                                <div className="relative">
                                    <div className="bg-white rounded-3xl border-2 border-neutral-200 shadow-xl mb-4 overflow-hidden flex items-center justify-center ">
                                        <ImageWithFallback
                                            src="/assets/images/casestudy/barpardaz/installment/new/3.png"
                                            alt="صفحه انتخاب اعتبار"
                                            className="w-full h-auto object-contain"
                                        />
                                    </div>
                                    <div className="relative">
                                        <div className="bg-yellow-100 border-b-4 border-yellow-300 rounded-lg p-4 shadow-lg transform rotate-1">
                                            <p className="text-sm text-neutral-800 leading-relaxed text-right">
                                                در طراحی کارت انتخاب اقساط تلاش
                                                شده است تا ضمن حفظ قابلیت
                                                انتخاب‌پذیری (Selectable)، امکان
                                                ارائه‌ی یک نگاه کلی از تفاوت
                                                میان دو روش بازپرداخت به کاربر
                                                فراهم شود.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Screen 3 */}
                                <div className="relative">
                                    <div className="bg-white rounded-3xl border-2 border-neutral-200 shadow-xl mb-4 overflow-hidden flex items-center justify-center">
                                        <ImageWithFallback
                                            src="/assets/images/casestudy/barpardaz/installment/new/3b.png"
                                            alt="صفحه انتخاب اعتبار"
                                            className="w-full h-auto object-contain"
                                        />
                                    </div>
                                    <div className="relative">
                                        <div className="bg-blue-100 border-b-4 border-blue-300 rounded-lg p-4 shadow-lg transform -rotate-1">
                                            <p className="text-sm text-neutral-800 leading-relaxed text-right">
                                                هدف ما از طراحی این کامپوننت
                                                اسلایدر این بوده است که به
                                                کاربر، هم‌زمان با نمایش محدودیت
                                                موجود در انتخاب مدت بازپرداخت،
                                                این موضوع را نیز منتقل کنیم که
                                                در صورت نبود این محدودیت و در
                                                صورتی که مبلغ خرید بیشتر بود،
                                                امکان بازپرداخت تا ۱۲ ماه وجود
                                                داشت. به این ترتیب کاربر دچار
                                                سردرگمی نمی‌شود زمانی که روی
                                                کارت می‌خواند «اقساط ۱ تا ۱۲
                                                ماهه» اما عدد ۱۲ را در اسلایدر
                                                مشاهده نمی‌کند و دلیل آن برایش
                                                روشن نیست.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-3xl p-8 mb-8">
                            <h3 className="text-2xl mb-6 text-right text-neutral-700">
                                {/* طراحی جدید : */}
                            </h3>
                            <div className="grid md:grid-cols-3 gap-8">
                                {/* Screen 1 */}
                                <div className="relative">
                                    <div className="bg-white rounded-3xl border-2 border-neutral-200 shadow-xl mb-4 overflow-hidden flex items-center justify-center">
                                        <ImageWithFallback
                                            src="/assets/images/casestudy/barpardaz/installment/new/7.png"
                                            alt="صفحه انتخاب اعتبار"
                                            className="w-full h-auto object-contain"
                                        />
                                    </div>
                                    <div className="relative">
                                        <div className="bg-green-100 border-b-4 border-green-300 rounded-lg p-4 shadow-lg transform rotate-2">
                                            <p className="text-sm text-neutral-800 leading-relaxed text-right">
                                                بازپرداخت بلندمدت در آینده
                                                می‌تواند به‌عنوان روش اصلی ما
                                                مورد استفاده قرار گیرد؛ از
                                                این‌رو تصمیم گرفته‌ایم هیچ‌گونه
                                                محدودیتی در انتخاب آن اعمال
                                                نشود؛ نه از بابت مبلغ خرید و نه
                                                از بابت کمبود اعتبار.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* Screen 2 */}
                                <div className="relative">
                                    <div className="bg-white rounded-3xl border-2 border-neutral-200 shadow-xl mb-4 overflow-hidden flex items-center justify-center">
                                        <ImageWithFallback
                                            src="/assets/images/casestudy/barpardaz/installment/new/6.png"
                                            alt="صفحه انتخاب اعتبار"
                                            className="w-full h-auto object-contain"
                                        />
                                    </div>
                                    <div className="relative">
                                        <div className="bg-yellow-100 border-b-4 border-yellow-300 rounded-lg p-4 shadow-lg transform rotate-1">
                                            <p className="text-sm text-neutral-800 leading-relaxed text-right">
                                                کمبود اعتبار باید در همان لحظه
                                                توسط کاربر پرداخت شود تا خرید
                                                ثبت گردد، و این اطلاعات در صفحه
                                                لیست اقساط به کاربر نمایش داده
                                                می‌شود.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Screen 3 */}
                                <div className="relative">
                                    <div className="bg-white rounded-3xl border-2 border-neutral-200 shadow-xl mb-4 overflow-hidden flex items-center justify-center">
                                        <ImageWithFallback
                                            src="/assets/images/casestudy/barpardaz/installment/new/8.png"
                                            alt="صفحه انتخاب اعتبار"
                                            className="w-full h-auto object-contain"
                                        />
                                    </div>
                                    <div className="relative">
                                        <div className="bg-blue-100 border-b-4 border-blue-300 rounded-lg p-4 shadow-lg transform -rotate-1">
                                            <p className="text-sm text-neutral-800 leading-relaxed text-right">
                                                برای مبلغ خرید، محدودیت صرفاً در
                                                مدت بازپرداخت اعمال می‌شود که
                                                مطابق جدول زیر تعریف شده است.
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
                    <div className="flex items-center gap-4 mb-8 justify-start">
                        <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center">
                            <Calendar className="w-8 h-8 text-orange-500" />
                        </div>
                        <h2 className="text-4xl"> ری‌دیزاین مدیریت اقساط</h2>
                    </div>

                    <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-lg mb-6">
                        <h3 className="text-2xl mb-4 text-right text-[#1F1BF5]">
                            مشکلات قبلی:
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3 justify-end">
                                <AlertCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                                <p className="text-lg text-neutral-700 text-right flex-1">
                                    پرداخت محدود به یک خرید خاص بود
                                </p>
                            </div>
                            <div className="flex items-start gap-3 justify-end">
                                <AlertCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                                <p className="text-lg text-neutral-700 text-right flex-1">
                                    طراحی بصری شلوغ و پر از جزئیات غیرضروری
                                </p>
                            </div>
                            <div className="flex items-start gap-3 justify-end">
                                <AlertCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                                <p className="text-lg text-neutral-700 text-right flex-1">
                                    عدم هم‌خوانی با مدل جدید بازپرداخت داینامیک
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-gradient-to-br from-[#1F1BF5]/5 to-blue-50 rounded-3xl p-8">
                            <h3 className="text-2xl mb-6 text-right text-[#1F1BF5]">
                                راه‌حل‌های جدید:
                            </h3>
                            <div className="space-y-4">
                                <div className="bg-white rounded-2xl p-6">
                                    <div className="flex items-start gap-4 justify-end">
                                        <CheckCircle2 className="w-8 h-8 text-green-500 flex-shrink-0" />
                                        <div className="text-right flex-1">
                                            <h4 className="text-xl mb-2">
                                                امکان انتخاب اقساط دلخواه
                                            </h4>
                                            <p className="text-neutral-600 leading-relaxed">
                                                کاربر می‌تواند چند قسط از چند
                                                خرید مختلف را هم‌زمان انتخاب و
                                                پرداخت کند
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl p-6">
                                    <div className="flex items-start gap-4 justify-end">
                                        <CheckCircle2 className="w-8 h-8 text-green-500 flex-shrink-0" />
                                        <div className="text-right flex-1">
                                            <h4 className="text-xl mb-2">
                                                ساده‌سازی کارت‌های اقساط
                                            </h4>
                                            <p className="text-neutral-600 leading-relaxed">
                                                فقط اطلاعات کلیدی: مبلغ قسط،
                                                تاریخ سررسید، وضعیت و نام
                                                فروشگاه
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl p-6">
                                    <div className="flex items-start gap-4 justify-end">
                                        <CheckCircle2 className="w-8 h-8 text-green-500 flex-shrink-0" />
                                        <div className="text-right flex-1">
                                            <h4 className="text-xl mb-2">
                                                ساختار قابل گسترش
                                            </h4>
                                            <p className="text-neutral-600 leading-relaxed">
                                                هر خرید به صورت یک بلاک قابل
                                                گسترش برای مدیریت بهتر اقساط
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>
                <h3 className="text-2xl mb-6 text-right text-red-500">
                    طراحی قبلی :
                </h3>
                <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-3xl p-8 mb-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Screen 1 */}
                        <div className="relative  items-center justify-center">
                            <div className="bg-white rounded-3xl border-2 border-neutral-200 shadow-xl mb-4 overflow-hidden flex items-center justify-center">
                                <ImageWithFallback
                                    src="/assets/images/casestudy/barpardaz/penalty/old/Mydebts-1.png"
                                    alt="صفحه انتخاب اعتبار"
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                            <div className="relative"></div>
                        </div>
                        {/* Screen 2 */}
                        <div className="relative  items-center justify-center">
                            <div className="bg-white rounded-3xl border-2 border-neutral-200 shadow-xl mb-4 overflow-hidden flex items-center justify-center">
                                <ImageWithFallback
                                    src="/assets/images/casestudy/barpardaz/penalty/old/Mydebts-2.png"
                                    alt="صفحه انتخاب اعتبار"
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                            <div className="relative"></div>
                        </div>
                        {/* Screen 1 */}
                        <div className="relative items-center justify-center">
                            <div className="bg-white rounded-3xl border-2 border-neutral-200 shadow-xl mb-4 overflow-hidden flex items-center justify-center mb-8">
                                <ImageWithFallback
                                    src="/assets/images/casestudy/barpardaz/penalty/old/penalty.png"
                                    alt="صفحه انتخاب اعتبار"
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                            <div className="relative"></div>
                        </div>
                    </div>
                </div>
                <h3 className="text-2xl mb-6 text-right text-green-500">
                    طراحی جدید :
                </h3>
                <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-3xl p-8 mb-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Screen 1 */}
                        <div className="relative">
                            <div className="relative">
                                <div className="bg-yellow-100 border-b-4 border-yellow-300 rounded-lg p-4 shadow-lg transform  mb-8">
                                    <p className="text-sm text-neutral-800 leading-relaxed text-right">
                                        همه اقساط را به‌صورت چک‌شده قرار
                                        داده‌ام، چراکه فرض اولیه من این بود که
                                        تعداد اقساط در حال حاضر زیاد نیست. در
                                        شرایط فعلی، با توجه به اینکه فروش ما
                                        عمدتاً مربوط به لاستیک است، این رویکرد
                                        مناسب به نظر می‌رسید. (به همین دلیل
                                        گزینه‌ی Select All را نیز حذف کردم،
                                        هرچند برای آینده و به‌ویژه خریدهای
                                        آنلاین بهتر است این قابلیت وجود داشته
                                        باشد.) از طرف دیگر، ممکن است برای راننده
                                        پرداخت تک‌تک اقساط در موعد مقرر خارج از
                                        حوصله باشد. با این حال، اگر تاریخ دقیق
                                        هر قسط برای او اهمیت داشته باشد و بخواهد
                                        هر قسط را در همان روز مشخص پرداخت کند،
                                        در این صورت لازم است که حالت پیش‌فرض
                                        اقساط غیرفعال (Unchecked) در نظر گرفته
                                        شود.
                                    </p>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="bg-green-100 border-b-4 border-green-300 rounded-lg p-4 shadow-lg transform rotate-2">
                                    <p className="text-sm text-neutral-800 leading-relaxed text-right">
                                        کارت پرداخت از بخش بالایی به قسمت پایین
                                        صفحه منتقل و به‌صورت Sticky طراحی شده
                                        است. با توجه به تفاوت‌های بصری آن با دو
                                        کانتینر بالا و پایین، کاربر به‌وضوح
                                        متوجه خواهد شد که این بخش مجزا است. دکمه
                                        پرداخت به‌اندازه‌ای بزرگ‌تر از نوار
                                        ناوبری طراحی شده که امکان اشتباه گرفتن
                                        آن وجود نداشته باشد. همچنین فاصله آن با
                                        نوار ناوبری بررسی شده و از لحاظ ایمنی
                                        مناسب است. حتی در صورتی که کاربر به
                                        اشتباه بر روی این دکمه کلیک کند، لازم
                                        است بررسی کنیم که این اقدام دقیقاً چه
                                        هزینه‌ای برای ما در پی خواهد داشت(هزینه
                                        زیادی ندارد و اطلاعات خیلی مهمی از دست
                                        نمیرود)
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Screen 2 */}
                        <div className="relative">
                            <div className="bg-white rounded-3xl border-2 border-neutral-200 shadow-xl mb-4 overflow-hidden flex items-center justify-center">
                                <ImageWithFallback
                                    src="/assets/images/casestudy/barpardaz/penalty/new/debts.png"
                                    alt="صفحه انتخاب اعتبار"
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        </div>

                        {/* Screen 3 */}
                        <div className="relative">
                            <div className="relative">
                                <div className="bg-yellow-100 border-b-4 border-yellow-300 rounded-lg p-4 shadow-lg transform  mb-8">
                                    <p className="text-sm text-neutral-800 leading-relaxed text-right">
                                        کارت‌های پرداخت با توجه به نوع
                                        بازپرداخت‌هایی که ارائه می‌کنیم، باید
                                        الزاماً شامل تمام اقساط به همراه تاریخ
                                        دقیق بازپرداخت باشند. در مقابل، برخی
                                        اطلاعات غیرضروری مانند مبلغ کل خرید،
                                        لوگوی فروشنده و بخشی که قابلیت Expand
                                        داشت، حذف شده‌اند.
                                    </p>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="bg-yellow-100 border-b-4 border-yellow-300 rounded-lg p-4 shadow-lg transform  mb-8">
                                    <p className="text-sm text-neutral-800 leading-relaxed text-right">
                                        برای راننده، در بازپرداخت‌ها اولویت نخست
                                        زمان است، نه کالای خریداری‌شده یا
                                        فروشنده‌ای که کالا را از او تهیه کرده
                                        است. بر همین اساس، نحوه نمایش بدهی‌ها
                                        تغییر کرده و اقساط بر مبنای ماه از
                                        یکدیگر تفکیک شده‌اند. به همین دلیل دیگر
                                        نیازی به پیچیدگی در نمایش اقساط بعدی بر
                                        روی خود کارت وجود ندارد.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-3xl p-8 mb-8">
                    <div className="grid md:grid-cols-4 gap-8 ">
                        {/* Screen a1 */}
                        <div className="relative">
                            <div className="relative">
                                <div className="bg-green-100 border-b-4 border-green-300 rounded-lg p-4 shadow-lg transform rotate-2">
                                    <p className="text-sm text-neutral-800 leading-relaxed text-right">
                                        با توجه به اینکه مبالغ بدهی‌ها در
                                        کسب‌وکار ما ممکن است بالا باشد و تعداد
                                        آن‌ها در حال حاضر محدود است، محدودیتی در
                                        پرداخت‌ها در صورت وجود بدهی معوق اعمال
                                        نشده است. بدین ترتیب کاربر می‌تواند در
                                        صورتی که بدهی‌ای با مبلغ بالا و جریمه در
                                        حال افزایش داشته باشد، آن را در اولویت
                                        قرار داده و به‌صورت مجزا پرداخت کند؛ تا
                                        اینکه در نتیجه محدودیت، هیچ‌یک از
                                        بدهی‌های خود را پرداخت نکند.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Screen a2 */}
                        <div className="relative">
                            <div className="bg-white rounded-3xl border-2 border-neutral-200 shadow-xl mb-4 overflow-hidden flex items-center justify-center">
                                <ImageWithFallback
                                    src="/assets/images/casestudy/barpardaz/penalty/new/penalties.png"
                                    alt="صفحه انتخاب اعتبار"
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        </div>

                        <div className="relative">
                            <div className="flex">
                                <div className="bg-blue-100 border-b-4 border-blue-300 rounded-lg p-4 shadow-lg transform rotate-2">
                                    <p className="text-sm text-neutral-800 leading-relaxed text-right">
                                        همچنین این محدودیت در مورد بدهی‌های جاری
                                        یا آینده نیز اعمال نشده است تا کاربر
                                        هیچ‌گاه در پرداخت بدهی‌های خود با
                                        محدودیت مواجه نشود. به‌عنوان نمونه، ممکن
                                        است بدهی‌های معوقه مبلغ کمتری داشته
                                        باشند، اما بدهی‌های جاری یا آینده مبالغ
                                        بالاتری را شامل شوند که کاربر ترجیح دهد
                                        برای جلوگیری از ورود به مرحله جریمه،
                                        ابتدا آن‌ها را پرداخت کند.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Screen 2 */}
                        <div className="relative">
                            <div className="bg-white rounded-3xl border-2 border-neutral-200 shadow-xl mb-4 overflow-hidden flex items-center justify-center">
                                <ImageWithFallback
                                    src="/assets/images/casestudy/barpardaz/penalty/new/penalty_thismonth.png"
                                    alt="صفحه انتخاب اعتبار"
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* نتایج */}

                <motion.section
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    className="mb-16"
                >
                    <div className="grid md:grid-cols-3 gap-6 mb-8"></div>

                    <div className="bg-gradient-to-br from-[#1F1BF5]/5 to-purple-50 rounded-3xl p-8 border-r-4 border-[#1F1BF5]">
                        <h3 className="text-2xl mb-4 text-right">
                            بازخورد کاربران:
                        </h3>
                        <p className="text-xl text-neutral-700 leading-relaxed text-right">
                            کاربران در مصاحبه‌ها، تجربه‌ی جدید را{" "}
                            <span className="text-[#1F1BF5]">«ساده‌تر»</span>،{" "}
                            <span className="text-[#1F1BF5]">«شفاف‌تر»</span> و{" "}
                            <span className="text-[#1F1BF5]">
                                «قابل‌اعتمادتر»
                            </span>{" "}
                            توصیف کردند. در بخش مدیریت اقساط، احساس می‌کردند
                            کنترل بیشتری روی بدهی‌ها و پرداخت‌ها دارند.
                        </p>
                    </div>
                </motion.section>
                <motion.section
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-4 mb-8 justify-start">
                        <div className="w-16 h-16 bg-[#1F1BF5]/10 rounded-2xl flex items-center justify-center">
                            <FileText className="w-8 h-8 text-[#1F1BF5]" />
                        </div>
                        <h2 className="text-4xl">ریدیزاین لندینگ پیچ </h2>
                    </div>
                    <div className="flex gap-8 w-full">
                        <div className="installment-old mb-8 w-full">
                            <div className="bg-red-50 rounded-3xl p-8 mb-8">
                                <div className="grid md:grid-cols-2 gap-8 w-full">
                                    {/* old landing  */}
                                    <div className="relative  items-center justify-center">
                                        <h3 className="text-2xl mb-8 text-red-500">
                                            طراحی قبلی{" "}
                                        </h3>
                                        <div className="bg-white rounded-3xl border-2 border-neutral-200 shadow-xl mb-4 overflow-hidden flex items-center justify-center">
                                            <ImageWithFallback
                                                src="/assets/images/casestudy/barpardaz/oldlanding.png"
                                                alt="صفحه انتخاب اعتبار"
                                                className="w-full h-auto object-contain"
                                            />
                                        </div>
                                    </div>
                                    <div className="relative  items-center justify-center">
                                        <h3 className="text-2xl mb-8 text-green-500">
                                            طراحی جدید{" "}
                                        </h3>
                                        <div className="bg-white rounded-3xl border-2 border-neutral-200 shadow-xl mb-4 overflow-hidden flex items-center justify-center">
                                            <ImageWithFallback
                                                src="/assets/images/casestudy/barpardaz/landingnew.png"
                                                alt="صفحه انتخاب اعتبار"
                                                className="w-full h-auto object-contain"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 mb-8 justify-start">
                        <div className="w-16 h-16 bg-[#1F1BF5]/10 rounded-2xl flex items-center justify-center">
                            <FileText className="w-8 h-8 text-[#1F1BF5]" />
                        </div>
                        <h2 className="text-4xl">
                            پروتوتایپ لندینگ پیج در فیگما
                        </h2>
                    </div>
                    <div className="bg-gradient-to-br from-[#1F1BF5]/5 to-[#1F1BF5]/10 rounded-3xl p-8 border-r-4 border-[#1F1BF5]">
                        <iframe
                            src="https://embed.figma.com/proto/SavKNKhpl0PCAfDhu0m3YW/Barpardaz?page-id=0%3A1&node-id=1-1552&viewport=-6222%2C-547%2C0.32&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=1%3A1552&embed-host=share"
                            width="100%" // عرض کامل
                            height="600" // ارتفاع مورد نظر
                            style={{ border: "none" }}
                            title="Figma Prototype"
                            allowFullScreen
                        />
                    </div>
                </motion.section>
                {/* آموخته‌های کلیدی */}
                <motion.section
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mb-8"
                >
                    <div className="flex items-center gap-4 mb-8 justify-start">
                        <div className="w-16 h-16 bg-[#1F1BF5]/10 rounded-2xl flex items-center justify-center">
                            <Sparkles className="w-8 h-8 text-[#1F1BF5]" />
                        </div>
                        <h2 className="text-4xl">آموخته‌های کلیدی</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-2xl p-8 border border-[#1F1BF5]/20 shadow-lg">
                            <div className="text-4xl mb-4">🎯</div>
                            <p className="text-lg text-neutral-700 leading-relaxed text-right">
                                درک رفتار مالی و محدودیت‌های واقعی کاربر مهم‌تر
                                از خود طراحی رابط است
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 border border-[#1F1BF5]/20 shadow-lg">
                            <div className="text-4xl mb-4">💡</div>
                            <p className="text-lg text-neutral-700 leading-relaxed text-right">
                                کاربران همیشه دنبال رایگان بودن نیستند؛ آن‌ها به
                                دنبال پیش‌بینی‌پذیری و کنترل هستند
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 border border-[#1F1BF5]/20 shadow-lg">
                            <div className="text-4xl mb-4">🔒</div>
                            <p className="text-lg text-neutral-700 leading-relaxed text-right">
                                در محصولات فین‌تکی، طراحی باید بر اساس سه اصل
                                باشد: اعتماد، شفافیت و سادگی تصمیم‌گیری
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 border border-[#1F1BF5]/20 shadow-lg">
                            <div className="text-4xl mb-4">✨</div>
                            <p className="text-lg text-neutral-700 leading-relaxed text-right">
                                حتی در یک فلو که به‌نظر فقط «پرداخت» است، طراحی
                                خوب می‌تواند احساس کنترل و آرامش ایجاد کند
                            </p>
                        </div>
                    </div>
                </motion.section>
            </div>
        </div>
    );
}

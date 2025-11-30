import { motion } from "motion/react";
import {
    ArrowRight,
    Target,
    Lightbulb,
    GitBranch,
    Box,
    Eye,
    Layers,
    Workflow,
    Microscope,
    AlertCircle,
    Users,
    Zap,
    Shield,
    Sparkles,
    CheckCircle2,
    Brain,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ViseraCaseStudyProps {
    onBack: () => void;
}

export function ViseraCaseStudy({ onBack }: ViseraCaseStudyProps) {
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
                            src="../../assets/images/casestudy/visera/visera-header.svg"
                            alt="ویزرا"
                            className="w-full h-auto rounded-2xl "
                        />
                    </div>
                </div>

                {/* Project Overview Box */}
                <div className="relative -mt-16 px-12 pb-12 z-10">
                    <div className="max-w-5xl mx-auto bg-white rounded-3xl p-8 shadow-2xl">
                       
                        <div className="text-right">
                            <p className="text-xl text-neutral-700 leading-relaxed mb-4">
                                <span className="text-[#1F1BF5]">ویسرا</span> یک
                                نرم‌افزار تخصصی ویندوزی برای آنالیز تصویربرداری
                                پزشکی و بیومدیکال است.
                            </p>
                            <p className="text-lg text-neutral-600 leading-relaxed">
                                این پروژه شامل بازطراحی کامل رابط کاربری و تجربه
                                کاربری نرم‌افزاری است که متخصصان پزشکی از آن
                                برای تجزیه و تحلیل تصاویر پیچیده سه‌بعدی و
                                دوبعدی استفاده می‌کنند. هدف طراحی، ایجاد
                                تجربه‌ای دقیق، حرفه‌ای و کارآمد برای کاربران
                                تخصصی بود.
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
                    <div className="flex items-center gap-4 mb-8 justify-start">
                        <div className="w-16 h-16 bg-[#1F1BF5]/10 rounded-2xl flex items-center justify-center">
                            <Microscope className="w-8 h-8 text-[#1F1BF5]" />
                        </div>
                        <h2 className="text-4xl">معرفی پروژه</h2>
                    </div>

                    <div className="bg-gradient-to-br from-[#1F1BF5]/5 to-[#1F1BF5]/10 rounded-3xl p-8 border-r-4 border-[#1F1BF5] mb-8">
                        <p className="text-xl text-neutral-700 leading-relaxed text-right mb-6">
                            در این پروژه روی بازطراحی رابط کاربری یک نرم‌افزار
                            ویندوزی تخصصی در حوزه{" "}
                            <span className="text-[#1F1BF5]">
                                تحلیل تصاویر پزشکی و بایومدیکال
                            </span>{" "}
                            کار کردم. این نرم‌افزار امکان انجام جریان‌های کاری
                            پیچیده‌ای مانند پردازش، بخش‌بندی، ثبت، ادغام و تحلیل
                            داده‌های تصویری را فراهم می‌کند.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div className="bg-white/70 rounded-2xl p-6">
                                <div className="flex items-start gap-3 justify-start">
                                    <div className="w-12 h-12 bg-[#1F1BF5]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Eye className="w-6 h-6 text-[#1F1BF5]" />
                                    </div>
                                    <div className="text-right flex-1">
                                        <p className="text-lg text-neutral-700 leading-relaxed">
                                            استخراج داده‌های دقیق از تصاویر
                                            پزشکی
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/70 rounded-2xl p-6">
                                <div className="flex items-start gap-3 justify-start">
                                    <div className="w-12 h-12 bg-[#1F1BF5]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Brain className="w-6 h-6 text-[#1F1BF5]" />
                                    </div>
                                    <div className="text-right flex-1">
                                        <p className="text-lg text-neutral-700 leading-relaxed">
                                            تحلیل‌های مبتنی بر یادگیری ماشین
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/70 rounded-2xl p-6">
                            <p className="text-lg text-neutral-700 text-right leading-relaxed mb-3">
                                این ابزار به‌طور خاص برای استفاده پژوهشگران،
                                پزشکان و رادیولوژیست‌ها طراحی شده و در محیط‌های
                                تخصصی پزشکی و تحقیقاتی کاربرد دارد.
                            </p>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-3xl p-8">
                        <div className="flex items-center gap-3 justify-start mb-4">
                            <Target className="w-8 h-8 text-[#1F1BF5]" />
                            <h3 className="text-2xl text-[#1F1BF5]">
                                نقش من در پروژه
                            </h3>
                        </div>
                        <p className="text-xl text-neutral-700 text-right leading-relaxed">
                            طراحی مجدد تجربه کاربری و رابط کاربری نرم‌افزار، با
                            هدف{" "}
                            <span className="text-[#1F1BF5]">
                                ارتقاء کارایی
                            </span>
                            ،{" "}
                            <span className="text-[#1F1BF5]">
                                بهبود تجربه‌ی کاربر
                            </span>{" "}
                            و{" "}
                            <span className="text-[#1F1BF5]">
                                هم‌راستاسازی طراحی
                            </span>{" "}
                            با فیچرهای جدید نرم‌افزار.
                        </p>
                    </div>
                </motion.section>

                {/* چالش‌ها */}
                <motion.section
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-4 mb-8 justify-start">
                        <div className="w-16 h-16 bg-[#1F1BF5]/10 rounded-2xl flex items-center justify-center">
                            <AlertCircle className="w-8 h-8 text-[#1F1BF5]" />
                        </div>
                        <h2 className="text-4xl">چالش‌های بازطراحی</h2>
                    </div>

                    <p className="text-xl text-neutral-700 text-right mb-8 leading-relaxed">
                        چالش‌های اصلی ما در بازطراحی این نرم‌افزار به چند نکته
                        کلیدی برمی‌گشت:
                    </p>

                    <div className="space-y-6">
                        {/* چالش 1 */}
                        <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-lg">
                            <div className="flex items-start gap-4 justify-start mb-4">
                                <div className="bg-[#1F1BF5] rounded-2xl w-14 h-14 flex items-center justify-center flex-shrink-0">
                                    <Users className="w-7 h-7 text-white" />
                                </div>
                                <div className="text-right flex-1">
                                    <h3 className="text-2xl mb-4 text-[#1F1BF5]">
                                        حفظ سادگی برای کاربران تخصصی
                                    </h3>
                                    <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                                        بیشتر کاربران نرم‌افزار در حوزه‌های
                                        تحقیقاتی و پزشکی فعالیت می‌کنند و
                                        طبیعتاً کارهای پیچیده و تخصصی دارند،
                                        بنابراین نباید بازطراحی به‌گونه‌ای انجام
                                        می‌شد که بار فکری بیشتری روی آن‌ها تحمیل
                                        کند یا باعث سردرگمی شود.
                                    </p>
                                    <div className="bg-gradient-to-br from-[#1F1BF5]/5 to-blue-50 rounded-2xl p-4">
                                        <p className="text-lg text-neutral-800 text-right leading-relaxed">
                                            حفظ آشنایی و راحتی کاربر در اولویت
                                            قرار داشت.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* چالش 2 */}
                        <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-lg">
                            <div className="flex items-start gap-4 justify-start mb-4">
                                <div className="bg-[#1F1BF5] rounded-2xl w-14 h-14 flex items-center justify-center flex-shrink-0">
                                    <Sparkles className="w-7 h-7 text-white" />
                                </div>
                                <div className="text-right flex-1">
                                    <h3 className="text-2xl mb-4 text-[#1F1BF5]">
                                        تعادل بین مدرن و آشنا
                                    </h3>
                                    <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                                        طراحی نرم‌افزار سبک و ساختاری متفاوتی
                                        نسبت به وب‌سایت‌ها یا اپلیکیشن‌های روز
                                        داشت. بسیاری از نرم‌افزارهای مشابه روی
                                        این سیستم‌عامل، توجه چندانی به جنبه‌های
                                        بصری و زیبایی‌شناسی نداشته‌اند.
                                    </p>
                                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-4">
                                        <p className="text-lg text-neutral-800 text-right leading-relaxed">
                                            ما می‌خواستیم تعادلی مناسب بین ظاهر
                                            مدرن و جذاب و در عین حال حفظ حس
                                            آشنایی ایجاد کنیم، تا محصول ما برای
                                            کاربران جدید و قدیمی هم جذاب و
                                            قابل‌استفاده باشد.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* چالش 3 */}
                        <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-lg">
                            <div className="flex items-start gap-4 justify-start mb-4">
                                <div className="bg-[#1F1BF5] rounded-2xl w-14 h-14 flex items-center justify-center flex-shrink-0">
                                    <Shield className="w-7 h-7 text-white" />
                                </div>
                                <div className="text-right flex-1">
                                    <h3 className="text-2xl mb-4 text-[#1F1BF5]">
                                        جامعیت امکانات vs سادگی کاربری
                                    </h3>
                                    <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                                        باید تمامی امکانات و ویژگی‌های رقبا را
                                        در نظر می‌گرفتیم، چرا که رقبای
                                        شناخته‌شده‌ای در بازار وجود داشتند و
                                        کمبود هر ویژگی ممکن بود باعث مهاجرت
                                        کاربران شود. اما آوردن همه این امکانات
                                        به صورت همزمان ریسک بزرگی بود.
                                    </p>
                                    <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-4">
                                        <p className="text-lg text-neutral-800 text-right leading-relaxed">
                                            حفظ تعادل میان جامعیت امکانات و
                                            سادگی کاربری، یکی از مهم‌ترین
                                            چالش‌های ما بود.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Work Flow Generator */}
                <motion.section
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-4 mb-8 justify-start">
                        <div className="w-16 h-16 bg-[#1F1BF5]/10 rounded-2xl flex items-center justify-center">
                            <GitBranch className="w-8 h-8 text-[#1F1BF5]" />
                        </div>
                        <h2 className="text-4xl">
                            ساختاردهی بصری فرایندهای پیچیده
                        </h2>
                    </div>

                    <div className="bg-gradient-to-br from-[#1F1BF5]/5 to-purple-50 rounded-3xl p-8 border-r-4 border-[#1F1BF5] mb-8">
                        <div className="flex items-center gap-3 justify-start mb-6">
                            <Workflow className="w-8 h-8 text-[#1F1BF5]" />
                            <h3 className="text-2xl text-[#1F1BF5]">
                                Work Flow Generator
                            </h3>
                        </div>

                        <p className="text-xl text-neutral-700 leading-relaxed text-right mb-6">
                            در بخشی از این نرم‌افزار، یک Work Flow Generator
                            وجود دارد که نقش مهمی در ساده‌سازی جریان‌های کاری
                            پیچیده ایفا می‌کند. این نوع ابزارها به کاربران اجازه
                            می‌دهند تا مراحل مختلف یک فرایند تخصصی یا تحلیلی را
                            به صورت بلوک‌های گرافیکی قابل اتصال طراحی و اجرا
                            کنند.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white/70 rounded-2xl p-6">
                                <div className="flex items-start gap-3 justify-start">
                                    <CheckCircle2 className="w-6 h-6 text-[#1F1BF5] flex-shrink-0 mt-1" />
                                    <div className="text-right flex-1">
                                        <h4 className="text-lg mb-2 text-[#1F1BF5]">
                                            رابط بصری به‌جای کدنویسی
                                        </h4>
                                        <p className="text-neutral-700 leading-relaxed">
                                            به‌جای نوشتن دستی کد، کاربران
                                            می‌توانند جریان پردازش را مانند یک
                                            نقشه یا فلوچارت بچینند
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/70 rounded-2xl p-6">
                                <div className="flex items-start gap-3 justify-start">
                                    <Zap className="w-6 h-6 text-[#1F1BF5] flex-shrink-0 mt-1" />
                                    <div className="text-right flex-1">
                                        <h4 className="text-lg mb-2 text-[#1F1BF5]">
                                            سرعت و انعطاف
                                        </h4>
                                        <p className="text-neutral-700 leading-relaxed">
                                            امکان آزمایش، ویرایش و بهینه‌سازی
                                            سریع‌تر فرایندها
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Images Column */}
                    <div className="mt-8 space-y-4">
                        {[1].map((num) => (
                            <div key={num} className="overflow-hidden">
                                <ImageWithFallback
                                    src={`/assets/images/casestudy/visera/${num}.png`}
                                    alt={`تصویر ${num}`}
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* سه‌بعدی‌سازی */}
                <motion.section
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mb-8"
                >
                    <div className="flex items-center gap-4 mb-8 justify-start">
                        <div className="w-16 h-16 bg-[#1F1BF5]/10 rounded-2xl flex items-center justify-center">
                            <Box className="w-8 h-8 text-[#1F1BF5]" />
                        </div>
                        <h2 className="text-4xl">
                            سه‌بعدی‌سازی و تسهیل آنالیز
                        </h2>
                    </div>

                    <div className="bg-gradient-to-br from-[#1F1BF5]/5 to-blue-50 rounded-3xl p-8 border-r-4 border-[#1F1BF5] mb-8">
                        <div className="flex items-center gap-3 justify-start mb-6">
                            <Layers className="w-8 h-8 text-[#1F1BF5]" />
                            <h3 className="text-2xl text-[#1F1BF5]">
                                تصویربرداری سه‌بعدی (Visualization)
                            </h3>
                        </div>

                        <p className="text-xl text-neutral-700 leading-relaxed text-right mb-6">
                            در بخشی از نرم‌افزار که مربوط به تصویربرداری سه‌بعدی
                            تصاویر پزشکی بود، امکان{" "}
                            <span className="text-[#1F1BF5]">
                                سگمنت‌بندی دقیق تصاویر
                            </span>{" "}
                            فراهم شده تا تحلیل‌های بهتری انجام شود.
                        </p>

                        <div className="bg-white/70 rounded-2xl p-6 mb-6">
                            <p className="text-lg text-neutral-700 text-right leading-relaxed">
                                برای این منظور، ابزارهای متنوع و پیچیده‌ای مورد
                                استفاده قرار می‌گرفت که کار با آن‌ها نیازمند دقت
                                و مهارت بالایی بود.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6">
                            <div className="flex items-start gap-3 justify-start">
                                <CheckCircle2 className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                                <p className="text-xl text-neutral-800 text-right flex-1 leading-relaxed">
                                    من در فرآیند بازطراحی تلاش کردم تا نحوه
                                    استفاده از این ابزارها را{" "}
                                    <span className="text-green-700">
                                        ساده‌تر و کاربرپسندتر
                                    </span>{" "}
                                    کنم، به‌طوری که کاربران بتوانند راحت‌تر و
                                    سریع‌تر به هدف خود در آنالیز تصاویر سه‌بعدی
                                    دست یابند.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Image Placeholder */}
                    {/* Images Column */}
                    <div className="mt-8 space-y-4">
                        {[2, 3, 4, 5].map((num) => (
                            <div key={num} className="overflow-hidden">
                                <ImageWithFallback
                                    src={`/assets/images/casestudy/visera/${num}.png`}
                                    alt={`تصویر ${num}`}
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        ))}
                    </div>

                    {/* نتیجه */}
                    <div className="mt-8 bg-gradient-to-br from-[#1F1BF5] to-[#1F1BF5]/80 rounded-3xl p-8 text-white">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="text-5xl">✨</div>
                            <h3 className="text-3xl">نتیجه بازطراحی</h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white/10 rounded-2xl p-6">
                                <div className="flex items-center gap-3 justify-start mb-3">
                                    <Zap className="w-6 h-6" />
                                    <h4 className="text-xl">افزایش کارایی</h4>
                                </div>
                                <p className="text-lg leading-relaxed text-right text-white/90">
                                    کاربران سریع‌تر و راحت‌تر به اهداف خود
                                    می‌رسند
                                </p>
                            </div>
                            <div className="bg-white/10 rounded-2xl p-6">
                                <div className="flex items-center gap-3 justify-start mb-3">
                                    <Shield className="w-6 h-6" />
                                    <h4 className="text-xl">حفظ آشنایی</h4>
                                </div>
                                <p className="text-lg leading-relaxed text-right text-white/90">
                                    تجربه آشنا برای کاربران قدیمی با ظاهر مدرن
                                </p>
                            </div>
                            <div className="bg-white/10 rounded-2xl p-6">
                                <div className="flex items-center gap-3 justify-start mb-3">
                                    <Layers className="w-6 h-6" />
                                    <h4 className="text-xl">
                                        ابزارهای پیشرفته
                                    </h4>
                                </div>
                                <p className="text-lg leading-relaxed text-right text-white/90">
                                    امکانات جامع بدون افزودن پیچیدگی
                                </p>
                            </div>
                            <div className="bg-white/10 rounded-2xl p-6">
                                <div className="flex items-center gap-3 justify-start mb-3">
                                    <Eye className="w-6 h-6" />
                                    <h4 className="text-xl">تحلیل دقیق‌تر</h4>
                                </div>
                                <p className="text-lg leading-relaxed text-right text-white/90">
                                    ابزارهای ساده‌شده برای نتایج بهتر
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.section>
            </div>
        </div>
    );
}

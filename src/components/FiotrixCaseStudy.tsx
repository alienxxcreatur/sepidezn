import { motion } from "motion/react";
import {
    Target,
    Users,
    Lightbulb,
    Briefcase,
    CheckCircle2,
    Search,
    Settings,
    CreditCard,
    Award,
    TrendingUp,
    ClipboardList,
    UserCheck,
    DollarSign,
    Calendar,
    MessageSquare,
    Brain,
    Globe,
    Palette,
    Zap,
    Ticket,
    Home,
    Sparkles,
    FileText,
    ArrowRight,
    X,
    ArrowLeft,
    Pen,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

interface FiotrixCaseStudyProps {
    onBack: () => void;
}

export function FiotrixCaseStudy({ onBack }: FiotrixCaseStudyProps) {
    const { id } = useParams();

    // Accept both numeric ids and slug paths (e.g. /project/fiotrix)
    const slugToId: Record<string, string> = {
        visera: "12",
        rasacode: "11",
        "reminder-agent": "10",
        barpardaz: "9",
        fiotrix: "7",
        "ceo-assist": "4",
        "food-kiosk": "3",
        ibcentra: "2",
        wallet: "1",
    };

    const normalizedId = /^[0-9]+$/.test(id || "")
        ? (id as string)
        : slugToId[id?.toLowerCase() ?? ""] || id || "";

    // Define the project data array (normally you would fetch this from an API)
    const projects = [
        {
            id: "2",
            title: "IBCentra",
            category: "Business Education",
            description:
                "An app for business education with a back-office dashboard for management.",
            tags: ["app", "elearning", "dashboard"],
            gradient: "from-[#1F1BF5] to-[#1F1BF5]/80",
            accentColor: "bg-[#1F1BF5]/30",
            image: "/assets/images/ibcentra.png",
        },
        {
            id: "9",
            title: "Barpardaz",
            category: "Fintech",
            description:
                "A mobile app for purchasing heavy machinery equipment through installment plans.",
            tags: ["app", "lendtech"],
            gradient: "from-[#1F1BF5] to-[#1F1BF5]/80",
            accentColor: "border-[#1F1BF5]/30",
            image: "/assets/images/barpardaz.png",
        },
        {
            id: "7",
            title: "Fiotrix",
            category: "Project Management",
            description:
                "A panel for registering and managing software development project orders.",
            tags: ["webapp", "projectmanagement"],
            gradient: "from-[#1F1BF5] to-[#1F1BF5]/80",
            accentColor: "border-[#1F1BF5]/30",
            image: "/assets/images/fiotrix.png",
        },
        {
            id: "10",
            title: "Reminder Agent",
            category: "AI Chatbot",
            description:
                "An AI-powered chatbot to help business owners manage tasks through voice or text commands.",
            tags: ["ai", "chatbot", "automation"],
            gradient: "from-[#1F1BF5] to-[#1F1BF5]/80",
            accentColor: "border-[#1F1BF5]/30",
            image: "/assets/images/reminderagent.png",
        },
        {
            id: "1",
            title: "Wallet App",
            category: "Mobile App",
            description:
                "A mobile app for securely managing cryptocurrency transactions efficiently.",
            tags: ["app", "cryptocurrency"],
            gradient: "from-[#1F1BF5] to-[#1F1BF5]/80",
            accentColor: "border-[#1F1BF5]/30",
            image: "/assets/images/wallet.png",
        },
        {
            id: "11",
            title: "Rasa Code",
            category: "Payment Management",
            description:
                "A dashboard for managing and configuring payment kiosks in various locations.",
            tags: ["webapp", "payment", "management"],
            gradient: "from-[#1F1BF5] to-[#1F1BF5]/80",
            accentColor: "bg-[#1F1BF5]/30",
            image: "/assets/images/rasacode.png",
        },
        {
            id: "4",
            title: "CEO Assist",
            category: "Business AI",
            description:
                "AI chatbot app for business learners and entrepreneurs with bilingual support.",
            tags: ["ai", "business", "chatbot"],
            gradient: "from-[#1F1BF5] to-[#1F1BF5]/80",
            accentColor: "border-[#1F1BF5]/30",
            image: "/assets/images/ceoassist.png",
        },
        {
            id: "12",
            title: "Visera",
            category: "Medical Imaging",
            description:
                "Redesigning a specialized Windows software for medical and biomedical image analysis.",
            tags: ["desktop", "medical", "3D visualization"],
            gradient: "from-[#1F1BF5] to-[#1F1BF5]/80",
            accentColor: "bg-[#1F1BF5]/30",
            image: "/assets/images/visera.png",
        },
    ];

    const project = projects.find((p) => p.id === normalizedId);

    if (!project) {
        return <div>Project not found</div>; // If no project is found with this id
    }

    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(-1);

    const landingImages = [
        "/assets/images/casestudy/fiotrix/landing/landing.png",
        "/assets/images/casestudy/fiotrix/landing/About us.png",
        "/assets/images/casestudy/fiotrix/landing/blogs.png",
        "/assets/images/casestudy/fiotrix/landing/blogs-2.png",
        "/assets/images/casestudy/fiotrix/landing/Desktop - 12.png",
        "/assets/images/casestudy/fiotrix/landing/landing-1.png",
        "/assets/images/casestudy/fiotrix/landing/About us-1.png",
        "/assets/images/casestudy/fiotrix/landing/blogs-1.png",
        "/assets/images/casestudy/fiotrix/landing/blogs-3.png",
        "/assets/images/casestudy/fiotrix/landing/login-light.png",
    ];

    // Handle image click to open modal and set the current image
    const openImage = (index: number, imagesource?: string[]) => {
        const imgs = imagesource || landingImages;
        setSelectedImage(imgs[index]);
        setCurrentImageIndex(index);
    };

    // Handle closing the modal
    const closeImage = () => {
        setSelectedImage(null);
        setCurrentImageIndex(-1);
    };

    // Handle changing the image in the modal (next or previous)
    const changeImage = (
        direction: "left" | "right",
        imagesource?: string[]
    ) => {
        const imgs = imagesource || landingImages;
        let newIndex = currentImageIndex;
        if (direction === "left") {
            newIndex =
                currentImageIndex <= 0
                    ? imgs.length - 1
                    : currentImageIndex - 1;
        } else if (direction === "right") {
            newIndex =
                currentImageIndex >= imgs.length - 1
                    ? 0
                    : currentImageIndex + 1;
        }
        setSelectedImage(imgs[newIndex]);
        setCurrentImageIndex(newIndex);
    };

    // Handle keyboard arrow keys for image navigation
    const handleKeyPress = (event: KeyboardEvent) => {
        if (event.key === "ArrowLeft") {
            changeImage("left");
        } else if (event.key === "ArrowRight") {
            changeImage("right");
        }
    };

    useEffect(() => {
        if (selectedImage) {
            window.addEventListener("keydown", handleKeyPress);
        } else {
            window.removeEventListener("keydown", handleKeyPress);
        }

        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, [selectedImage]);
    return (
        <div className="persian-text min-h-screen bg-white" dir="rtl">
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
                            src="../../assets/images/casestudy/fiotrix/fiotrix_header.png"
                            alt="فیوتریکس"
                            className="w-full h-auto rounded-2xl "
                        />
                    </div>
                </div>

                {/* Project Overview Box */}
                <div className="relative -mt-16 px-12 pb-12 z-10">
                    <div className="max-w-5xl mx-auto bg-white rounded-3xl p-8 ">
                        <h2 className="text-2xl text-right text-neutral-900 mb-6"></h2>
                        <div className="text-right">
                            <p className="text-xl text-neutral-700 leading-relaxed mb-4">
                                <span className="text-[#1F1BF5]">فیوتریکس</span>{" "}
                                یک پنل مدیریت سفارشات و خدمات توسعه نرم‌افزار
                                است که برای شرکت‌های طراحی و توسعه نرم‌افزار
                                طراحی شده است.
                            </p>
                            <p className="text-lg text-neutral-600 leading-relaxed">
                                این پلتفرم به تیم‌ها کمک می‌کند تا سفارشات
                                مشتریان، پروژه‌ها، و کارشناسان را به‌صورت متمرکز
                                مدیریت کنند و فرایند از ثبت سفارش تا تحویل نهایی
                                را بهینه‌سازی نمایند.
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
                            <Sparkles className="w-8 h-8 text-[#1F1BF5]" />
                        </div>
                        <h2 className="text-4xl">معرفی پروژه</h2>
                    </div>

                    <div className="bg-gradient-to-br from-[#1F1BF5]/5 to-[#1F1BF5]/10 rounded-3xl p-8 border-r-4 border-[#1F1BF5]">
                        <p className="text-xl text-neutral-700 leading-relaxed text-right mb-6">
                            شرکت ما که به تازگی وارد عرصه خدمات طراحی و توسعه
                            شده بود، در تلاش بود تا با ارائه سرویس‌های با کیفیت
                            و به‌روز، خود را در بازار رقابتی تثبیت کند. این شرکت
                            در ابتدا خدمات خود را به صورت سنتی به مشتریان عرضه
                            می‌کرد، اما به دلیل رشد سریع پروژه‌ها و افزایش تعداد
                            مشتریان، نیاز به یک سیستم یکپارچه برای مدیریت
                            سفارشات، صورت‌حساب‌ها، پرداخت‌ها و پشتیبانی احساس
                            شد.
                        </p>
                        <div className="bg-white/50 rounded-2xl p-6">
                            <p className="text-lg text-neutral-800 leading-relaxed text-right">
                                هدف از این پنل، ساده‌سازی فرایندهای کاری برای
                                کاربران داخلی و بهبود تجربه مشتریان در استفاده
                                از خدمات شرکت بود.
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* شناسایی نیازها */}
                <motion.section
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-4 mb-8 justify-start">
                        <div className="w-16 h-16 bg-[#1F1BF5]/10 rounded-2xl flex items-center justify-center">
                            <Search className="w-8 h-8 text-[#1F1BF5]" />
                        </div>
                        <h2 className="text-4xl">شناسایی نیازها</h2>
                    </div>

                    <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-3xl p-8 mb-8">
                        <h3 className="text-2xl mb-6 text-right text-[#1F1BF5]">
                            چالش‌های اولیه:
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white rounded-2xl p-6 border-r-4 border-red-400">
                                <p className="text-lg text-neutral-700 text-right leading-relaxed">
                                    فرایندهای قبلی کاملاً سنتی و پراکنده بودند
                                </p>
                            </div>
                            <div className="bg-white rounded-2xl p-6 border-r-4 border-red-400">
                                <p className="text-lg text-neutral-700 text-right leading-relaxed">
                                    مشکلات در روند سفارش‌گیری، پرداخت‌ها و
                                    پشتیبانی
                                </p>
                            </div>
                            <div className="bg-white rounded-2xl p-6 border-r-4 border-red-400">
                                <p className="text-lg text-neutral-700 text-right leading-relaxed">
                                    عدم وجود یک بستر یکپارچه برای اطلاعات
                                </p>
                            </div>
                            <div className="bg-white rounded-2xl p-6 border-r-4 border-red-400">
                                <p className="text-lg text-neutral-700 text-right leading-relaxed">
                                    دسترسی سخت تیم‌های پشتیبانی به اطلاعات
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-lg">
                        <h3 className="text-2xl mb-6 text-right text-neutral-800">
                            روش تحقیق:
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 justify-end">
                                <div className="bg-[#1F1BF5]/10 rounded-xl w-12 h-12 flex items-center justify-center flex-shrink-0">
                                    <Users className="w-6 h-6 text-[#1F1BF5]" />
                                </div>
                                <div className="text-right flex-1">
                                    <p className="text-lg text-neutral-700 leading-relaxed">
                                        مصاحبه‌های فردی با اعضای تیم
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 justify-end">
                                <div className="bg-[#1F1BF5]/10 rounded-xl w-12 h-12 flex items-center justify-center flex-shrink-0">
                                    <MessageSquare className="w-6 h-6 text-[#1F1BF5]" />
                                </div>
                                <div className="text-right flex-1">
                                    <p className="text-lg text-neutral-700 leading-relaxed">
                                        بررسی بازخوردهای مشتریان و تحلیل نیازهای
                                        روزمره
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 justify-end">
                                <div className="bg-[#1F1BF5]/10 rounded-xl w-12 h-12 flex items-center justify-center flex-shrink-0">
                                    <Target className="w-6 h-6 text-[#1F1BF5]" />
                                </div>
                                <div className="text-right flex-1">
                                    <p className="text-lg text-neutral-700 leading-relaxed">
                                        بررسی سیستم‌های مشابه در صنعت
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* طراحی اولیه */}
                <motion.section
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-4 mb-8 justify-cente">
                        <div className="w-16 h-16 bg-[#1F1BF5]/10 rounded-2xl flex items-center justify-center">
                            <Lightbulb className="w-8 h-8 text-[#1F1BF5]" />
                        </div>
                        <h2 className="text-4xl">
                            طراحی اولیه و انتخاب ویژگی‌ها
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-white rounded-2xl p-8 border border-neutral-200 shadow-lg">
                            <div className="flex justify-start mb-4">
                                <div className="w-14 h-14 bg-[#1F1BF5] rounded-xl flex items-center justify-center">
                                    <UserCheck className="w-7 h-7 text-white" />
                                </div>
                            </div>
                            <h3 className="text-xl mb-3 text-right">
                                حساب کاربری
                            </h3>
                            <p className="text-neutral-600 leading-relaxed text-right">
                                اطلاعات شخصی، سوابق سفارشات و قابلیت‌های مدیریت
                                تنظیمات
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 border border-neutral-200 shadow-lg">
                            <div className="flex justify-start mb-4">
                                <div className="w-14 h-14 bg-[#1F1BF5] rounded-xl flex items-center justify-center">
                                    <DollarSign className="w-7 h-7 text-white" />
                                </div>
                            </div>
                            <h3 className="text-xl mb-3 text-right">
                                مدیریت مالی
                            </h3>
                            <p className="text-neutral-600 leading-relaxed text-right">
                                گزارش تراکنش‌ها، صورت‌حساب‌ها و وضعیت پرداخت‌ها
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 border border-neutral-200 shadow-lg">
                            <div className="flex justify-start mb-4">
                                <div className="w-14 h-14 bg-[#1F1BF5] rounded-xl flex items-center justify-center">
                                    <MessageSquare className="w-7 h-7 text-white" />
                                </div>
                            </div>
                            <h3 className="text-xl mb-3 text-right">
                                خدمات و پشتیبانی
                            </h3>
                            <p className="text-neutral-600 leading-relaxed text-right">
                                سیستم تیکتینگ ساده و کارآمد برای پاسخ سریع
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 border border-neutral-200 shadow-lg">
                            <div className="flex justify-start mb-4">
                                <div className="w-14 h-14 bg-[#1F1BF5] rounded-xl flex items-center justify-center">
                                    <Settings className="w-7 h-7 text-white" />
                                </div>
                            </div>
                            <h3 className="text-xl mb-3 text-right">
                                سرویس‌های من
                            </h3>
                            <p className="text-neutral-600 leading-relaxed text-right">
                                مشاهده و مدیریت خدمات به‌صورت ساده
                            </p>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-[#1F1BF5]/5 to-blue-50 rounded-3xl p-8 border-r-4 border-[#1F1BF5]">
                        <h3 className="text-2xl mb-4 text-right text-[#1F1BF5]">
                            تمرکز اصلی:
                        </h3>
                        <p className="text-xl text-neutral-700 leading-relaxed text-right">
                            در این کیس استادی، تمرکز بیشتر بر روی چالش اصلی
                            پروژه است؛ یعنی{" "}
                            <span className="text-[#1F1BF5]">
                                طراحی و بهینه‌سازی فرایند شروع سفارش
                            </span>
                            .
                        </p>
                    </div>
                </motion.section>

                {/* بنچ‌مارک */}
                <motion.section
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-4 mb-8 justify-start">
                        <div className="w-16 h-16 bg-[#1F1BF5]/10 rounded-2xl flex items-center justify-center">
                            <TrendingUp className="w-8 h-8 text-[#1F1BF5]" />
                        </div>
                        <h2 className="text-4xl">بنچ‌مارک فرایند شروع سفارش</h2>
                    </div>

                    <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-3xl p-8 mb-8">
                        <h3 className="text-2xl mb-6 text-right text-neutral-800">
                            جمع‌بندی سریع:
                        </h3>
                        <div className="space-y-4">
                            <div className="bg-white rounded-2xl p-6">
                                <div className="flex items-start gap-3 justify-end">
                                    <CheckCircle2 className="w-6 h-6 text-[#1F1BF5] flex-shrink-0 mt-1" />
                                    <p className="text-lg text-neutral-700 text-right flex-1 leading-relaxed">
                                        <span className="text-[#1F1BF5]">
                                            هسته مشترک همه پلتفرم‌ها:
                                        </span>{" "}
                                        شروع سریع با چند سؤال کلیدی (چی می‌خوای؟
                                        تا کی؟ با چه بودجه‌ای؟) + تکمیل جزئیات
                                        در مراحل بعد
                                    </p>
                                </div>
                            </div>
                            <div className="bg-white rounded-2xl p-6">
                                <div className="flex items-start gap-3 justify-end">
                                    <p className="text-lg text-neutral-700 text-right flex-1 leading-relaxed">
                                        <span className="text-[#1F1BF5]">
                                            دو الگوی غالب:
                                        </span>{" "}
                                        Matchmaking سریع با فرم کوتاه در مقابل
                                        Job Post کامل + انتخاب فعال
                                    </p>
                                </div>
                            </div>
                            <div className="bg-white rounded-2xl p-6">
                                <div className="flex items-start gap-3 justify-end">
                                    <CheckCircle2 className="w-6 h-6 text-[#1F1BF5] flex-shrink-0 mt-1" />
                                    <p className="text-lg text-neutral-700 text-right flex-1 leading-relaxed">
                                        <span className="text-[#1F1BF5]">
                                            مسیر پریمیوم:
                                        </span>{" "}
                                        کیفیت برتر با فیلتر سخت‌گیرانه و فرم
                                        دقیق‌تر
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Comparison Cards */}
                    <div className="space-y-6 mb-8">
                        {/* Fiverr */}
                        <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-lg">
                            <div className="flex items-center gap-4 mb-6 justify-end">
                                <h3 className="text-2xl text-[#1F1BF5]">
                                    Fiverr
                                </h3>
                                <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
                                    <Zap className="w-6 h-6 text-green-500" />
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="text-right">
                                    <h4 className="text-lg mb-3 text-neutral-800">
                                        نکات فرم‌گیری:
                                    </h4>
                                    <ul className="space-y-2">
                                        <li className="text-neutral-600 leading-relaxed">
                                            • شروع سریع: ۳ سؤال طلایی
                                        </li>
                                        <li className="text-neutral-600 leading-relaxed">
                                            • Matchmaking خودکار
                                        </li>
                                    </ul>
                                </div>
                                <div className="text-right bg-green-50 rounded-2xl p-4">
                                    <h4 className="text-lg mb-3 text-green-900">
                                        برداشت برای پنل ما:
                                    </h4>
                                    <p className="text-neutral-700 leading-relaxed">
                                        فرم دو مرحله‌ای + کمک‌یار هوشمند
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Upwork */}
                        <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-lg">
                            <div className="flex items-center gap-4 mb-6 justify-end">
                                <h3 className="text-2xl text-[#1F1BF5]">
                                    Upwork
                                </h3>
                                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
                                    <Briefcase className="w-6 h-6 text-blue-500" />
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="text-right">
                                    <h4 className="text-lg mb-3 text-neutral-800">
                                        نکات فرم‌گیری:
                                    </h4>
                                    <ul className="space-y-2">
                                        <li className="text-neutral-600 leading-relaxed">
                                            • تأکید بر اسکوپ دقیق
                                        </li>
                                        <li className="text-neutral-600 leading-relaxed">
                                            • نوع پرداخت از ابتدا روشن
                                        </li>
                                    </ul>
                                </div>
                                <div className="text-right bg-blue-50 rounded-2xl p-4">
                                    <h4 className="text-lg mb-3 text-blue-900">
                                        برداشت برای پنل ما:
                                    </h4>
                                    <p className="text-neutral-700 leading-relaxed">
                                        الگوی اسکوپ‌بندی + انتخاب نوع قرارداد
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Toptal */}
                        <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-lg">
                            <div className="flex items-center gap-4 mb-6 justify-end">
                                <h3 className="text-2xl text-[#1F1BF5]">
                                    Toptal
                                </h3>
                                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center">
                                    <Award className="w-6 h-6 text-purple-500" />
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="text-right">
                                    <h4 className="text-lg mb-3 text-neutral-800">
                                        نکات فرم‌گیری:
                                    </h4>
                                    <ul className="space-y-2">
                                        <li className="text-neutral-600 leading-relaxed">
                                            • تمرکز بر کیفیت بالا
                                        </li>
                                        <li className="text-neutral-600 leading-relaxed">
                                            • فیلترینگ سخت
                                        </li>
                                    </ul>
                                </div>
                                <div className="text-right bg-purple-50 rounded-2xl p-4">
                                    <h4 className="text-lg mb-3 text-purple-900">
                                        برداشت برای پنل ما:
                                    </h4>
                                    <p className="text-neutral-700 leading-relaxed">
                                        مسیر پریمیوم + جلسه مشاوره
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* جدول مقایسه */}
                    <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-lg overflow-hidden">
                        <h3 className="text-2xl mb-6 text-right text-[#1F1BF5]">
                            جدول مقایسه خلاصه
                        </h3>
                        <div className="overflow-x-auto">
                            <table className="w-full text-right" dir="rtl">
                                <thead>
                                    <tr className="border-b-2 border-[#1F1BF5]">
                                        <th className="p-4 text-lg text-neutral-800">
                                            شاخص متمایز
                                        </th>
                                        <th className="p-4 text-lg text-neutral-800">
                                            انتخاب اجراکننده
                                        </th>
                                        <th className="p-4 text-lg text-neutral-800">
                                            جمع‌آوری کلیدی
                                        </th>
                                        <th className="p-4 text-lg text-neutral-800">
                                            شروع سفارش
                                        </th>
                                        <th className="p-4 text-lg text-neutral-800">
                                            پلتفرم
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-neutral-200 hover:bg-neutral-50">
                                        <td className="p-4 text-neutral-600">
                                            فرم کوتاه + راهنمای AI
                                        </td>
                                        <td className="p-4 text-neutral-600">
                                            Matchmaking + دعوت
                                        </td>
                                        <td className="p-4 text-neutral-600">
                                            کار/بودجه/زمان → جزئیات
                                        </td>
                                        <td className="p-4 text-neutral-600">
                                            Brief سریع
                                        </td>
                                        <td className="p-4 text-[#1F1BF5]">
                                            Fiverr
                                        </td>
                                    </tr>
                                    <tr className="border-b border-neutral-200 hover:bg-neutral-50">
                                        <td className="p-4 text-neutral-600">
                                            اسکوپ شفاف + کنترل
                                        </td>
                                        <td className="p-4 text-neutral-600">
                                            پیشنهادها، مصاحبه
                                        </td>
                                        <td className="p-4 text-neutral-600">
                                            اسکوپ، قرارداد، بودجه
                                        </td>
                                        <td className="p-4 text-neutral-600">
                                            Job Post کامل
                                        </td>
                                        <td className="p-4 text-[#1F1BF5]">
                                            Upwork
                                        </td>
                                    </tr>
                                    <tr className="border-b border-neutral-200 hover:bg-neutral-50">
                                        <td className="p-4 text-neutral-600">
                                            انعطاف + مهارت‌محور
                                        </td>
                                        <td className="p-4 text-neutral-600">
                                            پیشنهادها/Contest
                                        </td>
                                        <td className="p-4 text-neutral-600">
                                            عنوان، مهارت، پرداخت
                                        </td>
                                        <td className="p-4 text-neutral-600">
                                            انتشار پروژه
                                        </td>
                                        <td className="p-4 text-[#1F1BF5]">
                                            Freelancer
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-neutral-50">
                                        <td className="p-4 text-neutral-600">
                                            کیفیت پریمیوم
                                        </td>
                                        <td className="p-4 text-neutral-600">
                                            Match متخصص
                                        </td>
                                        <td className="p-4 text-neutral-600">
                                            مهارت، تجربه، کیفیت
                                        </td>
                                        <td className="p-4 text-neutral-600">
                                            درخواست استخدام
                                        </td>
                                        <td className="p-4 text-[#1F1BF5]">
                                            Toptal
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </motion.section>

                {/* تصمیم طراحی */}
                <motion.section
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-4 mb-8 justify-start">
                        <div className="w-16 h-16 bg-[#1F1BF5]/10 rounded-2xl flex items-center justify-center">
                            <CheckCircle2 className="w-8 h-8 text-[#1F1BF5]" />
                        </div>
                        <h2 className="text-4xl">تصمیم طراحی برای پنل</h2>
                    </div>

                    <div className="grid gap-6">
                        <div className="bg-gradient-to-br from-[#1F1BF5]/5 to-blue-50 rounded-3xl p-8 border-r-4 border-[#1F1BF5]">
                            <div className="flex items-start gap-4 justify-end">
                                <div className="bg-[#1F1BF5] rounded-2xl w-14 h-14 flex items-center justify-center flex-shrink-0">
                                    <span className="text-white text-2xl">
                                        ۱
                                    </span>
                                </div>
                                <div className="text-right flex-1">
                                    <h3 className="text-xl mb-3 text-[#1F1BF5]">
                                        استارت سریع + تکمیل تدریجی
                                    </h3>
                                    <p className="text-lg text-neutral-700 leading-relaxed">
                                        ۳ سؤال ورودی (هدف/بودجه/زمان) → سپس
                                        جزئیات در قدم بعد
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border-r-4 border-green-500">
                            <div className="flex items-start gap-4 justify-end">
                                <div className="bg-green-500 rounded-2xl w-14 h-14 flex items-center justify-center flex-shrink-0">
                                    <span className="text-white text-2xl">
                                        ۲
                                    </span>
                                </div>
                                <div className="text-right flex-1">
                                    <h3 className="text-xl mb-3 text-green-900">
                                        راهنمای تعاملی/AI-Hints
                                    </h3>
                                    <p className="text-lg text-neutral-700 leading-relaxed">
                                        کاهش بار ذهنی کاربر در توصیف نیاز
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border-r-4 border-purple-500">
                            <div className="flex items-start gap-4 justify-end">
                                <div className="bg-purple-500 rounded-2xl w-14 h-14 flex items-center justify-center flex-shrink-0">
                                    <span className="text-white text-2xl">
                                        ۳
                                    </span>
                                </div>
                                <div className="text-right flex-1">
                                    <h3 className="text-xl mb-3 text-purple-900">
                                        الگوهای اسکوپ آماده
                                    </h3>
                                    <p className="text-lg text-neutral-700 leading-relaxed">
                                        Template برای انواع وب‌سایت/سرویس با
                                        ماژول‌های پایه
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8 border-r-4 border-orange-500">
                            <div className="flex items-start gap-4 justify-end">
                                <div className="bg-orange-500 rounded-2xl w-14 h-14 flex items-center justify-center flex-shrink-0">
                                    <span className="text-white text-2xl">
                                        ۴
                                    </span>
                                </div>
                                <div className="text-right flex-1">
                                    <h3 className="text-xl mb-3 text-orange-900">
                                        انتخاب مدل همکاری
                                    </h3>
                                    <p className="text-lg text-neutral-700 leading-relaxed">
                                        ثابت/ساعتی + تعریف مایلستون
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* کشف کلیدی */}
                <motion.section
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mb-16"
                >
                    <div className="bg-gradient-to-br from-[#1F1BF5] to-[#1F1BF5]/80 rounded-3xl p-8 text-white">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="text-5xl">💡</div>
                            <h2 className="text-3xl">کشف کلیدی</h2>
                        </div>
                        <div className="bg-white/10 rounded-2xl p-6 mb-6">
                            <p className="text-xl leading-relaxed text-right">
                                در ادامه، لیستی جامع از انواع وب‌سایت‌های ممکن
                                تهیه کردیم که شامل ماژول‌های پایه و ویژگی‌های
                                پیشرفته آن‌ها بود. هدف ما این بود که در ابتدا به
                                کاربر، دید کاملی از تمام گزینه‌ها بدهیم.
                            </p>
                        </div>
                        <div className="bg-white/10 rounded-2xl p-6">
                            <p className="text-xl leading-relaxed text-right">
                                اما در طی بررسی‌های بعدی و تعامل مستقیم با
                                کاربران، به نکته‌ی مهمی رسیدیم:{" "}
                                <span className="bg-white/20 px-2 py-1 rounded">
                                    بیشتر کاربران ما دانش فنی کافی برای انتخاب
                                    دقیق بین گزینه‌ها را نداشتند
                                </span>{" "}
                                و این آزادی بیش از حد، باعث سردرگمی و تصمیم‌گیری
                                سخت‌تر آن‌ها می‌شد.
                            </p>
                        </div>
                    </div>

                    {/* Images Column */}
                    <div className="mt-8 space-y-4">
                        {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                            <div key={num} className="overflow-hidden">
                                <ImageWithFallback
                                    src={`/assets/images/casestudy/fiotrix/${num}.png`}
                                    alt={`تصویر ${num}`}
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* راه‌حل نهایی */}
                <motion.section
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    className="mb-16"
                >
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border-r-4 border-green-500">
                        <h3 className="text-2xl mb-6 text-right text-green-900">
                            راه‌حل:
                        </h3>
                        <p className="text-xl text-neutral-700 leading-relaxed text-right mb-6">
                            تصمیم گرفتیم تا تعداد و نوع سوالات را برای هر سرویس
                            محدودتر کنیم و تمرکز را از روی انتخاب‌های فنی به سمت
                            درک نیاز کاربر ببریم.
                        </p>
                        <div className="bg-white rounded-2xl p-6">
                            <p className="text-lg text-neutral-800 leading-relaxed text-right">
                                این تغییر، نقطه‌ی عطفی در طراحی تجربه کاربری پنل
                                بود؛ چون به جای ساخت یک فرم پیچیده با گزینه‌های
                                متعدد،{" "}
                                <span className="text-green-600">
                                    تجربه‌ای ساده، واضح و انسانی
                                </span>{" "}
                                برای کاربر ایجاد کردیم.
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* طراحی UI/UX */}
                <motion.section
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mb-8"
                >
                    <div className="flex items-center gap-4 mb-8 justify-start">
                        <div className="w-16 h-16 bg-[#1F1BF5]/10 rounded-2xl flex items-center justify-center">
                            <FileText className="w-8 h-8 text-[#1F1BF5]" />
                        </div>
                        <h2 className="text-4xl">طراحی UI/UX</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        {/* UX */}
                        <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-lg">
                            <h3 className="text-2xl mb-6 text-right text-[#1F1BF5]">
                                طراحی تجربه کاربری (UX)
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3 justify-end">
                                    <CheckCircle2 className="w-6 h-6 text-[#1F1BF5] flex-shrink-0 mt-1" />
                                    <p className="text-neutral-700 text-right flex-1 leading-relaxed">
                                        نمایش واضح و برجسته اطلاعات مالی مهم
                                    </p>
                                </div>
                                <div className="flex items-start gap-3 justify-end">
                                    <CheckCircle2 className="w-6 h-6 text-[#1F1BF5] flex-shrink-0 mt-1" />
                                    <p className="text-neutral-700 text-right flex-1 leading-relaxed">
                                        استفاده از هایراکی مناسب برای اطلاعات
                                    </p>
                                </div>
                                <div className="flex items-start gap-3 justify-end">
                                    <CheckCircle2 className="w-6 h-6 text-[#1F1BF5] flex-shrink-0 mt-1" />
                                    <p className="text-neutral-700 text-right flex-1 leading-relaxed">
                                        سیستم تیکتینگ ساده برای پشتیبانی
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* UI */}
                        <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-lg">
                            <h3 className="text-2xl mb-6 text-right text-[#1F1BF5]">
                                طراحی رابط کاربری (UI)
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3 justify-end">
                                    <CheckCircle2 className="w-6 h-6 text-[#1F1BF5] flex-shrink-0 mt-1" />
                                    <p className="text-neutral-700 text-right flex-1 leading-relaxed">
                                        طراحی ساده، تمیز و شکیل
                                    </p>
                                </div>
                                <div className="flex items-start gap-3 justify-end">
                                    <CheckCircle2 className="w-6 h-6 text-[#1F1BF5] flex-shrink-0 mt-1" />
                                    <p className="text-neutral-700 text-right flex-1 leading-relaxed">
                                        کارت‌های جداگانه با رنگ‌های ملایم
                                    </p>
                                </div>
                                <div className="flex items-start gap-3 justify-end">
                                    <CheckCircle2 className="w-6 h-6 text-[#1F1BF5] flex-shrink-0 mt-1" />
                                    <p className="text-neutral-700 text-right flex-1 leading-relaxed">
                                        نمای ساده و منطقی در تمام بخش‌ها
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-[#1F1BF5]/5 to-[#1F1BF5]/10 rounded-3xl p-8 border-r-4 border-[#1F1BF5]">
                        <p className="text-xl text-neutral-700 leading-relaxed text-right">
                            در نهایت، تمامی این بخش‌ها تحت بررسی دقیق و
                            بازخوردهای تیم و کاربران قرار گرفت تا اطمینان حاصل
                            شود که طراحی نهایی،{" "}
                            <span className="text-[#1F1BF5]">
                                نیازهای همه‌ی ذینفعان را برآورده می‌کند
                            </span>{" "}
                            و تجربه‌ای بی‌نقص و راحت برای کاربران فراهم می‌آورد.
                        </p>
                    </div>
                </motion.section>
                <div className="flex items-center gap-4 mb-8 justify-start">
                    <div className="w-16 h-16 bg-[#1F1BF5]/10 rounded-2xl flex items-center justify-center">
                        <Pen className="w-8 h-8 text-[#1F1BF5]" />
                    </div>
                    <h2 className="text-4xl">طراحی لندینگ‌پیج</h2>
                </div>
                {/* گالری */}

                <div className="max-w-6xl mx-auto p-8 md:p-12">
                    {/* <div className="flex items-center gap-4 mb-8 justify-start">
                            <div className="w-16 h-16 bg-[#1F1BF5]/10 rounded-2xl flex items-center justify-center">
                                <Pen className="w-8 h-8 text-[#1F1BF5]" />
                            </div>
                            <h2 className="text-4xl">طراحی نهایی</h2>
                        </div> */}

                    <div className="mb-16 mt-16">
                        {/* <h3 className="text-2xl mb-4">مدیریت کیوسک</h3> */}
                        <div className="grid md:grid-cols-4 gap-6">
                            {landingImages.map((image, index) => (
                                <div
                                    onClick={() =>
                                        openImage(index, landingImages)
                                    }
                                    key={index}
                                    className="relative group cursor-pointer"
                                    style={{ paddingTop: "100%" }} // This forces the grid items to be square
                                >
                                    <ImageWithFallback
                                        src={image}
                                        alt={`تصویر کیوسک ${index + 1}`}
                                        className="absolute top-0 left-0 w-full h-full object-cover transition-all duration-300 transform group-hover:scale-110"
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
                            className="relative  bg-white rounded-lg p-4 w-4/5 max-w-3xl  "
                            initial={{ scale: 0.5 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.3 }}
                            onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside
                        >
                            {/* Image Container with Scroll */}
                            <div
                                style={{
                                    maxHeight: "80vh",
                                    overflowY: "auto",
                                }}
                                className=" "
                            >
                                {/* Image */}
                                <img
                                    src={selectedImage}
                                    alt="تصویر بزرگ"
                                    className="w-full object-contain rounded-lg"
                                />
                            </div>

                            {/* Close Button */}
                            <div className="absolute top-2 right-2 z-60">
                                <button
                                    onClick={closeImage}
                                    className="text-white bg-black rounded-full p-2"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Left and Right Navigation */}
                            <div
                                className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer hover:bg-gray-700 p-2 rounded-full"
                                onClick={() =>
                                    changeImage("left", landingImages)
                                }
                            >
                                <ArrowLeft className="w-8 h-8 text-black" />
                            </div>
                            <div
                                className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer hover:bg-gray-700 p-2 rounded-full"
                                onClick={() =>
                                    changeImage("right", landingImages)
                                }
                            >
                                <ArrowRight className="w-8 h-8 text-black" />
                            </div>
                        </motion.div>
                    </div>
                )}
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
                        <h2 className="text-4xl">پروتوتایپ فیگما</h2>
                    </div>

                    <div className="bg-gradient-to-br from-[#1F1BF5]/5 to-[#1F1BF5]/10 rounded-3xl p-8 border-r-4 border-[#1F1BF5]">
                        <iframe
                            src="https://embed.figma.com/proto/4ic2bKAlgcjvwS65Yv6TD8/FIOTRIX?page-id=0%3A1&node-id=2648-8106&viewport=2899%2C-725%2C0.08&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=2648%3A8106&embed-host=share"
                            width="100%" // عرض کامل
                            height="600" // ارتفاع مورد نظر
                            style={{ border: "none" }}
                            title="Figma Prototype"
                            allowFullScreen
                        />
                    </div>
                </motion.section>
            </div>
        </div>
    );
}

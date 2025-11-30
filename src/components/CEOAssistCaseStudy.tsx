import { motion } from "motion/react";
import {
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
    Monitor,
    Users,
    TestTube,
    Lightbulb,
    Layers,
    Moon,
    Sun,
    Code,
    CheckCircle2,
    AlertCircle,
    Settings,
    BarChart3,
    Shield,
    Layout,
    Smartphone,
    Database,
    GraduationCap,
    Target,
    Workflow,
    Pen,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState, useEffect } from "react";

interface CEOAssistCaseStudyProps {
    onBack: () => void;
}

export function CEOAssistCaseStudy({ onBack }: CEOAssistCaseStudyProps) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(-1);

    // آدرس تصاویر برای هر بخش
    const landingImages = [
        "/assets/images/casestudy/ceoassist/landing/Blue(Chatbot).png",
        "/assets/images/casestudy/ceoassist/landing/About Us.png",
        "/assets/images/casestudy/ceoassist/landing/Blog.png",
        "/assets/images/casestudy/ceoassist/landing/Blog Details.png",
        "/assets/images/casestudy/ceoassist/landing/Contact US.png",
        "/assets/images/casestudy/ceoassist/landing/Get Pwa.png",
        "/assets/images/casestudy/ceoassist/landing/emptt.png",
    ];

    // Handle image click to open modal and set the current image
    const openImage = (index: number, imagesource: Array) => {
        setSelectedImage(imagesource[index]); // Change this based on which array (kioskImages, userImages, salesImages) you are using
        setCurrentImageIndex(index);
    };

    // Handle closing the modal
    const closeImage = () => {
        setSelectedImage(null);
        setCurrentImageIndex(-1);
    };

    // Handle changing the image in the modal (next or previous)
    const changeImage = (direction: "left" | "right", imagesource: Array) => {
        let newIndex = currentImageIndex;
        if (direction === "left") {
            newIndex =
                currentImageIndex === 0
                    ? imagesource.length - 1
                    : currentImageIndex - 1;
        } else if (direction === "right") {
            newIndex =
                currentImageIndex === imagesource.length - 1
                    ? 0
                    : currentImageIndex + 1;
        }
        setSelectedImage(imagesource[newIndex]); // Again, choose from the correct array
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
        <div className="min-h-screen bg-white" dir="rtl">
            {/* Header */}
            <div
                style={{ backgroundcolor: "#97b3f0" }}
                className="relative  text-white overflow-hidden"
            >
                {/* Back Button */}
                <div className="absolute top-8 right-8 z-20">
                    <button
                        onClick={onBack}
                        className="flex items-center gap-2 px-6 py-3 bg-white text-neutral-900 rounded-full hover:bg-neutral-100 transition-colors"
                    >
                        <ArrowRight className="w-5 h-5 " />
                        <span>بازگشت</span>
                    </button>
                </div>

                {/* Image Container */}
                <div className="relative h-[380px] flex items-center justify-center p-12 pt-24">
                    <div className="relative max-w-4xl w-full">
                        <ImageWithFallback
                            src="../../assets/images/casestudy/ceoassist/ceoassist_header.svg"
                            alt="CEO Assist"
                            className="w-full h-auto rounded-2xl"
                        />
                    </div>
                </div>

                {/* Project Overview Box */}
                <div className="relative -mt-16 px-12 pb-12 z-10">
                    <div className="max-w-5xl mx-auto bg-white rounded-3xl p-8 shadow-2xl">
                        <div className="text-right">
                            <p className="text-xl text-neutral-700 leading-relaxed mb-4">
                                <span className="text-[#1F1BF5]">
                                    CEO Assist
                                </span>{" "}
                                یک اپلیکیشن چت‌بات هوش مصنوعی است که با داده‌های
                                تخصصی بیزینسی تقویت شده و به دو گروه اصلی
                                کاربر—یادگیرندگان بیزینس و صاحبان کسب‌وکار—کمک
                                می‌کند تا تصمیمات بهتری بگیرند.
                            </p>
                            <p className="text-lg text-neutral-600 leading-relaxed">
                                این پروژه با هدف ایجاد تجربه‌ای ساده برای
                                تصمیم‌گیری‌های پیچیده طراحی شده است. اپلیکیشن
                                به‌صورت دوزبانه با استفاده از Figma Variables
                                طراحی شد و شامل صفحه اصلی هوشمند، سیستم چت، و
                                بخش تیکتینگ می‌باشد.
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
                            <Brain className="w-8 h-8 text-[#1F1BF5]" />
                        </div>
                        <h2 className="text-4xl">معرفی پروژه</h2>
                    </div>

                    <div className="bg-gradient-to-br from-[#1F1BF5]/5 to-[#1F1BF5]/10 rounded-3xl p-8 border-r-4 border-[#1F1BF5]">
                        <p className="text-xl text-neutral-700 leading-relaxed text-right mb-6">
                            توی این پروژه مسئول طراحی یه اپلیکیشن چت‌بات هوش
                            مصنوعی بودم که با{" "}
                            <span className="text-[#1F1BF5]">
                                داده‌های تخصصی بیزینسی
                            </span>{" "}
                            تقویت شده بود تا به دو گروه اصلی کاربر—کسایی که دارن
                            بیزینس یاد می‌گیرن یا خودشون کسب‌وکار دارن—کمک کنه
                            راحت‌تر مسیرشونو پیدا کنن یا تصمیم بگیرن.
                        </p>

                        <div className="bg-white/70 rounded-2xl p-6 mb-6">
                            <div className="flex items-start gap-3 justify-end">
                                <Target className="w-8 h-8 text-[#1F1BF5] flex-shrink-0 mt-1" />
                                <p className="text-lg text-neutral-800 text-right flex-1 leading-relaxed">
                                    هرچند فلو کلی اپلیکیشن خیلی پیچیده نبود، اما
                                    طراحی تجربه‌ای که{" "}
                                    <span className="text-[#1F1BF5]">
                                        هم ساده باشه، هم هوشمند و کاربردی
                                    </span>
                                    ، برام یه چالش جدی بود.
                                </p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white/70 rounded-2xl p-6">
                                <div className="flex items-center gap-3 justify-start mb-3">
                                    <Globe className="w-6 h-6 text-[#1F1BF5]" />
                                    <h3 className="text-lg">دوزبانه بودن</h3>
                                </div>
                                <p className="text-neutral-700 text-right leading-relaxed">
                                    اپلیکیشن به‌صورت دوزبانه طراحی شد
                                </p>
                            </div>

                            <div className="bg-white/70 rounded-2xl p-6">
                                <div className="flex items-center gap-3 justify-start mb-3">
                                    <Palette className="w-6 h-6 text-[#1F1BF5]" />
                                    <h3 className="text-lg">رنگ‌تم اختصاصی</h3>
                                </div>
                                <p className="text-neutral-700 text-right leading-relaxed">
                                    برای هر زبان رنگ‌تم جداگانه با Figma
                                    Variables
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
                    <div className="flex items-center gap-4 mb-8 justify-start">
                        <div className="w-16 h-16 bg-[#1F1BF5]/10 rounded-2xl flex items-center justify-center">
                            <Layers className="w-8 h-8 text-[#1F1BF5]" />
                        </div>
                        <h2 className="text-4xl">بخش‌های اپلیکیشن</h2>
                    </div>

                    <div className="space-y-6">
                        {/* صفحه اصلی */}
                        <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-lg">
                            <div className="flex items-start gap-4 justify-start">
                                <div className="bg-[#1F1BF5] rounded-2xl w-14 h-14 flex items-center justify-center flex-shrink-0">
                                    <Home className="w-7 h-7 text-white" />
                                </div>
                                <div className="text-right flex-1">
                                    <h3 className="text-2xl mb-4 text-[#1F1BF5]">
                                        صفحه اصلی هوشمند
                                    </h3>
                                    <p className="text-lg text-neutral-700 leading-relaxed">
                                        یه صفحه اصلی که براساس{" "}
                                        <span className="text-[#1F1BF5]">
                                            اطلاعات و رفتار کاربر
                                        </span>
                                        ، یه سری Quick Action هدفمند بهش پیشنهاد
                                        می‌داد
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* چت اصلی */}
                        <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-lg">
                            <div className="flex items-start gap-4 justify-start">
                                <div className="bg-[#1F1BF5] rounded-2xl w-14 h-14 flex items-center justify-center flex-shrink-0">
                                    <MessageSquare className="w-7 h-7 text-white" />
                                </div>
                                <div className="text-right flex-1">
                                    <h3 className="text-2xl mb-4 text-[#1F1BF5]">
                                        چت و تاریخچه
                                    </h3>
                                    <p className="text-lg text-neutral-700 leading-relaxed">
                                        صفحه چت اصلی و تاریخچه گفتگوها
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* تیکت */}
                        <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-lg">
                            <div className="flex items-start gap-4 justify-end">
                                <div className="bg-[#1F1BF5] rounded-2xl w-14 h-14 flex items-center justify-center flex-shrink-0">
                                    <Ticket className="w-7 h-7 text-white" />
                                </div>
                                <div className="text-right flex-1">
                                    <h3 className="text-2xl mb-4 text-[#1F1BF5]">
                                        سیستم تیکتینگ
                                    </h3>
                                    <p className="text-lg text-neutral-700 leading-relaxed">
                                        بخش ایجاد تیکت برای مشکلات و درخواست‌ها
                                    </p>
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
                    <div className="flex items-center gap-4 mb-8 justify-start">
                        <h2 className="text-4xl">گروه‌های کاربری</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gradient-to-br from-[#1F1BF5]/5 to-blue-50 rounded-3xl p-8 border-r-4 border-[#1F1BF5]">
                            <div className="flex items-center gap-3 justify-start mb-6">
                                <Users className="w-8 h-8 text-[#1F1BF5]" />
                                <h3 className="text-2xl text-[#1F1BF5]">
                                    یادگیرندگان بیزینس
                                </h3>
                            </div>
                            <p className="text-lg text-neutral-700 text-right leading-relaxed">
                                کسایی که دارن بیزینس یاد می‌گیرن و به دنبال
                                راهنمایی و اطلاعات تخصصی هستند
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border-r-4 border-green-500">
                            <div className="flex items-center gap-3 justify-start mb-6">
                                <Target className="w-8 h-8 text-green-600" />
                                <h3 className="text-2xl text-green-900">
                                    صاحبان کسب‌وکار
                                </h3>
                            </div>
                            <p className="text-lg text-neutral-700 text-right leading-relaxed">
                                کسانی که خودشون کسب‌وکار دارن و برای
                                تصمیم‌گیری‌های بهتر نیاز به مشاوره دارند
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
                    <div className="flex items-center gap-4 mb-8 justify-start">
                        <div className="w-16 h-16 bg-[#1F1BF5]/10 rounded-2xl flex items-center justify-center">
                            <Palette className="w-8 h-8 text-[#1F1BF5]" />
                        </div>
                        <h2 className="text-4xl">سیستم طراحی دوزبانه</h2>
                    </div>

                    <div className="bg-gradient-to-br from-[#1F1BF5]/5 to-purple-50 rounded-3xl p-8 border-r-4 border-[#1F1BF5]">
                        <div className="flex items-center gap-3 justify-start mb-6">
                            <Sparkles className="w-8 h-8 text-[#1F1BF5]" />
                            <h3 className="text-2xl text-[#1F1BF5]">
                                Figma Variables
                            </h3>
                        </div>

                        <p className="text-xl text-neutral-700 leading-relaxed text-right mb-6">
                            برای هر زبان یه رنگ‌تم اختصاصی در نظر گرفتیم که با{" "}
                            <span className="text-[#1F1BF5]">
                                variable های فیگما
                            </span>{" "}
                            مدیریت شد و توی ساختار طراحی کلی لحاظ شده بود.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white/70 rounded-2xl p-6">
                                <h4 className="text-lg mb-3 text-[#1F1BF5] text-right">
                                    مدیریت متمرکز
                                </h4>
                                <p className="text-neutral-700 text-right leading-relaxed">
                                    استفاده از Variables برای کنترل راحت‌تر
                                    تم‌ها
                                </p>
                            </div>

                            <div className="bg-white/70 rounded-2xl p-6">
                                <h4 className="text-lg mb-3 text-[#1F1BF5] text-right">
                                    یکپارچگی طراحی
                                </h4>
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
                    <div className="flex items-center gap-4 mb-8 justify-start">
                        <div className="w-16 h-16 bg-[#1F1BF5]/10 rounded-2xl flex items-center justify-center">
                            <Pen className="w-8 h-8 text-[#1F1BF5]" />
                        </div>
                        <h2 className="text-4xl">طراحی لندینگ‌پیج</h2>
                    </div>

                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border-r-4 border-purple-500">
                        <p className="text-xl text-neutral-700 leading-relaxed text-right mb-6">
                            طراحی لندینگ‌پیج‌های این محصول هم با من بود؛ جایی که
                            باید{" "}
                            <span className="text-purple-700">
                                ترکیب دقیقی از جذابیت بصری و محتوای هوشمندانه
                            </span>{" "}
                            ارائه می‌دادیم تا بتونیم کاربر رو قانع کنیم وارد
                            اپلیکیشن بشه.
                        </p>

                        <div className="bg-white/70 rounded-2xl p-6">
                            <div className="flex items-start gap-3 justify-end">
                                <CheckCircle2 className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
                                <p className="text-lg text-neutral-800 text-right flex-1 leading-relaxed">
                                    برای همین به تمام کامپوننت‌ها با دقت فکر شد
                                    و هر بخش با هدف مشخصی طراحی و مستندسازی شد.
                                </p>
                            </div>
                        </div>
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
                        className="mb-16 mt-16"
                    >
                        <div className="flex items-center gap-4 mb-8 justify-start mt-8">
                            <div className="w-16 h-16 bg-[#1F1BF5]/10 rounded-2xl flex items-center justify-center">
                                <FileText className="w-8 h-8 text-[#1F1BF5]" />
                            </div>
                            <h2 className="text-4xl">پروتوتایپ فیگما</h2>
                        </div>

                        <div className="bg-gradient-to-br from-[#1F1BF5]/5 to-[#1F1BF5]/10 rounded-3xl p-8 border-r-4 border-[#1F1BF5]">
                            <iframe
                                src="https://embed.figma.com/proto/dDKOCYKiLXOlwQa1gJdLx3/Chatbot-Landingpage?page-id=0%3A1&node-id=1037-1024&viewport=-496%2C170%2C0.21&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=1037%3A1024&embed-host=share"
                                width="100%" // عرض کامل
                                height="600" // ارتفاع مورد نظر
                                style={{ border: "none" }}
                                title="Figma Prototype"
                                allowFullScreen
                            />
                        </div>
                    </motion.section>
                </motion.section>

                {/* ویژگی‌های کلیدی */}
                <motion.section
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-4 mb-8 justify-start">
                        <div className="w-16 h-16 bg-[#1F1BF5]/10 rounded-2xl flex items-center justify-center">
                            <Sparkles className="w-8 h-8 text-[#1F1BF5]" />
                        </div>
                        <h2 className="text-4xl">ویژگی‌های کلیدی</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-lg">
                            <div className="flex items-center gap-3 justify-start mb-4">
                                <Zap className="w-7 h-7 text-[#1F1BF5]" />
                                <h3 className="text-xl text-[#1F1BF5]">
                                    ساده و کاربردی
                                </h3>
                            </div>
                            <p className="text-lg text-neutral-700 text-right leading-relaxed">
                                تجربه ساده برای تصمیم‌گیری‌های پیچیده
                            </p>
                        </div>

                        <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-lg">
                            <div className="flex items-center gap-3 justify-start mb-4">
                                <Brain className="w-7 h-7 text-[#1F1BF5]" />
                                <h3 className="text-xl text-[#1F1BF5]">
                                    هوش مصنوعی
                                </h3>
                            </div>
                            <p className="text-lg text-neutral-700 text-right leading-relaxed">
                                تقویت شده با داده‌های تخصصی بیزینسی
                            </p>
                        </div>

                        <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-lg">
                            <div className="flex items-center gap-3 justify-start mb-4">
                                <Globe className="w-7 h-7 text-[#1F1BF5]" />
                                <h3 className="text-xl text-[#1F1BF5]">
                                    دوزبانه
                                </h3>
                            </div>
                            <p className="text-lg text-neutral-700 text-right leading-relaxed">
                                پشتیبانی کامل از دو زبان با تم‌های مجزا
                            </p>
                        </div>

                        <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-lg">
                            <div className="flex items-center gap-3 justify-start mb-4">
                                <Zap className="w-7 h-7 text-[#1F1BF5]" />
                                <h3 className="text-xl text-[#1F1BF5]">
                                    Quick Actions
                                </h3>
                            </div>
                            <p className="text-lg text-neutral-700 text-right leading-relaxed">
                                پیشنهادات هوشمند بر اساس رفتار کاربر
                            </p>
                        </div>

                        <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-lg">
                            <div className="flex items-center gap-3 justify-start mb-4">
                                <MessageSquare className="w-7 h-7 text-[#1F1BF5]" />
                                <h3 className="text-xl text-[#1F1BF5]">
                                    تاریخچه چت
                                </h3>
                            </div>
                            <p className="text-lg text-neutral-700 text-right leading-relaxed">
                                دسترسی آسان به گفتگوهای قبلی
                            </p>
                        </div>

                        <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-lg">
                            <div className="flex items-center gap-3 justify-start mb-4">
                                <Ticket className="w-7 h-7 text-[#1F1BF5]" />
                                <h3 className="text-xl text-[#1F1BF5]">
                                    پشتیبانی تیکتی
                                </h3>
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
                    <div className="flex items-center gap-4 mb-8 justify-start">
                        <div className="w-16 h-16 bg-[#1F1BF5]/10 rounded-2xl flex items-center justify-center">
                            <Target className="w-8 h-8 text-[#1F1BF5]" />
                        </div>
                        <h2 className="text-4xl">چالش طراحی</h2>
                    </div>

                    <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8 border-r-4 border-orange-500">
                        <p className="text-2xl text-orange-900 text-right mb-6 leading-relaxed">
                            چطور می‌توانستیم یک تجربه ساده و روان ایجاد کنیم که
                            در عین حال به‌اندازه کافی هوشمند و کاربردی باشد؟
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white/70 rounded-2xl p-6">
                                <h4 className="text-lg mb-3 text-orange-800 text-right">
                                    سادگی
                                </h4>
                                <p className="text-neutral-700 text-right leading-relaxed">
                                    فلو ساده و قابل فهم برای همه کاربران
                                </p>
                            </div>

                            <div className="bg-white/70 rounded-2xl p-6">
                                <h4 className="text-lg mb-3 text-orange-800 text-right">
                                    هوشمندی
                                </h4>
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
                                <div className="flex items-center gap-3 justify-start mb-3">
                                    <CheckCircle2 className="w-6 h-6" />
                                    <h4 className="text-xl">تجربه یکپارچه</h4>
                                </div>
                                <p className="text-lg leading-relaxed text-right text-white/90">
                                    سیستم طراحی جامع و منسجم
                                </p>
                            </div>
                            <div className="bg-white/10 rounded-2xl p-6">
                                <div className="flex items-center gap-3 justify-start mb-3">
                                    <Globe className="w-6 h-6" />
                                    <h4 className="text-xl">دوزبانه کامل</h4>
                                </div>
                                <p className="text-lg leading-relaxed text-right text-white/90">
                                    پشتیبانی از دو زبان با تم‌های اختصاصی
                                </p>
                            </div>
                            <div className="bg-white/10 rounded-2xl p-6">
                                <div className="flex items-center gap-3 justify-start mb-3">
                                    <Brain className="w-6 h-6" />
                                    <h4 className="text-xl">ساده و هوشمند</h4>
                                </div>
                                <p className="text-lg leading-relaxed text-right text-white/90">
                                    ترکیب سادگی و هوش مصنوعی پیشرفته
                                </p>
                            </div>
                            <div className="bg-white/10 rounded-2xl p-6">
                                <div className="flex items-center gap-3 justify-start mb-3">
                                    <Users className="w-6 h-6" />
                                    <h4 className="text-xl">کاربرپسند</h4>
                                </div>
                                <p className="text-lg leading-relaxed text-right text-white/90">
                                    مناسب برای دو گروه مختلف کاربری
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Image Placeholder */}
                    {/* Images Column */}
                    <div className="mt-8 space-y-4">
                        {["blue", "orange"].map((num) => (
                            <div key={num} className="overflow-hidden">
                                <ImageWithFallback
                                    src={`/assets/images/casestudy/ceoassist/${num}.png`}
                                    alt={`تصویر ${num}`}
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </motion.section>
            </div>
        </div>
    );
}

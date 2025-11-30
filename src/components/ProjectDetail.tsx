import { motion } from "motion/react";
import {
    ArrowLeft,
    Target,
    Users,
    Lightbulb,
    Layout,
    Shield,
    Zap,
    Wallet,
    TrendingUp,
    ArrowRight,
    CheckCircle2,
    X,
    User,
    Key,
    Star,
    BookOpen,
    AlertCircle,
    Rocket,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { FoodKioskCaseStudy } from "./FoodKioskCaseStudy";
import { BarpardazCaseStudy } from "./BarpardazCaseStudy";
import { FiotrixCaseStudy } from "./FiotrixCaseStudy";
import { ReminderAgentCaseStudy } from "./ReminderAgentCaseStudy";
import { RasaCodeCaseStudy } from "./RasaCodeCaseStudy";
import { ViseraCaseStudy } from "./ViseraCaseStudy";
import { CEOAssistCaseStudy } from "./CEOAssistCaseStudy";

interface ProjectDetailProps {
    projectId: string;
    onBack: () => void;
}

export function ProjectDetail({ projectId, onBack }: ProjectDetailProps) {
    // Support both numeric IDs and slug paths (e.g. /project/visera)
    const slugToId: Record<string, string> = {
        visera: "12",
        rasacode: "11",
        "reminder-agent": "10",
        fiotrix: "7",
        barpardaz: "9",
        "ceo-assist": "4",
        "food-kiosk": "3",
        wallet: "1",
        ibcentra: "2",
    };

    const normalizedId = /^[0-9]+$/.test(projectId)
        ? projectId
        : slugToId[projectId?.toLowerCase() ?? ""] || projectId;
    // Visera Case Study
    if (normalizedId === "12") {
        return <ViseraCaseStudy onBack={onBack} />;
    }

    // Rasa Code Case Study
    if (normalizedId === "11") {
        return <RasaCodeCaseStudy onBack={onBack} />;
    }

    // Reminder Agent Case Study
    if (normalizedId === "10") {
        return <ReminderAgentCaseStudy onBack={onBack} />;
    }

    // Fiotrix Case Study
    if (normalizedId === "7") {
        return <FiotrixCaseStudy onBack={onBack} />;
    }

    // Barpardaz Case Study
    if (normalizedId === "9") {
        return <BarpardazCaseStudy onBack={onBack} />;
    }

    // CEO Assist Case Study
    if (normalizedId === "4") {
        return <CEOAssistCaseStudy onBack={onBack} />;
    }

    // Food Kiosk Case Study
    if (normalizedId === "3") {
        return <FoodKioskCaseStudy onBack={onBack} />;
    }

    // Wallet App Case Study Content
    if (normalizedId === "1") {
        return (
            <div className="min-h-screen bg-white">
                {/* Header - CEO Assist Style */}
                <div className="relative bg-[#1F1BF5] text-white overflow-hidden">
                    {/* Back Button */}
                    <div className="absolute top-8 left-8 z-20">
                        <button
                            onClick={onBack}
                            className="flex items-center gap-2 px-6 py-3 bg-white text-neutral-900 rounded-full hover:bg-neutral-100 transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            <span>Back</span>
                        </button>
                    </div>
                    {/* Image Container */}
                    <div className="relative h-[500px] flex items-center justify-center p-12 pt-24">
                        <div className="relative max-w-4xl w-full pt-24">
                            <ImageWithFallback
                                src="/assets/images/casestudy/wallet /wallet_header.png"
                                alt="Wallet App"
                                className="w-full h-auto rounded-2xl"
                            />
                        </div>
                    </div>
                    {/* Blue band under header - increased height so it reaches roughly half of Project Overview Box */}
                    <div className="bg-[#1F1BF5] h-48 md:h-64" />
                    {/* Project Overview Box */}
                    <div className="relative -mt-28 px-12 pb-12 z-10">
                        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 shadow-2xl">
                            <h2 className="text-2xl text-center text-neutral-900 mb-6">
                                Project Overview
                            </h2>
                            <div className="text-left ltr">
                                <p className="text-xl text-neutral-700 leading-relaxed mb-4">
                                    <span className="text-[#1F1BF5]">
                                        Wallet App
                                    </span>{" "}
                                    is a secure and intuitive cryptocurrency
                                    wallet designed for easy management of
                                    digital assets.
                                </p>
                                <p className="text-lg text-neutral-600 leading-relaxed">
                                    This project focuses on providing a simple,
                                    user-friendly experience for both new and
                                    experienced crypto users, with a strong
                                    emphasis on security and accessibility.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="max-w-6xl mx-auto p-12">
                    {/* Problem Statement */}
                    <motion.section
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="mb-16"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 bg-[#1F1BF5]/10 rounded-2xl flex items-center justify-center">
                                <span className="text-2xl">🎯</span>
                            </div>
                            <h2 className="text-4xl">Problem Statement</h2>
                        </div>
                        <div className="bg-gradient-to-br from-[#1F1BF5]/5 to-[#1F1BF5]/10 rounded-2xl p-8 border-l-4 border-[#1F1BF5]">
                            <p className="text-xl text-neutral-700 leading-relaxed">
                                "I need a cryptocurrency wallet app that{" "}
                                <span className="text-[#1F1BF5]">
                                    simplifies my transactions
                                </span>{" "}
                                and ensures the{" "}
                                <span className="text-[#1F1BF5]">
                                    security of my digital assets
                                </span>
                                ."
                            </p>
                        </div>
                    </motion.section>

                    {/* Objectives & Goals */}
                    <motion.section
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="mb-16"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 bg-[#1F1BF5]/10 rounded-2xl flex items-center justify-center">
                                <Lightbulb className="w-8 h-8 text-[#1F1BF5]" />
                            </div>
                            <h2 className="text-4xl">Objectives & Goals</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white rounded-2xl p-8 border border-neutral-200 shadow-lg">
                                <div className="w-12 h-12 bg-[#1F1BF5] rounded-xl flex items-center justify-center mb-4">
                                    <Layout className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl mb-3">
                                    Simple & Intuitive Interface
                                </h3>
                                <p className="text-neutral-600 leading-relaxed">
                                    Provide a user-friendly interface that
                                    allows users to easily manage their digital
                                    assets and conduct transactions securely.
                                </p>
                            </div>
                            <div className="bg-white rounded-2xl p-8 border border-neutral-200 shadow-lg">
                                <div className="w-12 h-12 bg-[#1F1BF5] rounded-xl flex items-center justify-center mb-4">
                                    <Shield className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl mb-3">
                                    Maximum Security
                                </h3>
                                <p className="text-neutral-600 leading-relaxed">
                                    Ensure the highest level of security for
                                    users' digital assets with industry-leading
                                    encryption and protection.
                                </p>
                            </div>
                        </div>
                    </motion.section>

                    {/* My Process */}
                    <motion.section
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mb-16"
                    >
                        <h2 className="text-4xl mb-8 text-center">
                            My Process
                        </h2>
                        <div className="grid grid-cols-4 gap-4">
                            {[
                                { label: "Research", icon: "🔍" },
                                { label: "Define", icon: "📋" },
                                { label: "Ideate", icon: "💡" },
                                { label: "Design", icon: "🎨" },
                            ].map((step) => (
                                <div
                                    key={step.label}
                                    className="bg-gradient-to-br from-[#1F1BF5] to-[#1F1BF5]/80 rounded-2xl p-6 text-center text-white"
                                >
                                    <div className="text-4xl mb-3">
                                        {step.icon}
                                    </div>
                                    <p className="text-lg">{step.label}</p>
                                </div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Business Challenges */}
                    <motion.section
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="mb-16"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center">
                                <Zap className="w-8 h-8 text-red-500" />
                            </div>
                            <h2 className="text-4xl">Business Challenges</h2>
                        </div>
                        <div className="bg-red-50 rounded-2xl p-8 border border-red-100">
                            <p className="text-neutral-700 leading-relaxed text-lg">
                                Design a crypto wallet that brings the best
                                experience to the user. This requires careful
                                attention to user interface design, as well as
                                clear and concise instructions for performing
                                common tasks.
                            </p>
                        </div>
                    </motion.section>

                    {/* Product Users */}
                    <motion.section
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="mb-16"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 bg-[#1F1BF5]/10 rounded-2xl flex items-center justify-center">
                                <span className="text-2xl">👥</span>
                            </div>
                            <h2 className="text-4xl">Product Users</h2>
                        </div>
                        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                            <p className="text-neutral-700 leading-relaxed text-lg">
                                Cryptocurrency users tend to be{" "}
                                <span className="text-[#1F1BF5]">
                                    younger adults
                                </span>
                                , with a{" "}
                                <span className="text-[#1F1BF5]">
                                    higher percentage of males than females
                                </span>
                                .
                            </p>
                        </div>
                    </motion.section>

                    {/* Competitor Analysis */}
                    <motion.section
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="mb-16"
                    >
                        <h2 className="text-4xl mb-8">Competitor Analysis</h2>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            {/* Trust Wallet */}
                            <div className="bg-white rounded-2xl p-8 border border-neutral-200 shadow-lg">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                                        <Wallet className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-2xl">Trust Wallet</h3>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <p className="text-neutral-600">
                                            Fast and seamless mobile sign-up
                                            experience
                                        </p>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <p className="text-neutral-600">
                                            Available in multiple languages
                                        </p>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                                        <p className="text-neutral-600">
                                            Lack of direction on how to use the
                                            app
                                        </p>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                                        <p className="text-neutral-600">
                                            Customer support is lacking
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Metamask */}
                            <div className="bg-white rounded-2xl p-8 border border-neutral-200 shadow-lg">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                                        <Wallet className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-2xl">MetaMask</h3>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <p className="text-neutral-600">
                                            Educational videos to help users
                                            navigate
                                        </p>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <p className="text-neutral-600">
                                            Easy connection with NFT
                                            marketplaces
                                        </p>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                                        <p className="text-neutral-600">
                                            No desktop application
                                        </p>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                                        <p className="text-neutral-600">
                                            Networks need to be added manually
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Commonalities */}
                        <div className="bg-neutral-900 rounded-2xl p-8 text-white">
                            <h3 className="text-2xl mb-4">
                                Commonalities Among Competitors
                            </h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="flex items-start gap-2">
                                    <div className="w-2 h-2 bg-[#1F1BF5] rounded-full mt-2 flex-shrink-0" />
                                    <p className="text-white/80">
                                        Support multiple network standards with
                                        manual token addition
                                    </p>
                                </div>
                                <div className="flex items-start gap-2">
                                    <div className="w-2 h-2 bg-[#1F1BF5] rounded-full mt-2 flex-shrink-0" />
                                    <p className="text-white/80">
                                        Apps aren't overloaded with features
                                    </p>
                                </div>
                                <div className="flex items-start gap-2">
                                    <div className="w-2 h-2 bg-[#1F1BF5] rounded-full mt-2 flex-shrink-0" />
                                    <p className="text-white/80">
                                        Poor customer support experience
                                    </p>
                                </div>
                                <div className="flex items-start gap-2">
                                    <div className="w-2 h-2 bg-[#1F1BF5] rounded-full mt-2 flex-shrink-0" />
                                    <p className="text-white/80">
                                        No two-factor authentication or
                                        multisignature support
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* User Persona */}
                    <motion.section
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.9 }}
                        className="mb-16"
                    >
                        <h2 className="text-4xl mb-8">User Persona</h2>
                        <div className="bg-gradient-to-br from-[#1F1BF5]/5 to-purple-50 rounded-3xl p-8 border border-[#1F1BF5]/20">
                            <div className="grid md:grid-cols-3 gap-8 mb-8">
                                <div>
                                    <div className="w-24 h-24 bg-gradient-to-br from-[#1F1BF5] to-[#1F1BF5]/80 rounded-full flex items-center justify-center text-white text-4xl mb-4">
                                        👨‍💻
                                    </div>
                                    <h3 className="text-2xl mb-2">Mohammad</h3>
                                    <p className="text-neutral-600">
                                        Freelance Software Developer
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-neutral-500 mb-1">
                                        Age
                                    </p>
                                    <p className="text-xl mb-4">31</p>
                                    <p className="text-sm text-neutral-500 mb-1">
                                        Location
                                    </p>
                                    <p className="text-xl mb-4">Qazvin</p>
                                </div>
                                <div>
                                    <p className="text-sm text-neutral-500 mb-1">
                                        Education
                                    </p>
                                    <p className="text-xl mb-4">
                                        Computer Science
                                    </p>
                                    <p className="text-sm text-neutral-500 mb-1">
                                        Occupation
                                    </p>
                                    <p className="text-xl">Employee</p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-xl mb-3">Background</h4>
                                    <p className="text-neutral-700 leading-relaxed">
                                        Mohammad has recently started taking an
                                        interest in cryptocurrency trading and
                                        looking to expand his knowledge and
                                        investments in cryptocurrencies.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-xl mb-3">
                                        Goals & Behaviors
                                    </h4>
                                    <p className="text-neutral-700 leading-relaxed">
                                        Mohammad is tech-savvy and enjoys
                                        exploring new technologies and software
                                        applications. He is looking for a
                                        cryptocurrency wallet app that is easy
                                        to use, secure, and reliable. He wants
                                        to be able to manage multiple
                                        cryptocurrencies from one app and have
                                        access to real-time market data.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-xl mb-3">
                                        Pain Points
                                    </h4>
                                    <p className="text-neutral-700 leading-relaxed">
                                        Mohammad is concerned about filtering
                                        for the application in Iran. He is
                                        careful about the security of his
                                        investments and wants to be confident
                                        that the platform he uses is trustworthy
                                        and secure.
                                    </p>
                                </div>

                                <div className="bg-white rounded-2xl p-6 border-l-4 border-[#1F1BF5]">
                                    <p className="text-lg text-neutral-700 italic">
                                        "I am excited about the potential of
                                        cryptocurrencies and want to manage my
                                        digital assets more efficiently. I need
                                        a wallet app that is user-friendly,
                                        secure, and offers real-time market
                                        data."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* Users Review */}
                    {/* User Journey Section */}
                    <motion.section
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="mb-16"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 bg-[#1F1BF5]/10 rounded-2xl flex items-center justify-center">
                                <Layout className="w-8 h-8 text-[#1F1BF5]" />
                            </div>
                            <h2 className="text-4xl">User Journey</h2>
                        </div>
                        <div className="w-full mb-8">
                            <object
                                data="/assets/images/casestudy/wallet /user-journey.svg"
                                type="image/svg+xml"
                                className="w-full h-auto rounded-2xl"
                                aria-label="User Journey"
                            />
                        </div>
                    </motion.section>

                    {/* Users Review Section */}
                    <motion.section
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.02 }}
                        className="mb-16"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 bg-[#1F1BF5]/10 rounded-2xl flex items-center justify-center">
                                <span className="text-2xl">👥</span>
                            </div>
                            <h2 className="text-4xl">Users Review</h2>
                        </div>
                        <div className="w-full">
                            <ImageWithFallback
                                src="/assets/images/casestudy/wallet /review.png"
                                alt="Users Review"
                                className="rounded-2xl w-full h-auto"
                            />
                        </div>
                    </motion.section>

                    {/* Features & Functionalities (moved here) */}
                    <motion.section
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.05 }}
                        className="mb-16"
                    >
                        <h2 className="text-4xl mb-8">
                            Features & Functionalities
                        </h2>
                        <p className="text-xl text-neutral-600 mb-8">
                            To resolve user needs
                        </p>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    title: "Easy Transactions",
                                    icon: Zap,
                                    color: "from-blue-500 to-blue-600",
                                },
                                {
                                    title: "Secure Storage",
                                    icon: Shield,
                                    color: "from-green-500 to-green-600",
                                },
                                {
                                    title: "Multi-Currency Support",
                                    icon: Wallet,
                                    color: "from-purple-500 to-purple-600",
                                },
                                {
                                    title: "User-Friendly Interface",
                                    icon: Layout,
                                    color: "from-orange-500 to-orange-600",
                                },
                            ].map((feature) => (
                                <div
                                    key={feature.title}
                                    className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-lg hover:shadow-xl transition-shadow"
                                >
                                    <div
                                        className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4`}
                                    >
                                        <feature.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-lg">{feature.title}</h3>
                                </div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Sketches */}
                    <motion.section
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.1 }}
                        className="mb-16"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 bg-[#1F1BF5]/10 rounded-2xl flex items-center justify-center">
                                <Layout className="w-8 h-8 text-[#1F1BF5]" />
                            </div>
                            <h2 className="text-4xl">Sketches</h2>
                        </div>
                        <div className="flex justify-center">
                            <object
                                data="/assets/images/casestudy/wallet /sketch.svg"
                                type="image/svg+xml"
                                className="w-full h-[600px] rounded-2xl"
                                aria-label="Sketches"
                                style={{ minHeight: 400 }}
                            />
                        </div>
                    </motion.section>

                    {/* Main Screens */}
                    <motion.section
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        className="mb-16"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 bg-[#1F1BF5]/10 rounded-2xl flex items-center justify-center">
                                <Shield className="w-8 h-8 text-[#1F1BF5]" />
                            </div>
                            <h2 className="text-4xl">Main Screens</h2>
                        </div>
                        <div className="grid grid-cols-3 gap-6">
                            {Array.from({ length: 24 }).map((_, index) => (
                                <div
                                    key={index}
                                    className="rounded-2xl overflow-hidden flex items-center justify-center bg-neutral-100"
                                >
                                    <ImageWithFallback
                                        src={`/assets/images/casestudy/wallet /screens/${
                                            index + 1
                                        }.png`}
                                        alt={`Screen ${index + 1}`}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            ))}
                        </div>
                    </motion.section>
                </div>
            </div>
        );
    }

    // IBCentra Case Study Content
    if (normalizedId === "2") {
        return (
            <div className="min-h-screen bg-white text-right" dir="rtl">
                <div className="relative bg-[#1F1BF5] text-white overflow-hidden pt[64px]">
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
                    <div className="relative h-[500px] flex items-center justify-center p-12 pt-24 mt-16">
                        <div className="relative max-w-3xl w-full">
                            <ImageWithFallback
                                src="../../assets/images/casestudy/ibcentra/ibcentra-header.png"
                                alt="سامانه مدیریتی کیوسک"
                                className="w-full h-auto rounded-2xl "
                            />
                        </div>
                    </div>

                    {/* Project Overview Box */}
                    <div className="relative -mt-16 px-12 pb-12 z-10">
                        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-8 shadow-2xl">
                            <h2 className="text-2xl text-right text-orange-500 mb-6">
                                یکپارچه‌سازی آموزش، ارتباط و رشد{" "}
                            </h2>
                            <div className="text-right">
                                <p className="text-xl text-neutral-700 leading-relaxed mb-4">
                                    در این پروژه یک سامانه یکپارچه برای مدیریت و
                                    بهبود تجربه دوره‌های بیزینس کوچینگ طراحی شد.
                                    هدف، ساده‌سازی ارتباط بین کوچ‌ها و
                                    دانش‌پذیران و ایجاد بستری برای استمرار
                                    یادگیری درون و بیرون کلاس بود.{" "}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="max-w-6xl mx-auto p-12">
                    {/* Users Section - کاربران */}
                    <motion.section
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="mb-16"
                    >
                        <div className="flex items-center gap-4 mb-6 justify-start flex-row ">
                            <div className="w-16 h-16 bg-[#1F1BF5]/10 rounded-2xl flex items-center justify-center">
                                <span className="text-2xl">👥</span>
                            </div>
                            <h2 className="text-4xl text-right">کاربران</h2>
                        </div>

                        <div className="mb-6">
                            <p className="text-2xl text-right text-gray-600 mb-8">
                                شناخت کاربران و تصمیمات طراحی بر اساس آن
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-[#1F1BF5]/5 to-[#1F1BF5]/10 rounded-2xl p-8 border-r-4 border-[#1F1BF5]">
                            <div className="text-xl text-neutral-700 leading-relaxed space-y-4 text-right">
                                <p>
                                    با بررسی اولیه اطلاعات دانش‌پذیران، متوجه
                                    شدیم که بین بسیاری از آن‌ها ویژگی‌های مشترکی
                                    وجود دارد. بخش قابل توجهی از کاربران، صاحبان
                                    کسب‌وکارهای قدیمی بودند که برای به‌روز کردن
                                    بیزینس خود و حل چالش‌هایشان در کلاس‌ها شرکت
                                    می‌کردند. این افراد معمولاً{" "}
                                    <span className="text-[#1F1BF5] font-semibold">
                                        آشنایی زیادی با تکنولوژی نداشتند
                                    </span>{" "}
                                    و به‌دلیل مشغله‌های زیاد،{" "}
                                    <span className="text-[#1F1BF5] font-semibold">
                                        صبر و حوصله‌ی کمی برای کار با ابزارهای
                                        پیچیده داشتند
                                    </span>
                                    .
                                </p>
                                <p>
                                    از طرفی، تعدادی از شرکت‌کننده‌ها از شهرهای
                                    دورتر می‌آمدند و معمولاً فقط با گوشی همراه
                                    بودند و دسترسی به لپ‌تاپ برایشان راحت نبود.
                                    به همین دلیل، طراحی رابط کاربری را هم‌زمان
                                    برای موبایل و دسکتاپ انجام دادیم.
                                </p>
                            </div>
                        </div>
                    </motion.section>

                    {/* Competitor Analysis - تحلیل رقبا */}
                    <motion.section
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="mb-16"
                    >
                        <div className="flex items-center gap-4 mb-6 justify-start flex-row">
                            <div className="w-16 h-16 bg-[#1F1BF5]/10 rounded-2xl flex items-center justify-center">
                                <span className="text-2xl">🎯</span>
                            </div>
                            <h2 className="text-4xl text-right">تحلیل رقبا</h2>
                        </div>

                        <div className="space-y-6">
                            {/* Main content paragraphs */}
                            <div className="text-xl text-neutral-700 leading-relaxed space-y-4 text-right">
                                <p>
                                    در این پروژه به‌دلیل محدودیت زمانی و نبود
                                    رقبای مستقیم در بازار داخلی، امکان انجام
                                    تحلیل رقابتی عمیق وجود نداشت. حتی رقبای
                                    بین‌المللی موجود نیز در{" "}
                                    <span className="text-[#1F1BF5] font-semibold">
                                        محیط‌هایی متفاوت
                                    </span>{" "}
                                    با کاربران ما فعالیت داشتند و از نظر نوع
                                    کاربر و بستر استفاده، قابل استناد کامل
                                    نبودند.
                                </p>
                                <p>
                                    با این حال، برای جهت‌دهی به طراحی فیچرها،
                                    نگاهی سطحی به برخی ابزارهای ساخت ساختارهای
                                    بیزینسی (مثل OKR یا برنامه‌های کوچینگ)
                                    داشتیم. تمرکز اصلی ما بیشتر بر{" "}
                                    <span className="text-[#1F1BF5] font-semibold">
                                        بررسی الگوهای رایج
                                    </span>{" "}
                                    در اپلیکیشن‌های مدیریت تسک و هدف‌گذاری بود.
                                </p>
                                <p>
                                    در این بررسی‌ها، به‌ویژه این موارد مدنظر
                                    قرار گرفت:
                                </p>
                            </div>

                            {/* Checklist Box */}
                            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 justify-start flex-row">
                                        <span className="text-2xl text-green-600 flex-shrink-0">
                                            ✅
                                        </span>
                                        <p className="text-xl text-neutral-700">
                                            نحوه تعریف و پیگیری اهداف
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-3 justify-start flex-row-reverse">
                                        <span className="text-2xl text-green-600 flex-shrink-0">
                                            ✅
                                        </span>
                                        <p className="text-xl text-neutral-700">
                                            چگونگی ساده‌سازی تجربه برای کاربران
                                            غیر فنی
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-3 justify-start flex-row-reverse">
                                        <span className="text-2xl text-green-600 flex-shrink-0">
                                            ✅
                                        </span>
                                        <p className="text-xl text-neutral-700">
                                            طراحی نسخه موبایل در مقایسه با
                                            دسکتاپ و چالش‌های آن
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-3 justify-start flex-row-reverse">
                                        <span className="text-2xl text-green-600 flex-shrink-0">
                                            ✅
                                        </span>
                                        <p className="text-xl text-neutral-700">
                                            شیوه طراحی یادآوری‌ها و سیستم
                                            اعلان‌ها
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Conclusion */}
                            <div className="bg-gradient-to-br from-[#1F1BF5]/5 to-[#1F1BF5]/10 rounded-2xl p-8 border-r-4 border-[#1F1BF5]">
                                <p className="text-xl text-neutral-700 leading-relaxed text-right">
                                    این تحلیل‌ها کمک کرد در نبود رقیب مستقیم،
                                    بتوانیم از{" "}
                                    <span className="text-[#1F1BF5] font-semibold">
                                        الگوهای موفق و آشنا
                                    </span>{" "}
                                    برای کاربران، در طراحی تجربه‌ای ساده، کارآمد
                                    و قابل فهم بهره بگیریم.
                                </p>
                            </div>
                        </div>
                    </motion.section>

                    {/* Product-Market Fit - تناسب محصول با بازار */}
                    <motion.section
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mb-16"
                    >
                        <div className="flex items-center gap-4 mb-6 justify-start flex-row">
                            <div className="w-16 h-16 bg-[#1F1BF5]/10 rounded-2xl flex items-center justify-center">
                                <span className="text-2xl">📈</span>
                            </div>
                            <h2 className="text-4xl text-right">
                                تناسب محصول با بازار
                            </h2>
                        </div>

                        <div className="mb-6">
                            <p className="text-2xl text-right text-gray-600 mb-8">
                                بررسی بازار و انطباق محصول با نیاز بازار
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-[#1F1BF5]/5 to-[#1F1BF5]/10 rounded-2xl p-8 border-r-4 border-[#1F1BF5]">
                            <div className="text-xl text-neutral-700 leading-relaxed space-y-4 text-right">
                                <p>
                                    هرچند تحقیق بازار مستقیماً توسط تیم طراجی
                                    انجام نشد، اما تیم کسب‌وکار با تحلیل رفتار
                                    کاربران، نیازهای موجود و خلأ ابزارهای مشابه
                                    در بازار، به این نتیجه رسید که چنین محصولی
                                    می‌تواند جای رشد قابل توجهی داشته باشد.
                                </p>
                                <p>
                                    نتایج این بررسی‌ها نشان داد که صاحبان
                                    کسب‌وکار،{" "}
                                    <span className="text-[#1F1BF5] font-semibold">
                                        به‌ویژه آن‌هایی که تجربه‌ی کار با
                                        ابزارهای دیجیتال را ندارند
                                    </span>
                                    ، به راهکاری نیاز دارند که هم در طول دوره
                                    کوچینگ و هم پس از آن، بتوانند آموخته‌هایشان
                                    را در کسب‌وکار واقعی پیاده‌سازی کنند.
                                </p>
                                <p>
                                    این تحلیل‌ها به ما اطمینان داد که محصول
                                    طراحی‌شده{" "}
                                    <span className="text-[#1F1BF5] font-semibold">
                                        با نیاز بازار هم‌راستا بوده
                                    </span>{" "}
                                    و پتانسیل خوبی برای پذیرش و اثرگذاری در این
                                    گروه از کاربران دارد.
                                </p>
                            </div>
                        </div>
                    </motion.section>

                    {/* Value Proposition */}
                    <motion.section
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="mb-16"
                    >
                        <div className="flex items-center gap-4 mb-6 justify-start flex-row-reverse">
                            <div className="w-16 h-16 bg-[#1F1BF5]/10 rounded-2xl flex items-center justify-center">
                                <span className="text-2xl">💡</span>
                            </div>
                            <h2 className="text-4xl text-right">
                                Value Proposition
                            </h2>
                        </div>

                        <div className="mb-6">
                            <p className="text-2xl text-right text-gray-600 mb-8">
                                شناسایی و تعریف ارزش‌های کلیدی برای کاربر
                            </p>
                        </div>

                        <div className="mb-8">
                            <p className="text-xl text-neutral-700 leading-relaxed text-right">
                                با تحلیل رفتار کاربران، بازخورد کوچ‌ها، و نتایج
                                تست‌های کاربری، اصلی‌ترین نیازها و موانع آن‌ها
                                را شناسایی کردیم. این ارزش‌ها بر اساس چالش‌های
                                واقعی و انگیزه‌های کاربران در مسیر استفاده از
                                اپلیکیشن شکل گرفتند.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Target Audience */}
                            <div className="bg-white rounded-2xl p-8 border border-neutral-200 shadow-lg">
                                <div className="flex items-center gap-3 mb-4 justify-start flex-row-reverse">
                                    <div className="w-12 h-12 bg-[#1F1BF5] rounded-xl flex items-center justify-center">
                                        <span className="text-2xl">👤</span>
                                    </div>
                                    <h3 className="text-xl">مخاطب هدف</h3>
                                </div>
                                <p className="text-neutral-600 leading-relaxed text-right">
                                    صاحبان کسب‌وکار سنتی و کاربران کم‌تجربه در
                                    ابزارهای دیجیتال
                                </p>
                            </div>

                            {/* Key Need */}
                            <div className="bg-white rounded-2xl p-8 border border-neutral-200 shadow-lg">
                                <div className="flex items-center gap-3 mb-4 justify-start flex-row-reverse">
                                    <div className="w-12 h-12 bg-[#1F1BF5] rounded-xl flex items-center justify-center">
                                        <span className="text-2xl text-white">
                                            🎯
                                        </span>
                                    </div>
                                    <h3 className="text-xl">نیاز کلیدی</h3>
                                </div>
                                <p className="text-neutral-600 leading-relaxed text-right">
                                    تبدیل یادگیری کلاس به عمل واقعی در بیزینس،
                                    کاهش سردرگمی در مسیر کوچینگ، و تعامل مؤثر با
                                    کوچ
                                </p>
                            </div>

                            {/* Solution */}
                            <div className="bg-white rounded-2xl p-8 border border-neutral-200 shadow-lg">
                                <div className="flex items-center gap-3 mb-4 justify-start flex-row-reverse">
                                    <div className="w-12 h-12 bg-[#1F1BF5] rounded-xl flex items-center justify-center">
                                        <span className="text-2xl text-white">
                                            🔑
                                        </span>
                                    </div>
                                    <h3 className="text-xl">راه حل</h3>
                                </div>
                                <p className="text-neutral-600 leading-relaxed text-right">
                                    پلتفرمی ساده‌سازی‌شده، قابل استفاده روی
                                    موبایل و دسکتاپ، همراه با تمرینات
                                    درون‌کلاسی، اهداف قابل پیگیری، یادآورها، و
                                    اطلاعات مرحله‌به‌مرحله
                                </p>
                            </div>

                            {/* Main Differentiation */}
                            <div className="bg-white rounded-2xl p-8 border border-neutral-200 shadow-lg">
                                <div className="flex items-center gap-3 mb-4 justify-start flex-row-reverse">
                                    <div className="w-12 h-12 bg-[#1F1BF5] rounded-xl flex items-center justify-center">
                                        <span className="text-2xl text-white">
                                            ⭐
                                        </span>
                                    </div>
                                    <h3 className="text-xl">تمایز اصلی</h3>
                                </div>
                                <p className="text-neutral-600 leading-relaxed text-right">
                                    تمرکز بر کاربر ناآشنا با تکنولوژی، تجربه‌ی
                                    آموزشی کاربردی و فراتر از کلاس، و طراحی
                                    متناسب با فضای واقعی کسب‌وکارهای ایرانی
                                </p>
                            </div>
                        </div>
                    </motion.section>

                    {/* User Research */}
                    <motion.section
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="mb-16"
                    >
                        <div className="flex items-center gap-4 mb-6 justify-start">
                            <div className="w-16 h-16 bg-[#1F1BF5]/10 rounded-2xl flex items-center justify-center">
                                <span className="text-2xl">📚</span>
                            </div>
                            <h2 className="text-4xl text-right">
                                User Research
                            </h2>
                        </div>

                        <div className="mb-8">
                            <p className="text-xl text-neutral-700 leading-relaxed text-right">
                                برای شناخت بهتر کاربران، ما از تجربه‌ی برگزاری
                                دوره‌های قبلی استفاده کردیم که به‌صورت سنتی
                                برگزار می‌شدند. همین موضوع باعث شده بود تا
                                آشنایی اولیه‌ای با شخصیت، رفتار و سطح آشنایی
                                کاربران با تکنولوژی داشته باشیم.
                            </p>
                            <p className="text-xl text-neutral-700 leading-relaxed text-right mt-4">
                                در ادامه، برای عمیق‌تر شدن شناخت، با بیزینس
                                کوچ‌های هر گروه گفت‌وگو کردیم و از آن‌ها خواستیم
                                تجربیات خود را از تعامل با دانش‌پذیران و
                                چالش‌هایشان در اختیار ما بگذارند. علاوه بر آن،
                                تحقیقات تکمیلی درباره‌ی ویژگی‌های رفتاری افراد
                                کم‌تجربه در استفاده از ابزارهای دیجیتال
                                (low-tech users) انجام دادیم. همچنین به این پرسش
                                ها پاسخ دادیم که :
                            </p>
                        </div>

                        {/* Main Question */}
                        <div className="bg-gradient-to-br from-[#1F1BF5]/10 to-[#1F1BF5]/5 rounded-2xl p-8 mb-8 border-r-4 border-[#1F1BF5]">
                            <h3 className="text-2xl text-right text-[#1F1BF5]">
                                چرا بسیاری از کسب‌وکارهای کوچک نسبت به استفاده
                                از تکنولوژی مقاومت نشان می‌دهند؟
                            </h3>
                        </div>

                        {/* Challenges and Solutions Grid */}
                        <div className="space-y-6 mb-12">
                            {/* Challenge 1 */}
                            <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-lg">
                                <div className="flex items-start gap-4 justify-end mb-4 flex-row-reverse">
                                    <div className="text-right flex-1">
                                        <h4 className="text-xl mb-2 text-neutral-800">
                                            فقدان دانش و مهارت
                                        </h4>
                                        <p className="text-neutral-600">
                                            نمی‌دانند از اپلیکیشن چطور استفاده
                                            کنند .
                                        </p>
                                    </div>
                                    <div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <span className="text-2xl text-neutral-600">
                                            ⚠️
                                        </span>
                                    </div>
                                </div>
                                <div className="bg-[#1F1BF5]/5 rounded-xl p-4 border-r-4 border-[#1F1BF5]">
                                    <p className="text-sm text-[#1F1BF5] mb-1">
                                        راه حل اولیه
                                    </p>
                                    <p className="text-neutral-700 text-right">
                                        آموزش تدریجی (progressive disclosure)،
                                        استفاده از هینت‌ها، onboarding هوشمند و
                                        تصویری، دکمه‌ها و متن‌های ساده.
                                    </p>
                                </div>
                            </div>

                            {/* Challenge 2 */}
                            <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-lg">
                                <div className="flex items-start gap-4 justify-end mb-4 flex-row-reverse">
                                    <div className="text-right flex-1">
                                        <h4 className="text-xl mb-2 text-neutral-800">
                                            بار اضافی اپلیکیشن
                                        </h4>
                                        <p className="text-neutral-600">
                                            ممکنه است از نظر فکری، زمانی یا
                                            فیزیکی کاربر را خسته کند.
                                        </p>
                                    </div>
                                    <div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <span className="text-2xl text-neutral-600">
                                            ⚠️
                                        </span>
                                    </div>
                                </div>
                                <div className="bg-[#1F1BF5]/5 rounded-xl p-4 border-r-4 border-[#1F1BF5]">
                                    <p className="text-sm text-[#1F1BF5] mb-1">
                                        راه حل اولیه
                                    </p>
                                    <p className="text-neutral-700 text-right">
                                        طراحی رابط سبک و ساده ، گزینه‌های پیچیده
                                        در مراحل بعدی نشان داده شوند .
                                    </p>
                                </div>
                            </div>

                            {/* Challenge 3 */}
                            <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-lg">
                                <div className="flex items-start gap-4 justify-end mb-4 flex-row-reverse">
                                    <div className="text-right flex-1">
                                        <h4 className="text-xl mb-2 text-neutral-800">
                                            کشف‌پذیری پایین
                                        </h4>
                                        <p className="text-neutral-600">
                                            کاربر نمی‌فهمد چطور با بخش‌های مختلف
                                            کار کند.
                                        </p>
                                    </div>
                                    <div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <span className="text-2xl text-neutral-600">
                                            ⚠️
                                        </span>
                                    </div>
                                </div>
                                <div className="bg-[#1F1BF5]/5 rounded-xl p-4 border-r-4 border-[#1F1BF5]">
                                    <p className="text-sm text-[#1F1BF5] mb-1">
                                        راه حل اولیه
                                    </p>
                                    <p className="text-neutral-700 text-right">
                                        دکمه‌ها، آیکون‌ها و تعاملات واضح و قابل
                                        حدس باشند. طراحی مبتنی بر affordance
                                        (مثل شکل دکمه واقعی) خیلی کمک می‌کنه
                                    </p>
                                </div>
                            </div>

                            {/* Challenge 4 */}
                            <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-lg">
                                <div className="flex items-start gap-4 justify-end mb-4 flex-row-reverse">
                                    <div className="text-right flex-1">
                                        <h4 className="text-xl mb-2 text-neutral-800">
                                            کنترل پایین
                                        </h4>
                                        <p className="text-neutral-600">
                                            کاربر حس میکند کنترلی روی عملکرد
                                            ندارد.
                                        </p>
                                    </div>
                                    <div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <span className="text-2xl text-neutral-600">
                                            ⚠️
                                        </span>
                                    </div>
                                </div>
                                <div className="bg-[#1F1BF5]/5 rounded-xl p-4 border-r-4 border-[#1F1BF5]">
                                    <p className="text-sm text-[#1F1BF5] mb-1">
                                        راه حل اولیه
                                    </p>
                                    <p className="text-neutral-700 text-right">
                                        باید بازخورد لحظه‌ای (feedback) وجود
                                        داشته باشد، اجازه دهیم کاربر بعضی موارد
                                        مثل تایید، لغو یا تنظیمات رو خودش انجام
                                        بدهد.
                                    </p>
                                </div>
                            </div>

                            {/* Challenge 5 */}
                            <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-lg">
                                <div className="flex items-start gap-4 justify-end mb-4">
                                    <div className="text-right flex-1">
                                        <h4 className="text-xl mb-2 text-neutral-800">
                                            ابعاد اجتماعی
                                        </h4>
                                        <p className="text-neutral-600">
                                            کاربر ممکن است در مواجهه با فناوری
                                            احساس ناتوانی یا قضاوت شدن داشته
                                            باشد.
                                        </p>
                                    </div>
                                    <div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <AlertCircle className="w-6 h-6 text-neutral-600" />
                                    </div>
                                </div>
                                <div className="bg-[#1F1BF5]/5 rounded-xl p-4 border-r-4 border-[#1F1BF5]">
                                    <p className="text-sm text-[#1F1BF5] mb-1">
                                        راه حل اولیه
                                    </p>
                                    <p className="text-neutral-700 text-right">
                                        راحی باید بدون حس خجالت یا فشار باشد؛ با
                                        رابط ساده، پیام‌های مثبت، و زبان دوستانه
                                        و حمایتی.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Second Main Question */}
                        <div className="bg-gradient-to-br from-[#1F1BF5]/10 to-[#1F1BF5]/5 rounded-2xl p-8 mb-8 border-r-4 border-[#1F1BF5]">
                            <h3 className="text-2xl text-center text-[#1F1BF5]">
                                دلایل اصلی مقاومت کسب‌وکارهای کوچک در برابر
                                تکنولوژی: چیست؟
                            </h3>
                        </div>

                        {/* Resistance Reasons Grid */}
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-lg">
                                <div className="flex items-start gap-3 justify-end">
                                    <p className="text-neutral-700 text-right flex-1">
                                        <span className="block text-lg mb-2">
                                            نگرش «تا خراب نشده، دست نزن»
                                        </span>
                                        بسیاری از مدیران سنتی ترجیح می‌دهند به
                                        روش‌های آشنای قدیمی ادامه دهند.
                                    </p>
                                    <div className="text-3xl flex-shrink-0">
                                        ⚠️
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-lg">
                                <div className="flex items-start gap-3 justify-end">
                                    <p className="text-neutral-700 text-right flex-1">
                                        <span className="block text-lg mb-2">
                                            احساس بی‌ربط بودن تکنولوژی
                                        </span>
                                        ۴۰٪ از کسب‌وکارهای کوچک نمی‌توانند تشخیص
                                        بدهند که تکنولوژی چطور به کار آن ها کمک
                                        می‌کنند.
                                    </p>
                                    <div className="text-3xl flex-shrink-0">
                                        ❓
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-lg">
                                <div className="flex items-start gap-3 justify-end">
                                    <p className="text-neutral-700 text-right flex-1">
                                        <span className="block text-lg mb-2">
                                            سردرگمی در بین گزینه‌های زیاد
                                        </span>
                                        تنوع زیاد ابزارها تصمیم‌گیری را دشوار
                                        کرده و منجر به فلج انتخاب می‌شود.
                                    </p>
                                    <div className="text-3xl flex-shrink-0">
                                        🤔
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-lg">
                                <div className="flex items-start gap-3 justify-end">
                                    <p className="text-neutral-700 text-right flex-1">
                                        <span className="block text-lg mb-2">
                                            ترس از تغییر و اتلاف منابع
                                        </span>
                                        نگرانی از هدر رفتن زمان، پول یا انرژی
                                        برای چیزی که ممکن است جواب ندهد.
                                    </p>
                                    <div className="text-3xl flex-shrink-0">
                                        😰
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-lg">
                                <div className="flex items-start gap-3 justify-end">
                                    <p className="text-neutral-700 text-right flex-1">
                                        <span className="block text-lg mb-2">
                                            احساس از دست دادن کنترل
                                        </span>
                                        فناوری‌های جدید ممکن است فرایندهایی وارد
                                        کنند که برای مدیر ناآشنا بوده و کنترل را
                                        دشوار کند.
                                    </p>
                                    <div className="text-3xl flex-shrink-0">
                                        🎛️
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-lg">
                                <div className="flex items-start gap-3 justify-end">
                                    <p className="text-neutral-700 text-right flex-1">
                                        <span className="block text-lg mb-2">
                                            بار سنگین تصمیم‌گیری
                                        </span>
                                        در کسب‌وکارهای کوچک، تصمیم‌گیری اغلب بر
                                        عهده یک نفر است که فشار زیادی ایجاد
                                        می‌کند.
                                    </p>
                                    <div className="text-3xl flex-shrink-0">
                                        💼
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Solutions Box */}
                        <div className="bg-gradient-to-br from-[#1F1BF5] to-[#1F1BF5]/80 rounded-2xl p-8 text-white">
                            <div className="flex items-center gap-3 mb-6 justify-start">
                                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                                    <span className="text-2xl">🚀</span>
                                </div>
                                <h3 className="text-2xl">
                                    راهکارهایی برای غلبه بر این موانع:
                                </h3>
                            </div>
                            <div className="space-y-4 text-right">
                                <div className="bg-white/10 rounded-xl p-4">
                                    <p className="mb-2">
                                        <span className="font-semibold">
                                            ارائه پیام واضح و مرتبط:
                                        </span>
                                    </p>
                                    <p className="text-white/90">
                                        به ‌جای استفاده از اصطلاحات فنی پیچیده،
                                        باید با زبانی ساده و کاربردی مزایای
                                        محصول برای کسب‌وکارهای کوچک توضیح داده
                                        شود.
                                    </p>
                                </div>
                                <div className="bg-white/10 rounded-xl p-4">
                                    <p className="mb-2">
                                        <span className="font-semibold">
                                            نمایش نمونه‌های موفق مشابه:
                                        </span>
                                    </p>
                                    <p className="text-white/90">
                                        لازم است نمونه‌هایی از کسب‌وکارهای مشابه
                                        که با استفاده از فناوری به نتایج مثبت
                                        رسیده‌اند، به‌طور ملموس و قابل‌اعتماد
                                        ارائه شود.
                                    </p>
                                </div>
                                <div className="bg-white/10 rounded-xl p-4">
                                    <p className="mb-2">
                                        <span className="font-semibold">
                                            درک دقیق نیازهای واقعی کسب‌وکارهای
                                            کوچک:
                                        </span>
                                    </p>
                                    <p className="text-white/90">
                                        باید با شناخت صحیح از اولویت‌ها و
                                        چالش‌های ویژه‌ی کسب‌وکارهای کوچک،
                                        پیام‌ها و پیشنهادها را از بازاریابی‌های
                                        عمومی جدا و متناسب‌سازی کرد.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* Main Objectives - اهداف اصلی */}
                    <motion.section
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="mb-16"
                    >
                        <div className="flex items-center gap-4 mb-6 justify-start">
                            <div className="w-16 h-16 bg-[#1F1BF5]/10 rounded-2xl flex items-center justify-center">
                                <Target className="w-8 h-8 text-[#1F1BF5]" />
                            </div>
                            <h2 className="text-4xl">اهداف اصلی</h2>
                        </div>

                        <div className="mb-6"></div>

                        <div className="space-y-4">
                            {/* Objective 1 */}
                            <div className="bg-white rounded-2xl p-6 border-r-4 border-[#1F1BF5] shadow-lg">
                                <div className="flex items-start gap-4 justify-end">
                                    <div className="w-12 h-12 bg-[#1F1BF5]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <span className="text-2xl">🎯</span>
                                    </div>
                                    <p className="text-xl text-neutral-700 leading-relaxed text-right flex-1">
                                        طراحی باید{" "}
                                        <span className="text-[#1F1BF5] font-semibold">
                                            حس کنترل، شفافیت و اعتماد
                                        </span>{" "}
                                        را منتقل کند؛ با پیام‌های واضح،
                                        تأییدیه‌های روشن و حذف هرگونه غافلگیری.
                                    </p>
                                </div>
                            </div>

                            {/* Objective 2 */}
                            <div className="bg-white rounded-2xl p-6 border-r-4 border-[#1F1BF5] shadow-lg">
                                <div className="flex items-start gap-4 justify-end">
                                    <div className="w-12 h-12 bg-[#1F1BF5]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <span className="text-2xl">📋</span>
                                    </div>
                                    <p className="text-xl text-neutral-700 leading-relaxed text-right flex-1">
                                        تجربه کاربری باید تا حد ممکن{" "}
                                        <span className="text-[#1F1BF5] font-semibold">
                                            با الگوهای آشنا همخوانی داشته باشد
                                        </span>
                                        ؛ مانند فرم‌هایی مشابه فاکتور،
                                        یادآورهایی شبیه دفترچه و استفاده از
                                        واژه‌ها و لیبل‌های آشنا.
                                    </p>
                                </div>
                            </div>

                            {/* Objective 3 */}
                            <div className="bg-white rounded-2xl p-6 border-r-4 border-[#1F1BF5] shadow-lg">
                                <div className="flex items-start gap-4 justify-end">
                                    <div className="w-12 h-12 bg-[#1F1BF5]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <span className="text-2xl">💬</span>
                                    </div>
                                    <p className="text-xl text-neutral-700 leading-relaxed text-right flex-1">
                                        طراحی پیام‌ها، راهنماها و رابط کاربری
                                        باید به‌گونه‌ای باشد که{" "}
                                        <span className="text-[#1F1BF5] font-semibold">
                                            حس خجالت یا ناتوانی به کاربر منتقل
                                            نشود
                                        </span>
                                        ؛ استفاده از لحن دوستانه، پرهیز از
                                        اصطلاحات فنی و حمایت‌گر بودن تجربه
                                        کاربری اهمیت دارد.
                                    </p>
                                </div>
                            </div>

                            {/* Objective 4 */}
                            <div className="bg-white rounded-2xl p-6 border-r-4 border-[#1F1BF5] shadow-lg">
                                <div className="flex items-start gap-4 justify-end">
                                    <div className="w-12 h-12 bg-[#1F1BF5]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <span className="text-2xl">💾</span>
                                    </div>
                                    <p className="text-xl text-neutral-700 leading-relaxed text-right flex-1">
                                        طراحی باید{" "}
                                        <span className="text-[#1F1BF5] font-semibold">
                                            حس امنیت و قابلیت بازگشت
                                        </span>{" "}
                                        را القا کند؛ مانند پیامی با این مضمون:
                                        «اطلاعات شما به‌صورت خودکار ذخیره می‌شود
                                        و می‌توانید بعداً ادامه دهید.»
                                    </p>
                                </div>
                            </div>

                            {/* Objective 5 */}
                            <div className="bg-white rounded-2xl p-6 border-r-4 border-[#1F1BF5] shadow-lg">
                                <div className="flex items-start gap-4 justify-end">
                                    <div className="w-12 h-12 bg-[#1F1BF5]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <span className="text-2xl">🚀</span>
                                    </div>
                                    <p className="text-xl text-neutral-700 leading-relaxed text-right flex-1">
                                        استفاده از{" "}
                                        <span className="text-[#1F1BF5] font-semibold">
                                            آموزش در حین استفاده
                                        </span>{" "}
                                        ، راه‌اندازی تعاملی و حذف اصطکاک‌های
                                        غیرضروری مانند احراز هویت چندمرحله‌ای یا
                                        منوهای پیچیده .
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* Team and Project Constraints - تیم و محدودیت‌های پروژه */}
                    <motion.section
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.9 }}
                        className="mb-16"
                    >
                        <div className="flex items-center gap-4 mb-6 justify-start">
                            <div className="w-16 h-16 bg-[#1F1BF5]/10 rounded-2xl flex items-center justify-center">
                                <Users className="w-8 h-8 text-[#1F1BF5]" />
                            </div>
                            <h2 className="text-4xl">
                                تیم و محدودیت‌های پروژه
                            </h2>
                        </div>

                        <div className="mb-6"></div>

                        {/* Context Paragraphs */}
                        <div className="space-y-6 mb-8">
                            <div className="bg-gradient-to-br from-[#1F1BF5]/5 to-white rounded-2xl p-8 border border-[#1F1BF5]/20">
                                <p className="text-xl text-neutral-700 leading-relaxed text-right">
                                    در این پروژه، کارفرما که مسئولیت کامل مدیریت
                                    دوره‌های آموزشی را بر عهده داشت، با فناوری و
                                    ابزارهای دیجیتال آشنایی زیادی نداشت. از آنجا
                                    که تصمیم‌گیری نهایی در مورد طراحی و محصول با
                                    خود او بود، لازم بود{" "}
                                    <span className="text-[#1F1BF5] font-semibold">
                                        طراحی‌ها و مفاهیم به زبانی بسیار ساده و
                                        قابل درک
                                    </span>{" "}
                                    ارائه شوند تا بتوانند نظر مثبت او را جلب
                                    کنند.
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-[#1F1BF5]/5 to-white rounded-2xl p-8 border border-[#1F1BF5]/20">
                                <p className="text-xl text-neutral-700 leading-relaxed text-right">
                                    از طرف دیگر، به دلیل فشردگی زمان و نیاز به
                                    ارائه‌ی سریع نسخه‌ی اولیه (MVP)، تیم طراحی
                                    با{" "}
                                    <span className="text-[#1F1BF5] font-semibold">
                                        چالش محدودیت منابع
                                    </span>{" "}
                                    مواجه بود. ما دو طراح رابط کاربری در تیم
                                    داشتیم و هم‌زمان نیاز به طراحی نسخه‌ی دسکتاپ
                                    و موبایل وجود داشت. برای حل این مسئله، تلاش
                                    شد طراحی این دو نسخه به صورت موازی و با
                                    حداکثر هماهنگی و سازگاری پیش برود تا از
                                    دوگانگی در تجربه کاربری جلوگیری شود.
                                </p>
                            </div>
                        </div>

                        {/* Team Composition */}
                        <div className="bg-gradient-to-br from-[#1F1BF5] to-[#1F1BF5]/80 rounded-2xl p-8 text-white mb-8">
                            <div className="flex items-center gap-3 mb-6 justify-start">
                                <h3 className="text-2xl">👥 ترکیب تیم:</h3>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-white/10 rounded-xl p-5 backdrop-blur-sm">
                                    <div className="flex items-center gap-3 justify-start">
                                        <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                                            <span className="text-xl">🎨</span>
                                        </div>
                                        <span className="text-lg">
                                            دو طراح رابط کاربری
                                        </span>
                                    </div>
                                </div>

                                <div className="bg-white/10 rounded-xl p-5 backdrop-blur-sm">
                                    <div className="flex items-center gap-3 justify-start">
                                        <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                                            <span className="text-xl">💻</span>
                                        </div>
                                        <span className="text-lg">
                                            یک توسعه‌دهنده فرانت‌اند
                                        </span>
                                    </div>
                                </div>

                                <div className="bg-white/10 rounded-xl p-5 backdrop-blur-sm">
                                    <div className="flex items-center gap-3 justify-start">
                                        <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                                            <span className="text-xl">⚙️</span>
                                        </div>
                                        <span className="text-lg">
                                            یک توسعه‌دهنده بک‌اند
                                        </span>
                                    </div>
                                </div>

                                <div className="bg-white/10 rounded-xl p-5 backdrop-blur-sm">
                                    <div className="flex items-center gap-3 justify-start">
                                        <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                                            <span className="text-xl">📱</span>
                                        </div>
                                        <span className="text-lg">
                                            یک توسعه‌دهنده موبایل (Flutter)
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Conclusion */}
                        <div className="bg-white rounded-2xl p-8 border-r-4 border-[#1F1BF5] shadow-lg">
                            <p className="text-xl text-neutral-700 leading-relaxed text-right">
                                در این فضا،{" "}
                                <span className="text-[#1F1BF5] font-semibold">
                                    همکاری نزدیک بین اعضای تیم و اولویت‌بندی بر
                                    اساس نیازهای کارفرما و کاربران هدف
                                </span>{" "}
                                (مدیران سنتی با سواد دیجیتال پایین) نقش کلیدی در
                                پیشبرد پروژه داشت.
                            </p>
                        </div>
                        {/* IBCentra — full-width responsive screens column */}
                        <div className="mt-12 space-y-6">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(
                                (n) => (
                                    <div key={n} className="w-full">
                                        <ImageWithFallback
                                            src={`/assets/images/casestudy/ibcentra/text/${n}.png`}
                                            alt={`IBCentra screen ${n}`}
                                            className="w-full h-auto object-contain rounded-2xl"
                                        />
                                    </div>
                                )
                            )}
                        </div>
                    </motion.section>
                </div>
            </div>
        );
    }

    // Placeholder for other projects
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="relative bg-gradient-to-br from-[#1F1BF5] to-[#1F1BF5]/80 text-white p-12">
                <button
                    onClick={onBack}
                    className="mb-8 flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                >
                    <ArrowLeft className="w-5 h-5" />
                    <span>Back to Home</span>
                </button>

                <div className="max-w-6xl mx-auto">
                    <h1 className="text-5xl mb-4">Project Details</h1>
                    <p className="text-xl text-white/80">
                        Case study coming soon for this project.
                    </p>
                </div>
            </div>
        </div>
    );
}

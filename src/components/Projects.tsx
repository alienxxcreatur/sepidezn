import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { ProjectCard } from "./ProjectCard";
import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { Link } from "react-router-dom"; // Importing Link for navigation

const projects = [
    {
        id: "2",
        slug: "ibcentra",
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
        slug: "barpardaz",
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
        slug: "fiotrix",
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
        slug: "reminder-agent",
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
        slug: "wallet",
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
        slug: "rasacode",
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
        slug: "ceo-assist",
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
        slug: "visera",
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

export function Projects() {
    const { ref, isInView } = useInView();
    const { t } = useLanguage();

    return (
        <section id="work" className="py-32 px-6 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-[#1F1BF5]/5 to-white" />

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <motion.span
                        className="inline-block px-4 py-2 bg-[#1F1BF5]/10 rounded-full text-[#1F1BF5] mb-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    >
                        {t("projects.subtitle")}
                    </motion.span>
                    <h2 className="text-5xl">
                        {t("projects.title")}{" "}
                        <span className="text-[#1F1BF5]">
                            {t("projects.titleHighlight")}
                        </span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div key={project.id}>
                            <Link to={`/project/${project.slug || project.id}`}>
                                <ProjectCard
                                    project={project}
                                    index={index}
                                    onClick={() => {}}
                                />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

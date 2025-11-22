import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { ProjectCard } from "./ProjectCard";
import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

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
            "A mobile app for managing cryptocurrency transactions securely.",
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
        id: "3",
        title: "Rasa Food",
        category: "Self-Service",
        description: "A self-service kiosk for food ordering in restaurants.",
        tags: ["kiosk", "foodordering"],
        gradient: "from-[#1F1BF5] to-[#1F1BF5]/80",
        accentColor: "border-[#1F1BF5]/30",
        image: "/assets/images/rasafood.png",
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

export function Projects({
    onProjectClick,
}: {
    onProjectClick: (id: string) => void;
}) {
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
                            <ProjectCard
                                project={project}
                                index={index}
                                onClick={() => onProjectClick(project.id)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

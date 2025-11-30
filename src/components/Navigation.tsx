import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

interface NavigationProps {
    onNavigateToVisualDesigns?: () => void;
}

export function Navigation({
    onNavigateToVisualDesigns,
}: NavigationProps = {}) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { t, toggleLanguage, language } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        if (id === "visual-designs" && onNavigateToVisualDesigns) {
            onNavigateToVisualDesigns();
            setMobileMenuOpen(false);
            return;
        }
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
        setMobileMenuOpen(false);
    };

    // Function to trigger PDF download
    const handleDownloadResume = () => {
        const link = document.createElement("a");
        link.href = "../../assets/Sepide Zeinalzadegan.pdf"; // path to your PDF file in assets folder
        link.download = "resume.pdf"; // the filename to save the file as
        link.click();
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    scrolled
                        ? "bg-white/80 backdrop-blur-xl shadow-sm border-b border-neutral-200"
                        : "bg-transparent"
                }`}
            >
                <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
                    <motion.button
                        onClick={() => scrollToSection("hero")}
                        className="text-2xl tracking-tighter text-[#1F1BF5]"
                        whileHover={{ scale: 1.05 }}
                    >
                        {t("nav.portfolio")}
                    </motion.button>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-8 items-center">
                        {[
                            // { id: "hero", label: t("nav.home") },
                            {
                                id: "resume",
                                label: t("nav.resume"),
                                onClick: handleDownloadResume, // Adding onClick for download
                            },
                        ].map((item, index) => (
                            <motion.button
                                key={item.id}
                                onClick={
                                    item.onClick ||
                                    (() => scrollToSection(item.id))
                                }
                                className="relative group"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <span className="group-hover:text-[#1F1BF5] transition-colors">
                                    {item.label}
                                </span>
                                <motion.div
                                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#1F1BF5]"
                                    initial={{ scaleX: 0 }}
                                    whileHover={{ scaleX: 1 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.button>
                        ))}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="px-5 py-2 bg-[#1F1BF5] text-white rounded-full"
                            onClick={() => scrollToSection("contact")}
                        >
                            Get In Touch
                        </motion.button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden"
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <motion.div
                initial={{ opacity: 0, x: "100%" }}
                animate={{
                    opacity: mobileMenuOpen ? 1 : 0,
                    x: mobileMenuOpen ? 0 : "100%",
                }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-white z-40 md:hidden flex flex-col items-center justify-center gap-8"
            >
                {[
                    // { id: "hero", label: t("nav.home") },
                    {
                        id: "resume",
                        label: t("nav.resume"),
                        onClick: handleDownloadResume,
                    },
                    { id: "contact", label: "Get In Touch" },
                ].map((item) => (
                    <button
                        key={item.id}
                        onClick={
                            item.onClick || (() => scrollToSection(item.id))
                        }
                        className="text-3xl hover:text-[#1F1BF5] transition-colors"
                    >
                        {item.label}
                    </button>
                ))}
            </motion.div>
        </>
    );
}

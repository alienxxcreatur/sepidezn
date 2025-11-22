import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { useInView } from "./hooks/useInView";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Project {
    id: string;
    title: string;
    category: string;
    description: string;
    tags: string[];
    gradient: string;
    accentColor: string;
    image: string;
    fullWidth?: boolean;
}

interface ProjectCardProps {
    project: Project;
    index: number;
    onClick: () => void;
}

export function ProjectCard({ project, index, onClick }: ProjectCardProps) {
    const [isHovered, setIsHovered] = useState(false);
    const { ref, isInView } = useInView();

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onClick}
            className="group cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow p-6 border border-neutral-200 flex flex-col overflow-hidden h-[550px]"
        >
            <div className="relative aspect-[4/3] mb-6 rounded-2xl overflow-hidden border border-neutral-200 shadow-lg flex-shrink-0">
                <motion.div
                    animate={{ scale: isHovered ? 1.1 : 1 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full relative"
                >
                    <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                </motion.div>
            </div>

            <div className="flex-1 flex flex-col min-h-0">
                <div className="flex justify-between items-start mb-3 flex-shrink-0">
                    <div>
                        <h3 className="text-2xl mb-1 line-clamp-1">
                            {project.title}
                        </h3>
                    </div>
                </div>

                <p className="text-neutral-600 mb-4 leading-relaxed flex-shrink-0 line-clamp-2">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 flex-shrink-0">
                    {project.tags.map((tag) => (
                        <motion.span
                            key={tag}
                            whileHover={{ scale: 1.1 }}
                            className="px-4 py-2 bg-[#1F1BF5] text-white rounded-full text-sm"
                        >
                            #{tag}
                        </motion.span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

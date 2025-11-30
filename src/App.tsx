import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { MockupShowcase } from "./components/MockupShowcase";
import { Contact } from "./components/Contact";
import { Navigation } from "./components/Navigation";
import { ProjectDetail } from "./components/ProjectDetail";
import { VisualDesigns } from "./components/VisualDesigns";
import { LanguageProvider } from "./contexts/LanguageContext";
import {
    BrowserRouter,
    Routes,
    Route,
    useNavigate,
    useParams,
} from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";

function MainLayout() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white">
            <Navigation
                onNavigateToVisualDesigns={() => navigate("/visual-designs")}
            />
            <Hero />
            <Projects />
            {/* <MockupShowcase onViewMore={() => navigate("/visual-designs")} /> */}
            <Contact />
        </div>
    );
}

function ProjectDetailWrapper() {
    const { id } = useParams();
    const navigate = useNavigate();

    // If someone visits the numeric id URL (e.g. /project/12) redirect to the slug URL (/project/visera)
    const idToSlug: Record<string, string> = {
        "12": "visera",
        "11": "rasacode",
        "10": "reminder-agent",
        "9": "barpardaz",
        "7": "fiotrix",
        "4": "ceo-assist",
        "3": "food-kiosk",
        "2": "ibcentra",
        "1": "wallet",
    };

    if (id && /^[0-9]+$/.test(id)) {
        const slug = idToSlug[id];
        if (slug) {
            // Replace history so browser shows slug URL
            navigate(`/project/${slug}`, { replace: true });
            return null;
        }
    }

    return (
        <LanguageProvider>
            <ProjectDetail projectId={id || ""} onBack={() => navigate("/")} />
        </LanguageProvider>
    );
}

function VisualDesignsWrapper() {
    const navigate = useNavigate();
    return (
        <LanguageProvider>
            <VisualDesigns onBack={() => navigate("/")} />
        </LanguageProvider>
    );
}

export default function App() {
    return (
        <LanguageProvider>
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<MainLayout />} />
                    <Route
                        path="/project/:id"
                        element={<ProjectDetailWrapper />}
                    />
                    {/* <Route
                        path="/visual-designs"
                        element={<VisualDesignsWrapper />}
                    /> */}
                </Routes>
            </BrowserRouter>
        </LanguageProvider>
    );
}

import { dataPortfolio } from "@/data";
import TransitionPage from "@/components/transition-page";
import { Github, ExternalLink, Star } from "lucide-react";
import Image from "next/image";

const PortfolioPage = () => {
    // Separate featured and other projects
    const featuredProjects = dataPortfolio.filter((p) => p.featured);
    const otherProjects = dataPortfolio.filter((p) => !p.featured);

    return (
        <>
            <TransitionPage />

            {/* Hero Section */}
            <section className="min-h-[35vh] sm:min-h-[40vh] flex flex-col items-center justify-center px-4 sm:px-6 pt-24 sm:pt-32 pb-6 sm:pb-8">
                <div className="max-w-4xl text-center">
                    <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6 text-xs sm:text-sm font-medium rounded-full bg-[var(--secondary)]/10 text-[var(--secondary)] border border-[var(--secondary)]/30">
                        Portfolio
                    </span>
                    <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                        Proyectos que{" "}
                        <span className="text-[var(--secondary)]">cuentan historias</span>
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed px-2">
                        Cada proyecto representa un desafío superado y una oportunidad de aprendizaje.
                        Desde mi tesis hasta apps que uso a diario.
                    </p>
                </div>
            </section>

            {/* Featured Projects */}
            <section className="px-4 sm:px-6 py-8 sm:py-12">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center gap-2 mb-6 sm:mb-8">
                        <Star className="text-[var(--secondary)]" size={20} />
                        <h2 className="text-lg sm:text-xl md:text-2xl font-bold">Proyectos Destacados</h2>
                    </div>

                    <div className="grid gap-4 sm:gap-6 md:gap-8 md:grid-cols-2">
                        {featuredProjects.map((project) => (
                            <div
                                key={project.id}
                                className="group relative rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-[var(--secondary)]/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,165,0,0.15)]"
                            >
                                {/* Image */}
                                <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                                </div>

                                {/* Content */}
                                <div className="p-4 sm:p-5 md:p-6">
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 group-hover:text-[var(--secondary)] transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4 leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    {project.tags && (
                                        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                                            {project.tags.map((tag, i) => (
                                                <span
                                                    key={i}
                                                    className="px-2 py-0.5 sm:py-1 text-xs font-medium bg-[var(--secondary)]/10 text-[var(--secondary)] rounded-md"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    {/* Links */}
                                    <div className="relative z-10 flex gap-4">
                                        <a
                                            href={project.urlGithub}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1.5 sm:gap-2 text-gray-400 hover:text-white transition-colors"
                                        >
                                            <Github size={16} />
                                            <span className="text-xs sm:text-sm">Código</span>
                                        </a>
                                        <a
                                            href={project.urlDemo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1.5 sm:gap-2 text-[var(--secondary)] hover:text-[var(--secondary)]/80 transition-colors"
                                        >
                                            <ExternalLink size={16} />
                                            <span className="text-xs sm:text-sm">Ver Demo</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Other Projects */}
            <section className="px-4 sm:px-6 py-8 sm:py-12 mb-8 sm:mb-12">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8">Más Proyectos</h2>

                    <div className="relative z-10 grid gap-4 sm:gap-6 sm:grid-cols-2 md:grid-cols-3">
                        {otherProjects.map((project) => (
                            <div
                                key={project.id}
                                className="group p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/40 border border-gray-700/50 hover:border-[var(--secondary)]/30 transition-all"
                            >
                                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 group-hover:text-[var(--secondary)] transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                {project.tags && (
                                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                                        {project.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="px-2 py-0.5 text-xs font-medium bg-gray-700/50 text-gray-300 rounded-md"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                {/* Links */}
                                <div className="flex gap-3 sm:gap-4">
                                    <a
                                        href={project.urlGithub}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors text-xs sm:text-sm"
                                    >
                                        <Github size={14} />
                                        Código
                                    </a>
                                    <a
                                        href={project.urlDemo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 text-[var(--secondary)] hover:text-[var(--secondary)]/80 transition-colors text-xs sm:text-sm"
                                    >
                                        <ExternalLink size={14} />
                                        Demo
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* GitHub CTA */}
            <section className="relative z-10 px-4 sm:px-6 py-8 sm:py-12 mb-16 sm:mb-20">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">
                            ¿Querés ver más?
                        </h3>
                        <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">
                            Visitá mi GitHub para explorar más proyectos, contribuciones y experimentos.
                        </p>
                        <a
                            href="https://github.com/Matute08"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-[var(--secondary)] text-black font-semibold hover:bg-[var(--secondary)]/90 transition-colors text-sm sm:text-base"
                        >
                            <Github size={18} />
                            Ver GitHub
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PortfolioPage;
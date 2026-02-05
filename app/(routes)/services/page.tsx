"use client";

import TransitionPage from "@/components/animations/transition-page/transition-page";
import { serviceData } from "@/data/client";
import { ArrowRight, CheckCircle, MessageCircle, Mail } from "lucide-react";

const ServicesPage = () => {
    return (
        <>
            <TransitionPage />

            {/* Hero Section */}
            <section className="min-h-[50vh] sm:min-h-[60vh] flex flex-col items-center justify-center px-4 sm:px-6 pt-24 sm:pt-32 pb-12 sm:pb-16">
                <div className="max-w-4xl text-center">
                    <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6 text-xs sm:text-sm font-medium rounded-full bg-[var(--secondary)]/10 text-[var(--secondary)] border border-[var(--secondary)]/30">
                        Servicios Profesionales
                    </span>
                    <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                        Transformo ideas en{" "}
                        <span className="text-[var(--secondary)]">
                            experiencias digitales
                        </span>
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed px-2">
                        Desarrollo soluciones front-end de alto impacto que combinan diseño moderno,
                        rendimiento optimizado y la mejor experiencia de usuario.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="px-4 sm:px-6 py-8 sm:py-16">
                <div className="max-w-6xl mx-auto">
                    <div className="grid gap-4 sm:gap-6 md:gap-8 md:grid-cols-2">
                        {serviceData.map((service, index) => (
                            <div
                                key={index}
                                className="group relative p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/40 border border-gray-700/50 hover:border-[var(--secondary)]/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,165,0,0.15)]"
                            >
                                <div className="flex items-start gap-3 sm:gap-4 md:gap-5">
                                    <div className="flex-shrink-0 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-[var(--secondary)]/10 text-[var(--secondary)] group-hover:bg-[var(--secondary)]/20 transition-colors">
                                        {service.icon}
                                    </div>
                                    <div className="pr-6 sm:pr-8">
                                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 group-hover:text-[var(--secondary)] transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                                <ArrowRight
                                    className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 text-gray-600 group-hover:text-[var(--secondary)] group-hover:translate-x-2 transition-all"
                                    size={20}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Me */}
            <section className="px-4 sm:px-6 py-8 sm:py-16">
                <div className="max-w-6xl mx-auto">
                    <div className="grid gap-8 md:gap-12 md:grid-cols-2 items-center">
                        <div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center md:text-left">
                                ¿Por qué trabajar{" "}
                                <span className="text-[var(--secondary)]">conmigo?</span>
                            </h2>
                            <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-6 sm:mb-8 leading-relaxed text-center md:text-left">
                                Con experiencia en entornos de producción real y proyectos de gran escala,
                                ofrezco un enfoque profesional enfocado en resultados medibles.
                            </p>
                            <div className="space-y-3 sm:space-y-4">
                                {[
                                    "Experiencia real en empresas de tecnología",
                                    "Código limpio, escalable y mantenible",
                                    "Comunicación clara y entregas puntuales",
                                    "Dominio de Vue.js, React y ecosistema moderno",
                                    "Metodologías ágiles y trabajo colaborativo"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <CheckCircle className="text-[var(--secondary)] flex-shrink-0" size={18} />
                                        <span className="text-sm sm:text-base text-gray-300">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative mt-4 md:mt-0">
                            <div className="absolute inset-0 bg-gradient-to-r from-[var(--secondary)]/20 to-purple-500/20 rounded-2xl sm:rounded-3xl blur-3xl"></div>
                            <div className="relative p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700">
                                <div className="text-center mb-4 sm:mb-6">
                                    <span className="text-4xl sm:text-5xl font-bold text-[var(--secondary)]">100%</span>
                                    <p className="text-sm sm:text-base text-gray-400 mt-2">Compromiso con cada proyecto</p>
                                </div>
                                <div className="grid grid-cols-2 gap-3 sm:gap-4 text-center">
                                    <div className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gray-800/50">
                                        <span className="block text-lg sm:text-xl md:text-2xl font-bold text-white">Vue.js</span>
                                        <span className="text-xs sm:text-sm text-gray-400">2 & 3</span>
                                    </div>
                                    <div className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gray-800/50">
                                        <span className="block text-lg sm:text-xl md:text-2xl font-bold text-white">React</span>
                                        <span className="text-xs sm:text-sm text-gray-400">Next.js</span>
                                    </div>
                                    <div className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gray-800/50">
                                        <span className="block text-lg sm:text-xl md:text-2xl font-bold text-white">TypeScript</span>
                                        <span className="text-xs sm:text-sm text-gray-400">JavaScript</span>
                                    </div>
                                    <div className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gray-800/50">
                                        <span className="block text-lg sm:text-xl md:text-2xl font-bold text-white">Git</span>
                                        <span className="text-xs sm:text-sm text-gray-400">CI/CD</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="px-4 sm:px-6 py-12 sm:py-20 mb-16 sm:mb-20">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                        ¿Listo para comenzar tu{" "}
                        <span className="text-[var(--secondary)]">proyecto?</span>
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto px-2">
                        Cuéntame sobre tu idea y trabajemos juntos para hacerla realidad.
                        Respondo en menos de 24 horas.
                    </p>

                    {/* Contact Buttons */}
                    <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                        <a
                            href="https://wa.me/542954545062"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-green-600 hover:bg-green-500 text-white font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.4)] w-full sm:w-auto text-sm sm:text-base"
                        >
                            <MessageCircle size={20} />
                            <span>Escribime por WhatsApp</span>
                        </a>

                        <a
                            href="mailto:matutegon97@gmail.com"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-xl border-2 border-[var(--secondary)] text-[var(--secondary)] font-semibold hover:bg-[var(--secondary)] hover:text-black transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,165,0,0.3)] w-full sm:w-auto text-sm sm:text-base"
                        >
                            <Mail size={20} />
                            <span>Enviame un Email</span>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServicesPage;

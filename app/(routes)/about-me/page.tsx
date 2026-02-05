"use client";

import TransitionPage from "@/components/animations/transition-page/transition-page";
import { dataWorkExperience, dataAboutPage } from "@/data";
import { technicalSkillsFront, technicalSkillsBack, technicalSkillsTools } from "@/data/client";
import { Briefcase, GraduationCap, Calendar, MapPin, Users, Target, Zap, MessageSquare } from "lucide-react";

const PageAboutMe = () => {
    return (
        <>
            <TransitionPage />

            {/* Hero Section */}
            <section className="min-h-[35vh] sm:min-h-[40vh] flex flex-col items-center justify-center px-4 sm:px-6 pt-24 sm:pt-32 pb-6 sm:pb-8">
                <div className="max-w-4xl text-center">
                    <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6 text-xs sm:text-sm font-medium rounded-full bg-[var(--secondary)]/10 text-[var(--secondary)] border border-[var(--secondary)]/30">
                        Sobre Mí
                    </span>
                    <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                        Software Engineer{" "}
                        <span className="text-[var(--secondary)]">Front-end</span>
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed px-2">
                        Apasionado por crear interfaces que impactan a miles de usuarios.
                        Actualmente trabajo en Bitlogic desarrollando para Teclab, plataforma educativa líder en Latinoamérica.
                    </p>
                </div>
            </section>

            {/* Work Experience */}
            <section className="px-4 sm:px-6 py-8 sm:py-12">
                <div className="max-w-5xl mx-auto">
                    <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                        <Briefcase className="text-[var(--secondary)]" size={24} />
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Experiencia Laboral</h2>
                    </div>

                    {dataWorkExperience.map((exp) => (
                        <div key={exp.id} className="relative pl-6 sm:pl-8 border-l-2 border-[var(--secondary)]/30 pb-6 sm:pb-8">
                            <div className="absolute left-[-7px] sm:left-[-9px] top-0 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[var(--secondary)]"></div>
                            <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/40 border border-gray-700/50">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 sm:mb-4">
                                    <div>
                                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">{exp.title}</h3>
                                        <p className="text-[var(--secondary)] font-medium text-sm sm:text-base md:text-lg">{exp.company}</p>
                                    </div>
                                    <span className="flex items-center gap-2 text-gray-400 mt-2 md:mt-0 text-sm">
                                        <Calendar size={14} />
                                        {exp.date}
                                    </span>
                                </div>
                                <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-3 sm:mb-4">{exp.description}</p>
                                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                    {exp.technologies.map((tech, i) => (
                                        <span key={i} className="px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm font-medium bg-[var(--secondary)]/10 text-[var(--secondary)] rounded-full border border-[var(--secondary)]/30">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Education */}
            <section className="px-4 sm:px-6 py-8 sm:py-12">
                <div className="max-w-5xl mx-auto">
                    <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                        <GraduationCap className="text-[var(--secondary)]" size={24} />
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Formación Académica</h2>
                    </div>

                    <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                        {dataAboutPage.slice(0, 2).map((edu) => (
                            <div key={edu.id} className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/40 border border-gray-700/50 hover:border-[var(--secondary)]/30 transition-all">
                                <span className="text-xs sm:text-sm text-gray-400">{edu.date}</span>
                                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mt-1 sm:mt-2">{edu.title}</h3>
                                <p className="text-[var(--secondary)] font-medium text-sm sm:text-base">{edu.subtitle}</p>
                                <p className="text-sm sm:text-base text-gray-400 mt-2 sm:mt-3">{edu.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technical Skills */}
            <section className="px-4 sm:px-6 py-8 sm:py-12">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8 sm:mb-12">
                        Stack <span className="text-[var(--secondary)]">Tecnológico</span>
                    </h2>

                    <div className="grid gap-4 sm:gap-6 md:gap-8 md:grid-cols-3">
                        {/* Frontend */}
                        <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700">
                            <h3 className="text-base sm:text-lg md:text-xl font-bold mb-4 sm:mb-6 text-center text-[var(--secondary)]">Front-end</h3>
                            <div className="space-y-3 sm:space-y-4">
                                {technicalSkillsFront.map((skill, i) => (
                                    <div key={i} className="flex items-center justify-between">
                                        <div className="flex items-center gap-2 sm:gap-3">
                                            <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">{skill.icon}</div>
                                            <span className="font-medium text-sm sm:text-base">{skill.title}</span>
                                        </div>
                                        <div className="flex gap-0.5 sm:gap-1">
                                            {[...Array(5)].map((_, j) => (
                                                <div key={j} className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${j < skill.number ? 'bg-[var(--secondary)]' : 'bg-gray-600'}`}></div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Backend */}
                        <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700">
                            <h3 className="text-base sm:text-lg md:text-xl font-bold mb-4 sm:mb-6 text-center text-[var(--secondary)]">Back-end</h3>
                            <div className="space-y-3 sm:space-y-4">
                                {technicalSkillsBack.map((skill, i) => (
                                    <div key={i} className="flex items-center justify-between">
                                        <div className="flex items-center gap-2 sm:gap-3">
                                            <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">{skill.icon}</div>
                                            <span className="font-medium text-sm sm:text-base">{skill.title}</span>
                                        </div>
                                        <div className="flex gap-0.5 sm:gap-1">
                                            {[...Array(5)].map((_, j) => (
                                                <div key={j} className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${j < skill.number ? 'bg-[var(--secondary)]' : 'bg-gray-600'}`}></div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Tools */}
                        <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700">
                            <h3 className="text-base sm:text-lg md:text-xl font-bold mb-4 sm:mb-6 text-center text-[var(--secondary)]">Herramientas</h3>
                            <div className="space-y-3 sm:space-y-4">
                                {technicalSkillsTools.map((skill, i) => (
                                    <div key={i} className="flex items-center justify-between">
                                        <div className="flex items-center gap-2 sm:gap-3">
                                            <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">{skill.icon}</div>
                                            <span className="font-medium text-sm sm:text-base">{skill.title}</span>
                                        </div>
                                        <div className="flex gap-0.5 sm:gap-1">
                                            {[...Array(5)].map((_, j) => (
                                                <div key={j} className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${j < skill.number ? 'bg-[var(--secondary)]' : 'bg-gray-600'}`}></div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Soft Skills - Redesigned */}
            <section className="px-4 sm:px-6 py-8 sm:py-12 mb-16 sm:mb-20">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8 sm:mb-12">
                        Cómo <span className="text-[var(--secondary)]">trabajo</span>
                    </h2>

                    <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 md:grid-cols-3">
                        <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/40 border border-gray-700/50 text-center group hover:border-[var(--secondary)]/30 transition-all">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-[var(--secondary)]/10 flex items-center justify-center group-hover:bg-[var(--secondary)]/20 transition-colors">
                                <Users className="text-[var(--secondary)]" size={24} />
                            </div>
                            <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">Colaborativo</h3>
                            <p className="text-gray-400 text-xs sm:text-sm">Trabajo efectivo en equipos ágiles, comunicación clara y participación activa en ceremonias SCRUM.</p>
                        </div>

                        <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/40 border border-gray-700/50 text-center group hover:border-[var(--secondary)]/30 transition-all">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-[var(--secondary)]/10 flex items-center justify-center group-hover:bg-[var(--secondary)]/20 transition-colors">
                                <Target className="text-[var(--secondary)]" size={24} />
                            </div>
                            <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">Orientado a resultados</h3>
                            <p className="text-gray-400 text-xs sm:text-sm">Enfocado en entregar valor real, cumplir deadlines y superar expectativas en cada proyecto.</p>
                        </div>

                        <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/40 border border-gray-700/50 text-center group hover:border-[var(--secondary)]/30 transition-all">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-[var(--secondary)]/10 flex items-center justify-center group-hover:bg-[var(--secondary)]/20 transition-colors">
                                <Zap className="text-[var(--secondary)]" size={24} />
                            </div>
                            <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">Aprendizaje continuo</h3>
                            <p className="text-gray-400 text-xs sm:text-sm">Siempre explorando nuevas tecnologías y mejores prácticas para crecer como profesional.</p>
                        </div>

                        <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/40 border border-gray-700/50 text-center group hover:border-[var(--secondary)]/30 transition-all">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-[var(--secondary)]/10 flex items-center justify-center group-hover:bg-[var(--secondary)]/20 transition-colors">
                                <MessageSquare className="text-[var(--secondary)]" size={24} />
                            </div>
                            <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">Comunicación clara</h3>
                            <p className="text-gray-400 text-xs sm:text-sm">Capacidad para explicar conceptos técnicos de forma simple y mantener al equipo alineado.</p>
                        </div>

                        <div className="sm:col-span-2 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[var(--secondary)]/10 to-purple-500/10 border border-[var(--secondary)]/30 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
                            <div className="w-12 h-12 sm:w-auto flex-shrink-0">
                                <MapPin className="text-[var(--secondary)]" size={32} />
                            </div>
                            <div>
                                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1">Inglés técnico</h3>
                                <p className="text-sm sm:text-base text-gray-400">Lectura y comprensión de documentación técnica, comunicación escrita con equipos internacionales.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PageAboutMe;

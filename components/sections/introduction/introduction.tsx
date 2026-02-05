"use client";

import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight } from "lucide-react";

const Introduction = () => {
    return (
        <div className="relative z-20 w-full min-h-screen md:min-h-screen flex items-start md:items-center bg-darkBg">
            <div className="w-full grid items-center h-full px-4 sm:px-6 pt-32 pb-16 md:py-0 md:grid-cols-2 gap-6 md:gap-8">
                {/* Image Section */}
                <div className="relative flex justify-center md:justify-end order-1">
                    {/* Glow effect */}
                    <div className="absolute inset-0 flex items-center justify-center md:justify-end">
                        <div className="w-32 h-32 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-[var(--secondary)]/20 rounded-full blur-[50px] md:blur-[100px]"></div>
                    </div>
                    <Image
                        style={{ maskImage: "linear-gradient(black 80%, transparent)" }}
                        src="/images/profile/MatiasGA.png"
                        priority
                        width="400"
                        height="400"
                        alt="Matias Gonzalez Autelli"
                        className="relative z-10 w-40 h-40 sm:w-64 sm:h-64 md:w-[400px] md:h-[400px] object-contain"
                    />
                </div>

                {/* Content Section */}
                <div className="flex flex-col justify-center items-center md:items-start max-w-lg mx-auto md:mx-0 order-2 md:order-2">
                    {/* Badge */}
                    <span className="inline-block w-fit px-3 py-1 sm:px-4 sm:py-2 mb-3 sm:mb-6 text-[10px] sm:text-sm font-medium rounded-full bg-[var(--secondary)]/10 text-[var(--secondary)] border border-[var(--secondary)]/30">
                        🚀 Disponible para proyectos
                    </span>

                    {/* Main Title */}
                    <h1 className="mb-3 sm:mb-6 text-xl sm:text-3xl md:text-5xl leading-tight text-center md:text-left font-bold">
                        Transformando ideas en
                        <TypeAnimation
                            sequence={[
                                "interfaces modernas",
                                2000,
                                "experiencias únicas",
                                2000,
                                "código de calidad",
                                2000,
                                "productos reales",
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="block text-[var(--secondary)] mt-1 sm:mt-2"
                        />
                    </h1>

                    {/* Description */}
                    <p className="mx-auto mb-6 sm:mb-8 text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed md:mx-0 text-center md:text-left">
                        Software Engineer Front-end especializado en <span className="text-white font-medium">Vue.js</span> y <span className="text-white font-medium">React</span>.
                        Creo interfaces modernas, escalables y centradas en la experiencia del usuario.
                    </p>

                    {/* CTA Buttons */}
                    <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:justify-start w-full sm:w-auto pb-16 sm:pb-0">
                        <Link
                            href="/portfolio"
                            className="group flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[var(--secondary)] text-black font-semibold rounded-xl hover:bg-[var(--secondary)]/90 transition-all hover:shadow-[0_0_30px_rgba(255,165,0,0.3)] w-full sm:w-auto text-sm sm:text-base"
                        >
                            Ver Proyectos
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <Link
                            href="/about-me"
                            className="px-5 sm:px-6 py-2.5 sm:py-3 font-semibold border-2 border-white/20 text-white rounded-xl hover:border-white/40 hover:bg-white/5 transition-all w-full sm:w-auto text-center text-sm sm:text-base"
                        >
                            Sobre mí
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Introduction;


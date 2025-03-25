"use client";

import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import MotionTransition from "./transition-component";

const Introduction = () => {
    return (
    
        <div className="z-20 w-full bg-darkBg/60">
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
                <Image
                style={{ maskImage: "linear-gradient(black 30%, transparent)"  }}
                    src="/MatiasGA.png"
                    priority
                    width="500"
                    height="500"
                    alt="Profile Pic"
                    className="mt-20  justify-self-end "
                />

                <div className="flex flex-col justify-center max-w-md">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">
                    Mi camino en el desarrollo,
                        <TypeAnimation
                            sequence={[
                                "con React y JavaScript",
                                1000,
                                "creando interfaces web",
                                1000,
                                "aprendiendo y creciendo",
                                1000,
                                "desarrollando con pasion",
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="block font-bold text-[var(--secondary)]"
                        />
                    </h1>

                    <p className="mx-auto mb-4 text-xl leading-loose md:mx-0 md;mb-8">
                    Soy estudiante avanzado de Ingeniería en Sistemas de Información con pasión por el desarrollo Front-End. Me especializo en tecnologías como React, JavaScript, TypeScript, HTML y CSS. Tengo una actitud proactiva, atención al detalle y disfruto trabajar en equipo en entornos ágiles..
                    </p>

                    <div className="flex item-center justify-center gap-3 md:justify-start md;gap-10">
                        <Link
                            href="/portfolio"
                            className="px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                        >
                            Ver Proyectos
                        </Link>

                        <Link
                            href="/about-me"
                            className="px-3 py-2 transition-all border-2 cursor-pointer text-[var(--secondary)] border-[var(--secondary)] text-md w-fit rounded-xl hover:drop-shadow-[0_0_10px_var(--secondary)]"
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

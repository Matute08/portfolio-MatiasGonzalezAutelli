"use client";

import Link from "next/link";
import MotionTransition from "@/components/animations/transition-component/transition-component";
import { socialNetworks } from "@/data/client";

const Header = () => {
    return (
        <MotionTransition
            position="bottom"
            className="fixed z-40 w-full top-0 left-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent backdrop-blur-sm"
        >
            <div className="container flex flex-col sm:flex-row items-center justify-between max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
                <Link href="/">
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center sm:text-left">
                        Matias{' '}
                        <span style={{ color: "var(--secondary)" }}>
                            GonzalezAutelli
                        </span>
                    </h1>
                </Link>
                <div className="flex items-center justify-center gap-4 sm:gap-5 mt-2 sm:mt-0">
                    {socialNetworks.map(({ logo, src, id }) => (
                        <Link key={id} href={src} target="_blank"
                            className="transition-all duration-300 hover:text-[var(--secondary)] text-sm sm:text-base">
                            {logo}
                        </Link>
                    ))}
                </div>
            </div>
        </MotionTransition>
    );
};

export default Header;


"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useTranslations } from "@/i18n/I18nProvider";

export default function Hero() {
  const { t, ta, lang } = useTranslations();

  const typingSequence = ta("hero.typing").flatMap(
    (text: string) => [text, 2000]
  );

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-darkBg pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-screen py-28 sm:py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs sm:text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              {t("hero.badge")}
            </motion.span>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-base sm:text-lg text-gray-400 mb-2"
            >
              {t("hero.greeting")}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-4"
            >
              Matias{" "}
              <span className="gradient-text">Gonzalez Autelli</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-4 h-14 sm:h-16"
            >
              {t("hero.typing_prefix")}{" "}
              <TypeAnimation
                key={lang}
                sequence={typingSequence}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="gradient-text font-bold"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-sm sm:text-base md:text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              {t("hero.description")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={() =>
                  document
                    .getElementById("portfolio")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all hover:shadow-[0_0_30px_rgba(124,58,237,0.3)]"
              >
                {t("hero.cta_projects")}
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-6 py-3 font-semibold border border-white/10 text-gray-300 rounded-xl hover:border-white/20 hover:text-white hover:bg-white/5 transition-all"
              >
                {t("hero.cta_contact")}
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/20 to-transparent rounded-full blur-[80px] animate-pulse" />
              <div className="absolute inset-4 bg-gradient-to-tr from-primary/20 to-secondary/10 rounded-full blur-[60px]" />
              <Image
                src="/images/profile/MatiasGA.png"
                alt="Matias Gonzalez Autelli"
                width={480}
                height={480}
                priority
                sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 480px"
                className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 lg:w-[480px] lg:h-[480px] object-contain drop-shadow-2xl"
                style={{
                  maskImage: "linear-gradient(black 80%, transparent)",
                  WebkitMaskImage:
                    "linear-gradient(black 80%, transparent)",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={scrollToAbout}
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-white transition-colors animate-bounce"
      >
        <ChevronDown size={28} />
      </motion.button>
    </section>
  );
}

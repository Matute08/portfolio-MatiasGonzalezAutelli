"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useTranslations } from "@/i18n/I18nProvider";
import { socialNetworks } from "@/data/client";
import Link from "next/link";

const navItems = ["home", "about", "services", "skills", "portfolio", "contact"] as const;

export default function Header() {
  const { lang, setLang, t } = useTranslations();
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      toggleRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    navItems.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-darkBg/80 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <button onClick={() => scrollTo("home")} className="text-lg sm:text-xl font-bold tracking-tight">
              <span className="gradient-text">MG</span>
              <span className="text-white/60 ml-1 hidden sm:inline">Autelli</span>
            </button>

            <nav aria-label={t("nav.home")} className="hidden md:flex items-center gap-1">
              {navItems.map((id) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    activeSection === id
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {t(`nav.${id}`)}
                  {activeSection === id && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute inset-0 bg-white/5 rounded-lg -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2 mr-2">
                {socialNetworks.slice(0, 3).map(({ logo, src, id }) => (
                  <Link
                    key={id}
                    href={src}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${id === 1 ? "LinkedIn" : id === 2 ? "GitHub" : id === 3 ? "Email" : "WhatsApp"}`}
                    className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                  >
                    {logo}
                  </Link>
                ))}
              </div>

              <button
                onClick={() => setLang(lang === "es" ? "en" : "es")}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full border border-white/10 text-gray-300 hover:text-white hover:border-white/20 transition-all"
              >
                <span className={lang === "en" ? "text-gray-500" : "text-white"}>ES</span>
                <span className="text-gray-600">/</span>
                <span className={lang === "es" ? "text-gray-500" : "text-white"}>EN</span>
              </button>

              <button
                ref={toggleRef}
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            ref={mobileMenuRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-darkBg/95 backdrop-blur-lg md:hidden pt-20"
          >
            <nav aria-label="Mobile navigation" className="flex flex-col items-center gap-2 p-8">
              {navItems.map((id) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className={`w-full text-center py-4 text-lg font-medium rounded-xl transition-all ${
                    activeSection === id
                      ? "text-white bg-white/5"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {t(`nav.${id}`)}
                </button>
              ))}
              <div className="flex items-center gap-4 mt-8 pt-8 border-t border-white/10">
                {socialNetworks.map(({ logo, src, id }) => (
                  <Link
                    key={id}
                    href={src}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${id === 1 ? "LinkedIn" : id === 2 ? "GitHub" : id === 3 ? "Email" : "WhatsApp"}`}
                    className="p-3 text-gray-400 hover:text-white transition-colors"
                  >
                    {logo}
                  </Link>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, X, Filter } from "lucide-react";
import { useTranslations } from "@/i18n/I18nProvider";
import { dataPortfolio } from "@/data";

const allTags = Array.from(
  new Set(dataPortfolio.flatMap((p) => p.tags))
).sort();

export default function PortfolioSection() {
  const { t } = useTranslations();
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const filtered = activeTag
    ? dataPortfolio.filter((p) => p.tags.includes(activeTag))
    : dataPortfolio;

  const selectedProject = selectedId
    ? dataPortfolio.find((p) => p.id === selectedId)
    : null;

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedId(null);
    },
    []
  );

  useEffect(() => {
    if (selectedId) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedId, handleKeyDown]);

  return (
    <section id="portfolio" className="relative py-24 sm:py-32 scroll-mt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-darkBg via-secondary/[0.01] to-darkBg pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {t("portfolio.title")}
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            {t("portfolio.subtitle")}
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-6" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          <button
            onClick={() => setActiveTag(null)}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-full border transition-all ${
              !activeTag
                ? "bg-primary/10 text-primary border-primary/30"
                : "text-gray-400 border-white/10 hover:text-white hover:border-white/20"
            }`}
          >
            <Filter size={12} />
            {t("portfolio.all")}
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag === activeTag ? null : tag)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-full border transition-all ${
                activeTag === tag
                  ? "bg-primary/10 text-primary border-primary/30"
                  : "text-gray-400 border-white/10 hover:text-white hover:border-white/20"
              }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group glass rounded-xl overflow-hidden cursor-pointer"
                onClick={() => setSelectedId(project.id)}
              >
                <div className="relative h-48 sm:h-52 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-darkBg via-darkBg/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  {project.featured && (
                    <span className="absolute top-3 right-3 px-2.5 py-0.5 text-[10px] font-semibold rounded-full bg-primary text-white">
                      {t("portfolio.featured")}
                    </span>
                  )}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a
                      href={project.urlGithub}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2.5 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={project.urlDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2.5 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="font-semibold text-white text-sm sm:text-base mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-white/5 text-gray-400 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full glass rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setSelectedId(null)}
                aria-label="Close project details"
                autoFocus
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
              >
                <X size={18} />
              </button>

              <div className="relative h-56 sm:h-72">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 672px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-darkBg via-darkBg/30 to-transparent" />
              </div>

              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-5">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={selectedProject.urlGithub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-primary/90 transition-all"
                  >
                    <Github size={16} />
                    {t("portfolio.view_github")}
                  </a>
                  <a
                    href={selectedProject.urlDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/10 text-gray-300 text-sm font-semibold rounded-xl hover:border-white/20 hover:text-white transition-all"
                  >
                    <ExternalLink size={16} />
                    {t("portfolio.view_demo")}
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";
import { useTranslations } from "@/i18n/I18nProvider";
import { dataWorkExperience, dataAboutPage } from "@/data";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export default function About() {
  const { t } = useTranslations();

  return (
    <section id="about" className="relative py-24 sm:py-32 scroll-mt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-darkBg via-primary/[0.02] to-darkBg pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {t("about.title")}
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            {t("about.subtitle")}
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-2 space-y-6"
          >
            <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
              {t("about.description")}
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {["Vue.js", "React", "TypeScript", "Next.js", "Tailwind CSS", "Git"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs sm:text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </motion.div>

          <div className="lg:col-span-3 space-y-10">
            <div>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 text-lg font-semibold text-white mb-6"
              >
                <Briefcase size={20} className="text-primary" />
                {t("about.experience_title")}
              </motion.h3>

              <div className="space-y-4">
                {dataWorkExperience.map((exp, i) => (
                  <motion.div
                    key={exp.id}
                    custom={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="glass rounded-xl p-5 sm:p-6 glass-hover transition-all"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-white text-base sm:text-lg">
                          {exp.title}
                        </h4>
                        <p className="text-primary text-sm">{exp.company}</p>
                      </div>
                      <span className="flex items-center gap-1.5 text-xs text-gray-500 shrink-0 ml-4">
                        <Calendar size={12} />
                        {exp.date}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-3">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-white/5 text-gray-300 border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 text-lg font-semibold text-white mb-6"
              >
                <GraduationCap size={20} className="text-secondary" />
                {t("about.education_title")}
              </motion.h3>

              <div className="relative pl-6 border-l border-white/10 space-y-8">
                {dataAboutPage.map((edu, i) => (
                  <motion.div
                    key={edu.id}
                    custom={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="relative"
                  >
                    <div className="absolute -left-[25px] top-1 w-3 h-3 rounded-full bg-gradient-to-r from-primary to-secondary border-2 border-darkBg" />
                    <div className="glass rounded-xl p-4 sm:p-5 glass-hover transition-all">
                      <span className="text-xs text-gray-500 flex items-center gap-1.5 mb-1.5">
                        <Calendar size={11} />
                        {edu.date}
                      </span>
                      <h4 className="font-semibold text-white text-sm sm:text-base">
                        {edu.title}
                      </h4>
                      <p className="text-primary/80 text-xs sm:text-sm mb-1">
                        {edu.subtitle}
                      </p>
                      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

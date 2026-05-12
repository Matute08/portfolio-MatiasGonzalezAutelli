"use client";

import { motion } from "framer-motion";
import { useTranslations } from "@/i18n/I18nProvider";
import {
  technicalSkillsFront,
  technicalSkillsBack,
  technicalSkillsTools,
  softSkills,
} from "@/data/client";
import { CheckCircle2 } from "lucide-react";

function SkillBar({
  icon,
  title,
  level,
  index,
}: {
  icon: React.ReactNode;
  title: string;
  level: number;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      className="group"
    >
      <div className="flex items-center gap-3 mb-2">
        <span className="text-gray-400 w-5 h-5 flex items-center justify-center">
          {icon}
        </span>
        <span className="text-sm font-medium text-gray-300">{title}</span>
        <span className="ml-auto text-xs text-gray-500">{level}/5</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${(level / 5) * 100}%` }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08 + 0.3, duration: 0.8, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const { t } = useTranslations();

  const categories = [
    { title: t("skills.frontend"), data: technicalSkillsFront },
    { title: t("skills.backend"), data: technicalSkillsBack },
    { title: t("skills.tools"), data: technicalSkillsTools },
  ];

  return (
    <section id="skills" className="relative py-24 sm:py-32 scroll-mt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-darkBg via-primary/[0.01] to-darkBg pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {t("skills.title")}
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            {t("skills.subtitle")}
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, ci) => (
            <motion.div
              key={ci}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: ci * 0.15 }}
              className="glass rounded-xl p-6 sm:p-7"
            >
              <h3 className="text-lg font-semibold text-white mb-6 pb-4 border-b border-white/5">
                {cat.title}
              </h3>
              <div className="space-y-4">
                {cat.data.map((skill, i) => (
                  <SkillBar
                    key={skill.title}
                    icon={skill.icon}
                    title={skill.title}
                    level={skill.number}
                    index={i}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="glass rounded-xl p-6 sm:p-7 mt-8 max-w-2xl mx-auto"
        >
          <h3 className="text-lg font-semibold text-white mb-5 pb-4 border-b border-white/5">
            {t("skills.soft_skills")}
          </h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {softSkills.map((skill) => (
              <div
                key={skill.title}
                className="flex items-center gap-2.5 text-sm text-gray-300"
              >
                <CheckCircle2 size={16} className="text-primary shrink-0" />
                {skill.title}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

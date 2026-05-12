"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, MessageCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { useTranslations } from "@/i18n/I18nProvider";
import Link from "next/link";
import { socialNetworks } from "@/data/client";

export default function Contact() {
  const { t, lang } = useTranslations();
  const form = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);

  const contactInfo = [
    {
      icon: <Mail size={18} />,
      label: "Email",
      value: "matutegon97@gmail.com",
      href: socialNetworks.find((s) => s.src.startsWith("mailto:"))?.src,
    },
    {
      icon: <MessageCircle size={18} />,
      label: "WhatsApp",
      value: "+54 2954 545062",
      href: socialNetworks.find((s) => s.src.includes("wa.me"))?.src,
    },
    {
      icon: <MapPin size={18} />,
      label: lang === "es" ? "Ubicación" : "Location",
      value: "Santa Rosa, La Pampa, Argentina",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formElements = form.current?.elements;
    const userName = (formElements?.namedItem("user_name") as HTMLInputElement)?.value?.trim() ?? "";
    const userEmail = (formElements?.namedItem("user_email") as HTMLInputElement)?.value?.trim() ?? "";
    const message = (formElements?.namedItem("message") as HTMLTextAreaElement)?.value?.trim() ?? "";

    if (!userName || !userEmail || !message) {
      Swal.fire({
        icon: "error",
        title: lang === "es" ? "Error" : "Error",
        text: t("contact.required"),
        background: "#1a1a2e",
        color: "#fff",
        confirmButtonColor: "#7C3AED",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userEmail)) {
      Swal.fire({
        icon: "error",
        title: lang === "es" ? "Error" : "Error",
        text: lang === "es" ? "Email inválido" : "Invalid email",
        background: "#1a1a2e",
        color: "#fff",
        confirmButtonColor: "#7C3AED",
      });
      return;
    }

    setSending(true);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current!,
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! }
      );

      Swal.fire({
        icon: "success",
        title: lang === "es" ? "¡Enviado!" : "Sent!",
        text: t("contact.success"),
        background: "#1a1a2e",
        color: "#fff",
        confirmButtonColor: "#7C3AED",
      });

      form.current?.reset();
    } catch {
      Swal.fire({
        icon: "error",
        title: lang === "es" ? "Error" : "Error",
        text: t("contact.error"),
        background: "#1a1a2e",
        color: "#fff",
        confirmButtonColor: "#7C3AED",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 scroll-mt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-darkBg via-primary/[0.02] to-darkBg pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((info) => (
              <div key={info.label} className="glass rounded-xl p-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm sm:text-base text-gray-300">
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            <div className="flex items-center gap-3 pt-2">
              {socialNetworks.map(({ logo, src, id }) => (
                <Link
                  key={id}
                  href={src}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${id === 1 ? "LinkedIn" : id === 2 ? "GitHub" : id === 3 ? "Email" : "WhatsApp"}`}
                  className="p-3 rounded-xl glass text-gray-400 hover:text-white hover:border-primary/30 transition-all"
                >
                  {logo}
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-3"
          >
            <form
              ref={form}
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-6 sm:p-8 space-y-5"
            >
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  {t("contact.name")} <span className="text-red-400">*</span>
                </label>
                <input
                  name="user_name"
                  type="text"
                  placeholder={t("contact.placeholder_name")}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  {t("contact.email")} <span className="text-red-400">*</span>
                </label>
                <input
                  name="user_email"
                  type="email"
                  placeholder={t("contact.placeholder_email")}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  {t("contact.message")} <span className="text-red-400">*</span>
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder={t("contact.placeholder_message")}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-xl hover:opacity-90 transition-all disabled:opacity-50 text-sm"
              >
                {sending ? (
                  <>
                    <svg
                      className="animate-spin h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    {t("contact.sending")}
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    {t("contact.send")}
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

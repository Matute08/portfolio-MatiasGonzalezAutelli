"use client";

import { useTranslations } from "@/i18n/I18nProvider";
import { socialNetworks } from "@/data/client";
import Link from "next/link";

export default function Footer() {
  const { t } = useTranslations();

  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-sm font-bold gradient-text">MG</span>
            <span className="text-xs text-gray-500">
              © {year} Matias Gonzalez Autelli. {t("footer.copyright")}.
            </span>
          </div>

          <div className="flex items-center gap-3">
            {socialNetworks.map(({ logo, src, id }) => (
              <Link
                key={id}
                href={src}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${id === 1 ? "LinkedIn" : id === 2 ? "GitHub" : id === 3 ? "Email" : "WhatsApp"}`}
                className="p-2 text-gray-500 hover:text-white transition-colors"
              >
                {logo}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

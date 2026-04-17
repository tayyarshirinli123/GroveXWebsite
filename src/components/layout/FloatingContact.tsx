"use client";

import { Phone } from "lucide-react";
import { useTranslations } from "next-intl";

const PHONE_DISPLAY = "+994 77 718 78 65";
const PHONE_TEL = "+994777187865";
const WHATSAPP_URL = "https://wa.me/994777187865";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.687 5.523l.001.002-1.001 3.658 3.802-.882zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.371-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
    </svg>
  );
}

export default function FloatingContact() {
  const t = useTranslations("common.floating");

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3 print:hidden">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t("whatsapp")}
        title={t("whatsapp")}
        className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all"
      >
        <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7" />
        <span className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-[var(--bg-dark)] text-white text-xs font-medium px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">
          {t("whatsapp")}
        </span>
      </a>
      <a
        href={`tel:${PHONE_TEL}`}
        aria-label={`${t("phone")}: ${PHONE_DISPLAY}`}
        title={`${t("phone")}: ${PHONE_DISPLAY}`}
        className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[var(--brand-primary)] text-white shadow-lg hover:shadow-xl hover:scale-105 hover:bg-[var(--brand-primary-hover)] transition-all"
      >
        <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
        <span className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-[var(--bg-dark)] text-white text-xs font-medium px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">
          {PHONE_DISPLAY}
        </span>
      </a>
    </div>
  );
}

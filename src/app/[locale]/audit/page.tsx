import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import ServicePageLayout from "@/components/shared/ServicePageLayout";

export default async function AuditPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("audit");

  const items: string[] = [];
  for (let i = 0; i < 7; i++) {
    items.push(t(`includes.items.${i}`));
  }

  return (
    <ServicePageLayout
      heroTitle={t("hero.title")}
      heroSubtitle={t("hero.subtitle")}
      sectionTitle={t("includes.title")}
      items={items}
      resultTitle={t("result.title")}
      resultText={t("result.text")}
      inquiryTitle={t("inquiry.title")}
      inquiryText={t("inquiry.text")}
      serviceKey="audit"
    />
  );
}

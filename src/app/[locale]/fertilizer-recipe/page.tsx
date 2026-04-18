import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import ServicePageLayout from "@/components/shared/ServicePageLayout";

export default async function FertilizerRecipePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("fertilizer");

  const items: string[] = [];
  for (let i = 0; i < 5; i++) {
    items.push(t(`methodology.items.${i}`));
  }

  return (
    <ServicePageLayout
      heroTitle={t("hero.title")}
      heroSubtitle={t("hero.subtitle")}
      sectionTitle={t("methodology.title")}
      items={items}
      resultTitle={t("result.title")}
      resultText={t("result.text")}
      inquiryTitle={t("inquiry.title")}
      inquiryText={t("inquiry.text")}
      serviceKey="fertilizer"
    />
  );
}

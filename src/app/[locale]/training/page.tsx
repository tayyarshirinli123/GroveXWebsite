import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import ServicePageLayout from "@/components/shared/ServicePageLayout";

export default async function TrainingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("training");

  const items: string[] = [];
  for (let i = 0; i < 6; i++) {
    items.push(t(`topics.items.${i}`));
  }

  return (
    <ServicePageLayout
      heroTitle={t("hero.title")}
      heroSubtitle={t("hero.subtitle")}
      sectionTitle={t("topics.title")}
      items={items}
      resultTitle={t("format.title")}
      resultText={t("format.text")}
      inquiryTitle={t("inquiry.title")}
      inquiryText={t("inquiry.text")}
      serviceKey="training"
    />
  );
}

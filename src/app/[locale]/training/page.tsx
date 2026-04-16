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
  const cta = await getTranslations("common.cta");

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
      priceTitle={t("price.title")}
      priceAmount={t("price.amount")}
      priceUnit={t("price.unit")}
      ctaText={cta("orderTraining")}
    />
  );
}

import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import ServicePageLayout from "@/components/shared/ServicePageLayout";

export default async function ClimatePlanPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("climate");

  const items: string[] = [];
  for (let i = 0; i < 6; i++) {
    items.push(t(`scope.items.${i}`));
  }

  return (
    <ServicePageLayout
      heroTitle={t("hero.title")}
      heroSubtitle={t("hero.subtitle")}
      sectionTitle={t("scope.title")}
      items={items}
      resultTitle={t("result.title")}
      resultText={t("result.text")}
      inquiryTitle={t("inquiry.title")}
      inquiryText={t("inquiry.text")}
      serviceKey="climate"
    />
  );
}

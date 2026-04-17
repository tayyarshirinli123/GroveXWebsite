import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import GreenhouseClient from "./GreenhouseClient";

export default async function GreenhousePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("greenhouse");
  const cta = await getTranslations("common.cta");

  const rows: { label: string; value: string }[] = [];
  for (let i = 0; i < 6; i++) {
    rows.push({
      label: t(`results.rows.${i}.label`),
      value: t(`results.rows.${i}.value`),
    });
  }

  return (
    <GreenhouseClient
      data={{
        heroTitle: t("hero.title"),
        heroSubtitle: t("hero.subtitle"),
        resultsTitle: t("results.title"),
        rows,
        visitTitle: t("visit.title"),
        visitText: t("visit.text"),
        ctaText: cta("scheduleVisit"),
      }}
    />
  );
}

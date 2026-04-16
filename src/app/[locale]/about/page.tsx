import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import AboutClient from "./AboutClient";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");

  const values: { title: string; text: string }[] = [];
  for (let i = 0; i < 3; i++) {
    values.push({
      title: t(`values.items.${i}.title`),
      text: t(`values.items.${i}.text`),
    });
  }

  const facts: { value: string; label: string }[] = [];
  for (let i = 0; i < 4; i++) {
    facts.push({
      value: t(`facts.items.${i}.value`),
      label: t(`facts.items.${i}.label`),
    });
  }

  return (
    <AboutClient
      data={{
        heroTitle: t("hero.title"),
        heroSubtitle: t("hero.subtitle"),
        missionTitle: t("mission.title"),
        missionText: t("mission.text"),
        valuesTitle: t("values.title"),
        values,
        whyNowTitle: t("whyNow.title"),
        whyNowText: t("whyNow.text"),
        factsTitle: t("facts.title"),
        facts,
      }}
    />
  );
}

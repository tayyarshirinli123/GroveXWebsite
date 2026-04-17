import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import PartnersClient from "./PartnersClient";

export default async function PartnersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("partners");

  const partners: { name: string; country: string; description: string }[] = [];
  for (let i = 0; i < 6; i++) {
    partners.push({
      name: t(`list.${i}.name`),
      country: t(`list.${i}.country`),
      description: t(`list.${i}.description`),
    });
  }

  return (
    <PartnersClient
      data={{
        heroTitle: t("hero.title"),
        heroSubtitle: t("hero.subtitle"),
        partners,
        bridgeTitle: t("bridge.title"),
        bridgeName: t("bridge.name"),
        bridgeText: t("bridge.text"),
      }}
    />
  );
}

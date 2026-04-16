import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import PackagesClient from "@/components/packages/PackagesClient";

export default async function PackagesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("packages");
  const cta = await getTranslations("common.cta");

  const getFeatures = (tier: string, count: number) => {
    const items: string[] = [];
    for (let i = 0; i < count; i++) {
      items.push(t(`${tier}.features.${i}`));
    }
    return items;
  };

  const data = {
    hero: { title: t("hero.title"), subtitle: t("hero.subtitle"), discount: t("hero.discount") },
    plans: [
      {
        name: t("simple.name"),
        price: t("simple.price"),
        unit: t("simple.unit"),
        features: getFeatures("simple", 7),
        highlighted: false,
      },
      {
        name: t("standard.name"),
        price: t("standard.price"),
        unit: t("standard.unit"),
        badge: t("standard.badge"),
        features: getFeatures("standard", 8),
        highlighted: true,
      },
      {
        name: t("premium.name"),
        price: t("premium.price"),
        unit: t("premium.unit"),
        features: getFeatures("premium", 9),
        highlighted: false,
      },
    ],
    note: t("note"),
    ctaText: cta("getConsultation"),
    selectText: cta("selectPackage"),
  };

  return <PackagesClient data={data} />;
}

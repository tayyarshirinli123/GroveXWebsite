import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import FullControlClient from "./FullControlClient";

export default async function FullControlPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("fullControl");
  const cta = await getTranslations("common.cta");

  const items: { title: string; text: string }[] = [];
  for (let i = 0; i < 5; i++) {
    items.push({
      title: t(`howItWorks.items.${i}.title`),
      text: t(`howItWorks.items.${i}.text`),
    });
  }

  return (
    <FullControlClient
      data={{
        heroTitle: t("hero.title"),
        heroSubtitle: t("hero.subtitle"),
        howItWorksTitle: t("howItWorks.title"),
        items,
        forWhomTitle: t("forWhom.title"),
        forWhomText: t("forWhom.text"),
        priceTitle: t("price.title"),
        priceText: t("price.text"),
        ctaText: cta("requestOffer"),
      }}
    />
  );
}

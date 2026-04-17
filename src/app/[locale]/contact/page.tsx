import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import ContactClient from "./ContactClient";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");

  const steps: { step: string; title: string; text: string }[] = [];
  for (let i = 0; i < 4; i++) {
    steps.push({
      step: t(`onboarding.steps.${i}.step`),
      title: t(`onboarding.steps.${i}.title`),
      text: t(`onboarding.steps.${i}.text`),
    });
  }

  return (
    <ContactClient
      locale={locale}
      data={{
        heroTitle: t("hero.title"),
        heroSubtitle: t("hero.subtitle"),
        infoTitle: t("info.title"),
        phone: t("info.phone"),
        email: t("info.email"),
        address: t("info.address"),
        formTitle: t("form.title"),
        formLabels: {
          firstName: t("form.firstName"),
          lastName: t("form.lastName"),
          company: t("form.company"),
          phone: t("form.phone"),
          email: t("form.email"),
          area: t("form.area"),
          location: t("form.location"),
          note: t("form.note"),
          submit: t("form.submit"),
          success: t("form.success"),
          error: t("form.error"),
        },
        onboardingTitle: t("onboarding.title"),
        steps,
      }}
    />
  );
}

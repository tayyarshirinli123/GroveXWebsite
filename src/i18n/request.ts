import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";
import { hasLocale } from "next-intl";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const common = (await import(`../messages/${locale}/common.json`)).default;
  const home = (await import(`../messages/${locale}/home.json`)).default;
  const audit = (await import(`../messages/${locale}/audit.json`)).default;
  const fertilizer = (await import(`../messages/${locale}/fertilizer.json`)).default;
  const climate = (await import(`../messages/${locale}/climate.json`)).default;
  const pestDisease = (await import(`../messages/${locale}/pest-disease.json`)).default;
  const irrigation = (await import(`../messages/${locale}/irrigation.json`)).default;
  const training = (await import(`../messages/${locale}/training.json`)).default;
  const packages = (await import(`../messages/${locale}/packages.json`)).default;
  const fullControl = (await import(`../messages/${locale}/full-control.json`)).default;
  const greenhouse = (await import(`../messages/${locale}/greenhouse.json`)).default;
  const partners = (await import(`../messages/${locale}/partners.json`)).default;
  const about = (await import(`../messages/${locale}/about.json`)).default;
  const contact = (await import(`../messages/${locale}/contact.json`)).default;

  return {
    locale,
    messages: {
      common,
      home,
      audit,
      fertilizer,
      climate,
      pestDisease,
      irrigation,
      training,
      packages,
      fullControl,
      greenhouse,
      partners,
      about,
      contact,
    },
  };
});

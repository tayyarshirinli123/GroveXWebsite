import { setRequestLocale } from "next-intl/server";
import Hero from "@/components/home/Hero";
import Positioning from "@/components/home/Positioning";
import Stats from "@/components/home/Stats";
import Services from "@/components/home/Services";
import WhyGroveX from "@/components/home/WhyGroveX";
import PartnersTeaser from "@/components/home/PartnersTeaser";
import FinalCTA from "@/components/home/FinalCTA";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <Positioning />
      <Stats />
      <Services />
      <WhyGroveX />
      <PartnersTeaser />
      <FinalCTA />
    </>
  );
}

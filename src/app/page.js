import FeaturesOverviewSection from "@/Components/Home/FeturesOverview/FeturesOverviewSection";
import HeroSection from "@/Components/Home/Hero/HeroSection";
import HowItWorkSection from "@/Components/Home/HowItWork/HowItWorkSection";

export default function Home() {
  return (
    <section>
      <HeroSection />
      <FeaturesOverviewSection />
      <HowItWorkSection />
    </section>
  );
}

import { Hero } from "@/sections/Hero";
import { TrustedBy } from "@/sections/TrustedBy";
import { FeaturedReel } from "@/sections/FeaturedReel";
import { Portfolio } from "@/sections/Portfolio";
import { BeforeAfter } from "@/sections/BeforeAfter";
import { Services } from "@/sections/Services";
import { WhyChooseUs } from "@/sections/WhyChooseUs";
import { Process } from "@/sections/Process";
import { Statistics } from "@/sections/Statistics";
import { Testimonials } from "@/sections/Testimonials";
import { Industries } from "@/sections/Industries";
import { FAQ } from "@/sections/FAQ";
import { CTA } from "@/sections/CTA";

export default function Home() {
  return (
    <main className="flex-1 w-full flex flex-col">
      <Hero />
      <TrustedBy />
      <FeaturedReel />
      <Portfolio />
      <BeforeAfter />
      <Services />
      <WhyChooseUs />
      <Process />
      <Statistics />
      <Testimonials />
      <Industries />
      <FAQ />
      <CTA />
    </main>
  );
}

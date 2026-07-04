import { Hero } from "@/sections/Hero";
import { TrustedBy } from "@/sections/TrustedBy";
import { FeaturedReel } from "@/sections/FeaturedReel";
import { Services } from "@/sections/Services";
import { WhyChooseUs } from "@/sections/WhyChooseUs";
import { Process } from "@/sections/Process";
import { BeforeAfter } from "@/sections/BeforeAfter";

export default function Home() {
  return (
    <main className="flex-1 w-full flex flex-col">
      <Hero />
      <TrustedBy />
      <FeaturedReel />
      <Services />
      <WhyChooseUs />
      <Process />
      <BeforeAfter />
    </main>
  );
}

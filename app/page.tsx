import { Hero } from "@/sections/Hero";
import { TrustedBy } from "@/sections/TrustedBy";

export default function Home() {
  return (
    <main className="flex-1 w-full flex flex-col">
      <Hero />
      <TrustedBy />
    </main>
  );
}

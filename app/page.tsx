import { Hero } from "@/components/sections/hero";
import { LocationCta } from "@/components/sections/location-cta";
import { Team } from "@/components/sections/team";
import { ValueProps } from "@/components/sections/value-props";

export default function Home() {
  return (
    <>
      <Hero />
      <ValueProps />
      <Team />
      <LocationCta />
    </>
  );
}

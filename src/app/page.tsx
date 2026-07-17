import Hero from "@/components/sections/Hero";
import NeonSlogan from "@/components/sections/NeonSlogan";
import NavButtons from "@/components/sections/NavButtons";
import VideoSection from "@/components/sections/VideoSection";
import EventsCarousel from "@/components/sections/EventsCarousel";
import Gallery from "@/components/sections/Gallery";
import ServicesGrid from "@/components/sections/ServicesGrid";
import RouteBlock from "@/components/sections/RouteBlock";

export default function Home() {
  return (
    <>
      <Hero />
      <NeonSlogan />
      <NavButtons />
      <VideoSection />
      <EventsCarousel />
      <Gallery />
      <ServicesGrid />
      <RouteBlock />
    </>
  );
}

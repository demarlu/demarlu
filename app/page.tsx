import { ToursData } from "@/data/tours";
import Carousel from "./components/AppWide/Carousel";
import Container from "./components/AppWide/Container";
import Header from "./components/AppWide/Header";
import HeroSection from "./components/Home/HeroSection";
import ServicePreview from "./components/Home/ServicePreview";
import ToursPreview from "./components/Home/ToursPreview";

export default function Home() {
  return (
    <main>
      <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 lg:rounded-br-full">
        <Container>
          <Header />
          <HeroSection />
        </Container>
      </div>

      <Container>
        <ServicePreview />
      </Container>

      <div className="bg-gradient-to-b from-yellow-50 to-yellow-100 ">
      <Container>
      <Carousel slides={ToursData}/>
      </Container>
      </div>
    </main>
  );
}

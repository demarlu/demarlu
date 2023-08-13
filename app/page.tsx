import { ToursData } from "@/data/tours";
import Carousel from "./components/AppWide/Carousel";
import Container from "./components/AppWide/Container";
import Header from "./components/AppWide/Header";
import HeroSection from "./components/Home/HeroSection";
import ServicePreview from "./components/Home/ServicePreview";

export default function Home() {
  return (
    <main>
      <div className="bg-gradient-to-r lg:rounded-br-full">
        <Container>
          <Header />
          <HeroSection />
        </Container>
      </div>

      <Container>
        <ServicePreview />
      </Container>

      <div className="bg-gradient-to-b ">
      <Container>
      <Carousel slides={ToursData} autoSlide={true} autoSlideInterval={5000}/>
      </Container>
      </div>
    </main>
  );
}

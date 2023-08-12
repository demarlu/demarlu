import Container from "./components/AppWide/Container";
import Header from "./components/AppWide/Header";
import HeroSection from "./components/Home/HeroSection";
import ServicePreview from "./components/Home/ServicePreview";

export default function Home() {
  return (
    <main className="">
      <Header/>
      <Container>

        <HeroSection/>
        <ServicePreview/>
      </Container>
    </main>
  )
}

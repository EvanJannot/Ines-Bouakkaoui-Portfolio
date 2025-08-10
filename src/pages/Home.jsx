import Navbar from "../components/Navbar";
import HeroSection from "../components/Hero";
import FooterSection from "../components/Footer";
import MyProjects from "../components/MyProjects";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <MyProjects />
      <FooterSection />
    </>
  );
}

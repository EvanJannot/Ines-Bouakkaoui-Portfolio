import Navbar from "../components/Navbar";
import HeroSection from "../components/Hero";
import FooterSection from "../components/Footer";
import MyProjects from "../components/MyProjects";
import FooterSignature from "../components/FooterSignature";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <MyProjects />
      <FooterSection />
      <FooterSignature />
    </>
  );
}

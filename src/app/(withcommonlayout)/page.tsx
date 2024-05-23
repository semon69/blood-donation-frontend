import HeroSection from "@/components/HomePages/HeroSection";
import SearchDonor from "@/components/HomePages/SearchDonor";
import About from "./about/page";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <About />
      <SearchDonor />
    </>
  );
};

export default HomePage;

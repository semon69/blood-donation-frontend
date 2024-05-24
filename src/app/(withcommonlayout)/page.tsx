import HeroSection from "@/components/HomePages/HeroSection";
import SearchDonor from "@/components/HomePages/SearchDonor";
import About from "./about/page";
import CoverageArea from "@/components/HomePages/CoverageArea";
import { Container } from "@mui/material";
import SuccessStories from "@/components/HomePages/SuccessStory";

const HomePage = () => {
  return (
    <Container>
      <HeroSection />
      <About />
      <SearchDonor />
      <CoverageArea />
      <SuccessStories />
    </Container>
  );
};

export default HomePage;

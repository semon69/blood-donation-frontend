import HeroSection from "@/components/HomePages/HeroSection";
import SearchDonor from "@/components/HomePages/SearchDonor";
import About from "./about/page";
import CoverageArea from "@/components/HomePages/CoverageArea";
import { Container } from "@mui/material";
import SuccessStories from "@/components/HomePages/SuccessStory";
import DonationTips from "@/components/HomePages/DonationTips";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <About />
      <SearchDonor />
      <CoverageArea />
      <SuccessStories />
      <DonationTips />
    </>
  );
};

export default HomePage;

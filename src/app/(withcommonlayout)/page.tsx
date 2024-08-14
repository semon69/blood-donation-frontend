import HeroSection from "@/components/HomePages/HeroSection";
import SearchDonor from "@/components/HomePages/SearchDonor";
import About from "./about/page";
import CoverageArea from "@/components/HomePages/CoverageArea";
import { Container } from "@mui/material";
import SuccessStories from "@/components/HomePages/SuccessStory";
import DonationTips from "@/components/HomePages/DonationTips";
import CountableSection from "@/components/HomePages/CountableSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <About />
      <SearchDonor />
      <CoverageArea />
      <CountableSection  />
      <SuccessStories />
      <DonationTips />
    </>
  );
};

export default HomePage;

import ExtraNavbar from "@/components/Shared/ExtraNavbar";
import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";
import { Box } from "@mui/material";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="hidden  lg:block">
        <ExtraNavbar />
      </div>
      <Navbar />
      <Box className="min-h-screen">{children}</Box>
      <Footer />
    </>
  );
};

export default CommonLayout;

import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <Container sx={{
        marginY: "30px"
    }}>
      <Grid container spacing={4} justifyContent={"center"} alignItems={"center"}>
        <Grid item xs={6} >
          <Box>
            <Typography variant="h2">Save Lives</Typography>
            <Typography variant="h2" color={"primary.main"}>Donate Blood!</Typography>
            <Typography sx={{
                fontWeight: 500,
                fontSize: "20px",
                marginY: "10px"
            }}>
              RedLove is a real-time free platform to help blood searchers
              connect voluntary blood donors around Bangladesh.
            </Typography>
            <Stack direction={"row"} gap={2}>
                <Button><Link href={""}>Join As Donor</Link></Button>
                <Button><Link href={"/searchDonor"}>Search Donor</Link></Button>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Image
          className="rounded-xl"
            width={520}
            height={520}
            src={
              "https://cdn.pixabay.com/photo/2018/01/17/04/13/blood-donation-3087392_1280.jpg"
            }
            alt="Image"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HeroSection;

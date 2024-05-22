"use client";

import { storeUserInfo } from "@/actions/authServices";
import { userLogin } from "@/actions/login";
import BDForm from "@/components/Forms/BDFrom";
import BDInput from "@/components/Forms/BDInput";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const LoginPage = () => {
  const router = useRouter();
  const handleLogin = async (values: FieldValues) => {
    console.log(values);
    try {
      const res = await userLogin(values);
      if (res?.data?.token) {
        toast.success(res?.message);
        storeUserInfo({ token: res?.data?.token });
        router.push("/");
      } else {
        // setError(res.message);
        console.log(res);
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };
  return (
    <Container>
      <Stack
        sx={{
          height: "60vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            boxShadow: 2,
            borderRadius: 1,
            p: 4,
            textAlign: "center",
          }}
        >
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              {/* <Image src={assets.svgs.logo} width={50} height={50} alt="logo" />
               */}
              Image
            </Box>
            <Box>
              <Typography variant="h6" fontWeight={600}>
                Login BD
              </Typography>
            </Box>
          </Stack>

          {/* <Box>
              <Typography
                sx={{
                  backgroundColor: "red",
                  padding: "1px",
                  borderRadius: "2px",
                  color: "white",
                  marginTop: "5px",
                }}
              >
              </Typography>
            </Box> */}

          <Box>
            <BDForm
              onSubmit={handleLogin}
              defaultValues={{
                email: "",
                password: "",
              }}
            >
              <Grid container spacing={2} my={1}>
                <Grid item md={6}>
                  <BDInput
                    name="email"
                    label="Email"
                    type="email"
                    fullWidth={true}
                    required
                  />
                </Grid>
                <Grid item md={6}>
                  <BDInput
                    name="password"
                    label="Password"
                    type="password"
                    fullWidth={true}
                    required
                  />
                </Grid>
              </Grid>

              <Typography mb={1} textAlign="end" component="p" fontWeight={300}>
                Forgot Password?
              </Typography>

              <Button
                sx={{
                  margin: "10px 0px",
                  backgroundColor: "primary.main",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "primary.dark",
                    color: "white",
                  },
                }}
                fullWidth={true}
                type="submit"
              >
                Login
              </Button>
              <Typography component="p" fontWeight={300}>
                <span>{"Don't have an account?"}</span>
                <Link href="/register">Create an account</Link>
              </Typography>
            </BDForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;

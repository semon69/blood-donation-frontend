"use client";

import { getUserInfo, removeUser, storeUserInfo } from "@/actions/authServices";
import { userLogin } from "@/actions/login";
import BDForm from "@/components/Forms/BDFrom";
import BDInput from "@/components/Forms/BDInput";
import { baseApi } from "@/redux/api/baseApi";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import logo from "../../../assets/logo.jpg";

const LoginPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  dispatch(baseApi.util.invalidateTags(["user", "request"]));

  const handleLogin = async (values: FieldValues) => {
    try {
      removeUser();
      const res = await userLogin(values);
      if (res?.data?.token) {
        toast.success(res?.message);
        storeUserInfo({ token: res?.data?.token });
        const { role } = getUserInfo() as any;
        router.push(`/dashboard/${role}`);
      } else {
        // setError(res.message);
        // console.log(res);
        toast.error(res?.message);
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };
  return (
    <Container>
      <Stack
        sx={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: "30px",
        }}
      >
        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            boxShadow: 1,
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
              <Image src={logo} alt="Logo" width={50} height={50} />
            </Box>
            <Box>
              <Typography variant="h6" fontWeight={600}>
                Login
              </Typography>
            </Box>
          </Stack>

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
                <Link href="/register" className="text-red-500 ms-1">Create an account</Link>
              </Typography>
            </BDForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;

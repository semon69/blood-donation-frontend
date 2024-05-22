"use client";

import BDDatePicker from "@/components/Forms/BDDatePicker";
import BDForm from "@/components/Forms/BDFrom";
import BDInput from "@/components/Forms/BDInput";
import BDSelectInput from "@/components/Forms/BDSelectInput";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "@/zodValidation/register";
import { dateFormatter } from "@/utils/dateFormatter";
import { toast } from "sonner";
import { registerUser } from "@/actions/register";
import { userLogin } from "@/actions/login";
import { storeUserInfo } from "@/actions/authServices";
import { useRouter } from "next/navigation";

const defaultValues = {
  name: "",
  email: "",
  userName: "",
  password: "",
  confirmPassword: "",
  image: "",
  contactNo: "",
  bloodType: "A_POSITIVE",
  location: "",
  availability: "yes"
};
const RegisterPage = () => {
  const router = useRouter();

  const handleRegister = async (values: FieldValues) => {
    
    values.lastDonationDate = dateFormatter(values.lastDonationDate);

    // Convert availability to boolean based on 'yes' and 'no'
    if (values.availability === "yes") {
      values.availability = true;
    } else if (values.availability === "no") {
      values.availability = false;
    }

    console.log(values);

    try {
      const res = await registerUser(values);

      if (res?.data?.id) {
        toast.success(res?.message);
        const result = await userLogin({
          password: values.password,
          email: values.email,
        });
        if (result?.data?.token) {
          storeUserInfo({ token: result?.data?.token });
          router.push("/");
        }
      }
    } catch (error: any) {
      console.error(error?.message);
      toast.error(error?.message);
    }
  };
  return (
    <Container>
      <Stack
        sx={{
          justifyContent: "center",
          alignItems: "center",
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
              {/* <Image src={assets.svgs.logo} width={50} height={50} alt="logo" /> */}
              Image
            </Box>
            <Box>
              <Typography variant="h6" fontWeight={600}>
                Patient Register
              </Typography>
            </Box>
          </Stack>

          <Box>
            <BDForm
              onSubmit={handleRegister}
              // resolver={zodResolver(userSchema)}
              defaultValues={defaultValues}
            >
              <Grid container spacing={2} my={1}>
                <Grid item md={12}>
                  <BDInput label="Name" fullWidth={true} name="name" />
                </Grid>
                <Grid item md={6}>
                  <BDInput
                    label="Email"
                    type="email"
                    fullWidth={true}
                    name="email"
                    required
                  />
                </Grid>
                <Grid item md={6}>
                  <BDInput
                    label="User Name"
                    type="text"
                    fullWidth={true}
                    name="userName"
                    required
                  />
                </Grid>
                <Grid item md={6}>
                  <BDInput
                    label="Password"
                    type="password"
                    fullWidth={true}
                    name="password"
                    required
                  />
                </Grid>
                <Grid item md={6}>
                  <BDInput
                    label="Confirm Password"
                    type="password"
                    fullWidth={true}
                    name="confirmPassword"
                    required
                  />
                </Grid>
                <Grid item md={6}>
                  <BDInput
                    label="Contact Number"
                    type="text"
                    fullWidth={true}
                    name="contactNo"
                    required
                  />
                </Grid>
                <Grid item md={6}>
                  <BDInput
                    label="Image"
                    type="text"
                    fullWidth={true}
                    name="image"
                    required
                  />
                </Grid>
                <Grid item md={6}>
                  <BDInput label="Location" fullWidth={true} name="location" />
                </Grid>
                <Grid item md={6}>
                  <BDSelectInput
                    items={["yes", "no"]}
                    label="Availablity"
                    fullWidth={true}
                    name="availability"
                    required
                  />
                </Grid>
                <Grid item md={6}>
                  <BDSelectInput
                    items={[
                      "A_POSITIVE",
                      "A_NEGATIVE",
                      "B_POSITIVE",
                      "B_NEGATIVE",
                      "AB_POSITIVE",
                      "AB_NEGATIVE",
                      "O_POSITIVE",
                      "O_NEGATIVE",
                    ]}
                    label="Blood Type"
                    fullWidth={true}
                    name="bloodType"
                    required
                  />
                </Grid>
                <Grid item md={6}>
                  <BDDatePicker
                    label="Last Donation Date"
                    fullWidth={true}
                    name="lastDonationDate"
                    required
                  />
                </Grid>
              </Grid>
              <Button
                sx={{
                  margin: "10px 0px",
                }}
                fullWidth={true}
                type="submit"
              >
                Register
              </Button>
              <Typography component="p" fontWeight={300}>
                Do you already have an account? <Link href="/login">Login</Link>
              </Typography>
            </BDForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
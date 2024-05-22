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

export const defaultValues = {
  password: "",
  patient: {
    name: "",
    email: "",
    contactNumber: "",
    address: "",
  },
};

const RegisterPage = () => {
  const handleRegister = async (values: FieldValues) => {
    console.log(values);
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
            <BDForm onSubmit={handleRegister} defaultValues={defaultValues}>
              <Grid container spacing={2} my={1}>
                <Grid item md={12}>
                  <BDInput label="Name" fullWidth={true} name="patient.name" />
                </Grid>
                <Grid item md={6}>
                  <BDInput
                    label="Email"
                    type="email"
                    fullWidth={true}
                    name="email"
                  />
                </Grid>
                <Grid item md={6}>
                  <BDInput
                    label="User Name"
                    type="text"
                    fullWidth={true}
                    name="userName"
                  />
                </Grid>
                <Grid item md={6}>
                  <BDInput
                    label="Password"
                    type="password"
                    fullWidth={true}
                    name="password"
                  />
                </Grid>
                <Grid item md={6}>
                  <BDInput
                    label="Confirm Password"
                    type="password"
                    fullWidth={true}
                    name="confirmPassword"
                  />
                </Grid>
                <Grid item md={6}>
                  <BDInput
                    label="Contact Number"
                    type="tel"
                    fullWidth={true}
                    name="contactNumber"
                  />
                </Grid>
                <Grid item md={6}>
                  <BDInput label="Location" fullWidth={true} name="location" />
                </Grid>
                <Grid item md={6}>
                  <BDSelectInput
                    items={["Yes", "No"]}
                    label="Availablity"
                    fullWidth={true}
                    name="availablity"
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
                  />
                </Grid>
                <Grid item md={6}>
                  <BDDatePicker
                    label="Last Donation Date"
                    fullWidth={true}
                    name="lastDonationDate"
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

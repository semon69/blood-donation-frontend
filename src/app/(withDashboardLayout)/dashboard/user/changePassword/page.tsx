"use client";

import BDForm from "@/components/Forms/BDFrom";
import BDInput from "@/components/Forms/BDInput";
import { useChangePasswordMutation } from "@/redux/api/authApi";
import { Box, Button, Container, Grid, Stack } from "@mui/material";
import { error } from "console";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const ChangePasswordPage = () => {
  const router = useRouter();
  const [changePassword] = useChangePasswordMutation();

  const handleChangePassword = async (values: FieldValues) => {
    try {
      const res: any = await changePassword(values);

      console.log(res);

      if (res?.data?.message) {
        toast.success(res?.data?.message);
        router.push("/");
      }
      if (res?.error) {
        toast.error(res?.error?.data);
      }
    } catch (error: any) {
      // toast.error(error?.message)
      console.error(error);
    }
  };
  return (
    <Container>
      <Stack
        sx={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50px",
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
          <BDForm
            onSubmit={handleChangePassword}
            defaultValues={{
              oldPassword: "",
              newPassword: "",
              confirmPassword: "",
            }}
          >
            <Grid container spacing={2} my={1}>
              <Grid item md={12}>
                <BDInput
                  label="Old Password"
                  type="password"
                  fullWidth={true}
                  name="oldPassword"
                  required
                />
              </Grid>
              <Grid item md={6}>
                <BDInput
                  label="New Password"
                  type="password"
                  fullWidth={true}
                  name="newPassword"
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
            </Grid>
            <Button
              sx={{
                margin: "10px 0px",
              }}
              fullWidth={true}
              type="submit"
            >
              Cahnge Password
            </Button>
          </BDForm>
        </Box>
      </Stack>
    </Container>
  );
};

export default ChangePasswordPage;

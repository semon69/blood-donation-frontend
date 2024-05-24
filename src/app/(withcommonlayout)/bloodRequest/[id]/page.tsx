"use client";

import { isLoggedIn } from "@/actions/authServices";
import BDDatePicker from "@/components/Forms/BDDatePicker";
import BDForm from "@/components/Forms/BDFrom";
import BDInput from "@/components/Forms/BDInput";
import BDSelectInput from "@/components/Forms/BDSelectInput";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { FieldValues } from "react-hook-form";
import { dateFormatter } from "@/utils/dateFormatter";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import {
  useGetSingleUserQuery,
  useGetSingleUserUsingIdQuery,
} from "@/redux/api/userApi";
import { useCreateRequestMutation } from "@/redux/api/requestApi";

type TParams = {
  params: {
    id: string;
  };
};

const BloodRequestPage = ({ params }: TParams) => {
  const id = params?.id;
  const { data: requester, isLoading } = useGetSingleUserQuery({});
  const [createRequest] = useCreateRequestMutation();

  const router = useRouter();
  if (!isLoggedIn()) {
    return router.push("/login");
  }

  const defaultValues = {
    name: requester?.name || "",
    contactNo: requester?.contactNo || "",
    hospitalName: "",
    hospitalAddress: "",
    reason: "",
  };

  // console.log("from request", data);

  const handleRequest = async (values: FieldValues) => {
    values.dateOfDonation = dateFormatter(values.dateOfDonation);

    // console.log(values);

    const bodyData = {
      donorId: id,
      contactNo: values.contactNo,
      dateOfDonation: values.dateOfDonation,
      hospitalName: values.hospitalName,
      hospitalAddress: values.hospitalAddress,
      reason: values.reason,
    };


    try {
      const res = await createRequest(bodyData).unwrap();
      if (res?.id) {
        toast.success("Request make succesfully");
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
          margin: "60px",
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
              <Typography variant="h6" fontWeight={600}>
                Send Request For Blood
              </Typography>
            </Box>
          </Stack>

          <Box>
            <BDForm onSubmit={handleRequest} defaultValues={defaultValues}>
              <Grid container spacing={2} my={1}>
                <Grid item md={6}>
                  <BDInput
                    label="Requester Name"
                    fullWidth={true}
                    name="name"
                  />
                </Grid>
                <Grid item md={6}>
                  <BDInput
                    label="Requester Contact Number"
                    type="text"
                    fullWidth={true}
                    name="contactNo"
                  />
                </Grid>
                <Grid item md={6}>
                  <BDInput
                    label="Hospital Name"
                    fullWidth={true}
                    name="hospitalName"
                    required
                  />
                </Grid>
                <Grid item md={6}>
                  <BDInput
                    label="Hospital Address"
                    fullWidth={true}
                    name="hospitalAddress"
                    required
                  />
                </Grid>
                <Grid item md={6}>
                  <BDInput
                    label="Reason"
                    fullWidth={true}
                    name="reason"
                    required
                  />
                </Grid>
                <Grid item md={6}>
                  <BDDatePicker
                    label="Donation Date"
                    fullWidth={true}
                    name="dateOfDonation"
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
                Send Request
              </Button>
            </BDForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default BloodRequestPage;

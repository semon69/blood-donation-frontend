"use client";

import BDDatePicker from "@/components/Forms/BDDatePicker";
import BDForm from "@/components/Forms/BDFrom";
import BDInput from "@/components/Forms/BDInput";
import {
  useGetSingleUserUsingIdQuery,
  useUpdateUserMutation,
} from "@/redux/api/userApi";
import { dateFormatter } from "@/utils/dateFormatter";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TParams = {
  params: {
    id: string;
  };
};

const EditUserData = ({ params }: TParams) => {
  const id = params?.id;

  const { data, isLoading } = useGetSingleUserUsingIdQuery(id);
  const [updateUser] = useUpdateUserMutation();
  //   console.log(data);

  const handleEdit = async (values: FieldValues) => {
    // console.log(values);
    values.lastDonationDate = dateFormatter(values.lastDonationDate);

    try {
      const res: any = await updateUser({ values, id });

      if (res?.data?.id) {
        toast.success("User data edited successfully");
      }
      if (res?.error) {
        toast.error(res?.error?.data);
      }
    } catch (error: any) {
      console.error(error?.message);
      toast.error(error?.data);
    }
  };

  return (
    <div>
      <Box>
        <BDForm
          onSubmit={handleEdit}
          // resolver={zodResolver(userSchema)}
          defaultValues={{
            name: data?.name,
            email: data?.email,
            userName: data?.userName,
            image: data?.image,
            contactNo: data?.contactNo,
            location: data?.location,
            // lastDonationDate: data?.lastDonationDate
          }}
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
            Submit
          </Button>
        </BDForm>
      </Box>
    </div>
  );
};

export default EditUserData;

"use client";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button, Container, Typography } from "@mui/material";
import { toast } from "sonner";
import {
  useGetAllUsersQuery,
  useUpdateUserActiveStatusMutation,
  useUpdateUserRoleMutation,
} from "@/redux/api/userApi";

const ManageUsers = () => {
  const { data } = useGetAllUsersQuery({});
  const [updateUserActiveStatus] = useUpdateUserActiveStatusMutation();
  const [updateUserRole] = useUpdateUserRoleMutation();

  //   console.log(data);

  const handleDeactivate = async (id: string) => {
    const isActive = {
      isActive: false,
    };

    try {
      const res = await updateUserActiveStatus({ id, isActive });
      //   console.log(res);
      if (res?.data?.id) {
        toast.success("User Activate Status Updated successfully");
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error?.message);
    }
  };

  const handleActivate = async (id: string) => {
    const isActive = {
      isActive: true,
    };

    try {
      const res = await updateUserActiveStatus({ id, isActive });
      //   console.log(res);
      if (res?.data?.id) {
        toast.success("User Activate Status Updated successfully");
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error?.message);
    }
  };

  const handleMakeAdmin = async (id: string) => {
    const role = {
      role: "admin",
    };

    try {
      const res = await updateUserRole({ id, role });
      console.log(res);
      if (res?.data?.id) {
        toast.success("User Role Updated successfully");
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error?.message);
    }
  };
  const handleMakeUser = async (id: string) => {
    const role = {
      role: "user",
    };

    try {
      const res = await updateUserRole({ id, role });
      // console.log(res);
      if (res?.data?.id) {
        toast.success("User Role Updated successfully");
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error?.message);
    }
  };

  return (
    <Container>
      <Box sx={{ marginY: "20px" }}>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            // fontWeight: 600,
          }}
        >
          Manage User
        </Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650, boxShadow: 0 }}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Blood Type</TableCell>
              <TableCell>Contact Number</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Active Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.data?.map((item: any) => (
              <TableRow
                key={item?.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {item?.name}
                </TableCell>
                <TableCell>{item?.bloodType}</TableCell>
                <TableCell>{item?.contactNo}</TableCell>
                <TableCell>{item?.role}</TableCell>
                <TableCell>{item?.isActive ? "Active" : "Unactive"}</TableCell>

                <TableCell>
                  <Box sx={{ display: "flex", gap: 1 }}>
                    <Box>
                      {item?.isActive ? (
                        <Button
                          size="small"
                          onClick={() => handleDeactivate(item?.id)}
                        >
                          Deactivate
                        </Button>
                      ) : (
                        <Button
                          size="small"
                          onClick={() => handleActivate(item?.id)}
                        >
                          Activate
                        </Button>
                      )}
                    </Box>
                    <Box>
                      {item?.role === "user" ? (
                        <Button
                          size="small"
                          onClick={() => handleMakeAdmin(item?.id)}
                        >
                          Make Admin
                        </Button>
                      ) : (
                        <Button
                          size="small"
                          onClick={() => {
                            handleMakeUser(item?.id);
                          }}
                        >
                          Make User
                        </Button>
                      )}
                    </Box>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ManageUsers;

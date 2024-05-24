"use client";

import {
  useDonationRequestForMeQuery,
  useUpdateStatusMutation,
} from "@/redux/api/requestApi";
import { useGetMyDonationRequestQuery } from "@/redux/api/requestApi";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button, Container, Typography } from "@mui/material";
import { toast } from "sonner";

const DonationRequestForMePage = () => {
  const { data } = useDonationRequestForMeQuery({});
  const [updateStatus] = useUpdateStatusMutation();

  const handleApproveRequest = async (id: string) => {
    const status = {
      status: "APPROVED",
    };

    try {
      const res = await updateStatus({ id, status }).unwrap();
      
      if (res?.id) {
        toast.success("Request Status Approved successfully");
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error?.message);
    }
  };

  const handleRejectRequest = async (id: string) => {
    const status = {
      status: "REJECTED",
    };

    try {
      const res = await updateStatus({ id, status }).unwrap();
      if (res?.id) {
        toast.success("Request Status Rejected successfully");
      }
    } catch (error: any) {
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
          Donattion Request For Me
        </Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650, boxShadow: 0 }}>
          <TableHead>
            <TableRow>
              <TableCell>Requester Name</TableCell>
              <TableCell>Blood Type</TableCell>
              <TableCell>Date Of Donation</TableCell>
              <TableCell>Contact Number</TableCell>
              <TableCell>Request Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((item: any) => (
              <TableRow
                key={item?.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {item?.requester?.name}
                </TableCell>
                <TableCell>{item?.requester?.bloodType}</TableCell>
                <TableCell>{item?.dateOfDonation}</TableCell>
                <TableCell>{item?.contactNo}</TableCell>
                <TableCell>{item?.requestStatus}</TableCell>

                <TableCell>
                  <Box sx={{ display: "flex", gap: 1 }}>
                    <Button
                      onClick={() => handleApproveRequest(item?.id)}
                      size="small"
                      disabled={
                        item?.requestStatus === "APPROVED" ||
                        item?.requestStatus === "REJECTED"
                      }
                    >
                      Approve
                    </Button>
                    <Button
                      onClick={() => handleRejectRequest(item?.id)}
                      size="small"
                      disabled={
                        item?.requestStatus === "APPROVED" ||
                        item?.requestStatus === "REJECTED"
                      }
                    >
                      Reject
                    </Button>
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

export default DonationRequestForMePage;

"use client";

import { useGetMyDonationRequestQuery } from "@/redux/api/requestApi";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Container, Typography } from "@mui/material";

const MyDonationRequest = () => {
  const { data } = useGetMyDonationRequestQuery({});

  console.log(data);
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
          Donattion Request By Me
        </Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650, boxShadow: 0 }}>
          <TableHead>
            <TableRow>
              <TableCell>Donor Name</TableCell>
              <TableCell >Blood Type</TableCell>
              <TableCell >Date Of Donation</TableCell>
              <TableCell >Request Status</TableCell>
              <TableCell >Contact Number</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((item: any) => (
              <TableRow
                key={item?.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {item?.donor?.name}
                </TableCell>
                <TableCell >{item?.donor?.bloodType}</TableCell>
                <TableCell >{item?.dateOfDonation}</TableCell>
                <TableCell>{item?.requestStatus}</TableCell>
                <TableCell >
                  {
                    item?.requestStatus === "APPROVED" ? 
                    (item?.contactNo)
                    :
                    <Typography color={"primary.main"}>Number showing after Approved</Typography>
                  }
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default MyDonationRequest;

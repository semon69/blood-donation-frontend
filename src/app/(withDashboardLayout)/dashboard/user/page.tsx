"use client";

import { baseApi } from "@/redux/api/baseApi";
import { useGetSingleUserQuery } from "../../../../redux/api/userApi";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import Link from "next/link";
import { useDispatch } from "react-redux";
import Loading from "@/components/Shared/Loading";
const CardContainer = styled(Card)(({ theme }) => ({
  maxWidth: 600,
  margin: "auto",
  marginTop: theme.spacing(5),
  padding: theme.spacing(3),
  textAlign: "center",
  position: "relative",
  borderRadius: 15,
  boxShadow: "0 10px 20px rgba(0,0,0,0.12), 0 6px 6px rgba(0,0,0,0.1)",
  background: "linear-gradient(145deg, #ffffff, #f0f0f0)",
  transition: "transform 0.3s, box-shadow 0.3s",
  "&:hover": {
    transform: "translateY(-10px)",
    boxShadow: "0 15px 25px rgba(0,0,0,0.15), 0 10px 10px rgba(0,0,0,0.05)",
  },
  animation: "fadeIn 1s ease-in-out",
}));

const UserAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(12),
  height: theme.spacing(12),
  margin: "auto",
  marginBottom: theme.spacing(2),
  border: "4px solid #fff",
  boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
}));

const EditButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(3),
  backgroundColor: "#ff4b5c",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#ff3b4c",
    transform: "scale(1.05)",
  },
  transition: "background-color 0.3s, transform 0.3s",
}));

const fadeIn = `
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}`;

const UserPage = () => {
  const dispatch = useDispatch();
  dispatch(baseApi.util.invalidateTags(["user", "request"]));

  const { data, isLoading } = useGetSingleUserQuery({});



  // console.log(data);
  return (
    <div>
      {!isLoading ? (
        <div>
          <style>{fadeIn}</style>
          <CardContainer>
            <UserAvatar src={data?.image} alt={data?.name} />
            <CardContent>
              <Typography variant="h5" component="h2">
                {data?.name}
              </Typography>
              <Typography color="textSecondary" gutterBottom>
                {data?.bloodType}
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="body1">Email: {data?.email}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1">
                    Contact No: {data?.contactNo}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1">
                    Location: {data?.location}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1">
                    Last Donation Date: {data?.lastDonationDate}
                  </Typography>
                </Grid>
              </Grid>
              <EditButton variant="contained" color="primary">
                <Link href={`/dashboard/${data?.role}/edit/${data?.id}`}>
                  Edit
                </Link>
              </EditButton>
            </CardContent>
          </CardContainer>
        </div>
      ) : (
        <Loading message="Please wait..." />
      )}
    </div>
  );
};

export default UserPage;

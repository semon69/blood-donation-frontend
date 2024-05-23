"use client";

import { useGetSingleUserUsingIdQuery } from "@/redux/api/userApi";
import { Box, Button, Container, Divider, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

type TParams = {
  params: {
    id: string;
  };
};

const DonorDetailsPage = ({ params }: TParams) => {
  
  const id = params?.id;

  const { data, isLoading } = useGetSingleUserUsingIdQuery(id);

  return (
    <Container>
      {isLoading ? (
        <Typography> Loading...</Typography>
      ) : (
        <Box
          sx={{
            display: "flex",
            gap: 10,
            borderRadius: "10px",
            boxShadow: 2,
            padding: "15px",
          }}
        >
          <Box
            sx={{
              borderRadius: "15px",
            }}
          >
            <Image
              src={data?.image || "https://i.ibb.co/8PmDtj1/jh.jpg"}
              alt="image"
              width={600}
              height={500}
              style={{
                borderRadius: "15px",
              }}
            />
          </Box>
          <Box
            sx={{
              marginTop: "10px",
              "& > *:not(:last-child)": {
                mb: 1,
              },
            }}
          >
            <Typography variant="h5">
              Name: <span className="font-medium ml-3">{data?.name}</span>
            </Typography>
            <Typography variant="h5">
              Blood Group:{" "}
              <span className="font-medium ml-3">{data?.bloodType}</span>
            </Typography>
            <Typography variant="h5">
              Address:{" "}
              <span className="font-medium ml-3">{data?.location}</span>
            </Typography>
            <Typography variant="h5">
              Avaiability:{" "}
              <span className="font-medium ml-3">
                {data?.availability ? "Yes" : "No"}
              </span>
            </Typography>

            <Divider></Divider>

            <Box>
              {data?.availability ? (
                <Box
                  sx={{
                    marginTop: "10px",
                    "& > *:not(:last-child)": {
                      mb: 1,
                    },
                  }}
                >
                  <Typography variant="h5" color={"primary.main"}>
                    Contact Information
                  </Typography>
                  <Typography variant="h5">
                    Number:{" "}
                    <span className="font-medium ml-3">{data?.contactNo}</span>
                  </Typography>
                  <Typography variant="h5">
                    Email:{" "}
                    <span className="font-medium ml-3">{data?.email}</span>
                  </Typography>
                </Box>
              ) : (
                <Typography color={"primary.main"}>
                  This person is Unavailable to donate blood
                </Typography>
              )}
            </Box>
            <Button>
              <Link href={`/bloodRequest/${id}`}>Request for Blood</Link>
            </Button>
          </Box>
        </Box>
      )}
    </Container>
  );
};

export default DonorDetailsPage;

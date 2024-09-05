"use client";

import DonorCard from "@/components/Donor/DonorCard";
import { useGetAllDonorsQuery } from "@/redux/api/userApi";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import Loading from "../Shared/Loading";

const SearchDonor = () => {
  const query: Record<string, any> = {};

  const [searchTerm, setSearchTerm] = useState("");
  const [availability, setAvaiability] = useState<boolean | null>(null);

  const handleChange = (event: any) => {
    setAvaiability(event.target.value === "true");
  };

  //   console.log(availability);

  query["searchTerm"] = searchTerm;

  query["availability"] = availability;

  const { data, isLoading } = useGetAllDonorsQuery({ ...query });

  return (
    <Container
      sx={{
        marginY: "60px",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          //   fontWeight: 600,
        }}
      >
        Search Blood Donor
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: 8,
          marginY: "40px",
        }}
      >
        <TextField
          className="w-1/2"
          onChange={(e) => setSearchTerm(e.target.value)}
          size="medium"
          placeholder="Search donor by Name, Location, Blood Group"
        />
      </Box>

      <Box>
        {isLoading ? (
          <Loading message="please wait..." />
        ) : data?.data?.length > 0 ? (
          <Box className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7">
            {data?.data?.slice(0, 8).map((donor: any) => (
              <DonorCard key={donor?.id} donor={donor} />
            ))}
          </Box>
        ) : (
          <>
            <p>No data found</p>
          </>
        )}
      </Box>
      {data?.data?.length < 0 ? (
        <></>
      ) : (
        <Box sx={{ display: "flex", justifyContent: "center", marginY: 4 }}>
          <Button variant="contained">
            <Link href="/searchDonor" color="inherit">
              View All
            </Link>
          </Button>
        </Box>
      )}
    </Container>
  );
};

export default SearchDonor;

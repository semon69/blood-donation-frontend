"use client";

import DonorCard from "@/components/Donor/DonorCard";
import Loading from "@/components/Shared/Loading";
import { useGetAllDonorsQuery } from "@/redux/api/userApi";
import {
  Box,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

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

  //   setAvaiability(null)

  return (
    <Container>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          // fontWeight: 600,
        }}
      >
        Search Blood Donor
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: 8,
          marginY: "40px"
        }}
      >
        <TextField
          fullWidth
          onChange={(e) => setSearchTerm(e.target.value)}
          size="medium"
          placeholder="Search donor by Name, Location, Blood Group"
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Availabilty</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={availability !== null ? String(availability) : ""}
            onChange={handleChange}
            placeholder="Select Availability"
          >
            <MenuItem value={"true"}>Yes</MenuItem>
            <MenuItem value={"false"}>No</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box>
        {isLoading ? (
          <Loading message="Data coming..." />
        ) : (
          <Box className="grid grid-cols-1 md:grid-cols-4 gap-7">
            {data?.data?.map((donor: any) => (
              <DonorCard key={donor?.id} donor={donor} />
            ))}
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default SearchDonor;

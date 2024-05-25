"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function DonorCard({ donor }: { donor: any }) {
  return (
    <Link href={`/searchDonor/${donor?.id}`}>
      <Box
        sx={{
          borderRadius: "10px",
          boxShadow: 2,
          padding: "15px",
          height: "360px",
          // width: "400px"
        }}
      >
        <Box
          sx={{
            borderRadius: "15px",
            height: "190px",
            position: "relative",
            overflow: "hidden",
            objectFit: "cover"
          }}
        >
          <Image
            src={donor?.image || "https://i.ibb.co/8PmDtj1/jh.jpg"}
            width={300}
            height={300}
            alt="image"
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
          <Typography>
            Name: <span className="font-medium ml-3">{donor?.name}</span>
          </Typography>
          <Typography>
            Blood Group:{" "}
            <span className="font-medium ml-3">{donor?.bloodType}</span>
          </Typography>
          <Typography>
            Address: <span className="font-medium ml-3">{donor?.location}</span>
          </Typography>
          <Typography>
            Avaiability:{" "}
            <span className="font-medium ml-3">
              {donor?.availability ? "Yes" : "No"}
            </span>
          </Typography>
        </Box>
      </Box>
    </Link>
  );
}

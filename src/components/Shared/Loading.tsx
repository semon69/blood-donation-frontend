// Loading.tsx

import React from "react";
import { CircularProgress, Box, Typography } from "@mui/material";

interface LoadingProps {
  message?: string;
}

const Loading: React.FC<LoadingProps> = ({ message }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <CircularProgress />
      {message && (
        <Typography variant="h6" mt={2}>
          {message}
        </Typography>
      )}
    </Box>
  );
};

export default Loading;

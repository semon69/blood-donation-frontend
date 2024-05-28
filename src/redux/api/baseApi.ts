
import { axiosBaseQuery } from "@/axios/axiosBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: "https://blood-donation-backend-five.vercel.app/" }),
  endpoints: () => ({}),
  tagTypes: ["user", "request"]
});

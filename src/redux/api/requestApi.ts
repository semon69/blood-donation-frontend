import { TMeta } from "@/types/common";
import { baseApi } from "./baseApi";

export const requestApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createRequest: build.mutation({
      query: (data) => ({
        url: "/donation-request",
        method: "POST",
        data
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const { useCreateRequestMutation } = requestApi;

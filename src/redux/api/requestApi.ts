import { TMeta } from "@/types/common";
import { baseApi } from "./baseApi";

export const requestApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createRequest: build.mutation({
      query: (data) => ({
        url: "/donation-request",
        method: "POST",
        data,
      }),
      invalidatesTags: ["request"],
    }),
    getMyDonationRequest: build.query({
      query: () => ({
        url: "/myDonationsRequest",
        method: "GET",
      }),
      providesTags: ["request"],
    }),
    
    donationRequestForMe: build.query({
      query: () => ({
        url: "/donationRequestForMe",
        method: "GET",
      }),
      providesTags: ["request"],
    }),

    updateStatus: build.mutation({
      query: (data) => ({
        url: `/donation-request/${data.id}`,
        method: "PUT",
        data: data.status
      }),
      invalidatesTags: ["request"],
    }),
  }),
});

export const {
  useCreateRequestMutation,
  useGetMyDonationRequestQuery,
  useDonationRequestForMeQuery,
  useUpdateStatusMutation
} = requestApi;

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
      invalidatesTags: ["user"],
    }),
    getMyDonationRequest: build.query({
      query: () => ({
        url: "/myDonationsRequest",
        method: "GET",
      }),
      providesTags: ["user"],
    }),
    donationRequestForMe: build.query({
      query: () => ({
        url: "/donationRequestForMe",
        method: "GET",
      }),
      providesTags: ["user"],
    }),
    updateStatus: build.mutation({
      query: (data) => ({
        url: `/donation-request/${data.id}`,
        method: "PUT",
        data: data.status
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useCreateRequestMutation,
  useGetMyDonationRequestQuery,
  useDonationRequestForMeQuery,
  useUpdateStatusMutation
} = requestApi;

import { TMeta } from "@/types/common";
import { baseApi } from "./baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllDonors: build.query({
      query: (arg) => ({
        url: "/donor-list",
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: any, meta: TMeta) => {
        return {
          data: response,
          meta,
        };
      },
      providesTags: ["user"],
    }),
    getSingleUser: build.query({
      query: () => ({
        url: "/my-profile",
        method: "GET",
      }),

      providesTags: ["user"],
    }),
  }),
});

export const { useGetSingleUserQuery, useGetAllDonorsQuery } = userApi;

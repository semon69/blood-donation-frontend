import { baseApi } from "./baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getSingleUser: build.query({
      query: () => ({
        url: "/my-profile",
        method: "GET",
      }),
      providesTags: ["user"],
    }),
  }),
});

export const { useGetSingleUserQuery } = userApi;
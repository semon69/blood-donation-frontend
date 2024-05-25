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

    getAllUsers: build.query({
      query: () => ({
        url: "/allUser",
        method: "GET",
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

    getSingleUserUsingId: build.query({
      query: (id) => ({
        url: `/donor/${id}`,
        method: "GET",
      }),

      providesTags: ["user"],
    }),

    updateUser: build.mutation({
      query: (data) => ({
        url: `/my-profile`,
        method: "PATCH",
        data: data?.values
      }),

      invalidatesTags: ["user"],
    }),

    updateUserActiveStatus: build.mutation({
      query: (data) => ({
        url: `/updateActiveStatus/${data?.id}`,
        method: "PATCH",
        data: data?.isActive
      }),

      invalidatesTags: ["user"],
    }),

    updateUserRole: build.mutation({
      query: (data) => ({
        url: `/updateUserRole/${data?.id}`,
        method: "PATCH",
        data: data?.role
      }),

      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useGetSingleUserQuery,
  useGetAllDonorsQuery,
  useGetSingleUserUsingIdQuery,
  useUpdateUserMutation,
  useGetAllUsersQuery,
  useUpdateUserActiveStatusMutation,
  useUpdateUserRoleMutation
} = userApi;

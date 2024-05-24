import { baseApi } from "./baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (loginData) => ({
        url: `/login`,
        method: "POST",
        data: loginData,
      }),
      invalidatesTags: ["user"],
    }),
    changePassword: build.mutation({
      query: (data) => ({
        url: `/change-password`,
        method: "POST",
        contentType: "application/json",
        data: data,
      }),
      invalidatesTags: ["user"],
    })
  }),
});

export const {
  useUserLoginMutation,
  useChangePasswordMutation,
} = authApi;

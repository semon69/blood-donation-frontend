"use server";


export const userLogin = async (data: any) => {
  const res = await fetch(
    // `${process.env.BACKEND_API_URL}/login`,
    "https://blood-donation-backend-five.vercel.app/api/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: 'include',
      cache: "no-cache"
    }
  );
  const userInfo = await res.json();
  return userInfo;
};

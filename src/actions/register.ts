"use server";

export const registerUser = async (data: any) => {
  
  const res = await fetch(`https://blood-donation-servers.vercel.app/api/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-cache",
  });


  const userInfo = await res.json();
  return userInfo;
};



// djbnnfcjsbhfjh
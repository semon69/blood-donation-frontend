"use server";

export const registerUser = async (data: any) => {
  console.log("from register", data);
  
  const res = await fetch(`http://localhost:5000/api/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });


  const userInfo = await res.json();

  return userInfo;
};



// djbnnfcjsbhfjh
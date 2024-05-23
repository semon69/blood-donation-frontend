"use client";

import { useGetMyDonationRequestQuery } from "@/redux/api/requestApi";

const MyDonationRequest = () => {
  const { data } = useGetMyDonationRequestQuery({});

  console.log(data);
  return (
    <div>
      <h1>Hello from my donation request </h1>
    </div>
  );
};

export default MyDonationRequest;

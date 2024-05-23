"use client";

import { useDonationRequestForMeQuery } from "@/redux/api/requestApi";

const DonationRequestForMePage = () => {
    
  const { data } = useDonationRequestForMeQuery({});
  console.log(data);

  return (
    <div>
      <h1>Hello from Donation Request For Me Page</h1>
    </div>
  );
};

export default DonationRequestForMePage;

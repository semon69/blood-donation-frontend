"use client"

import { isLoggedIn } from "@/actions/authServices";
import { useRouter } from "next/navigation";

const BloodRequestPage = () => {

  const router = useRouter();

  if (!isLoggedIn()) {
    return router.push("/login");
  }

  return (
    <div>
      <h1>Hello from Blood Request Page</h1>
    </div>
  );
};

export default BloodRequestPage;

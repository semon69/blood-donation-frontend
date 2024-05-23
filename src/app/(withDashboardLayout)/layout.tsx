"use client";

import { isLoggedIn } from "@/actions/authServices";
import DashboardDrawer from "@/components/Dashboard/DashboardDrawer";
import { useRouter } from "next/navigation";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  if (!isLoggedIn()) {
    return router.push("/login");
  }
  return <DashboardDrawer>{children} </DashboardDrawer>;
};

export default DashboardLayout;

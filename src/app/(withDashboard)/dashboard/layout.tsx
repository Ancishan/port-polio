import Sidebar from "@/components/shared/Sidebar";
import { authOptions } from "@/utils/authOptions";

import type { Metadata } from "next";
import { getServerSession } from "next-auth";


export const metadata: Metadata = {
  title: "Next Auth Dashboard",
  description: "Generated by create next app",
};


export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions)
  
  return (
    <div className="min-h-screen my-2">
      <div className="flex justify-between">
        <div className="w-[20%]">
          <Sidebar session={session} />
        </div>
        <div className="w-[80%] bg-slate-100 rounded-xl ml-2">{children}</div>
      </div>
    </div>
  );
}

"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { FaUser, FaCog, FaHome } from "react-icons/fa";

type UserProps = {
  user?: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
};

const Sidebar = ({ session }: { session: UserProps | null }) => {
  return (
    <div className="bg-slate-100 min-h-screen p-4 rounded-xl">
      <ul className="space-y-4">
        <li>
          <Link
            href="/dashboard"
            className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
          >
            <FaHome className="h-5 w-5" />
            <span>Dashboard</span>
          </Link>
        </li>
        {session?.user && ( // Show these only if user is logged in
          <>
            <li>
              <Link
                href="/dashboard/user-info"
                className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
              >
                <FaUser className="h-5 w-5" />
                <span>User Info</span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/settings"
                className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
              >
                <FaCog className="h-5 w-5" />
                <span>Settings</span>
              </Link>
            </li>
          </>
        )}
      </ul>

      <div className="flex items-center mt-4">
        {session?.user ? (
          <button
            onClick={() => signOut()}
            className="border border-red-500 text-red-500 px-5 py-2 rounded-full hover:bg-red-500 hover:text-black transition duration-200"
          >
            Logout
          </button>
        ) : (
          <Link
            href="/login"
            className="border border-teal-500 text-teal-500 px-5 py-2 rounded-full hover:bg-teal-500 hover:text-black transition duration-200"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Sidebar;

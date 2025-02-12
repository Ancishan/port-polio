/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { userLogin } from "@/utils/actions/loginUser";
import { signIn } from "next-auth/react";
import Image from "next/image";
import lock from '@/assets/locker.png'
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export type FormValues = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    formState: { errors },
  } = useForm<FormValues>();
  const router = useRouter()

  const onSubmit = async (data: FormValues) => {
    // console.log(data);
    try{
      const res = await userLogin(data);
      if(res.accessToken){
        console.log(res)
        alert(res.message)
        localStorage.setItem("accessToken", res.accessToken)
        router.push('/dashboard')

      }
    }catch(err : any){
      console.log(err.message);
      throw new Error(err.message)

    }
  };

  return (
    <div className="my-10 w-[90%] mx-auto">
      <h1 className="text-center text-4xl mb-5 font-bold">
        Login <span className="text-teal-500">Here</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
        <div>
          <Image
            src={lock}
            width={500}
            height={200}
            alt="login page"
            className="w-full h-auto"
          />
        </div>

        <div className="w-[80%] mx-auto bg-white p-6 shadow-lg rounded-lg">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                {...register("email")}
                placeholder="Email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm  sm:text-sm"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                {...register("password")}
                placeholder="Password"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm  sm:text-sm"
                required
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full border border-teal-500 text-teal-500 font-semibold py-2 px-4 rounded-md shadow-md hover:bg-teal-500 hover:text-black"
              >
                Login
              </button>
            </div>
          </form>

          <p className="text-center mt-4 text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-teal-500 hover:underline">
              Create an account
            </Link>
          </p>

          <p className="text-center mt-6 text-sm text-gray-500">
            Or Sign Up Using
          </p>

          {/* Social Login Buttons */}
          <div className="flex justify-center gap-4 mt-4">
            <button onClick={() => signIn("google", {
              callbackUrl: "http://localhost:3000/dashboard",
            }

            )} className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full shadow-md hover:bg-gray-200">
              <Image
                src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
                width={30}
                height={30}
                alt="Google logo"
              />
            </button>
            <button onClick={() => signIn("github", {
              callbackUrl: "http://localhost:3000/dashboard"
            })} className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full shadow-md hover:bg-gray-200">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                width={25}
                height={25}
                alt="GitHub logo"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

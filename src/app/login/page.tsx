"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { FaArrowLeft } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { z } from "zod";

type LoginSchema={
  email:string,
  password:string
}
const LoginSchema=z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
})
export default function Login() {
  const router = useRouter();
  
  const {register,handleSubmit,formState:{errors}}=useForm<LoginSchema>(
    {resolver:zodResolver(LoginSchema)}
  )

  const onSubmit= async (data:LoginSchema) => {
    try {
      const response= await axios.post("http://localhost:5000/users/login", data);   
      if (response.data) {
        router.push("/");
        toast.success("Login successful");
      }
     return  await response.data
    } catch (error:any) {
      console.error(error);
      toast.error(error?.message || "Login failed");
    }
  };

  return (
    <div className="bg-gray-100 h-screen flex items-center relative">
      <div className="flex items-center text-gray-600 font-semibold bg-white absolute top-10 left-10 rounded-full px-4 py-2 shadow-md cursor-pointer">
        <FaArrowLeft />
        <button className="px-2" onClick={() => router.back()}>
          Go Back
        </button>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white w-[444px] rounded-md shadow-md p-6 mx-auto space-y-4"
      >
        <div className="text-center space-y-1">
          <h2 className="text-2xl font-extrabold">Sign in to your account</h2>
          <p className="text-gray-500">
            <span>or </span><Link href="/register" className="text-purple-500">create a new account</Link>
          </p>
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="py-2 font-medium">
            Email address
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="p-3 border-2 border-gray-300 rounded-md outline-purple-300"
           {...register("email",{required:"Email is required"})}
          />
              {errors.email&&<p className="text-red-500  text-xs my-1">{errors.email.message}</p>}
        </div>

        <div className="flex flex-col">
          <label htmlFor="password" className="py-2 font-medium">
            Password
          </label>
          <input
            id="password"
            type="password"
           {...register("password",{required:"Password is required"})}
            placeholder="Enter your password"
            className="p-3 border-2 border-gray-300 rounded-md outline-purple-300"
          />
              {errors.password&&<p className="text-red-500  text-xs my-1">{errors.password.message}</p>}

        </div>

        <div className="text-right text-sm text-purple-600 hover:underline">
          <p className="cursor-pointer">Forgot Your Password?</p>
        </div>

        <button
          type="submit"
          className="p-3 bg-purple-400 text-white font-semibold rounded-md w-full hover:bg-purple-500 transition duration-200"
        >
          Sign In
        </button>
      </form>

      <ToastContainer position="top-center" />
    </div>
  );
}

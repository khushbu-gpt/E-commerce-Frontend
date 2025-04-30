"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { FaArrowLeft } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import { z } from "zod";

export default function Register() {
  const router = useRouter();

  const registerSchema = z.object({
    firstname: z.string().min(3, "First name must be 3 letter is required"),
    lastname: z.string().min(3, "Last name").optional(),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    phone: z.string().regex(/^[0-9]{10}$/, "Phone must be 10 digits"),
    dob: z.string().refine((val) => !isNaN(Date.parse(val)), {
      message: "Invalid date of birth",
    }),
  });
  
  const {register,handleSubmit,formState:{errors,isSubmitting}}=useForm({
    resolver:zodResolver(registerSchema)
  })

const onSubmit=async(data:any)=>{
   try{
      const response=await axios.post("http://localhost:5000/users/register",data)
       if(response.data){
        toast.success("Registration successful!");
        router.push("/login")
       }
      return response.data 
   }catch(error:any){
       toast.error("Registration failed");
   }
}

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 relative">
      <div className="flex items-center text-gray-500 font-semibold bg-white absolute top-10 left-10 rounded-full px-4 py-2 shadow-md">
        <FaArrowLeft />
        <button
          className="px-2"
          onClick={() => router.back()}
        >
          Go Back
        </button>
      </div>

      <div className="bg-white w-full max-w-xl rounded-lg shadow-lg p-8 mx-4">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="text-center">
            <h2 className="text-2xl font-bold">Create a new account</h2>
            <p className="text-sm text-gray-500">Already have one? 
              <Link href="/login" className="px-2 text-purple-500">Sign in </Link></p>
          </div>

          <div className="flex gap-4">

            <div className="w-full">
              <label className="block text-sm mb-1">First Name</label>
              <input
                type="text"
                 id="firstname"
                placeholder="First Name"
                className="w-full p-3 border border-gray-300 rounded-md"   
                {...register("firstname")}
              />
              {errors.firstname&&<p className="text-red-500  text-xs my-1">{errors.firstname.message}</p>}
            </div>

            <div className="w-full">
              <label className="block text-sm mb-1">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-1">Email Address</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-md"
              {...register("email")}
            />
              {errors.email&&<p className="text-red-500  text-xs my-1">{errors.email.message}</p>}

          </div>

          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-md"
              {...register("password")}
            />
               {errors.password && <p className="text-red-500  text-xs my-1">{errors.password.message}</p>}
          </div>

          <div>
            <label className="block text-sm mb-1">Phone Number</label>
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-3 border border-gray-300 rounded-md"
              {...register("phone")}

            />
               {errors.phone && <p className="text-red-500 text-xs my-1">{errors.phone.message}</p>}
          </div>

          <div>
            <label className="block text-sm mb-1">Date of Birth</label>
            <input
              type="date"
              className="w-full p-3 border border-gray-300 rounded-md"
              {...register("dob")}
            
            />
               {errors.dob && <p className="text-red-500 text-xs my-1">{errors.dob.message}</p>}

          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-purple-500 text-white font-semibold py-3 rounded-md hover:bg-purple-600 transition"
          >
            Sign Up
          </button>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
}

"use client";
import Link from "next/link";
import MENU from "@/constants/Menu";
import Image from "next/image";
import { IoCartOutline } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
export default function Navbar() {
  const pathname = usePathname();
  const [menu, setShowMenu] = useState(false);
  function ShowMenu() {
    setShowMenu(!menu);
  }

  useEffect(() => {
    console.log("pathname => ", pathname);
  }, [pathname]);

  return (
    <header>
      {menu && (
        <aside className="fixed w-52 h-full bg-white  z-10 shadow-lg ">
          <button className="" onClick={ShowMenu}>
            <RxCross2 className="block  text-2xl absolute right-5" />
          </button>
          <ul
            className={` px-5 py-10
           `}
          >
            {MENU.map((item) => {
              return (
                <li key={item.id} className="py-2 ">
                  <Link
                    href={item.path}
                    className={` ${
                      pathname === item.path
                        ? " text-purple-500 font-bold border-b-2 border-purple-400"
                        : " "
                    }`}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="  flex  flex-col w-full px-4">
            <Link href="./login">
              <button className="bg-purple-600  hover:bg-purple-700 px-6 py-2 rounded-lg text-white font-bold login-btn my-2  w-full">
                Login
              </button>
            </Link>
            <Link href="./register">
              <button className="border-purple-600 border-2 px-6 py-2 rounded-lg  font-bold hover:bg-purple-600 hover:text-white transition-all register-btn w-full my-2 ">
                Register
              </button>
            </Link>
          </div>
        </aside>
      )}
      <nav className="flex justify-between  py-3  bg-white text-black   border-gray-200 border-b-2 px-4 fixed top-0 w-full">
        <div className="flex justify-between items-center ">
          <Image
            src="/logo.jpg"
            alt="logo"
            width={130}
            height={110}
            className="sm:block hidden"
          />
          <Image
            src="/clickshop.png"
            alt="logo"
            width={40}
            height={40}
            className="sm:hidden block"
          />

          <div className="md:hidden text-3xl text-gray-700 mx-5 py-2  text-center  flex justify-center items-center">
            <button onClick={ShowMenu} className="cursor-pointer">
              <IoMdMenu className=" open " />
            </button>
          </div>
        </div>

        <ul
          className={` md:justify-center  md:items-center gap-5 md:flex hidden
           `}
        >
          {MENU.map((item) => {
            return (
              <li key={item.id} className="font-bold">
                <Link
                  href={item.path}
                  className={` ${
                    pathname === item.path
                      ? " border-purple-500 border-b-2 text-purple-500 font-bold"
                      : ""
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex justify-end items-center gap-3">
          <div className=" hover:bg-purple-100  rounded-full">
          <Link href="./cart">
            <IoCartOutline className="text-3xl text-gray-700 mx-2 hover:text-purple-600" />
            </Link>
          </div>
          <div className="btn-box gap-2 hidden md:flex  ">
            <Link href="./login">
              <button className="bg-purple-600  hover:bg-purple-700 px-6 py-2 rounded-lg text-white font-bold login-btn">
                Login
              </button>
            </Link>
            <Link href="./register">
              <button className="border-purple-600 border-2 px-6 py-2 rounded-lg  font-bold hover:bg-purple-600 hover:text-white transition-all register-btn">
                Register
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}














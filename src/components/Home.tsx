import Image from "next/image";
import Link from "next/link";
import React from "react";
const Home = () => {
  return (
    
    <main className=" items-center justify-between lg:flex-row   text-black  w-full min-h-screen px-8 sm:px-10 bg-white flex flex-col">
      <section className="w-full pt-20 flex flex-col lg:pr-10 lg:pt-32">
        <h1 className="md:text-6xl  font-semibold tracking-tight sm:text-5xl text-center lg:text-left text-3xl mb-5">
          Your ultimate destination for effortless shopping!
        </h1>
          <p className="sm:text-xl font-medium text-gray-600 text-lg mb-5 text-center lg:text-left">
            Discover our latest collection of premium products. Shop now and
            enjoy free shipping on all orders.
          </p>

        <div className="gap-4 my-2 shopBtn flex flex-col  sm:flex-row w-full sm:w-auto justify-center lg:justify-start">
          <Link
            href="/products"
            className="bg-purple-600  hover:bg-purple-700 px-6 py-3 rounded-full text-white font-bold text-center transition-colors"
          >
            Shop Now
          </Link>
          <Link
            href="/about"
            className="border-purple-600 border-2   hover:bg-purple-700 px-6 py-3 rounded-full hover:text-white font-bold text-black transition-all text-center "
          >
            Learn More
          </Link>
        </div>
      </section>

      <section className="w-full lg:pt-14 lg:mt-0 flex justify-center mt-12">
        <Image
          src="/Images/hero.png"
          alt="Click Shop Hero Image"
          width={600}
          height={600}
          priority
          className="max-w-full h-auto"
        />
      </section>

    </main>
  );
};

export default Home;


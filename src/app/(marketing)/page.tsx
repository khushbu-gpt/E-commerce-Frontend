import React from "react";
import Home from "@/components/Home";
import Category from "@/components/Category";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Products from "@/components/Products";

export default function Homepage() {
  return (
    <>
      <Home />
      <Products />
      <Category />
      <About />
      <Contact />
    </>
  );
}

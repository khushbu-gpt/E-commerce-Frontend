import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center bg-gray-50 font-sans w-full">

      <h1 className="text-4xl font-bold text-black mt-28 mb-10 border-b-4 border-purple-700 pb-2 text-center">
        About <span className="text-purple-700">Click Shop</span>
      </h1>


      <section className="max-w-7xl w-full px-6 sm:px-10 mb-12">
        <h2 className="text-3xl font-bold text-black mb-4">Our Story</h2>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          Founded in 2010, Click Shop began with a simple mission: to provide
          high-quality products at affordable prices. What started as a small
          online shop has grown into a thriving e-commerce platform, serving
          customers worldwide.
        </p>
        <p className="text-gray-700 text-base leading-relaxed">
          We believe in the power of excellent customer service, sustainable
          practices, and continuous innovation. Our team works tirelessly to
          curate a selection of products that not only meet but exceed our
          customers' expectations.
        </p>
      </section>

      <section className="max-w-7xl w-full px-6 sm:px-10 mb-20">
        <h2 className="text-3xl font-bold text-black mb-6">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ValueCard
            title="Quality"
            description="We are committed to offering only the highest quality products to our customers."
          />
          <ValueCard
            title="Sustainability"
            description="We strive to minimize our environmental impact through eco-friendly practices."
          />
          <ValueCard
            title="Customer First"
            description="Our customers are at the heart of everything we do. Your satisfaction is our top priority."
          />
        </div>
      </section>
    </div>
  );
};


const ValueCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
    <h3 className="text-xl font-semibold text-purple-700 mb-2">{title}</h3>
    <p className="text-gray-600 text-base">{description}</p>
  </div>
);

export default About;


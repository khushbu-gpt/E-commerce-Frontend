
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="flex flex-col items-center bg-white px-6 py-20 w-full">
      <h1 className="text-4xl font-bold border-b-4 border-purple-500 mb-12 text-center">
        Contact <span className="text-purple-500">Us</span>
      </h1>

      <div className="w-full flex flex-col md:flex-row gap-10 max-w-7xl">
        <div className="w-full bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <h2 className="text-2xl font-bold text-purple-500 mb-6">Send us a message</h2>
          <form>
            {["Name", "Email address", "Subject"].map((label, i) => (
              <div className="flex flex-col mb-4" key={i}>
                <label htmlFor={label} className="text-sm font-medium mb-1 px-1">
                  {label}
                </label>
                <input
                  type={label === "Email address" ? "email" : "text"}
                  placeholder={`Your ${label}`}
                  className="border border-gray-200 rounded-md px-3 py-2 outline-purple-600"
                />
              </div>
            ))}

            <div className="flex flex-col mb-4">
              <label htmlFor="message" className="text-sm font-medium mb-1 px-1">
                Message
              </label>
              <textarea
                placeholder="Your message here..."
                rows={5}
                className="border border-gray-200 rounded-md px-3 py-2 outline-purple-600 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 rounded-md font-bold hover:bg-purple-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

         <div className="w-full flex flex-col gap-5">
          <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6">
            <h2 className="text-xl font-bold text-purple-500 mb-4">Contact Information</h2>
            <ContactDetail icon={<FaEnvelope />} text="support@ourstore.com" />
            <ContactDetail icon={<FaPhoneAlt />} text="+1 (555) 123-4567" />
            <ContactDetail icon={<FaLocationDot />} text="123 E-commerce St, Online City, 12345" />
          </div>

          <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648718453!2d-73.98658668459471!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1629794000000!5m2!1sen!2sus"
              width="100%"
              height="300"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
}

function ContactDetail({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3 p-2 text-gray-500 hover:text-purple-500 transition">
      <span className="text-purple-500 text-lg">{icon}</span>
      <span className="text-sm md:text-base">{text}</span>
    </div>
  );
}


import { LIST3, LIST1, LIST2 } from "@/constants/List";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

const FooterSection = ({title,items,}: { title: string;items: { id: number; title: string }[];}) => (
  <div>
    <p className="text-base md:text-lg font-semibold py-2">{title}</p>
    <ul>
      {items.map((item) => (
        <li key={item.id} className="py-1 md:text-lg text-sm text-gray-300 hover:text-white transition">
          {item.title}
        </li>
      ))}
    </ul>
  </div>
);

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-gray-50 w-full px-5 py-10">
    
      <div className="flex justify-evenly flex-wrap gap-10 mb-10">
        <FooterSection title="About" items={LIST1} />
        <FooterSection title="Customer Service" items={LIST2} />
        <FooterSection title="Policies" items={LIST3} />

        <div>
          <p className="text-base md:text-lg font-semibold py-2">Connect With Us</p>
          <div className="flex gap-4 text-2xl text-gray-300 py-2">
            <FaInstagram className="hover:text-white cursor-pointer transition" />
            <FaXTwitter className="hover:text-white cursor-pointer transition" />
            <FaFacebook className="hover:text-white cursor-pointer transition" />
          </div>
        </div>
      </div>

  
      <hr className="border-slate-700 mx-5" />

      <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4 sm:gap-0 px-5">
        <p className="text-gray-400 text-sm text-center sm:text-left">
          © 2024 Click Shop. All rights reserved.
        </p>
        <Image
          src="/payment.jpg"
          width={120}
          height={40}
          alt="Payment Methods"
        />
      </div>
    </footer>
  );
}




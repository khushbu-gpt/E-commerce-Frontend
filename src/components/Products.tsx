"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Product {
  sku: string;
  title: string;
  price: number;
  stock: number;
  mrp: number;
  description: string;
  images: string;
}
const Products =() => {
const [products,setProducts]=useState([])
const [cart,setCart]=useState("")
const ProductsApi=async()=>{
  const res = await fetch("http://localhost:5000/products");
  const data = await res.json();
  console.log(data.data)
  setProducts(data.data)
  
}
  useEffect(() => {
    ProductsApi() 
  }, [])
  
  const addToCart = async (product:{productId:number;name:string,price:number}) => {
    try {
      const res = await fetch("http://localhost:5000/cart",{      
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product),
        
      });
      const data = await res.json()
      setCart(data)
      console.log("Added to cart:", data)

    } catch (error) {
      console.error("Add to cart failed:", error);
    }
  };

  return (
    <div className="flex flex-col bg-gray-100 min-h-screen">
      <div className="flex justify-center items-center pt-24">
        <h1 className="text-4xl font-bold border-b-4 border-purple-700 pb-2">
          Our <span className="text-purple-700">Products</span>
        </h1>
      </div>

      <div className="flex justify-center flex-wrap gap-6 px-4 py-10">
        {products.length > 0 ? (
          products.map(
            ({
              images,
              price,
              title,
              stock,
              mrp,
              sku,
              description,

            }:Product,index:number) => (
              <div
                key={ index}
                className="w-72 h-[420px] bg-white rounded-lg shadow-md border hover:shadow-lg transition p-4 flex flex-col justify-between"
              >
                <Link href={`/products/${sku}`}>
                  <div className="text-center cursor-pointer">
                    <Image
                      src={images}
                      alt="product-image"
                      width={200}
                      height={200}
                      className="w-full h-52 object-cover mb-4"
                    />
                  </div>
                </Link>
                 

                <p className="text-purple-600 font-medium text-lg">Rs. ${price}</p>
              <p className="text-purple-600 text-sm">Mrp: {mrp}</p>
              <p className="text-purple-600 text-sm">Stock: {stock}</p>
              <p className="text-gray-700 line-clamp-2 mt-1">{title}</p>
              <p className="text-sm text-gray-500 line-clamp-1">{description}</p>
           
                <button
                   onClick={()=>addToCart({ productId: index,
                    name:title,
                   price:price,})}
                   className="mt-4 bg-purple-500 hover:bg-purple-600 text-white py-2 rounded"
                >
                  Add to Cart
                </button>
              </div>
            )
          )
        ) : (
          <div className="flex justify-center items-center w-full h-60">
            <Loader />
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;

export function Loader() {
  return (
    <div className="animate-spin h-16 w-16 border-4 border-purple-500 border-t-transparent rounded-full"></div>
  );
}



// "use client";
// import { CartContext } from "@/context/cart.context";
// import Image from "next/image";
// import Link from "next/link";
// import { useContext, useEffect, useState } from "react";

// interface Product {
//   sku: string;
//   name: string;
//   price: number;
//   stock: number;
//   mrp: number;
//   desc: string;
//   faqs: string;
//   image: string;
// }

// const Products = () => {
//   const { cart, addToCart } = useContext(CartContext);
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("http://localhost:5000/products")
//       .then((res) => res.json())
//       .then((data) => {
//         setProducts(data.products || []);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching products:", err);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <div className="flex flex-col bg-gray-100 min-h-screen">
//       <div className="flex justify-center items-center pt-24">
//         <h1 className="text-4xl font-bold border-b-4 border-purple-700 pb-2">
//           Our <span className="text-purple-700">Products</span>
//         </h1>
//       </div>

//       <div className="flex justify-center flex-wrap gap-6 px-4 py-10">
//         {loading ? (
//           <div className="flex justify-center items-center w-full h-60">
//             <Loader />
//           </div>
//         ) : products.length > 0 ? (
//           products.map((product, index) => (
//             <div
//               key={index}
//               className="w-72 h-[420px] bg-white rounded-lg shadow-md border hover:shadow-lg transition p-4 flex flex-col justify-between"
//             >
//               <Link href={`/products/${product.sku}`}>
//                 <div className="text-center cursor-pointer">
//                   <Image
//                     src={"/jewell.jpg"} // Replace with `product.image` if dynamic
//                     alt={product.name}
//                     width={200}
//                     height={200}
//                     className="w-full h-52 object-cover mb-4"
//                   />
//                 </div>
//               </Link>

//               <p className="text-purple-600 font-medium text-lg">Rs. ₹{product.price}</p>
//               <p className="text-purple-600 text-sm">Stock: {product.stock}</p>
//               <p className="text-gray-700 line-clamp-2 mt-1">{product.name}</p>
//               <p className="text-sm text-gray-500 line-clamp-1">{product.desc}</p>
//               <p className="text-xs text-gray-400">{product.faqs}</p>

//               <button
//                 onClick={() =>
//                   addToCart({
//                     id: index,
//                     name: product.name,
//                     price: product.price,
//                   })
//                 }
//                 className="mt-4 bg-purple-500 hover:bg-purple-600 text-white py-2 rounded"
//               >
//                 Add to Cart
//               </button>
//             </div>
//           ))
//         ) : (
//           <p>No products found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Products;

// export function Loader() {
//   return (
//     <div className="animate-spin h-16 w-16 border-4 border-purple-500 border-t-transparent rounded-full"></div>
//   );
// }

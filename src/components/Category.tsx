import Link from "next/link";
import { Loader } from "./Products";

interface Category{
  name:string,
  slug:string,
}
const Category = async () => {
 
  const res = await fetch("http://localhost:5000/categories")
  const data = await res.json()
  const categories:Category[]= data?.data || []

  return (
    <div className="flex flex-col items-center bg-white py-24 px-4">
      <h1 className="text-4xl font-bold border-b-4 border-purple-700 mb-12 text-center">
        Our <span className="text-purple-700">Category</span>
      </h1>

      <div className="flex flex-wrap justify-center gap-8">
        {categories.length>0?categories?.map((category, index:number) => {
          return (
            <Link href={`/category/${category?.slug}`} key={index}>
              <div className="w-80 h-[390px] border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer text-center overflow-hidden">

                <div className="w-full h-72 flex items-center justify-center bg-gray-100 text-gray-400">
                  No Image Available
                </div>
                <div className="p-4">
                  <p className="capitalize text-lg font-semibold text-gray-800">{category?.name}</p>
                  <p className="text-purple-600 text-sm mt-1">View Products</p>
                </div>
              </div>
            </Link>
          );
        }):((
          <div className="flex justify-center items-center w-full h-60">
                    <Loader />
                  </div>
                ))
        }
      </div>
    </div>
  );
};

export default Category;

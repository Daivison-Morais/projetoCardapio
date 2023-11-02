"use client";
import { useRouter } from "next/router";
import CardProduct from "@/components/products/CardProducts";
import BASE_URL from "@/services/baseUrl";
import axios from "axios";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

type ProductType = {
  id: string;
  name: string;
  image: string;
  description: string;
  promotion: boolean;
  price: number;
  categoryId: string;
  menusId: string;
};

const Products: NextPage<ProductType> = ({
  id,
  name,
  image,
  description,
  price,
  menusId,
  promotion,
  categoryId,
}) => {
  const [dataProducts, setDataProducts] = useState([]);
  const [nameDataCategory, setNameDataCategory] = useState([]);
  
  const router = useRouter();
  const { idCategory, nameCategory, infoIdCategory, nameByCategory } = router.query;

  async function getProductsWhitcategory() {
    await axios
      .get(`${BASE_URL}/products/${idCategory}`)
      .then((response) => {
        setDataProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
        alert("malformed request");
      });
  }
  async function getProductsOnId() {
    await axios
      .get(`${BASE_URL}/products/${infoIdCategory}`)
      .then((response) => {
        setDataProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
        alert("malformed request");
      });
  }
  async function getCategories() {
    await axios
      .get(`${BASE_URL}/categories/${infoIdCategory}`)
      .then((response) => {
        setNameDataCategory(response.data.name);
      })
      .catch((error) => {
        console.log(error);
        alert("malformed request");
      });
  }

  useEffect(() => {
    if (infoIdCategory) {
getCategories()
      getProductsOnId();
    } else {
      getProductsWhitcategory();
    }
  }, []);

  function capitalizeFirstLetter(string: string | undefined) {
    if (!string) return;
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  function checkDayOrNight(data: Date) {
    const hora = data.getHours();

    const limitDay = 18;
    const limitNight = 6;

    if (hora >= limitDay || hora < limitNight) {
      return "Nocturnal";
    } else {
      return "Diurnal";
    }
  }

  return (
    <>
      <div className="bg-[#c2a136] border-t border-zinc-700 p-2 flex justify-end w-screen">
        <a
          href="https://www.linkedin.com/in/daivison-morais-197b9a203/"
          className="border-2 border-gray-200 rounded-full p-4 object-cover mx-1"
        >
          <FaLinkedinIn className="text-sm" />
        </a>
        <a
          href="https://github.com/Daivison-Morais"
          className="border-2 border-gray-200 rounded-full p-4 mx-1"
        >
          <FaGithub className="text-sm" />
        </a>
        <Link
          href="/"
          className="border-2 border-gray-200 rounded-full p-3 mx-1"
        >
          <ArrowLeft />
        </Link>
      </div>
      <main className="flex flex-col flex-1 px-2 bg-slate-200 text-black/80 h-screen w-screen justify-start">
        <h1 className="font-semibold text-4xl mt-5">
          {capitalizeFirstLetter(nameCategory?.toString() || nameDataCategory?.toString())}
        </h1>
        <nav className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-5 gap-4  justify-evenly">
          {dataProducts?.map(
            ({
              name,
              id,
              image,
              menusId,
              categoryId,
              promotion,
              price,
              shift,
              description,
            }) => {
              if (shift === checkDayOrNight(new Date())) {
                return (
                  <CardProduct
                    name={name}
                    id={id}
                    image={image}
                    menusId={menusId}
                    key={id}
                    description={description}
                    promotion={promotion}
                    price={price}
                    categoryId={categoryId}
                  />
                );
              }
            }
          )}
        </nav>
      </main>
    </>
  );
};
export default Products;

import { AlignLeft, CalendarClock, CalendarPlus, ListPlus } from "lucide-react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import axios from "axios";
import BASE_URL from "@/services/baseUrl";
import { NextPage } from "next";
import GetCardCategory from "@/components/categories/CardCategory";
import { useEffect, useState } from "react";
import CardProduct from "@/components/products/CardProducts";
import Link from "next/link";
import { useRouter } from "next/router";

type Categories = {
  name: string;
};

const Menu: NextPage<Categories> = (props) => {
  const [dataCategories, setDataCategories] = useState([]);
  const [dataProducts, setDataProducts] = useState([]);
  const router = useRouter();

  async function getCategories() {
    await axios
      .get(`${BASE_URL}/categories`)
      .then((response) => {
        setDataCategories(response.data);
      })
      .catch((error) => {
        console.log(error);
        alert("malformed request");
      });
  }
  async function getProducts() {
    await axios
      .get(`${BASE_URL}/products`)
      .then((response) => {
        console.log(response.data);
        setDataProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
        alert("malformed request");
      });
  }

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);


  const handleClick = (idCategory: string, name: string) => {
    router.push({
      pathname: '/products',
      query: { idCategory: idCategory,  nameCategory: name},
    });
  };

  return (
    <div className="h-screen flex flex-col bg-slate-200">
      <div className="flex flex-1">
        <aside className="z-20 h-screen hidden sm:block w-72 p-6 bg-[#222a3d] fixed top-0 left-0">
          <nav className="text-white space-y-1">
            <div className="flex items-center gap-2 hover:text-yellow-500 border-2 border-[#222a3d] hover:border-2 hover:border-[#c2a136] hover:rounded-full p-2">
              <CalendarPlus />
              <Link href="/createmenu">Ciar Cardapio</Link>
            </div>
            <div className="flex items-center gap-2 hover:text-yellow-500 border-2 border-[#222a3d] hover:border-2 hover:border-[#c2a136] hover:rounded-full p-2">
              <ListPlus />
              Criar categoria
            </div>
            <div className="flex items-center gap-2 hover:text-yellow-500 border-2 border-[#222a3d] hover:border-2 hover:border-[#c2a136] hover:rounded-full p-2">
              <CalendarClock />
              Cardápio Atual
            </div>
          </nav>
        </aside>
        <div className="flex-1">
          
          <div className="bg-[#c2a136] border-t border-zinc-700 p-2 flex justify-end relative">
            <div className="border-2 border-gray-200 rounded-full p-2 mx-1 absolute left-0">
          <AlignLeft  />
            </div>
            <a
              href="https://www.linkedin.com/in/daivison-morais-197b9a203/"
              className="border-2 border-gray-200 rounded-full p-3 mx-1"
            >
              <FaLinkedinIn className="text-sm" />
            </a>
            <a
              href="https://github.com/Daivison-Morais"
              className="border-2 border-gray-200 rounded-full p-3 mx-1"
            >
              <FaGithub className="text-sm" />
            </a>

            {/* Social login section */}
          </div>
          <main className="flex-1 px-2 bg-slate-200 text-black/80 sm:ml-72">
            <h1 className="font-semibold text-4xl mt-5">Categorias</h1>
            <nav className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-4">
              {dataCategories?.map(({ name, id, image, menusId }) => (
                <button onClick={()=>{handleClick(id, name)}} key={id}>
                  <GetCardCategory
                    name={name}
                    id={id}
                    image={image}
                    menusId={menusId}
                    key={id}
                  />
                </button>
              ))}
            </nav>
            <h1 className="font-semibold text-4xl mt-5">Super Promoções</h1>
            <nav className="flex flex-wrap grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-5 gap-4 min-h-[200px] justify-evenly">
              {dataProducts?.map(
                ({
                  name,
                  id,
                  image,
                  menusId,
                  categoryId,
                  promotion,
                  price,
                  description,
                }) => {
                  if (promotion) {
                    return (
                      <Link href="/products" key={id}>
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
                      </Link>
                    );
                  }
                }
              )}
            </nav>
          </main>
        </div>
      </div>
    </div>
  );
};
export default Menu;

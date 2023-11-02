import { CalendarClock, CalendarPlus, ListPlus } from "lucide-react";
import axios from "axios";
import BASE_URL from "@/services/baseUrl";
import { NextPage } from "next";
import GetCardCategory from "@/components/categories/CardCategory";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Header from "@/components/header";
import CardProductPromotion from "@/components/products/CardProductsPromotion";

type Categories = {
  name: string;
};

const Menu: NextPage<Categories> = (props) => {
  const [dataCategories, setDataCategories] = useState([]);
  const [dataProducts, setDataProducts] = useState([]);
  const [idMenu, setIdMenu] = useState("");
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
        setDataProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
        alert("malformed request");
      });
  }
  async function getMenuIdAccordingTimetable() {
    await axios
      .get(`${BASE_URL}/menu/shift`)
      .then((response) => {
        setIdMenu(response.data.id);
      })
      .catch((error) => {
        console.log(error);
        alert("malformed request");
      });
  }    

  useEffect(() => {
    getMenuIdAccordingTimetable();
    getCategories();
    getProducts();
  }, []);

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

  const productByCategory = (infoIdCategory: string, name: string) => {
    router.push({
      pathname: "/products",
      query: { infoIdCategory: infoIdCategory, 
        dataCategories: dataCategories,
        nameByCategory: name
       },
    });
  };

  const handleClick = (idCategory: string, name: string) => {
    router.push({
      pathname: "/products",
      query: { idCategory: idCategory, nameCategory: name },
    });
  };

  return (
    <div className="h-screen flex flex-col bg-slate-200">
      <div className="flex flex-1">
        <aside className="z-50 h-screen hidden sm:block w-64 p-6 bg-[#222a3d] fixed top-0 left-0">
          <nav className="text-white space-y-1">
            <div className="flex items-center gap-2 hover:text-yellow-500 border-2 border-[#222a3d] hover:border-2 hover:border-[#c2a136] hover:rounded-full p-2">
              <CalendarPlus />
              <Link href="/createmenu">Ciar Cardápio</Link>
            </div>
            <div className="flex items-center gap-2 hover:text-yellow-500 border-2 border-[#222a3d] hover:border-2 hover:border-[#c2a136] hover:rounded-full p-2">
              <ListPlus />
              <Link href="/createProducts">Ciar Produtos</Link>
            </div>
            <div className="flex items-center gap-2 hover:text-yellow-500 border-2 border-[#222a3d] hover:border-2 hover:border-[#c2a136] hover:rounded-full p-2">
              <CalendarClock />
              <Link href="/createcategory">Ciar Categoria</Link>
            </div>
          </nav>
        </aside>
        <div className="flex-1">
          <Header />
          <main className="flex-1 px-2 bg-slate-200 text-black/80 sm:ml-64">
            <h1 className="font-semibold text-4xl mt-5">Categorias</h1>
            <nav className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-4">
              {dataCategories?.map(({ name, id, image, menusId }) => {
                if(menusId[0] == idMenu){
                  return (
                    <button
                    onClick={() => {
                      handleClick(id, name);
                    }}
                    key={id}
                  >
                    <GetCardCategory
                      name={name}
                      id={id}
                      image={image}
                      menusId={menusId}
                      key={id}
                    />
                  </button>
                  )
                }
              })}
            </nav>
            <h1 className="font-semibold text-4xl mt-5">Super Promoções</h1>
            <nav className=" flex-wrap grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-5 gap-4 min-h-[200px] justify-evenly">
              {dataProducts?.map(
                ({
                  name,
                  id,
                  image,
                  menusId,
                  categoryId,
                  promotion,
                  shift,
                  price,
                  description,
                }) => {
                  if (promotion && shift === checkDayOrNight(new Date())) {
                    return (
                      <button
                        key={id}
                        onClick={() => {
                          productByCategory(categoryId, name);
                        }}
                      >
                        <CardProductPromotion
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
                      </button>
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

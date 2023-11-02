import BASE_URL from "@/services/baseUrl";
import axios from "axios";
import { ArrowLeft, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type Props = {};
const CreateMenu = (props: Props) => {
  const [nameCategory, setNameCategory] = useState("");
  const [image, setImage] = useState("");
  const [menusId, setMenusId] = useState("");

  function handleForm() {
    const body = {
      name: nameCategory,
    };

    axios
      .post(`${BASE_URL}/menu`, body)
      .then((response) => {
        alert("Categoria criada com sucesso");
      })
      .catch((error) => {
        console.log(error);
        alert("Não foi possível salvar este Categoria");
      });
  }

  return (
    <form onSubmit={handleForm}>
      <div className="bg-[#c2a136] border-t border-zinc-700 p-2 flex justify-end w-screen">
        <Link
          href="/"
          className="border-2 border-gray-200 rounded-full p-3 mx-1"
        >
          <ArrowLeft />
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-[#ecebeb]">
        <div className="flex flex-col border-2 shadow-md rounded-lg h-[70vh] items-center justify-center bg-slate-200">
          <h2 className="text-3xl font-bold text-[#182338] m-8">
            Criar Categoria
          </h2>
          <div className="flex flex-col items-center">
            <div className="w-64 p-2 flex items-center ">
              <div className="flex flex-col">
                <input
                  type="string"
                  name="Categoria"
                  value={nameCategory}
                  placeholder="Nome da Categoria"
                  onChange={(event) => {
                    event.preventDefault();
                    setNameCategory(event.target.value);
                  }}
                  className="bg-slate-200 text-black/75 outline-none text-sm flex-1 px-1"
                />
                <div className=" bg-[#182338] w-60 h-[2px] border-[#182338] inline-block mb-3"></div>
                <input
                  type="string"
                  name="image"
                  value={image}
                  placeholder="Imagem Url"
                  onChange={(event) => {
                    event.preventDefault();
                    setImage(event.target.value);
                  }}
                  className="bg-slate-200 text-black/75 outline-none text-sm flex-1 px-1"
                />
                <div className=" bg-[#182338] w-60 h-[2px] border-[#182338] inline-block mb-3"></div>
                <input
                  type="string"
                  name="idCardapio"
                  value={menusId}
                  placeholder="Nome de um cardápio existente"
                  onChange={(event) => {
                    event.preventDefault();
                    setMenusId(event.target.value);
                  }}
                  className="bg-slate-200 text-black/75 outline-none text-sm flex-1 px-1"
                />
                <div className=" bg-[#182338] w-60 h-[2px] border-[#182338] inline-block mb-3"></div>
              </div>
            </div>

            <button
              onClick={()=>{alert("Em desenvolvimento")}}
              className="border-2 text-[#182338] border-[#182338] rounded-full px-12 py-2 inline-block font-semibold hover:bg-[#182338] hover:text-white m-8"
            >
              Salvar Categoria
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
export default CreateMenu;

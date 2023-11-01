import BASE_URL from "@/services/baseUrl";
import axios from "axios";
import { Menu } from "lucide-react";
import { useState } from "react";

type Props = {};
const CreateMenu = (props: Props) => {
  const [nameMenu, setNameMenu] = useState("");
  function handleForm() {
              
    const body = {
      name: nameMenu,
    };

     axios.post(`${BASE_URL}/menu`, body)
      .then((response) => {
        alert("Cardápio criado com sucesso")
      })
      .catch((error) => {
        console.log(error);
        alert("Não foi possível salvar este cardápio");
      });
  }

  return (

    <form onSubmit={handleForm}>
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-[#ecebeb]">
        <div className="flex flex-col border-2 shadow-md rounded-lg h-[70vh] items-center justify-center bg-slate-200" >
          <h2 className="text-3xl font-bold text-[#182338] m-8">
            Criar Cardápio
          </h2>
          <div className="flex flex-col items-center">
            <div className="w-64 p-2 flex items-center ">
              <Menu className="text-[#182338] mr-2"/>
              <input
                type="string"
                name="Cardápio"
                value={nameMenu}
                placeholder="Nome do Cardápio"
                onChange={(event) => {
                  event.preventDefault()
                  setNameMenu(event.target.value)}}
                className="bg-slate-200 text-black/75 outline-none text-sm flex-1 px-1"
              />
            </div>
            <div className=" bg-[#182338] w-60 h-[2px] border-[#182338] inline-block mb-11"></div>
            <button onClick={
              handleForm
            } className="border-2 text-[#182338] border-[#182338] rounded-full px-12 py-2 inline-block font-semibold hover:bg-[#182338] hover:text-white m-8"
            >
              Salvar Cardápio
            </button>
          </div>
        </div>
     
    </div>
    </form>
    
  );
};
export default CreateMenu;

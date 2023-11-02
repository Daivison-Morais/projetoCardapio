import React, { useState } from "react";
import { links } from "./dropDownLinks";
import Link from "next/link";
import { CalendarClock, CalendarPlus, ListPlus, Menu } from "lucide-react";

const DropDown = () => {
    const [open, setOpen] = useState(false);
    const toggle = () => {
setOpen(!open);
    }
  return (

    <div className="">
        <button onClick={toggle} className="h-0 "><Menu /></button>
      {open && (
      
      <nav className="text-white space-y-1 absolute z-10 bg-[#222a3d] h-screen left-0 w-48 rounded-xl mt-2 p-2">
        <div className="flex items-center gap-2 hover:text-yellow-500 border-2 border-[#222a3d] hover:border-2 hover:border-[#c2a136] hover:rounded-full p-2">
          <CalendarPlus />
          <Link href="/createmenu">Ciar Cardápio</Link>
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
    
      )}
    </div>
  );
};

export default DropDown;

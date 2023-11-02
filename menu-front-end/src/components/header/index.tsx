import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import DropDown from '../dropDown';

const Header = () => {
    return (
      <div className="bg-[#c2a136] p-2 flex items-center justify-between max-h-[60px]">
        
        <DropDown />
        
        <div className="p-2 flex">
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
        </div>
        
      </div>
    );
}

export default Header;


/* <div className="w-72 relative left-0">
              <button className="flex items-center border border-gray-300 px-6 rounded border-2 border-gray-200 text-white p-2 mx-1 absolute">
                <AlignLeft />
              </button>
              <div className="a bsolute top-10 inlinebg-white border border-gray-300 py-1 shadow-md rounded-md">
                <a
                  href="https://www.linkedin.com/in/daivison-morais-197b9a203/"
                  className="block w-full text-sm text-gray-500 px-3 hover:bg-gray-100"
                >
                  afcafcacafcafcaa
                  <FaLinkedinIn className="text-sm" />
                </a>
                <a
                  href="https://www.linkedin.com/in/daivison-morais-197b9a203/"
                  className=" block w-full text-sm text-gray-500 px-3 hover:bg-gray-100"
                >
                  bfcafcacafcafcaa
                  <FaLinkedinIn className="text-sm" />
                </a>
              </div>
            </div> */
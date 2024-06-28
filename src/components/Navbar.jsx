import Navlinks from "./Navlinks";
import { PiBellSimpleLight } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import logo from '../assets/download.png'
export default function Navbar() {
  return (
    <>
      <header className=" px-6 py-2 ">
        <div className="flex justify-between items-center">
        
            <div className="bg-light-gray text-red text-[20px] flex items-center py-2 px-5">
              Logo
            </div>
       
          <div className="flex justify-center items-center gap-3 py-3 px-5  text-light-gray2 border-2 border-gray-100 rounded-full">
            <Navlinks />
          </div>
          <div className="flex items-center space-x-3">
            <PiBellSimpleLight className="text-2xl"/>
            <div className="flex items-center gap-1">
              <div className="w-7 rounded-full overflow-hidden">
                <img src={logo} alt="logo" className="object-contain" />
              </div>
              <IoIosArrowDown/>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}




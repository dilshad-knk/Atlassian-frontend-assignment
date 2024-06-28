import { NavLink } from 'react-router-dom';
import { PiSuitcaseLight } from 'react-icons/pi';
import { LuMessageSquare } from 'react-icons/lu';
import { PiHandCoinsLight } from 'react-icons/pi';



export default function Navlinks() {

  const className = ({ isActive }) => isActive ? "bg-red ring-2 ring-light-pink text-white  flex items-center rounded-full justify-center gap-1 cursor-pointer px-2 py-1 " : "flex items-center rounded-full justify-center gap-1 cursor-pointer px-2 py-1 "

  return (
    <>
       <NavLink  to='/' className={className}>
            <PiSuitcaseLight className="size-7  " />
            <p>Jobs</p>
        </NavLink>
       <NavLink  to='/messages' className={className}>
            <LuMessageSquare className="size-7  " />
            <p>Messages</p>
        </NavLink>
       <NavLink  to='/payments' className={className}>
            <PiHandCoinsLight className="size-7  " />
            <p>Payments</p>
        </NavLink>
    </>
  );
}

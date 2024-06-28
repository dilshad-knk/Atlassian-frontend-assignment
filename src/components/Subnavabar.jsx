
import { NavLink } from "react-router-dom";
export default function SubNavbar() {

  const className = ({ isActive }) => isActive ? "text-red border-b-2 border-red flex items-center justify-center gap-1 cursor-pointer px-2 py-3 font-medium" : "flex items-center justify-center gap-1 cursor-pointer px-2 py-3 font-medium"
  return (
    <>
      <nav className=" px-6 border-2 border-gray-100 flex gap-7 ">
        <NavLink to="/" className={className}>
          Jobs Preview
        </NavLink>
        <NavLink to="/messages" className={className}>
         Applicants
        </NavLink>
        <NavLink to="/applicants" className={className}>
          Match
        </NavLink>
        <NavLink to="/Messages" className={className}>
          Messages
        </NavLink>
      </nav>
    </>
  );
}

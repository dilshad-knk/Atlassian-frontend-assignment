import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineModeEdit } from "react-icons/md";
import { PiUsersLight } from "react-icons/pi";
import { PiUserCheckThin } from "react-icons/pi";
import { PiEyeLight } from "react-icons/pi";
import { LuMessageSquare } from "react-icons/lu";

const Aside = () => {
  return (
    <aside className="md:w-1/4 bg-white2 border-s-2 p-2 md:p-4">
      <div className="flex flex-col md:flex-row gap-4  justify-around">
        <button className="bg-rose-100 flex ring-1 md:px-6 py-2 rounded-md items-center gap-2 text-red ring-red justify-center">
          <RiDeleteBin6Line />
          <p className="hidden lg:block">Delete Job</p>
        </button>
        <button className="bg-red flex ring-1 md:px-7 py-2 rounded-md items-center gap-2 text-white ring-light-pink justify-center">
          <MdOutlineModeEdit />
          <p className="hidden lg:block">Edit Job</p>
        </button>
      </div>
      <div className="flex flex-col gap-5 p-6">
        <List icon={<PiUsersLight />} text="Applicants" total="400" />
        <List icon={<PiUserCheckThin />} text="Matches" total="100" />
        <List
          icon={<LuMessageSquare className="text-zinc-400" />}
          text="Messages"
          total="147"
        />
        <List
          icon={<PiEyeLight className="text-zinc-500" />}
          text="Views"
          total="800"
        />
      </div>
    </aside>
  );
};

export default Aside;

function List({ icon, text, total }) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex justify-between items-center gap-2">
        {icon}
        <p className="hidden lg:block">{text}</p>
      </div>
      <span className="font-bold">{total}</span>
    </div>
  );
}

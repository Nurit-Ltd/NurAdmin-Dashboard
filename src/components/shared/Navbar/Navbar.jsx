import { CiSearch } from "react-icons/ci";
import DarkMood from "../../ToggleSwitch/DarkMood";
import { BsBell } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BsChatDots } from "react-icons/bs"
import userImg from "../../../assets/images/user-01.png";
import { RiArrowDownSLine } from "react-icons/ri";
const Navbar = () => {
  return <nav className="flex flex-grow w-full items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
    <div className="hidden sm:block">
      <form action="" method="POST">
        <div className="relative flex items-center">
          <button className="absolute left-0 top-1/2 -translate-y-1/2">
            <CiSearch className="text-xl" />
          </button>

          <input type="text" placeholder="Type to search..." className="w-full bg-transparent pl-9 pr-4 focus:outline-none xl:w-125 text-sm font-normal" />
        </div>
      </form>
    </div>

    {/* header right  */}
    <div className="flex gap-6 items-center">
      <ul className="flex gap-3 items-center">
        <li>
          <DarkMood />
        </li>

        <li>
          <Link className="relative flex h-8 bg-backGround w-8 items-center justify-center rounded-full border-[0.5px] border-stroke bg-gray hover:text-primary" href="#" >

            <BsBell className="text-xl" />
          </Link>
        </li>
        <li>
          <Link className="relative flex h-8 bg-backGround w-8 items-center justify-center rounded-full border-[0.5px] border-stroke bg-gray hover:text-primary" href="#" >

            <BsChatDots className="text-xl" />
          </Link>
        </li>


      </ul>
      <div className="">
        <Link className="flex items-center gap-3">
          <span className="flex items-end flex-col">
            <span className="block text-sm font-medium text-black">Thomas Anree</span>
            <span className="block text-xs font-medium text-secondary">UX Designer</span>
          </span>
          <div className="w-12 h-12 rounded-complete overflow-hidden">
            <img className="w-full h-full object-cover" src={userImg} alt="user image" />
          </div>
          <RiArrowDownSLine className="text-xl" />
        </Link>
      </div>
    </div>
  </nav>;
};

export default Navbar;

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <span className="text-3xl md:"></span>
      <div className="md:flex justify-between  items-center mt-14">
        <div>
          <h3 className="font-bold text-3xl">Book Vibe</h3>
        </div>
        <div className=" text-lg font-semibold">
          <NavLink
            to="/"
            className="cursor-pointer py-[14px] px-5 hover:border-2 border-2 border-white duration-150 hover:rounded-lg hover:border-[#23BE0A]"
          >
            Home
          </NavLink>
          <NavLink
            to="/listedBooks"
            className="cursor-pointer py-[14px] px-5 hover:border-2 duration-150  border-2 border-white hover:rounded-lg hover:border-[#23BE0A]"
          >
            Listed Books
          </NavLink>
          <NavLink className="cursor-pointer py-[14px] px-5 hover:border-2 duration-150 border-2 border-white hover:rounded-lg hover:border-[#23BE0A]">
            Pages to Read
          </NavLink>
        </div>
        <div>
          <button className="py-[18px] px-[28px] font-semibold bg-[#23BE0A]  text-[#ffffff] mr-4 rounded-lg cursor-pointer hover:bg-opacity-60 duration-150">
            Sign in
          </button>
          <button className="py-[18px] px-[28px] font-semibold bg-[#59C6D2]  text-[#ffffff] rounded-lg cursor-pointer hover:bg-opacity-60 duration-150">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import {
  FcAbout,
  FcCallback,
  FcNightPortrait,
  FcTodoList,
} from "react-icons/fc";
import { MdMarkunreadMailbox } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
const Root = () => {
  return (
    <div>
      <div className="flex h-screen bg-gray-100">
        <div className=" md:flex flex-col   bg-gray-800">
          <div className="flex items-center justify-center h-16 bg-gray-900">
            <div className="text-white font-bold uppercase flex gap-2">
      
              <span className="hidden md:block">MD </span>RAJIUL <span className="hidden md:block">ISLAM</span>
            </div>
          </div>
          <div className="flex flex-col flex-1 overflow-y-auto">
            <nav className="flex-1 px-2 py-4 bg-gray-800">
              <NavLink
                to="/"
                className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700"
              >
                <FcNightPortrait className="text-xl md:mr-2" />
                <span className="hidden md:block">Profile</span>
              </NavLink>
              <NavLink
                to="/about"
                className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700"
              >
                <FcAbout className="text-xl md:mr-2" />
                <span className="hidden md:block">About</span>
              </NavLink>
              <NavLink
                to="/portfolio"
                className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700"
              >
                <FcTodoList className="text-xl md:mr-2" />
                <span className="hidden md:block">PORTFOLIO</span>
              </NavLink>
              <NavLink
                to="/contact"
                className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700"
              >
                <FcCallback className="text-xl md:mr-2" />
                <span className="hidden md:block">Contact</span>
              </NavLink>
              <NavLink
                to="/blog"
                className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700"
              >
                <MdMarkunreadMailbox className="text-xl md:mr-2 text-blue-500" />
                <span className="hidden md:block">Blog</span>
              </NavLink>
            </nav>
            
          </div>
        </div>

        <div className=" w-full overflow-y-auto">
          <Outlet />
        </div>
      </div>
      
    </div>
  );
};

export default Root;

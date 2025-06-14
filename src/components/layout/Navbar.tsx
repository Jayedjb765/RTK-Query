import { MdMenuBook } from "react-icons/md";

import { ModeToggle } from "../mode-toggle";

const Navbar = () => {
  return (
    <div>
      <nav className="max-w-7xl mx-auto h-16 flex items-center gap-3 ml-20  px-5">
        <div className="flex items-center">
          <MdMenuBook className="text-3xl" />
          <span
            className="font-bold ml-8
          "
          >
            Task
          </span>
        </div>
        <div className="ml-auto">
          <ModeToggle />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

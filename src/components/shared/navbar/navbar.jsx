import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import MenuIcon from "./open_menu_icon";

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const reviewsScroll = () => {
    if (location.pathname !== "/") {
      navigate("/#reviews_section");
      return;
    }
    const section = document.querySelector("#reviews_section");
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const servicesScroll = () => {
    if (location.pathname !== "/") {
      navigate("/#services_section");
      return;
    }
    const section = document.querySelector("#services_section");
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const contactUsScroll = () => {
    const section = document.querySelector("#contact_us_section");
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="border-b-[1px] border-[#cecece] fixed left-0 right-0 top-0 bg-white z-50">
      <div className="flex justify-between h-[90px] px-5 md:px-12 items-center max-w-screen-xl mx-auto">
        <Link
          to="/"
          className="text-2xl font-bold text-green-800 md:text-3xl font-montserrat"
        >
          ServiceHub
        </Link>
        <nav className="flex items-center gap-x-2 md:gap-x-10">
          <div className="hidden md:flex">
            <ul className="flex gap-x-5">
              <li className="font-bold">
                <Link to="/">Home</Link>
              </li>
              <li className="font-bold">
                <button onClick={servicesScroll}>Services</button>
              </li>
              <li className="font-bold">
                <button onClick={reviewsScroll}>Reviews</button>
              </li>
              <li className="font-bold">
                <button onClick={contactUsScroll}>ContactUs</button>
              </li>
              <li className="font-bold">
                <Link to="/">My Orders</Link>
              </li>
            </ul>
          </div>
          <Avatar>
            <AvatarImage src="https://randomuser.me/api/portraits/men/5.jpg" />
            <AvatarFallback>DP</AvatarFallback>
          </Avatar>
          <MenuIcon />
        </nav>
      </div>
    </div>
  );
};

export default NavBar;

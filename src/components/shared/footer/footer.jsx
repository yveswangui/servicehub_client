import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full py-2 bg-black md:py-10" id="contact_us_section">
      <div className="grid max-w-screen-xl grid-cols-1 gap-10 px-4 mx-auto my-6 md:grid-cols-2">
        <div className="">
          <h2 className="mb-3 text-2xl font-bold text-white font-roboto text-start">
            Reach Out To Us
          </h2>
          <div className="grid w-full grid-cols-2 gap-4">
            <input
              className="rounded-md outline-none border-[#464646] border-[1px] px-3 py-2"
              placeholder="Enter Username"
            />
            <input
              className="rounded-md outline-none border-[#464646] border-[1px] px-3 py-2"
              placeholder="Enter email"
            />
          </div>
          <div className="w-full">
            <textarea
              className="w-full px-4 py-4 mt-4 rounded-md outline-none border-[#464646] border-[1px] min-h-24"
              placeholder="Enter message"
            />
          </div>
          <button className="w-full px-8 py-2 my-6 text-white bg-black border-[1px] border-white rounded-md">
            Send
          </button>
          <div className="flex justify-between gap-5 md:justify-start">
            <div className="border-white border-[1px] rounded-full p-2">
              <Facebook color="white" />
            </div>
            <div className="border-white border-[1px] rounded-full p-2">
              <Instagram color="white" />
            </div>
            <div className="border-white border-[1px] rounded-full p-2">
              <Youtube color="white" />
            </div>
            <div className="border-white border-[1px] rounded-full p-2">
              <Linkedin color="white" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 text-white ">
          <div>
            <h2 className="mb-2 text-lg font-bold text-start md:text-end">
              Categories
            </h2>
            <ul className="flex flex-col items-start md:items-end">
              <li>Cleaning</li>
              <li>Repair</li>
              <li>Lawning</li>
              <li>Beauty</li>
              <li>Construction</li>
            </ul>
          </div>
          <div>
            <h2 className="mb-2 text-lg font-bold text-end">Navigation</h2>
            <ul className="flex flex-col items-end">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/">Contact Us</Link>
              </li>
              <li>
                <Link to="/">Reviews</Link>
              </li>
              <li>
                <Link to="/">My Orders</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t-[1px] border-white py-4 px-4">
        <p className="text-white text-start font-montserrat">
          ServiceHub, 2024
        </p>
      </div>
    </div>
  );
};

export default Footer;

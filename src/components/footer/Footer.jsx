import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Component() {
  return (
    <footer className="w-full bg-white text-gray-800 py-8 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <img className="w-8" src={logo} alt="" />
          <span className="text-black font-semibold text-lg">ShopIt</span>
        </div>
        <nav className="flex flex-wrap items-center gap-4 md:gap-6">
          <Link className="hover:text-black transition-colors" to="">
            About
          </Link>
          <Link className="hover:text-black transition-colors" to="">
            Contact
          </Link>
          <Link className="hover:text-black transition-colors" to="">
            Privacy Policy
          </Link>
        </nav>
        <p className="text-sm">© 2024 ShopIt. All rights reserved.</p>
      </div>
    </footer>
  );
}

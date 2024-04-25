import { Button } from "@/components/ui/button";
import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import MobileNav from "./child/MobileNav";

MobileNav;

const Header = () => {
  return (
    <header className="bg-white w-full">
      <div className="container px-4 h-20 md:px-6 flex  justify-between gap-2 items-center">
        <MobileNav />

        <div className="w-[150px] hidden lg:flex gap-8">
          <Link className="flex items-center gap-2" to="#">
            <img className="w-4" src={logo} />
            <span className="font-semibold">ShopIt</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-4">
            <Link
              className="inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none"
              to="#"
            >
              Home
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none">
                Category
                <ChevronDownIcon className="ml-2 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem>
                  <Link to="#">Men</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="#">Women</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="#">Electronics</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>

        <div className="relative flex-1 max-w-md">
          <Button
            className="absolute right-2 top-1/2 -translate-y-1/2 active:text-gray-400"
            size="icon"
            variant="ghost"
          >
            <SearchIcon className="h-5 w-5" />
          </Button>
          <Input
            className="pr-12 bg-gray-100"
            placeholder="Search any product..."
            type="text"
          />
        </div>

        <Button className="relative" size="icon" variant="ghost">
          <Badge className="absolute flex items-center overflow-hidden justify-center top-0 right-0 p-2 w-2 h-2 rounded-full bg-red-500 text-[10px] text-white">
            2
          </Badge>
          <ShoppingCartIcon className="h-6 w-6" />
        </Button>
      </div>
    </header>
  );
};

export default Header;

function ChevronDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function ShoppingCartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}

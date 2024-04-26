import { Button } from "@/components/ui/button";
import {
  SheetTrigger,
  SheetContent,
  Sheet,
  SheetClose,
} from "@/components/ui/sheet";
import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";

const MobileNav = ({ distinctCategory }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="lg:hidden" size="icon" variant="outline">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <Link className="flex items-center gap-2 select-none" to="#">
          <img className="w-4" src={logo} />
          <span className="font-semibold">ShopIt</span>
        </Link>
        <nav className="flex flex-col gap-4 py-6">
          <SheetClose asChild>
            <Link
              className="inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none"
              to="/"
            >
              Home
            </Link>
          </SheetClose>
          <DropdownMenu>
            <DropdownMenuTrigger className="inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none">
              Category
              <ChevronDownIcon className="ml-2 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              {distinctCategory.map((item) => (
                <Link key={item} to={`/products/category/${item}`}>
                  <SheetClose asChild>
                    <DropdownMenuItem className="cursor-pointer capitalize">
                      {item}
                    </DropdownMenuItem>
                  </SheetClose>
                </Link>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;

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

function MenuIcon(props) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

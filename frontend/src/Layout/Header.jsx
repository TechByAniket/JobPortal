import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-dropdown-menu";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

export const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const navItemClasses =
    "block py-2 text-black hover:text-blue-500 my-transition cursor-pointer";

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Browse Jobs", to: "/jobs" },
    { label: "Build Resume", to: "/build-resume" },
    { label: "About", to: "/about" },
  ];

  return (
    <>
      <nav className="py-4 container flex justify-between items-center">
        <Link to="/">
          <img src="/logo-black.png" alt="" className="w-15 md:w-20 " />
        </Link>

        {/* Desktop Menu */}
        <div>
          <ul className=" hidden md:flex justify-between items-center gap-10">
            {navLinks.map(({ label, to }) => {
              return (
                <li key={label} className={navItemClasses}>
                  <Link to={to}>{label}</Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <ul className="hidden md:flex justify-between items-center gap-2">
            <Button variant="blue">
              <Link>Login</Link>
            </Button>
            <Button variant="blue">
              <Link>Register</Link>
            </Button>
          </ul>
        </div>

        {/* Mobile Menu */}
        <Button
          variant="ghost"
          className="md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          {isOpen ? <RxCross1 /> : <GiHamburgerMenu />}
        </Button>
        {isOpen && (
            <div className="absolute top-18 left-0 w-full bg-white shadow-md z-50">
              <ul className="md:hidden px-10 py-4 space-y-3 font-medium">
                {navLinks.map(({ label, to }) => (
                  <li
                    key={label}
                    className="block py-2 cursor-pointer hover:bg-gray-100"
                  >
                    <Link className="px-2" to={to} onClick={() => setOpen(false)}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>

              <ul className="md:hidden flex flex-col pl-10 px-2 py-4 space-y-3 font-medium">
                <Button variant="blue" className='w-20 cursor-pointer'>
                  <Link>Login</Link>
                </Button>
                <Button variant="blue" className='w-20 cursor-pointer'>
                  <Link>Register</Link>
                </Button>
              </ul>

            </div>
        )}
      </nav>
    </>
  );
};

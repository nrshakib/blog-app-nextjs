"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { name: "Homepage", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "/blog" },
];

const session = true;
const isAdmin = true;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <div className="md:block flex justify-between gap-10 mt-2">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold">
          Blog
        </Link>
        <div className="md:flex gap-3 items-center hidden">
          {navLinks.map((link) => {
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`${
                  pathname === link.href &&
                  "min-w-20 p-2 rounded-2xl font-medium  bg-white text-black text-center"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          {session ? (
            <>
              {isAdmin && <Link href="/admin">Admin</Link>}
              <button className="p-2 font-bold bg-white text-black rounded-xl">
                Log Out
              </button>
            </>
          ) : (
            <Link href="/login">Log In</Link>
          )}
        </div>
      </div>
      <button className="md:hidden" onClick={() => setOpen((prev) => !prev)}>
        Menu
      </button>
      {open && (
        <div className="absolute bg-blue-400 top-10 right-0 float-end h-full w-1/2 flex flex-col items-center justify-center gap-2  md:hidden">
          {navLinks.map((link) => {
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`${
                  pathname === link.href &&
                  "min-w-20 p-2 rounded-2xl font-medium  bg-white text-black text-center"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Navbar;

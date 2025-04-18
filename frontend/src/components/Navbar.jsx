import React from "react";
import { Link, useResolvedPath } from "react-router-dom";
import { ShoppingBagIcon, ShoppingCartIcon } from "lucide-react";
import ThemeSelector from "./ThemeSelector";

function Navbar() {
  const { pathname } = useResolvedPath();
  const isHomePage = pathname === "/";

  return (
    <div className="bg-base-100/80 backdrop-blur-lg border-base-content/10 sticky top-0 z-50 border-b">
      <div className="max-w-7xl mx-auto">
        <div className="navbar px-4 min-h-[4rem] justify-between">
          {/* Logo and Title */}
          <div className="flex-1 lg:flex-none">
            <Link to="/" className="hover:opacity-80 transition-opacity">
              <div className="flex items-center gap-2">
                <ShoppingCartIcon className="size-9 text-primary" />
                <span
                  className="font-semibold font-mono tracking-widest text-2xl 
                    bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
                >
                  BALCI
                </span>
              </div>
            </Link>
          </div>
          {/*  Right section */}
          <div className="flex items-center gap-4">
            <ThemeSelector />
            {isHomePage && (
              <div className="indicator">
                <div className="p-2 rounded-full hover:bg-base-200 transition-colors relative">
                  <ShoppingBagIcon className="size-5" />
                  <span className="badge badge-sm size-3 badge-primary absolute -top-1 -right-1">
                    8
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

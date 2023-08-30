"use client"

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Category } from "@/types";

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const dropdownContainer = document.querySelector('.dropdown-container');
      if (isDropdownOpen && dropdownContainer && !dropdownContainer.contains(event.target as Node)) {
        closeDropdown();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isDropdownOpen]);

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));


  return (
    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6 relative">
      <div className="relative inline-block text-left">
        <button
          type="button"
          className="text-sm font-medium transition-colors hover:text-black"
          onClick={toggleDropdown}
        >
          Product Collections
        </button>
        {isDropdownOpen && (
          <div
            className="origin-top absolute left-1/2 transform -translate-x-1/2 mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10 dropdown-container" // Added dropdown-container class
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div className="py-1" role="none">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  onClick={closeDropdown}
                >
                  <div
                    className={cn(
                      'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100',
                      route.active ? 'text-black' : 'text-neutral-500'
                    )}
                    role="menuitem"
                  >
                    {route.label}
                  </div>
                </Link>
              ))}
              
            </div>

          </div>
        )}

      </div>
    </nav>
  );
};

export default MainNav;

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Problems", href: "#problems" },
    { name: "Features", href: "#features" },
    { name: "Plans", href: "#plans" },
    { name: "Why Us", href: "#why" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        {/* Logo */}

        <a href="/" className="flex items-center">
          <h1 className="text-lg font-bold tracking-tight text-gray-900 sm:text-xl lg:text-3xl">
            Exo<span className="text-[#0d5b96]">Stock</span>
          </h1>

          <span className="ml-1 mt-1 text-[10px] text-gray-900 sm:ml-2 sm:mt-2.5 sm:text-sm">
            Powered by{" "}
            <a
              href="https://exoticinfotech.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#0d5b96] hover:underline"
            >
              Exotic Infotech
            </a>
          </span>
        </a>

        {/* Desktop Menu */}

        <nav className="hidden items-center gap-6 xl:gap-10 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-m font-semibold text-gray-900 transition-all duration-300 hover:text-[#0d5b96]"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Desktop Button */}

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="rounded-xl bg-[#0d5b96] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#0d5b96]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#0d5b96]/80"
          >
            Get Free Demo →
          </a>
        </div>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-xl border border-gray-200 p-2 transition lg:hidden"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-gray-800" />
          ) : (
            <Menu className="h-6 w-6 text-gray-800" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}

      <div
        className={`overflow-hidden bg-white transition-all duration-300 lg:hidden ${
          isOpen ? "max-h-[420px] border-t border-gray-200" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-5 py-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="border-b border-gray-100 py-4 text-base font-medium text-gray-700 transition hover:text-[#0d5b96]"
            >
              {item.name}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-5 rounded-xl bg-[#0d5b96] py-3 text-center text-base font-semibold text-white transition-all duration-300 hover:bg-[#0d5b96]"
          >
            Get Free Demo →
          </a>
        </div>
      </div>
    </header>
  );
}

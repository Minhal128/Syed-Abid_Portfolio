"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ModeToggle } from "../mode-toggle";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const darkLogo = "/logo/logo.png";
  const lightLogo = "/logo/logo.png";
  const menuItems = [
    { label: "All", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/credential" },
    { label: "Achievements", href: "/achievements" },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <nav className="sticky top-0 py-3 sm:py-4 md:py-6 z-50 bg-background/5 backdrop-blur-md">
      <div className="container mx-auto flex justify-between items-center px-2 sm:px-4">
        <Link href="/" className="flex items-center">
          <Image
            src={resolvedTheme === "dark" ? darkLogo : lightLogo}
            alt="Logo"
            width={40}
            height={40}
            priority
            className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-background/10 backdrop-blur-sm z-50 rounded-2xl lg:rounded-3xl p-1 lg:p-2 border border-white/5">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-2 lg:px-4 py-1.5 lg:py-2 rounded-2xl lg:rounded-3xl transition-colors text-sm lg:text-base ${pathname === item.href
                ? "bg-foreground text-background"
                : "hover:bg-foreground/10"
                }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2 sm:gap-4">
          <ModeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg hover:bg-foreground/10 touch-manipulation"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 md:hidden bg-background/95 backdrop-blur-lg z-50 border-t border-white/10 shadow-xl">
            <div className="container mx-auto p-2 sm:p-4 flex flex-col items-center">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`w-full text-center py-2.5 sm:py-3 rounded-lg transition-colors text-sm sm:text-base touch-manipulation ${pathname === item.href
                    ? "bg-foreground text-background"
                    : "hover:bg-foreground/10"
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Desktop Theme Toggle */}
        <div className="hidden md:block">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-background/80 backdrop-blur-md border-b mb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-brand-600">
                SystemDesignPro
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#features"
              className="text-foreground/80 hover:text-brand-600 font-medium"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-foreground/80 hover:text-brand-600 font-medium"
            >
              How it works
            </a>
            <a
              href="/challenges"
              className="text-foreground/80 hover:text-brand-600 font-medium"
            >
              Challenges
            </a>

            <a
              href="#pricing"
              className="text-foreground/80 hover:text-brand-600 font-medium"
            >
              Pricing
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <a href="/auth">Sign in</a>
            </Button>
            <Button asChild>
              <a href="/auth">Sign up</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-foreground/80 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border px-4 pt-2 pb-4">
          <nav className="flex flex-col space-y-4">
            <a
              href="#features"
              className="text-foreground/80 hover:text-brand-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-foreground/80 hover:text-brand-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              How it works
            </a>
            <a
              href="/challenges"
              className="text-foreground/80 hover:text-brand-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Challenges
            </a>
            <a
              href="#testimonials"
              className="text-foreground/80 hover:text-brand-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a
              href="#pricing"
              className="text-foreground/80 hover:text-brand-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <div className="flex flex-col space-y-2 pt-2 border-t border-border">
              <Button variant="ghost" asChild>
                <a href="/auth">Sign in</a>
              </Button>
              <Button asChild>
                <a href="/auth">Sign up</a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

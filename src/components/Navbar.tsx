
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Search } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#services" },
    { name: "Health Packages", href: "#services" },
    { name: "Book Collection", href: "#booking" },
    { name: "Test Reports", href: "#reports" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <CommandDialog open={searchOpen} onOpenChange={setSearchOpen}>
        <CommandInput placeholder="Search tests and packages..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Popular Tests">
            <CommandItem>Complete Blood Count (CBC)</CommandItem>
            <CommandItem>Lipid Profile</CommandItem>
            <CommandItem>Blood Glucose</CommandItem>
            <CommandItem>Thyroid Profile</CommandItem>
            <CommandItem>Liver Function Tests</CommandItem>
          </CommandGroup>
          <CommandGroup heading="Health Packages">
            <CommandItem>Basic Health Checkup</CommandItem>
            <CommandItem>Comprehensive Health Package</CommandItem>
            <CommandItem>Cardiac Risk Assessment</CommandItem>
            <CommandItem>Women's Wellness Package</CommandItem>
            <CommandItem>Diabetes Care Package</CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
      
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-lg">TL</span>
            </div>
            <div className="font-heading">
              <h1 className="text-lg font-semibold">The LABs</h1>
              <p className="text-xs text-muted-foreground -mt-1">Pathology Lab</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium hover:text-primary btn-transition"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button 
              variant="outline" 
              size="sm" 
              className="gap-2"
              onClick={() => setSearchOpen(true)}
            >
              <Search size={16} />
              <span>Search Tests</span>
            </Button>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-primary" />
              <span className="text-sm font-medium">800-123-4567</span>
            </div>
            <Button>Book Collection</Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-2">
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => setSearchOpen(true)}
            >
              <Search size={18} />
            </Button>
            
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 6H20M4 12H20M4 18H20"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>
              </SheetTrigger>
              <SheetContent>
                <nav className="flex flex-col space-y-4 mt-6">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-base font-medium hover:text-primary btn-transition"
                    >
                      {item.name}
                    </a>
                  ))}
                  <div className="pt-4 border-t">
                    <div className="flex items-center gap-2 mb-4">
                      <Phone size={16} className="text-primary" />
                      <span className="text-sm font-medium">800-123-4567</span>
                    </div>
                    <Button className="w-full">Book Collection</Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;

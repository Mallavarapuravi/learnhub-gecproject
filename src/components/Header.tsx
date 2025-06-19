
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, User, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-lg border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">L</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              LearnHub
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/courses" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Courses
            </Link>
            <Link to="/categories" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Categories
            </Link>
            <Link to="/instructors" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Instructors
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              About
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search courses..."
                className="pl-10 bg-gray-50 border-gray-200 focus:bg-white"
              />
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost" className="text-gray-700 hover:text-blue-600">
                Log in
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white">
                Sign up
              </Button>
            </Link>

            {/* Mobile Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem asChild>
                  <Link to="/courses">Courses</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/categories">Categories</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/instructors">Instructors</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/about">About</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

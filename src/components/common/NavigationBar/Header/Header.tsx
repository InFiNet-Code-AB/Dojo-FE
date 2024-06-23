import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../InfinetLogo/InfinetLogo";
import SearchBar from "./components/SearchBar";
import Menu from "./components/Menu";
import AuthButtons from "./components/AuthButtons";
import MenuToggleButton from "./components/MenuToggleButton";
import DarkModeToggle from "./components/DarkModeToggle";

interface HeaderProps {
  onLoginClick: () => void;
  onSignUpClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLoginClick, onSignUpClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogoClick = () => {
    navigate("/"); // Navigerar till huvudsektionen
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between flex-wrap bg-violet-950 p-6 z-50">
      <div onClick={handleLogoClick} className="cursor-pointer">
        <Logo />
      </div>
      <MenuToggleButton onClick={toggleMenu} />
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <Menu />
        <div className="flex items-center justify-between w-full lg:w-auto mt-4 lg:mt-0">
          <SearchBar />
          <AuthButtons
            onLoginClick={onLoginClick}
            onSignUpClick={onSignUpClick}
          />
          <div className="flex items-center ml-auto">
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

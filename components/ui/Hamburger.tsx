"use client";
import { useState } from "react";

export const Hamburger = ({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <button
      className={`${
        isMenuOpen ? "hamburger-active" : ""
      } group right-6 block scale-90 lg:hidden`}
      onClick={toggleMenu}
    >
      <span className="hamburger-line"></span>
      <span className="hamburger-line"></span>
      <span className="hamburger-line"></span>
    </button>
  );
};

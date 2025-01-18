"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';

import { useEffect, useState } from "react";

export default function RootLayout() {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
      // Vérifier la préférence du système si rien n'est enregistré
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (prefersDark) {
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
        setDarkMode(true);
      } else {
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("light");
        setDarkMode(false);
      }
      setMounted(true);
    }, []);

    if (!mounted) return <button disabled>Chargement...</button>;

  const toggleTheme = () => {
    if (!darkMode) {
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
      } else {
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("light");
    }
    setDarkMode(!darkMode);
  };

  return (
    <div className="themeToggle relative w-16 h-8 flex items-center cursor-pointer rounded-full p-1" onClick={toggleTheme}>
        <FontAwesomeIcon icon={faMoon} className="themeToggle rounded-full" />
        <div className="absolute bg-white w-6 h-6 rounded-full shadow-md transition-transform duration-300" style={darkMode ? {left:"36px"}:{}}></div>
        <FontAwesomeIcon icon={faSun} className="themeToggle rounded-full text-yellow-400 absolute right-1" style={darkMode ? {zIndex: "-10"}:{}}/>
    </div>
  );
}

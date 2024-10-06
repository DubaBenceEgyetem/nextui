"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { DarkModeProps } from "../interfaces";
import { Button } from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/dropdown";



export function DarkMode({ onThemeChange }: DarkModeProps) {
  const { setTheme } = useTheme();
    const handleThemeChange = (theme: 'light' | 'dark' | 'system') => {
    setTheme(theme); 
    onThemeChange(theme); 
  };


  return (
    <Dropdown>
      <DropdownTrigger className="sticky  top-0 z-40">
          <Button>
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem onClick={() => handleThemeChange("dark")}>Dark</DropdownItem>
        <DropdownItem onClick={() => handleThemeChange("light")}>Light</DropdownItem>
        <DropdownItem onClick={() => handleThemeChange("system")}>System</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    
  );
}

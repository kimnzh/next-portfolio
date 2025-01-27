"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const options = [
  { id: 1, label: "Option 1" },
  { id: 2, label: "Option 2" },
  { id: 3, label: "Option 3" },
];

export default function SelectComponent() {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex justify-center mx-auto p-1 relative">
      <div
        className="w-[16rem] flex items-center justify-between cursor-pointer py-2 pl-4 pr-2 border-2 border-primary-dark dark:border-white rounded-[16px] bg-secondary dark:bg-secondary-dark"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-primary-dark dark:text-white">
          {selectedOption.label}
        </span>
        <ChevronDown className="w-5 h-5 text-primary-dark dark:text-white" />
      </div>

      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="absolute w-[16rem] mt-14 border-2 border-primary-dark dark:border-white rounded-[16px] bg-secondary dark:bg-secondary-dark z-10"
        >
          {options.map((option) => (
            <li
              key={option.id}
              className="p-3 cursor-pointer text-primary-dark dark:text-white"
              onClick={() => {
                setSelectedOption(option);
                setIsOpen(false);
              }}
            >
              {option.label}
            </li>
          ))}
        </motion.ul>
      )}
    </div>
  );
}

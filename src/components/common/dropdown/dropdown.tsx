import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";

interface DropdownProps {
  label: string;
  options: string[];
  selectedValue: string;
  onSelect: (option: string) => void;
}

const Dropdown = ({
  label,
  options,
  selectedValue,
  onSelect
}:
  DropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelect = (e: React.MouseEvent<HTMLLIElement, MouseEvent>, option: string) => {
    e.stopPropagation();
    onSelect(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <DropdownContainer ref={dropdownRef} onClick={toggleDropdown}>
      <DropdownText $isPlaceholder={!selectedValue}>
        {selectedValue || label}
      </DropdownText>
      {isOpen ? <IoIosArrowUp size={15} /> : <MdOutlineKeyboardArrowDown size={20} />}
      <OptionsList $isOpen={isOpen}>
        {options.map((option, index) => (
          <Option
            key={index}
            onClick={(e) => handleSelect(e, option)}
            $isSelected={selectedValue === option}
          >
            {option}
          </Option>
        ))}
      </OptionsList>
    </DropdownContainer>
  );
};

export default Dropdown;

const DropdownContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 20px;
  padding: 8px 4px;
  cursor: pointer;
  position: relative;
  min-width: 40px;
  width: 100%;
  color: #78818f;
  transition: all 0.3s ease;
`;

const DropdownText = styled.span<{ $isPlaceholder: boolean }>`
  font-size: ${({ $isPlaceholder }) => ($isPlaceholder ? "14px" : "14px")};
  color: ${({ $isPlaceholder }) => ($isPlaceholder ? "#b0b0b0" : "#333")};
`;

const OptionsList = styled.ul<{ $isOpen: boolean }>`
  position: absolute;
  top: 100%;
  font-size: 14px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  list-style: none;
  margin: 4px 0 0 0;
  padding: 8px 0;
  min-width: 100%;
  z-index: 999;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  transform: ${({ $isOpen }) => ($isOpen ? "translateY(0)" : "translateY(-10px)")};
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
  transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out, visibility 0.2s;
`;

const Option = styled.li<{ $isSelected: boolean }>`
  padding: 8px 16px;
  cursor: pointer;
  background: ${({ $isSelected }) => ($isSelected ? "#e6f7ff" : "white")};
  color: ${({ $isSelected }) => ($isSelected ? "#007BFF" : "#333")};
  font-weight: ${({ $isSelected }) => ($isSelected ? "bold" : "normal")};

  &:hover {
    background: #f0f0f0;
  }
`;

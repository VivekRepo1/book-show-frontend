import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  color: #333;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 10;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 5%;
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  @media (max-width: 768px) {
    justify-content: space-between;
    margin-right: 10px;
  }
`;

export const Logo = styled.img`
  height: 40px;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 50%;
  }
`;

export const DesktopLocation = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileLocation = styled.div`
  display: flex;
  align-items: center;
  @media (min-width: 769px) {
    display: none;
  }
`;

export const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  @media (max-width: 768px) {
    display: block;
  }
`;

export const NavLinks = styled.div<{ $isOpen: boolean }>`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 50px;
    right: 4px;
    gap: 0rem;
    width: fit-content;
    background-color: #fff;
    padding: 1rem;
    box-shadow:rgba(0, 0, 0, 0.1) 0px 0px 6px 6px;
  }
`;

export const NavLink = styled(Link) <{ $isActive: boolean }>`
  color: ${({ $isActive }) => ($isActive ? "#1a202c" : "#78818f")};
  font-weight: ${({ $isActive }) => ($isActive ? "bold" : "normal")};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 14px;
  &:hover {
    color: #1a202c;
  }
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    padding: 10px 0;
  }
`;

export const EventButton = styled.button`
  background-color: #283f93;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 6px;
  &:hover {
    background-color: #253981;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ProfileIcon = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    color: #007bff;
  }
  @media (max-width: 768px) {
    width: 100%;
    display: none;
    justify-content: center;
  }
`;

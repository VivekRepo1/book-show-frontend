import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { CiLocationOn } from 'react-icons/ci';
import { HiOutlineUserCircle } from 'react-icons/hi2';
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';

import Dropdown from '../dropdown/dropdown';
import { LOCATIONS, NAV_LINKS } from '../../constants';
import {
  Container,
  DesktopLocation,
  EventButton,
  Hamburger,
  LeftSection,
  Logo,
  MobileLocation,
  NavbarContainer,
  NavLink,
  NavLinks,
  ProfileIcon
} from "./styles"
import { useEventFilter } from '../../context/event-filter-context';

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { filters, setFilters } = useEventFilter();

  const [location, setLocation] = useState<string>("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  useEffect(() => {
    window.scrollTo({
      top: 0,
      // behavior: 'smooth'
    });
  }, [pathname]);

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleSelect = (value: string) => {
    setLocation(value);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  return (
    <NavbarContainer>
      <Container>
        <LeftSection>
          <Logo src="/svg/black-logo.svg" alt="book_show_online" onClick={handleLogoClick} />

          <MobileLocation>
            <CiLocationOn />
            <Dropdown
              label="Location"
              options={LOCATIONS}
              selectedValue={filters.city}
              onSelect={(value) => setFilters({ city: value })}
            />
          </MobileLocation>
        </LeftSection>

        <Hamburger onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <RxCross1 size={20} /> : <RxHamburgerMenu size={20} />}
        </Hamburger>

        <NavLinks $isOpen={isMobileMenuOpen}>
          {/* {NAV_LINKS.map((link, index) => (
            <NavLink key={index} to={link.to} $isActive={pathname === link.to} onClick={() => setIsMobileMenuOpen(false)}>
              {link.text}
            </NavLink>
          ))} */}

          {/* <DesktopLocation>
            <CiLocationOn />
            <Dropdown label="Hisar" options={LOCATIONS} selectedValue={location} onSelect={handleSelect} />
          </DesktopLocation> */}


          <DesktopLocation>
            <CiLocationOn />
            <Dropdown
              label="Location"
              options={LOCATIONS}
              selectedValue={filters.city}
              onSelect={(value) => setFilters({ city: value })}
            />
          </DesktopLocation>

          <EventButton onClick={() => navigate("/list-your-event")}>List your event</EventButton>

          {/* <ProfileIcon>
            <HiOutlineUserCircle size={30} />
          </ProfileIcon> */}
        </NavLinks>
      </Container>
    </NavbarContainer>
  );
};

export default Navbar;

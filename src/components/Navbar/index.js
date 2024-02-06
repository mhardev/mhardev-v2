/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { useTheme } from "styled-components";
import { Bio } from "../../data/constant";

const Nav = styled.div`
    background-color: ${({theme}) => theme.card_light};
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    @media (max-width: 960px) {
      transition: 0.8s all ease;
    }
`;
const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

const NavLogo = styled(LinkR)`
  width: 80%;    
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  @media (max-width: 640px) {
    padding: 0 0px;
  }
`;

const Span = styled.div`
    padding: 0 4px;
    font-weight: bold;
    font-size: 30px;
`;

const NavItems = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
    gap: 32px;
    padding: 0 6px;
    list-style: none;

    @media screen and (max-width: 768px) {
      display: none;
    }
`;

const NavLink = styled.a`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    :hover {
      color: ${({ theme }) => theme.primary};
    }

    &.active {
      border-bottom: 2px solid ${({ theme }) => theme.primary};
    }
`;


const GitHubButton = styled.a`
  border: 3px solid #79b1ec;
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: #79b1ec;
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;
  :hover {
    background: #79b1ec;
    color: ${({ theme }) => theme.white};     
  }
  @media screen and (max-width: 768px) { 
    font-size: 14px;
  }
`;

const ButtonContainer = styled.div`
  width: 80%;  
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;


const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card_light+99};
  transition: all 0.6s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-100%)')};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  z-index: ${({ isOpen }) => (isOpen ? '1000' : '-1000')};
`;

const MobileLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme()
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const closeMobileMenu = () => {
    setIsOpen(false);
  };
  const handleResize = () => {
    if (window.innerWidth > 768 && isOpen) {
      closeMobileMenu();
    }
  };
  React.useEffect(() => {
    // Add event listener when component mounts
    window.addEventListener('resize', handleResize);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <Nav>
      <NavContainer>
        <NavLogo to='/' onClick={handleLogoClick}>
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }} >
            <Span>MharDev</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#education'>Education</NavLink>
          <NavLink href='#contact'>Contact</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">Github Profile</GitHubButton>
        </ButtonContainer>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>About</MobileLink>
            <MobileLink href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Skills</MobileLink>
            <MobileLink href='#experience' onClick={() => {
              setIsOpen(!isOpen)
            }}>Experience</MobileLink>
            <MobileLink href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Projects</MobileLink>
            <MobileLink href='#education' onClick={() => {
              setIsOpen(!isOpen)
            }}>Education</MobileLink>
            <MobileLink href='#contact' onClick={() => {
              setIsOpen(!isOpen)
            }}>Contact</MobileLink>
            <GitHubButton style={{padding: '10px 16px',background: '#79b1ec', color: 'white', width: 'max-content'}} href={Bio.github} target="_blank" onClick={closeMobileMenu}>Github Profile</GitHubButton>
          </MobileMenu>
        }
      </NavContainer>
    </Nav>
  )
}

export default Navbar

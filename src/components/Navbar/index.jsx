import { FaBars } from "react-icons/fa"
import {
  MobileIcon,
  Nav,
  NavBtn,
  NavBtnLink,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
  NavbarContainer,
} from "./NavbarElements"

const Navbar = () => {
  return (
    <div>
      <Nav>
        <NavbarContainer>
          
          <NavLogo to="/">Dolla</NavLogo>

          <MobileIcon>
            <FaBars />
          </MobileIcon>

          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="discover">Discover</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services">Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="signup">Sign Up</NavLinks>
            </NavItem>
          </NavMenu>

          <NavBtn>
            <NavBtnLink tp="/signin">Sign in</NavBtnLink>
          </NavBtn>

        </NavbarContainer>
      </Nav>
    </div>
  )
}
export default Navbar

import { Nav, NavItem, NavLink } from "reactstrap";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <Nav justified pills>
        <NavItem>
          <NavLink href="/">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/about">About</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};

export default NavBar;

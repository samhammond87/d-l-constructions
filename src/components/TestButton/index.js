import { NavBtn, NavBtnLink } from "./TestButtonElements";

const Navbar = ({ toggle }) => {
  return (
    <>
      <NavBtn>
        <NavBtnLink to="/portal">Go To Portal</NavBtnLink>
      </NavBtn>
    </>
  );
};

export default Navbar;

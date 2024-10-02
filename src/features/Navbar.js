import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.div`
  position: fixed;
  bottom: 0;
  left: 0px;
  right: 0px;
  height: 83px;
  min-width: 366px;
  z-index: 1;
  .navContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 90%;
    height: 100%;
    border-radius: 50px;
    box-shadow: 0 -3px 25px 5px #0058ab12;
    margin: auto;
    background-color: white;
  }
`;

function Navbar() {
  return (
    <StyledNav>
      <div className="navContainer">
        <NavLink to="/categories">
          <img src=".././images/Category.png" alt="category" />
        </NavLink>
        <NavLink to="/home">
          <img src=".././images/Explore.png" alt="explore" />
        </NavLink>
<<<<<<< HEAD
        <div>
=======
        <NavLink>
>>>>>>> e57499b5b8a658f5af3e61d6e4ef56f73457d394
          <img src=".././images/Profile.png" alt="profile" />
        </NavLink>
      </div>
    </StyledNav>
  );
}

export default Navbar;

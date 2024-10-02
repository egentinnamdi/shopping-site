import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledMenu = styled.div`
  display: flex;
  justify-content: space-between;
  height: 30px;
  width: 100%;
  gap: 1.2rem;
  /* background-color: green; */
  text-transform: capitalize;
  overflow-x: scroll;
  margin-top: 28px;
`;

const StyledLink = styled(NavLink)`
  font-weight: 400;
  font-size: 20px;
  line-height: 23.38px;
  /* min-width: 94px; */
  color: #8a8b7a;
  text-decoration: none;
`;

function Menu() {
  return (
    <StyledMenu>
      <StyledLink to="groceries">groceries</StyledLink>
      <StyledLink to="fashion">fashion</StyledLink>
      <StyledLink to="beauty">beauty</StyledLink>
      <StyledLink to="music">music</StyledLink>
      <StyledLink to="travel">travel</StyledLink>
      <StyledLink to="travel">travel</StyledLink>
      <StyledLink to="travel">travel</StyledLink>
      <StyledLink to="travel">travel</StyledLink>
    </StyledMenu>
  );
}

export default Menu;

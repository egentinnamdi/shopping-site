import styled from "styled-components";
import Logo from "./Logo";
import Text from "./Text";

const StyledHeader = styled.div``;

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <Text />
    </StyledHeader>
  );
}

export default Header;

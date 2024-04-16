import styled from "styled-components";
import Logo from "./Logo";
import Text from "../MultiPageFiles/Text";

const StyledHeader = styled.div``;

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <Text>
        welcome back, <br /> ideas for your day
      </Text>
    </StyledHeader>
  );
}

export default Header;

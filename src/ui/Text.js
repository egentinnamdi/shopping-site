import styled from "styled-components";

const StyledText = styled.h1`
  text-transform: capitalize;
  font-size: 26px;
  line-height: 45.32px;
  font-weight: 400;
  font-family: "Montserrat", sans-serif;
`;

function Text({ children }) {
  return (
    <StyledText>
      {/* welcome back, <br /> ideas for your day */}
      {children}
    </StyledText>
  );
}

export default Text;

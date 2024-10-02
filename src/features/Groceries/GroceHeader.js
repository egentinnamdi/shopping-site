import styled from "styled-components";
import Text from "../../ui/MultiPageFiles/Text";

const StyledHeader = styled.header`
  /* background: var(--primary-color); */
  margin-top: 50px;
  width: 100%;
  height: 90px;
`;

function GroceHeader() {
  return (
    <StyledHeader>
      <Text />
    </StyledHeader>
  );
}

export default GroceHeader;

import styled from "styled-components";
// import Text from "../../ui/Text";

const StyledHeader = styled.header`
  background: var(--primary-color);
  margin-top: 40px;
  width: 100%;
  height: 90px;
`;

function GroceHeader() {
  return <StyledHeader></StyledHeader>;
}

export default GroceHeader;

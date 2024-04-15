import styled from "styled-components";

const StyledList = styled.div`
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(2, 1fr);
  gap: 21px;
  height: 492px;
  width: 100%;
  margin-top: 40px;
`;

function List({ children }) {
  return <StyledList>{children}</StyledList>;
}

export default List;

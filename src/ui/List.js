import styled from "styled-components";

const StyledList = styled.div`
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(2, 1fr);
  grid-template: 1fr 1fr/1fr 1fr;
  gap: 1.2rem;
  height: 492px;
  margin-top: 40px;
  & div {
    background-color: green;
    border-radius: 20px;
  }
`;

function List() {
  return (
    <StyledList>
      <div>height</div>
      <div>height</div>
      <div>height</div>
      <div>height</div>
    </StyledList>
  );
}

export default List;

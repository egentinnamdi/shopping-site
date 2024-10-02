import styled from "styled-components";

const CatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  text-transform: capitalize;

  & h2 {
    font-weight: 900;
    font-size: ${(props) => props.fontSize};
    line-height: 25.41px;
    color: var(--primary-color);
  }
  & span {
    font-weight: 500;
    font-size: 12px;
    line-height: 14.52px;
    text-align: center;
    padding-top: 6.5px;
  }
`;

function MiniHeader({ fontSize = "21px", textOne, textTwo = "see more" }) {
  return (
    <CatHeader fontSize={fontSize}>
      <h2>{textOne}</h2>
      <span>{textTwo} &gt;</span>
    </CatHeader>
  );
}

export default MiniHeader;

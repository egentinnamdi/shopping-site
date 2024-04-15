import styled from "styled-components";

const StyledSubHeader = styled.div`
  height: 52px;
  width: 100%;
  background-color: ${(props) => props.bgColor};
  margin-top: 50px;
  color: ${(props) => props.txtColor};

  & > div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    text-transform: capitalize;
    font-family: "Montserrat" sans-serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 27.89px;
  }
  .image {
    display: grid;
    place-items: center;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: ${(props) => props.bgColor};
  }
`;

function SubHeader({ text, icon, bgColor, txtColor }) {
  return (
    <StyledSubHeader bgColor={bgColor} txtColor={txtColor}>
      <div>
        <span>{text}</span>
        <div className="image">
          <img src={`.././images/${icon}.png`} alt={`${icon}`} />
        </div>
      </div>
    </StyledSubHeader>
  );
}

export default SubHeader;

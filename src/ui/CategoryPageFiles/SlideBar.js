import styled from "styled-components";

const StyledSlideBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.2rem;
  height: 280px;
  margin-top: 35px;
  overflow-x: scroll;

  & img:nth-child(1) {
    box-shadow: 0 4px 150px #d72a0b33;
  }
`;

const StyledCatImage = styled.img`
  min-width: 50%;
  height: 241px;
  border-radius: 25px;
  object-fit: cover;
`;

function SlideBar() {
  return (
    <StyledSlideBar>
      <StyledCatImage src="../../images/Product.png" alt="product" />
      <StyledCatImage src="../../images/girls.png" alt="girls" />
      <StyledCatImage src="../../images/boys.png" alt="boys" />
      <StyledCatImage src="../../images/home.png" alt="home" />
    </StyledSlideBar>
  );
}

export default SlideBar;

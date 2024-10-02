import styled from "styled-components";

const StyledLogo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;

  & img {
    height: 100%;
    width: 100%;
  }
  .logo {
    width: 152px;
    height: 33px;
  }
`;

const StyledIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  & div {
    display: flex;
    align-items: center;
    width: 26px;
    height: 26px;
    margin: 10px;
  }
`;

function Logo() {
  return (
    <StyledLogo>
      <div className="logo">
        <img src=".././images/NAVIGATE.png" alt="logo" />
      </div>
      <StyledIcons>
        <div>
          <img src=".././images/Search.png" alt="search" />
        </div>
        <div>
          <img src=".././images/Buy.png" alt="buy" />
        </div>
      </StyledIcons>
    </StyledLogo>
  );
}

export default Logo;

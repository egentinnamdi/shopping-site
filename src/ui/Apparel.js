import styled from "styled-components";

const StyledApparel = styled.div`
  height: 52px;
  width: 100%;
  background: black;
  margin-top: 50px;
  color: var(--primary-color);

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
    background-color: var(--secondary-color);
  }
`;

function Apparel() {
  return (
    <StyledApparel>
      <div>
        <span>apparel under 10k</span>
        <div className="image">
          <img src=".././images/shopping-cart.png" alt="shopping-cart" />
        </div>
      </div>
    </StyledApparel>
  );
}

export default Apparel;

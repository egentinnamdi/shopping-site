import styled from "styled-components";

const StyledListItem = styled.div`
  display: flex;
  background-color: var(--primary-color);
  border-radius: 25px;
  position: relative;
  justify-content: center;
  & img {
    width: 100%;
  }
  & img:nth-child(2) {
    border-radius: 50%;
    width: 29.88px;
    height: 27.91px;
    position: absolute;
    top: 7%;
    left: 75%;
    z-index: 1;
  }
  & span {
    display: grid;
    place-items: center;
    color: var(--white);
    text-transform: uppercase;
    background-color: var(--secondary-color);
    width: 145.25px;
    height: 84.62px;
    border-radius: 8px;
    font-weight: 500;
    position: absolute;
    top: 130px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
  }
`;

function ListItem({ text }) {
  return (
    <StyledListItem>
      <div>
        <img cl src={`.././images/${text}.png`} alt={`${text}`} />
        <img src=".././images/cart.png" alt="cart" />
        <span>{text}</span>
      </div>
    </StyledListItem>
  );
}

export default ListItem;

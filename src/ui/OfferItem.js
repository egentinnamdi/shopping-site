import styled from "styled-components";

const StyledOffer = styled.div`
  background-color: ${(props) => props.color};
  padding: 15px;
  border-radius: 25px;
  height: 113px;
  min-width: 320px;
  position: relative;

  & span:nth-child(1) {
    font-size: 30px;
    color: white;
    font-weight: 700;
    line-height: 51.36px;
    text-transform: uppercase;
  }
  & span:nth-child(3) {
    font-size: 16px;
    color: white;
    font-weight: 400;
    line-height: 27.39px;
    text-transform: capitalize;
  }
  .img {
    height: 134px;
    width: 134px;
    position: absolute;
    top: -45px;
    left: 180px;
  }
`;
function Offer({ color, textOne, textTwo }) {
  return (
    <StyledOffer color={color}>
      <span>{textOne}</span>
      <br />
      <span>{textTwo}</span>
      <div className="img">
        <img src={`.././images/${"headphone"}.png`} alt="headphone" />
      </div>
    </StyledOffer>
  );
}

export default Offer;

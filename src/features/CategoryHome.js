import styled from "styled-components";

const StyledCatItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: var(--primary-color);
  min-width: 136px;
  height: 174px;
  border-radius: 8px;
  padding: 8px 8px 12px 8px;
  .catImg {
    height: 104px;
    width: 120px;
    & img {
      width: 100%;
      height: 100%;
    }
  }
  .catText {
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 112px;
    height: 38px;
    color: var(--white);
    text-align: center;
    text-transform: capitalize;

    & span:nth-child(1) {
      font-weight: 700;
      font-size: 16px;
      line-height: 19.36px;
    }
    & span:nth-child(2) {
      font-weight: 500;
      font-size: 12px;
      line-height: 14.52px;
    }
  }
`;

function CategoryHome() {
  return (
    <StyledCatItem>
      <div className="catImg">
        <img src=".././images/home.png" alt="home" />
      </div>
      <div className="catText">
        <span>home</span>
        <span>21 suggested items</span>
      </div>
    </StyledCatItem>
  );
}

export default CategoryHome;

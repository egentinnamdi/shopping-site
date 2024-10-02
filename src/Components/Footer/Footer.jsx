import styled from "styled-components";
const Button = styled.button`
    padding: 10px;
    background-color: teal;
    color: white;
    border: none;
    border-radius: 5px;
`;
const FooterStyled = styled.div`
  width: 1920px;
  height: 472px;
`;
const FooterMain = styled.div`
  width: 1920px;
  height: 68px;
  top: 404px;
  padding: 24px, 300px, 24px, 300px;
  gap: 10px;
  background-color: #000000;
  box-shadow: 0px 1px 0px 0px #303639 inset;
`;
const FooterCopyWrite = styled.div`
  width: 1920px;
  height: 68px;
  position: fixed;
  top: 404px;
  padding: 24px, 300px, 24px, 300px;
  gap: 10px;
  background-color: #000000;
  box-shadow: 0px 1px 0px 0px #303639 inset;
`;
const CliconEcomerce = styled.div`
  width: 312px;
  height: 144px;
  gap: 24px;
`;
const TopCategory = styled.div`
  width: 200px;
  height: 260px;
  gap: 12px;
`;
const QuickLinks = styled.div`
  width: 200px;
  height: 260px;
  gap: 12px;
`;
const QuickLinks1 = styled.div`
  width: 200px;
  height: 192px;
  gap: 18px;
`;
const PopularTag = styled.div`
  width: 312px;
  height: 194px;
  gap: 18px;
`;

const Footer = () => {
  return (
   <>
      <FooterStyled>
       <FooterMain>
       <CliconEcomerce>hello world</CliconEcomerce>
       <TopCategory>hello world</TopCategory>
      <QuickLinks>hello world</QuickLinks>
    <QuickLinks1>hello world</QuickLinks1>
        <PopularTag>hello world</PopularTag>
       </FooterMain>
    <FooterCopyWrite>hello world</FooterCopyWrite>
    </FooterStyled>
    </>
   
  );
};

export default Footer;

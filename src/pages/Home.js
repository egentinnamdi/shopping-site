import Layout from "../InerUI/Layout";

import Navbar from "../features/Navbar";

import CategorySearchBarUI from "../ui/CategorySearchBarUI";

import Header from "../ui/Header";

import Main from "../ui/main/Main";

function Landing() {
  return (
    <>
      <Header />
      <Main />
      <CategorySearchBarUI/>
      <Layout/>
      <Navbar />
    </>
  );
}

export default Landing;

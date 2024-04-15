import CategoryList from "../features/CategoryList";
import Navbar from "../features/Navbar";
import Apparel from "../ui/Apparel";
import Header from "../ui/Header";
import List from "../ui/List";
import Offers from "../ui/Offers";

function Landing() {
  return (
    <>
      <Header />
      <Offers />
      <CategoryList />
      <Apparel />
      <Navbar />
      <List />
    </>
  );
}

export default Landing;

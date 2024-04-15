import CategoryList from "../features/CategoryList";
import List from "./List";
import ListItem from "./ListItem";
import Offers from "./Offers";
import SubHeader from "./SubHeader";

function Main() {
  return (
    <>
      <Offers />
      <CategoryList />
      <SubHeader
        text="apparel under 10k"
        icon="shopping-cart"
        bgColor="var(--secondary-color)"
        txtColor="var(--primary-color)"
      />
      <List>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </List>
      <SubHeader
        text="home"
        icon="add"
        bgColor="var(--primary-color)"
        txtColor="var(--white)"
      />
      <List>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </List>
    </>
  );
}

export default Main;

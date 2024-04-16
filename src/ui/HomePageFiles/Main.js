import CategoryList from "../../features/CategoryList";
import List from "./List";
import ListItem from "./ListItem";
import Offers from "../Offers";
import SubHeader from "../SubHeader";

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
        <ListItem text="men" />
        <ListItem text="women" />
        <ListItem text="girls" />
        <ListItem text="boys" />
      </List>
      <SubHeader
        text="home"
        icon="add"
        bgColor="var(--primary-color)"
        txtColor="var(--white)"
      />
      <List>
        <ListItem text="men" />
        <ListItem text="women" />
        <ListItem text="girls" />
        <ListItem text="boys" />
      </List>
    </>
  );
}

export default Main;

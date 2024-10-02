import CategoryList from "../../features/CategoryList";
import List from "../HomePageFiles/List";

import Offers from "../HomePageFiles/Offers";
import SubHeader from "../HomePageFiles/SubHeader";
import {
  ListBestdeal1,
  ListBestdeal2,
  ListBestdeal3,
  ListBoys,
  ListBoys1,
  ListConsole,
  ListElectronics1,
  ListElectronics2,
  ListEnergy1,
  ListEnergy2,
  ListGames,
  ListGirls,
  ListGirls1,
  ListHomeDecor,
  ListKitchen,
  ListLivingRoom,
  ListMen,
  ListMen1,
  ListPC,
  ListPortable,
  ListPremium,
  ListPremium1,
  ListPremium2,
  ListSmartHome,
  ListWomen,
  ListWomen1,
} from "./MainImports";
function Main() {
  return (
    <>
      <Offers />
      <CategoryList />
      {/* apparel under 10k */}
      <SubHeader
        text="apparel under 10k"
        icon="shopping-cart"
        bgColor="var(--secondary-color)"
        txtColor="var(--primary-color)"
      />
      <List>
        <ListMen />
        <ListWomen />
        <ListGirls />
        <ListBoys />
      </List>
      {/* home */}
      <SubHeader
        text="home"
        icon="add"
        bgColor="var(--primary-color)"
        txtColor="var(--white)"
      />
      <List>
        <ListKitchen />
        <ListSmartHome />
        <ListLivingRoom />
        <ListHomeDecor />
      </List>

      {/* Premium Brands */}
      <SubHeader
        text="Premium Brands"
        icon="add"
        bgColor="var(--primary-color)"
        txtColor="var(--white)"
      />
      <List>
        <ListPremium />
        <ListPremium1 />
        <ListPremium2 />
      </List>
      {/* Shoes under 20k */}
      <SubHeader
        text="Shoes under 20k"
        icon="add"
        bgColor="var(--primary-color)"
        txtColor="var(--white)"
      />
      <List>
        <ListWomen1 />
        <ListMen1 />
        <ListBoys1 />
        <ListGirls1 />
      </List>

      {/*gaming */}
      <SubHeader
        text="Gaming"
        icon="add"
        bgColor="var(--primary-color)"
        txtColor="var(--white)"
      />
      <List>
        <ListConsole />
        <ListPC />
        <ListPortable />
        <ListGames />
      </List>

      {/*best deals  */}

      <SubHeader
        text="Best Deals"
        icon="add"
        bgColor="var(--primary-color)"
        txtColor="var(--white)"
      />
      <List>
        <ListBestdeal1 />
        <ListBestdeal2 />
        <ListBestdeal3 />
      </List>

      {/* Phones and Accessories  */}

      <SubHeader
        text="Phones and Accessories"
        icon="add"
        bgColor="var(--primary-color)"
        txtColor="var(--white)"
      />
      <List>
        <ListBestdeal1 />
        <ListBestdeal2 />
        <ListBestdeal3 />
      </List>

      {/* Energy  */}

      <SubHeader
        text="Energy"
        icon="add"
        bgColor="var(--primary-color)"
        txtColor="var(--white)"
      />
      <List>
        <ListEnergy1 />
        <ListEnergy2 />
      </List>
      {/*Electronics */}
      <SubHeader
        text="Electronics"
        icon="add"
        bgColor="var(--primary-color)"
        txtColor="var(--white)"
      />
      <List>
        <ListElectronics1 />
        <ListElectronics2 />
      </List>
    </>
  );
}

export default Main;

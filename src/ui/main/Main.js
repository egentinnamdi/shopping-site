import CategoryList from "../../features/CategoryList";
import List from "../List";
// Apparel under 10k
import ListMen from "../ListItemsApparel/ListMen";
import ListWomen from "../ListItemsApparel/ListWomen";
import ListGirls from "../ListItemsApparel/ListGirls";
import ListBoys from "../ListItemsApparel/ListBoys";
// home
import ListKitchen from "../ListItemsHome/ListKitchen";
import ListSmartHome from "../ListItemsHome/ListSmartHome"
import ListLivingRoom from "../ListItemsHome/ListLivingRoom";
import ListHomeDecor from "../ListItemsHome/ListHomeDecor";
//gaming
import ListConsole from "../ListItemsGaming/ListConsole";
import ListPC from "../ListItemsGaming/ListPC";
import ListPortable from "../ListItemsGaming/ListPortable";
import ListGames from "../ListItemsGaming/ListGames";
//electronics
import ListElectronics1 from "../ListElectronics/ListElectronics1";
import ListElectronics2 from "../ListElectronics/ListElectronics2";
//premium
import ListPremium from "../ListItemsPremium/ListPremium";
import ListPremium1 from "../ListItemsPremium/ListPremium1";
import ListPremium2 from "../ListItemsPremium/ListPremium2";
// best deals 
import ListBestdeal1 from "../ListItemsBestDeals/ListBestDeals1";
import ListBestdeal2 from "../ListItemsBestDeals/ListBestDeals2";
import ListBestdeal3 from "../ListItemsBestDeals/ListBestDeals3";
//energy 
import ListEnergy1 from "../ListItemsEnergy/ListEnergy1";
import ListEnergy2 from "../ListItemsEnergy/ListEnergy2";

 

import Offers from "../Offers";
import SubHeader from "../SubHeader";

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
        <ListPremium/>
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
        <ListWomen />
        <ListMen />
        <ListBoys />
        <ListGirls />
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

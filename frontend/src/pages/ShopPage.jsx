import { Fragment } from "react";
import Categories from "../components/Categories/Categories";
import Products from "../components/Products/Products";
import CampaignSingle from "../components/CampaignSingle/CampaignSingle";


const ShopPage = () => {
  return (
    <Fragment>
      <Categories />
      <Products categoryId="6800d7941bc37ffc8c41013e" />
      <CampaignSingle />
      <Products categoryId="6800d7831bc37ffc8c41013c" />
    </Fragment>
  );
};

export default ShopPage;
import React from "react";
import Sliders from "../components/Slider/Sliders";
import Categories from "../components/Categories/Categories";
import Products from "../components/Products/Products";
import Campaigns from "../components/Campaigns/Campaigns";
import Blogs from "../components/Blogs/Blogs";
import CampaignSingle from "../components/CampaignSingle/CampaignSingle";

const HomePage = () => {
  return (
    <React.Fragment>
      <Sliders />
      <Categories />
      <Products categoryId="67fe4bee9c84a04184b002d1" />
      <Campaigns />
      <Products categoryId="67fe4bee9c84a04184b002d1" />
      <Blogs />
      <CampaignSingle />
    </React.Fragment>
  );
};

export default HomePage;

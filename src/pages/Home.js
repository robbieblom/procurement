import React from "react";
import { Business } from "../components/Business/Business";
import { Inventory } from "../components/Inventory/Inventory";
import { Market } from "../components/Market/Market";
// import { useController } from "../context/Controller";
import { appStore } from "../stores/AppStore";
import { HomePageLayout } from "./layout/HomePageLayout";

export const Home = () => {
  // controller.createBusiness("Acme Innovations", 500);
  // const controller = useController();
  const business = appStore((state) => state.business);

  return (
    <>
      <HomePageLayout
        businessSection={
          <>
            <Business business={business} />
          </>
        }
        inventorySection={
          <>
            <Inventory />
          </>
        }
        marketSection={
          <>
            <Market />
          </>
        }
      />
    </>
  );
};

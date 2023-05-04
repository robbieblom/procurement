import { Button } from "@mui/material";
import React from "react";
import { Business } from "../components/Business";
import { Inventory } from "../components/Inventory";
import { Layout } from "../components/Layout";
import { Market } from "../components/Market";
import { useController } from "../context/Controller";
import { appStore } from "../stores/AppStore";

export const Home = () => {
  const controller = useController();
  const business = appStore((state) => state.business);
  console.log("rb", business);
  return (
    <>
      <Button
        onClick={() => {
          controller.createBusiness("Acme Innovations", 500);
        }}
      >
        Test
      </Button>
      <p>{business}</p>
      <Layout></Layout>
      <Business></Business>
      <Inventory></Inventory>
      <Market></Market>
    </>
  );
};

import React from "react";
import { Tile } from "../common/Tile";
import { InventoryDetail } from "./InventoryDetail";
import { InventoryHeader } from "./InventoryHeader";

export const InventoryTile = ({ inventory }) => {
  return (
    <Tile
      header={<InventoryHeader />}
      detail={<InventoryDetail items={inventory.items} />}
    />
  );
};

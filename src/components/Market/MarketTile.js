import React from "react";
import { Tile } from "../common/Tile";
import { MarketDetail } from "./MarketDetail";
import { MarketHeader } from "./MarketHeader";
import { MarketSubheader } from "./MarketSubheader";

export const MarketTile = ({ market }) => {
  return (
    <Tile
      header={<MarketHeader />}
      subheader={<MarketSubheader />}
      detail={<MarketDetail items={market.items} />}
    />
  );
};

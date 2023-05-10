import React from "react";
import { Tile } from "../common/Tile";
import { BusinessDetail } from "./BusinessDetail";
import { BusinessHeader } from "./BusinessHeader";
import { BusinessSubheader } from "./BusinessSubheader";

export const BusinessTile = ({ business }) => {
  return (
    <Tile
      header={
        <BusinessHeader
          businessName={business.name}
          netWorth={business.metrics.netWorth}
        />
      }
      subheader={
        <BusinessSubheader
          moneyAmount={business.moneyAmount}
          margin={business.metrics.margin}
        />
      }
      detail={
        <BusinessDetail
          volumeSold={business.metrics.volumeSold}
          numberSold={business.metrics.numberSold}
          avgSalePrice={business.metrics.avgSalePrice}
          volumePurchased={business.metrics.volumePurchased}
          numberPurchased={business.metrics.numberPurchased}
          avgPurchasePrice={business.metrics.avgPurchasePrice}
        />
      }
    />
  );
};

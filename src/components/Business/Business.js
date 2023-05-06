import React from "react";
import { BusinessDetail } from "./BusinessDetail";
import { BusinessHeader } from "./BusinessHeader";
import { BusinessLayout } from "./BusinessLayout";
import { BusinessSubheader } from "./BusinessSubheader";

export const Business = ({ business }) => {
  // const controller = useController();
  // const netWorth = controller.getNetWorth();
  const netWorth = 500;

  // const margin = controller.calculateMargin();
  const margin = 30;

  // const volumeSold = controller.getVolumeSold();
  const volumeSold = 400;

  // const numberSold = controller.getNumberSold();
  const numberSold = 5;

  const avgSalePrice = volumeSold / numberSold;

  // const volumePurchased = controller.getVolumePurchased();
  const volumePurchased = 4;

  // const numberPurchased = controller.getNumberPurchased();
  const numberPurchased = 7;

  const avgPurchasePrice = volumePurchased / numberPurchased;

  return (
    <BusinessLayout
      businessHeader={
        <BusinessHeader businessName={business.name} netWorth={netWorth} />
      }
      businessSubheader={
        <BusinessSubheader moneyAmount={business.moneyAmount} margin={margin} />
      }
      businessDetail={
        <BusinessDetail
          volumeSold={volumeSold}
          numberSold={numberSold}
          avgSalePrice={avgSalePrice}
          volumePurchased={volumePurchased}
          numberPurchased={numberPurchased}
          avgPurchasePrice={avgPurchasePrice}
        />
      }
    />
  );
};

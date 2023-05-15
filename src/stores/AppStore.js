import { create } from "zustand";
import { mockBusiness1 } from "../mocks/business";

export const appStore = create((set, get) => ({
  mode: "dark",
  setMode: (m) => {
    set({ mode: m });
  },
  getButtonVariant: () => (get().mode == "dark" ? "outlined" : "contained"),
  getGridThemeName: () =>
    get().mode == "dark" ? "ag-theme-balham-dark" : "ag-theme-balham",
  marketBackdropOpen: false,
  setMarketBackdropOpen: (o) => {
    set({ marketBackdropOpen: o });
  },
  marketBackdropText: "",
  setMarketBackdropText: (t) => {
    set({ marketBackdropText: t });
  },
  liquidateBackdropOpen: false,
  setLiquidateBackdropOpen: (o) => {
    set({ liquidateBackdropOpen: o });
  },
  business: mockBusiness1,
  setBusiness: (b) => {
    set({ business: b });
  },
}));

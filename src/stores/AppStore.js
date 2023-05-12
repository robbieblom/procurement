import { create } from "zustand";
import { mockBusiness1 } from "../mocks/business";

export const appStore = create((set, get) => ({
  mode: "light",
  setMode: (m) => {
    set({ mode: m });
  },
  getButtonVariant: () => (get().mode == "dark" ? "outlined" : "contained"),
  getGridThemeName: () =>
    get().mode == "dark" ? "ag-theme-balham-dark" : "ag-theme-balham",
  business: mockBusiness1,
  setBusiness: (b) => {
    set({ business: b });
  },
}));

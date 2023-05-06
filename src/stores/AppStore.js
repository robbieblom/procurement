import { create } from "zustand";
import { mockBusiness1 } from "../mocks/business";

export const appStore = create((set) => ({
  business: mockBusiness1,
  setBusiness: (b) => {
    set({ business: b });
  },
}));

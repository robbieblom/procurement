import { create } from "zustand";

export const appStore = create((set) => ({
  business: "empty",
  setBusiness: (b) => {
    set({ business: b });
  },
}));

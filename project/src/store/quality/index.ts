import { create } from "zustand";

const visibleQualityModal = create((set) => ({
  currentVisibleQualityModal: false,
  currentQuality: [],
  openVisibleQualityModal: (action: any) => {
    set(() => ({ currentQuality: action }));
    set(() => ({ currentVisibleQualityModal: true }));
  },
  closeVisibleQualityModal: () =>
    set(() => ({ currentVisibleQualityModal: false })),
}));

export const useQualityStore = {
  visibleQualityModal,
};

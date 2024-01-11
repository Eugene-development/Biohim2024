import { create } from "zustand";

const visibleQualityModal = create((set) => ({
  currentVisibleQualityModal: false,
  currentQuality: null,
  openVisibleQualityModal: (qualityList: any) => {
    set(() => ({ currentQuality: qualityList }));
    set(() => ({ currentVisibleQualityModal: true }));
  },
  closeVisibleQualityModal: () =>
    set(() => ({ currentVisibleQualityModal: false })),
}));

export const useQualityStore = {
  visibleQualityModal,
};

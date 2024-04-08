import { create } from 'zustand'
import Vessel from '@/interfaces/vessel.interface';
import { devtools, persist } from 'zustand/middleware'

interface VesselStoreState {
  vessel: Vessel
  setVessel: (payload: Vessel) => void;
  removeVessel: () => void;
}

const initialState: Vessel = {
  shipId: "",
  shippingCompanyName: "",
  carrierVessel: "",
  vesselComponent: ""
};

const useVesselStore = create<VesselStoreState>()(
  devtools(
    persist(
      (set) => ({
        vessel: initialState,
        setVessel: (payload: Vessel) => set((state: any) => ({ ...state, vessel: payload })),
        removeVessel: () => set({ vessel: initialState }),
      }),
      { name: 'vesselStore' },
    ),
  ),
)

export default useVesselStore;
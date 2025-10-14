import { create } from "zustand";

interface State {
  selectedSport: string;
  updateSelectedSport: (selectedLeague: string) => void;
}

export const useSelectedSport = create<State>((set) => ({
  selectedSport: "",
  updateSelectedSport: (selectedSport: string) =>
    set(() => ({ selectedSport })),
}));

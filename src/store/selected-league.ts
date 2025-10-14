import { create } from "zustand";

interface State {
  selectedLeague: string;
  updateSelectedLeague: (selectedLeague: string) => void;
}

export const useSelectedLeague = create<State>((set) => ({
  selectedLeague: "",
  updateSelectedLeague: (selectedLeague: string) =>
    set(() => ({ selectedLeague })),
}));

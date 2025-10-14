import { create } from "zustand";

interface State {
  leagueId: string;
  updateLeagueId: (leagueId: string) => void;
}

export const useLeagueId = create<State>((set) => ({
  leagueId: "",
  updateLeagueId: (leagueId: string) => set(() => ({ leagueId })),
}));

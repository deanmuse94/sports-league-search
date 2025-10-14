import type { FuseResult } from "fuse.js";
import { create } from "zustand";
import type { League } from "../types/league";

interface State {
  searchResults: FuseResult<League>[];
  updateSearchResults: (searchResults: FuseResult<League>[]) => void;
}

export const useSearchResults = create<State>((set) => ({
  searchResults: [],
  updateSearchResults: (searchResults: FuseResult<League>[]) =>
    set(() => ({ searchResults })),
}));

import { useRef } from "react";
import { useSearchResults } from "../store/search";
import { useSelectedSport } from "../store/sport-selection";
import type { League } from "../types/league";
import Fuse, { type IFuseOptions } from "fuse.js";

export default function LeagueFilters({
  leagues,
}: {
  leagues: League[] | undefined;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  const { updateSearchResults } = useSearchResults((state) => state);

  const { selectedSport, updateSelectedSport } = useSelectedSport(
    (state) => state
  );
  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    updateSearchResults([]);
    updateSelectedSport(event.target.value);
  };

  const searchOptions: IFuseOptions<League> = {
    distance: 10,
    keys: ["strLeague"],
  };

  const fuse = new Fuse(leagues as League[], searchOptions);

  const handleSearch = (searchTerm: string) => {
    const results = fuse.search(searchTerm);
    updateSearchResults(results);
  };

  return (
    <div className="flex justify-center mb-14 gap-4">
      <input
        ref={inputRef}
        type="search"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleSearch(e.target.value)
        }
        placeholder="Search leagues"
        className="rounded-lg border border-gray-600 p-2 w-[342px] h-[40px] focus:border-green-600"
      />
      <select
        value={selectedSport}
        onChange={handleSelect}
        className="border border-gray-600 rounded-lg p-2 w-[242px] h-[40px] cursor-pointer"
      >
        <option value="">All sports</option>
        {leagues &&
          leagues.map((league) => (
            <option key={league.idLeague} value={league.strSport}>
              {league.strSport}
            </option>
          ))}
      </select>
    </div>
  );
}

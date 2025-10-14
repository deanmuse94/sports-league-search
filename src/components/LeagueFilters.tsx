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
  const sports = [...new Set(leagues?.map((league) => league.strSport))];

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
    <div className="flex justify-center mb-14 max-w-[95%] m-auto gap-4 max-[792px]:flex-col">
      <input
        ref={inputRef}
        type="search"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleSearch(e.target.value)
        }
        placeholder="Search leagues"
        className="rounded-lg border border-gray-600 p-2 w-[342px] h-[40px] focus:border-green-600 max-[792px]:w-full"
      />
      <select
        value={selectedSport}
        onChange={handleSelect}
        className="border border-gray-600 rounded-lg p-2 w-[242px] h-[40px] cursor-pointer max-[792px]:w-full"
      >
        <option value="">All sports</option>
        {sports &&
          sports.map((sport) => (
            <option key={sport} value={sport}>
              {sport}
            </option>
          ))}
      </select>
    </div>
  );
}

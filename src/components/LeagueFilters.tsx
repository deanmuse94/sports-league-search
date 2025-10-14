import { useSelectedLeague } from "../store/selected-league";
import type { League } from "../types/league";

export default function LeagueFilters({
  leagues,
}: {
  leagues: League[] | undefined;
}) {
  const { selectedLeague, updateSelectedLeague } = useSelectedLeague(
    (state) => state
  );
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    updateSelectedLeague(event.target.value);
  };

  return (
    <div className="flex justify-center mb-14 gap-4">
      <div>
        <input
          type="search"
          placeholder="Search leagues"
          className="rounded-lg border border-gray-600 p-2 w-[342px] h-[40px] focus:border-green-600"
        />
      </div>
      <div>
        <select
          value={selectedLeague}
          onChange={handleChange}
          className="border border-gray-600 rounded-lg p-2 w-[242px] h-[40px]"
        >
          <option value="">All Leagues</option>
          {leagues &&
            leagues.map((league) => (
              <option key={league.idLeague} value={league.strLeague}>
                {league.strLeague}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
}

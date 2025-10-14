import type { League } from "../types/league";
import { useSelectedSport } from "../store/sport-selection";
import LeagueLoader from "./LeagueLoader";
import { useSearchResults } from "../store/search";
import SearchResults from "./SearchResults";
import { useLeagueId } from "../store/league-id";

export default function LeagueData({
  leagues,
  loading,
  error,
}: {
  leagues: League[] | undefined;
  loading: boolean;
  error: unknown;
}) {
  const { selectedSport } = useSelectedSport((state) => state);
  const { searchResults } = useSearchResults((state) => state);
  const { updateLeagueId } = useLeagueId((state) => state);

  const retry = () => {
    window.location.reload();
  };

  if (loading) return <LeagueLoader />;

  if (error) {
    return (
      <div className="flex flex-col items-center gap-5">
        <p className="text-center font-bold">
          Something went wrong, please try again
        </p>
        <button
          onClick={retry}
          className="border border-gray-600 w-[120px] py-2 rounded-lg cursor-pointer"
        >
          Retry
        </button>
      </div>
    );
  }

  if (searchResults && searchResults.length > 0) {
    return <SearchResults results={searchResults} />;
  }

  return (
    <div className="w-[1240px] max-w-[95%] m-auto grid grid-cols-3 gap-5 max-[1175px]:grid-cols-2 max-[792px]:grid-cols-1">
      {leagues &&
        leagues.map((league) => {
          if (selectedSport && selectedSport !== league.strSport) {
            return null;
          }
          return (
            <div
              key={league.idLeague}
              onClick={() => updateLeagueId(league.idLeague)}
              className="border border-gray-600 h-[180px] rounded-lg p-4 flex flex-col justify-between cursor-pointer hover:bg-slate-950"
            >
              <div className="flex justify-between">
                <div className="leading-normal font-bold">
                  {league.strLeague}
                </div>
                <div className="px-3 py-0.5 rounded-full bg-green-700 text-[12px] font-bold">
                  {league.strSport}
                </div>
              </div>
              {league.strLeagueAlternate && (
                <div>
                  <div className="w-full h-[1px] bg-gray-600 mb-2"></div>
                  <div className="text-gray-400">
                    {league.strLeagueAlternate}
                  </div>
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
}

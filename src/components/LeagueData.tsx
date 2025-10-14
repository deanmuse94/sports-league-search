import type { League } from "../types/league";
import { useSelectedLeague } from "../store/selected-league";
import LeagueLoader from "./LeagueLoader";

export default function LeagueData({
  leagues,
  loading,
  error,
}: {
  leagues: League[] | undefined;
  loading: boolean;
  error: unknown;
}) {
  const { selectedLeague } = useSelectedLeague((state) => state);

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

  return (
    <div className="w-[1240px] m-auto grid grid-cols-3 gap-5">
      {leagues &&
        leagues.map((league) => {
          if (selectedLeague && selectedLeague !== league.strLeague) {
            return null;
          }
          return (
            <div
              key={league.idLeague}
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

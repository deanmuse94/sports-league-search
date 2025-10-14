import type { FuseResult } from "fuse.js";
import type { League } from "../types/league";
import { useLeagueId } from "../store/league-id";

export default function SearchResults({
  results,
}: {
  results: FuseResult<League>[];
}) {
  const { updateLeagueId } = useLeagueId((state) => state);

  return (
    <div className="w-[1240px] max-w-[95%] m-auto grid grid-cols-3 gap-5 max-[1175px]:grid-cols-2 max-[792px]:grid-cols-1">
      {results &&
        results.map((league) => {
          return (
            <div
              key={league.refIndex}
              onClick={() => updateLeagueId(league.item?.idLeague)}
              className="border border-gray-600 h-[180px] rounded-lg p-4 flex flex-col justify-between cursor-pointer hover:bg-slate-950"
            >
              <div className="flex justify-between">
                <div className="leading-normal font-bold">
                  {league.item?.strLeague}
                </div>
                <div className="px-3 py-0.5 rounded-full bg-green-700 text-[12px] font-bold">
                  {league.item?.strSport}
                </div>
              </div>
              {league.item?.strLeagueAlternate && (
                <div>
                  <div className="w-full h-[1px] bg-gray-600 mb-2"></div>
                  <div className="text-gray-400">
                    {league.item.strLeagueAlternate}
                  </div>
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
}

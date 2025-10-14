import useSWR from "swr";
import type { Season } from "../types/season-badge";
import { useLeagueId } from "../store/league-id";

export default function SeasonBadge({ leagueId }: { leagueId: string }) {
  const { updateLeagueId } = useLeagueId((state) => state);

  const { data, isLoading } = useSWR<{ seasons: Season[] }>(
    leagueId && {
      path: `/search_all_seasons.php?badge=1&id=${leagueId}`,
    }
  );

  if (isLoading) return null;

  const imageUrl = data?.seasons && data.seasons[0].strBadge;

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen bg-black/75 flex justify-center items-center ${
        leagueId ? "z-10 opacity-100" : "-z-10 opacity-0"
      }`}
    >
      {!isLoading && !imageUrl ? (
        <div className="flex flex-col items-center">
          <p className="text-white text-2xl font-bold mb-5">
            Season badge not found
          </p>
          <button
            onClick={() => updateLeagueId("")}
            className="rounded-full py-2 bg-white text-black cursor-pointer w-[90px]"
          >
            Close
          </button>
        </div>
      ) : (
        <div className="px-10 rounded-xl relative">
          <button
            onClick={() => updateLeagueId("")}
            className="rounded-full py-2 px-6 bg-white text-black absolute top-2 -right-5 cursor-pointer"
          >
            Close
          </button>
          <img src={imageUrl} alt="season badge" width={250} />
        </div>
      )}
    </div>
  );
}

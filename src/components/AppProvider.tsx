import useSWR from "swr";
import LeagueFilters from "./LeagueFilters";
import LeagueData from "./LeagueData";
import type { League } from "../types/league";
import React from "react";
import { useLeagueId } from "../store/league-id";

const SeasonBadge = React.lazy(() => import("./SeasonBadge"));

export default function AppProvider() {
  const { leagueId } = useLeagueId((state) => state);

  const { data, isLoading, error } = useSWR<{ leagues: League[] }>({
    path: "/all_leagues.php",
  });

  const leagues = data?.leagues;

  return (
    <div className="relative">
      <LeagueFilters leagues={leagues} />
      <LeagueData leagues={leagues} loading={isLoading} error={error} />
      {leagueId && <SeasonBadge leagueId={leagueId} />}
    </div>
  );
}

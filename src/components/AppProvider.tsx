import useSWR from "swr";
import LeagueFilters from "./LeagueFilters";
import LeagueData from "./LeagueData";
import type { League } from "../types/league";

export default function AppProvider() {
  const { data, isLoading, error } = useSWR<{ leagues: League[] }>({
    path: "/all_leagues.php",
  });

  const leagues = data?.leagues;

  return (
    <>
      <LeagueFilters leagues={leagues} />
      <LeagueData leagues={leagues} loading={isLoading} error={error} />
    </>
  );
}

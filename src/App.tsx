import { SWRConfig } from "swr";
import "./App.css";
import { fetcher } from "./lib/fetcher";
import AppProvider from "./components/AppProvider";

function App() {
  return (
    <SWRConfig
      value={{
        // dedupingInterval: 0,
        revalidateOnFocus: false,
        fetcher,
      }}
    >
      <h1 className="text-center mb-10">Sports Leagues</h1>
      <AppProvider />
    </SWRConfig>
  );
}

export default App;

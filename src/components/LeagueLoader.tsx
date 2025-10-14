export default function LeagueLoader() {
  return (
    <div className="w-[1240px] m-auto grid grid-cols-3 gap-5">
      {Array.from({ length: 12 }).map((placeholder, index) => {
        return (
          <div key={index} className="bg-slate-950 h-[180px] rounded-lg"></div>
        );
      })}
    </div>
  );
}

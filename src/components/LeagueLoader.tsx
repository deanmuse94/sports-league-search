export default function LeagueLoader() {
  return (
    <div className="w-[1240px] max-w-[95%] m-auto grid grid-cols-3 gap-5 max-[1175px]:grid-cols-2 max-[792px]:grid-cols-1">
      {Array.from({ length: 12 }).map((_placeholder, index) => {
        return (
          <div key={index} className="bg-slate-950 h-[180px] rounded-lg"></div>
        );
      })}
    </div>
  );
}

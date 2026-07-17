export default function Badge({
  day,
  month,
}: {
  day: string;
  month: string;
}) {
  return (
    <div className="absolute top-3 left-3 flex flex-col items-center rounded-lg bg-black/70 px-3 py-1.5 text-center">
      <span className="text-xl font-black leading-none text-white">{day}</span>
      <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-300">
        {month}
      </span>
    </div>
  );
}

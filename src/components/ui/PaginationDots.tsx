export default function PaginationDots({
  total,
  active,
}: {
  total: number;
  active: number;
}) {
  return (
    <div className="flex justify-center gap-2 mt-4">
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className={`h-2 w-2 rounded-full transition-colors ${
            i === active ? "bg-[#ff6a00]" : "bg-gray-600"
          }`}
        />
      ))}
    </div>
  );
}

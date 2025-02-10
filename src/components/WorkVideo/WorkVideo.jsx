export default function WorkVideo({
  src,
  cols,
  alt = "",
  cn = "",
  aspect = "none",
}) {
  return (
    <div
      className={`col-span-full md:col-span-${cols} ${
        cols != "full" && aspect != "none" ? `aspect-${aspect}` : `h-fit`
      } ${cn}`}
    >
      <video className="w-full h-full object-cover" autoPlay muted loop>
        <source src={src} />
      </video>
    </div>
  );
}

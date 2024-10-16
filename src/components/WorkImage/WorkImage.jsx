export default function WorkImage({
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
      <img className="w-full h-full object-cover" src={src} alt={alt} />
    </div>
  );
}

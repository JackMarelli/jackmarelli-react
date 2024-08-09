export default function WorkImage({src, cols, alt="", cn}) {
  return (
    <div className={`col-span-full md:col-span-${cols} aspect-video ${cn}`}>
      <img className="w-full h-full object-cover" src={src} alt={alt} />
    </div>
  );
}

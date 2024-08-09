export default function GridLayout({ title, desc, children, cn }) {
  return (
    <div className={`grid grid-cols-12 px-4 md:px-8 gap-4 lg:gap-8 ${cn}`}>
      <h1 className="col-span-full font-serif text-6xl md:text-9xl md:text-center mt-8 md:mt-16">{title}</h1>
      <h2 className="col-span-full md:text-center mb-4 md:mb-8">{desc}</h2>
      {children}
    </div>
  );
}

export default function ExtraSection({ children, title }) {
  return (
    <div className="col-span-full grid grid-cols-12 gap-x-4 md:gap-x-8 gap-y-0 border-t md:border-t-2 border-dark">
      <div className="col-span-6 md:col-span-6 py-1 md:py-1.5">{title}</div>
      <div className="col-span-6 md:col-span-6">{children}</div>
    </div>
  );
}

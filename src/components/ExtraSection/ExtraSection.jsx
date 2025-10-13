export default function ExtraSection({ children, title }) {
  return (
    <div className="col-span-full grid grid-cols-12 gap-x-4 md:gap-x-8 gap-y-0 border-t md:border-t-2 border-dark text-base/5 md:text-2xl">
      <div className="col-span-3 md:col-span-6 py-1 md:py-1.5">{title}</div>
      <div className="col-span-9 md:col-span-6">{children}</div>
    </div>
  );
}

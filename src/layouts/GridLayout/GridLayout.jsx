export default function GridLayout({ children, cn}) {
  return <div className={`grid grid-cols-12 px-4 md:px-8 gap-x-4 md:gap-x-8 ${cn}`}>{children}</div>;
}
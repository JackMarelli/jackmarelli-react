export default function GridLayout({ children, cn}) {
  return <div className={`grid grid-cols-12 px-4 md:px-8 gap-4 md:gap-8 ${cn}`}>{children}</div>;
}
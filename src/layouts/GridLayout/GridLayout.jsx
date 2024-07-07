export default function GridLayout({ children }) {
  return <div className="grid grid-cols-4 md:grid-cols-12 mx-8 gap-8">{children}</div>;
}
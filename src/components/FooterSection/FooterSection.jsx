export default function FooterSection({ title, children }) {
  return (
    <div className="col-span-2 md:col-span-3 flex flex-col justify-start items-start text-3xl">
      <h3>{title}</h3>
      <hr className="h-def bg-dark w-full my-3" />
      {children}
    </div>
  );
}

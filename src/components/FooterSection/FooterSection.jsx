export default function FooterSection({ title, children }) {
  return (
    <div className="col-span-6 md:col-span-3 flex flex-col justify-start items-start">
      <h3 className="h-fit">{title}</h3>
      <hr className="h-0.5 md:h-[3px] bg-dark w-full my-2 md:my-3" />
      {children}
    </div>
  );
}

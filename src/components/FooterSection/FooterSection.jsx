import SectionHeader from "../SectionHeader/SectionHeader";

export default function FooterSection({ title, children }) {
  return (
    <div className="col-span-6 md:col-span-3 flex flex-col justify-start items-start">
      <h2 className="mt-8">{title}</h2>
      <hr className="w-full h-0.5 md:h-[3px] bg-dark my-1" />
      {children}
    </div>
  );
}

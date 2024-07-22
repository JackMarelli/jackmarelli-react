export default function SectionHeader({content, hr = true}) {
  return (
    <div className="flex flex-col col-span-full w-full">
      <h2 className="w-full mt-24 md:mt-32 mb-2">{content}</h2>
      {hr && <hr className="hidden md:block w-full h-0.5 md:h-[3px] bg-dark mb-2" />}
    </div>
  );
}

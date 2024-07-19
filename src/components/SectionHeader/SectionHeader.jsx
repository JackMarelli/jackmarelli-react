export default function SectionHeader(hr = false) {
  return (
    <div className="flex flex-col col-span-full w-full">
      <h2 className="w-full mt-36 mb-2">Featured Works</h2>
      {hr && <hr className="w-full h-0.5 md:h-[3px] bg-dark mb-2" />}
    </div>
  );
}

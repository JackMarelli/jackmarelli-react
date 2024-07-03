export default function SectionHeader(hr = false) {
  return (
    <>
      <h2 className="col-span-full mt-36 mb-2">Featured Works</h2>
      {hr && <hr className="col-span-full h-def bg-dark mb-2" />}
    </>
  );
}

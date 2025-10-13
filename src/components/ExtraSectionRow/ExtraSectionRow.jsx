export default function ExtraSectionRow({ bt = true, content }) {
  return (
    <div
      className={`col-start-5 col-span-8 ${
        bt && "border-t md:border-t-2 border-dark"
      } grid grid-cols-8 py-1 md:py-1.5`}
    >
      <div className="col-span-8">{content}</div>
    </div>
  );
}

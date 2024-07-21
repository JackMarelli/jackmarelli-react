export default function ExtraSectionRow({ bt = true, content, detail }) {
  return (
    <div
      className={`col-start-5 col-span-8 ${
        bt && "border-t md:border-t-2 border-dark"
      } grid grid-cols-8 py-1 md:py-1.5`}
    >
      <div className="col-span-4">{content && content}</div>
      <div className="hidden md:block col-span-4">{detail && detail}</div>
    </div>
  );
}

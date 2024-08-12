export default function AboutParagraph({ number = "00", title, children }) {
  return (
    <>
      <span className="col-start-1 col-span-2 mt-16 md:mt-32">{number}</span>
      <h2 className="col-span-10 md:col-span-3 mt-16 md:mt-32 text-gray">
        {title}
      </h2>
      <p className="col-span-full md:col-span-6 mt-2 md:mt-32">{children}</p>
    </>
  );
}

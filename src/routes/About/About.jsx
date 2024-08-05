import BaseLayout from "../../layouts/BaseLayout/BaseLayout";
import GridLayout from "../../layouts/GridLayout/GridLayout";

export default function About() {
  return (
    <BaseLayout>
      <GridLayout>
        <h1 className="col-span-full font-serif text-5xl sm:text-7xl lg:text-9xl mt-32 indent-none sm:indent-32 lg:indent-96 hyphens-auto">Creating pixel perfect interfaces from design do deployment.</h1>
        <h2 className="col-span-full mt-4">(Go on and resize this window if you dare)</h2>
      </GridLayout>
    </BaseLayout>
  );
}

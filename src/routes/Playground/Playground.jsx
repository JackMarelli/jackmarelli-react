import { useState } from "react";
import BaseLayout from "../../layouts/BaseLayout/BaseLayout";
import GridLayout from "../../layouts/GridLayout/GridLayout";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import GridWork from "../../components/GridWork/GridWork";

export default function Playground() {
  const [viewType, setViewType] = useState("grid");

  return (
    <BaseLayout>
      <GridLayout>
        <SectionHeader content="Welcome to my Playground" />
        <p className="col-span-full indent-20 md:indent-36 font-serif text-3xl md:text-7xl mb-24">
          <span className="font-symbola text-3xl md:text-6xl leading-none">
            ✌
          </span>{" "}
          This is a dump of all the micro-projects I challenge myself with when
          I'm inspired, bored or trying to learn something.{" "}
          <span className="font-symbola text-3xl md:text-6xl leading-none">
            ✍
          </span>{" "}
          Every creative has one of these, private or public. Some of them are
          meant for desktop, the mobile experience could result a bit confusing.
        </p>
        <div className="col-span-full flex flex-col-reverse sm:flex-row justify-between items-start md:items-center mb-4 sm:mb-6 gap-4">
          <div className="flex flex-row gap-2 sm:gap-4">
            <span
              className={`cursor-pointer w-fit ${
                viewType === "list" && "text-gray"
              }`}
              onClick={() => setViewType("grid")}
            >
              Grid View
            </span>
            <span>/</span>
            <span
              className={`cursor-pointer w-fit ${
                viewType === "grid" && "text-gray"
              }`}
              onClick={() => setViewType("list")}
            >
              List View
            </span>
          </div>
          <span className="w  -fit h-fit self-end font-simbola tracking-none ">
            (⯎ Personal Favrourite)
          </span>
        </div>
        <GridWork
          cols={4}
          viewType={viewType}
          title="Pac-Mouse"
          image="assets/images/playground/pacmouse_thumb.jpg"
          link="/playgroundprojects/pacmouse/"
        />
        <GridWork
          cols={4}
          viewType={viewType}
          title="Nyan-Square"
          image="assets/images/playground/nyansquare_thumb.jpg"
          link="/playgroundprojects/nyansquare/"
          favourite={true}
        />
        <GridWork
          cols={4}
          viewType={viewType}
          title="Two Random Colors text"
          image="assets/images/playground/twocolors_thumb.jpg"
          link="/playgroundprojects/tworandomcolors/"
        />
        <GridWork
          cols={4}
          viewType={viewType}
          title="Text Rounder"
          image="assets/images/playground/textrounder_thumb.jpg"
          link="/playgroundprojects/textrounder/"
          favourite={true}
        />
        <GridWork
          cols={4}
          viewType={viewType}
          title="Detective Cursor"
          image="assets/images/playground/detective_cursor_thumb.jpg"
          link="/playgroundprojects/detectivecursor/"
          favourite={true}
        />
        <GridWork
          cols={4}
          viewType={viewType}
          title="Catch"
          image="assets/images/playground/slippy_text_thumb.jpg"
          link="/playgroundprojects/catch/"
        />
        <GridWork
          cols={4}
          viewType={viewType}
          title="Smooth horizontal scroll"
          image="assets/images/playground/handmade_horizontal_smooth_scroll_thumb.jpg"
          link="/playgroundprojects/horizontalsmoothscroll/"
        />
        <GridWork
          cols={4}
          viewType={viewType}
          title="CSS Radar"
          image="assets/images/playground/css_radar_thumb.jpg"
          link="/playgroundprojects/radar/"
          favourite={true}
        />
        <GridWork
          cols={4}
          viewType={viewType}
          title="Roller Text Animation"
          image="assets/images/playground/rolling_text_thumb.jpg"
          link="/playgroundprojects/roller/"
        />
        <GridWork
          cols={4}
          viewType={viewType}
          title="Pills Menu"
          image="assets/images/playground/pills_menu_thumb.jpg"
          link="/playgroundprojects/pillsmenu/"
        />
      </GridLayout>
    </BaseLayout>
  );
}

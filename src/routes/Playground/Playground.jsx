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
        <p className="col-span-full indent-32 font-serif text-7xl mb-24">
          <span className="font-symbola text-6xl leading-none">✌</span> This is
          a dump of all the micro-projects I challenge myself with when I'm
          inspired, bored or trying to learn something.{" "}
          <span className="font-symbola text-6xl leading-none">✍</span> Every
          creative has one of these, private or public.
        </p>
        <div className="col-span-full flex flex-row justify-between items-center mb-6">
          <div className="flex flex-row gap-4 ">
            <span
              className={`cursor-pointer ${viewType === "list" && "text-gray"}`}
              onClick={() => setViewType("grid")}
            >
              Grid View
            </span>
            <span>/</span>
            <span
              className={`cursor-pointer ${viewType === "grid" && "text-gray"}`}
              onClick={() => setViewType("list")}
            >
              List View
            </span>
          </div>
          <span className="w-fit h-fit text-3xl font-simbola leading-none tracking-none">
            (⯎ Personal Favrourite)
          </span>
        </div>
        <GridWork
          cols={4}
          viewType={viewType}
          title="Pac-Mouse"
          image="assets/images/playground/pacmouse_thumb.jpg"
          link="/playground/pac-mouse"
        />
        <GridWork
          cols={4}
          viewType={viewType}
          title="Nyan-Square"
          image="assets/images/playground/nyansquare_thumb.jpg"
          link="/playground/nyan-square"
          favourite={true}
        />
        <GridWork
          cols={4}
          viewType={viewType}
          title="Two Random Colors text"
          image="assets/images/playground/twocolors_thumb.jpg"
          link="/playground/two-random-colors-text"
        />
        <GridWork
          cols={4}
          viewType={viewType}
          title="Text Rounder"
          image="assets/images/playground/textrounder_thumb.jpg"
          link="/playground/text-rounder"
        />
        <GridWork
          cols={4}
          viewType={viewType}
          title="Linked Circles Snake"
          image="assets/images/playground/linked_circles_snake_thumb.jpg"
          link="/playground/linked-circles-snake"
        />
        <GridWork
          cols={4}
          viewType={viewType}
          title="Detective Cursor"
          image="assets/images/playground/detective_cursor_thumb.jpg"
          link="/playground/detective-cursor"
          favourite={true}
        />
        <GridWork
          cols={4}
          viewType={viewType}
          title="Slippy Text"
          image="assets/images/playground/slippy_text_thumb.jpg"
          link="/playground/slippy-text"
        />
        <GridWork
          cols={4}
          viewType={viewType}
          title="Handmade smooth horizontal scroll"
          image="assets/images/playground/handmade_horizontal_smooth_scroll_thumb.jpg"
          link="/playground/handmade-smooth-horizontal-scroll"
        />
        <GridWork
          cols={4}
          viewType={viewType}
          title="CSS Radar"
          image="assets/images/playground/css_radar_thumb.jpg"
          link="/playground/css-radar"
          favourite={true}
        />
        <GridWork
          cols={4}
          viewType={viewType}
          title="Rolling Animated Text"
          image="assets/images/playground/rolling_text_thumb.jpg"
          link="/playground/rolling-animated-text"
        />
        <GridWork
          cols={4}
          viewType={viewType}
          title="Pills Menu"
          image="assets/images/playground/pills_menu_thumb.jpg"
          link="/playground/pills-menu"
        />
      </GridLayout>
    </BaseLayout>
  );
}

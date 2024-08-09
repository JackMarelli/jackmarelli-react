import BaseLayout from "../../layouts/BaseLayout/BaseLayout";
import GridLayout from "../../layouts/GridLayout/GridLayout";
import GridWork from "../../components/GridWork/GridWork";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

export default function Work() {
  return (
    <BaseLayout>
      <GridLayout cn="items-end">
        <h1 className="col-span-full text-7xl lg:text-[16rem] font-serif mt-24 lg:mt-40">
          All projects
        </h1>
        <SectionHeader
          content={"⚞ Scroll to discorver ⚟"}
          hr={true}
          hideHrOnMobile={true}
        />
        <GridWork
          cols={6}
          image={`assets/images/work/uniq/uniq_thumb.png`}
          title={`Uniq Bar and Bistrot`}
          link="https://www.behance.net/gallery/169770509/UNIQ-Bar-Restourant-Identity-Concept"
        />
        <GridWork
          cols={3}
          video={`assets/videos/logo_spin.mp4`}
          title={`Jack Marelli`}
          link="https://pitch.com/public/a11bd9a9-6432-4e14-8989-5f6288e39d51/4cb5ad97-18fa-47b2-ae99-d8e90e164b47"
        />
        <GridWork
          cols={3}
          image={`assets/images/work/vev/vev_thumb.png`}
          title={`V&V Clean and Garden`}
          link="http://www.vev-cleangarden.it/"
          cn="self-start"
        />
        <GridWork
          start={4}
          cols={6}
          video={`assets/videos/misuraemme.mp4`}
          title={`Misuraemme Moodboard Creator`}
          link="https://www.misuraemme.it/en/materials/moodboard-creator"
        />
        <GridWork
          cols={3}
          image={`assets/images/work/regular/regular_thumb.png`}
          title={`Regular Magazine`}
          link="/work/regular"
        />
        <GridWork
          cols={3}
          image={`assets/images/work/sinapsi/propic_negative.png`}
          title={`Sinapsi`}
          link="/work/sinapsi"
        />
        <GridWork
          start={7}
          cols={3}
          image={`assets/images/work/musicmatcher/mm_thumb.webp`}
          title={`Music Matcher`}
          link="/work/musicmatcher"
        />
        <p className="col-start-1 col-span-full font-serif text-3xl md:text-7xl">
          If you wish to start a project with me in order to enhance your
          brand's identity and visibility, online and offline, drop a line to my
          mail or contact me throught any of my socials.
        </p>
      </GridLayout>
    </BaseLayout>
  );
}

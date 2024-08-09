import BaseLayout from "../../../layouts/BaseLayout/BaseLayout";
import WorkLayout from "../../../layouts/WorkLayout/WorkLayout";
import WorkImage from "../../../components/WorkImage/WorkImage";
import WorkParagraph from "../../../components/WorkParagraph/WorkParagraph";
import AnimatedLink from "../../../components/AnimatedLink/AnimatedLink";

export default function Regular() {
  return (
    <BaseLayout>
      <WorkLayout
        title="Regular Magazine"
        desc="Brand Identity and issue '0' creation for a typograpy focused fanzine."
      >
        <WorkImage cols="full" src="/assets/images/work/regular/4Reg.jpg" />
        <WorkParagraph>
          Regular is a "showcase focused typography magazine", a fanzine about
          great typography analized under technical and artistic aspects.
          Founded by{" "}
          <AnimatedLink
            to="https://www.maykeart.com/"
            content="Michele De Vita"
          />{" "}
          ⍈ and Jack Marelli (myself) in 2023, went throught many identity
          redesigns and adjustments.
        </WorkParagraph>
        <WorkImage
          cols="6"
          src="/assets/images/work/regular/regularCover2.png"
        />
        <WorkImage cols="6" src="/assets/images/work/regular/2Reg.jpg" />
        <WorkImage cols="full" src="/assets/images/work/regular/1Reg.jpg" />
        <WorkParagraph>
          "Regular ain't your typical typography magazine bossing you around
          with what fonts to use. Nah! Each month, we'll hook you up with the
          juiciest typo news, unveil the most mesmerizing font of the month, and
          drop some mind-blowing typographic tricks that'll leave you saying,
          'Whoa! So buckle up, typo explorers, 'cause Regular's about to rock
          your typophile world!"
        </WorkParagraph>
        <WorkImage cols="full" src="/assets/images/work/regular/3Reg.jpg" />
        <WorkImage cols="6" src="/assets/images/work/regular/5Reg.jpg" />
        <WorkImage cols="6" src="/assets/images/work/regular/7Reg.jpg" />
        <WorkImage cols="full" src="/assets/images/work/regular/8Reg.jpg" />
        <WorkParagraph>
          The first issue already exists in EPUB format, but it's not yet
          available for purchase. We are working throught a way cooler printed
          version that will involve controversial covers and material
          processing. Stay tuded on this one!
        </WorkParagraph>
        <WorkImage cols="full" src="/assets/images/work/regular/regularCover.jpg" />
        <WorkImage cols="full" src="/assets/images/work/regular/regularCoverVertical.png" />
      </WorkLayout>
    </BaseLayout>
  );
}

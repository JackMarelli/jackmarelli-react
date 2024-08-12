import BaseLayout from "../../../layouts/BaseLayout/BaseLayout";
import WorkLayout from "../../../layouts/WorkLayout/WorkLayout";
import WorkImage from "../../../components/WorkImage/WorkImage";
import WorkParagraph from "../../../components/WorkParagraph/WorkParagraph";
import AnimatedLink from "../../../components/AnimatedLink/AnimatedLink";

export default function MusicMatcher() {
  return (
    <BaseLayout>
      <WorkLayout
        title="Music Matcher"
        desc="UX/UI concept for a collective playlist creation app."
      >
        <WorkImage
          cols="full"
          src="/assets/images/work/musicmatcher/mm_cover.png"
        />
        <WorkParagraph>
          Music Matcher was born in early 2023 as a last minute idea for a
          school project, the first version was an offline quiz app that
          generated an exportable playlist merging the survey's answers and
          using Spotify API. <br />
          <br /> In late 2023 and early 2024, the project was brought back to
          life and enriched with a lot of new market research and interviews to
          enhance the user experience, the new app includes a lobby system so
          that multiple persons can answer questions about their musical mood at
          the same time.
        </WorkParagraph>
        <WorkImage cols="full" src="/assets/images/work/musicmatcher/2.jpeg" />
        <WorkImage cols="6" src="/assets/images/work/musicmatcher/4.jpeg" />
        <WorkImage cols="6" src="/assets/images/work/musicmatcher/1.jpeg" />
        <WorkParagraph>
          <AnimatedLink
            to="https://www.albyeah.com/"
            content="Albyeah"
          />{" "}
          ⍈ and myself also developed fresh new visual identity that would match
          with the purpose of the app. The new mood embraces a neo-brutalist
          core and makes the experience more playful and less boring.
          <br />
          <br />
          One cool new feature is in the last step of the survey, which
          implements a dating-app-like swiping mechanism that helps the
          algorithm to better understand what kind of tracks we are trying to
          find in the playlist
        </WorkParagraph>
        <WorkImage
          cols="full"
          src="/assets/images/work/musicmatcher/7.jpeg"
          cn="aspect-auto h-auto"
        />
        <WorkImage cols="full" src="/assets/images/work/musicmatcher/8.jpeg" />
      </WorkLayout>
    </BaseLayout>
  );
}

import WorkLayout from "../../../layouts/WorkLayout/WorkLayout";
import WorkImage from "../../../components/WorkImage/WorkImage";
import WorkParagraph from "../../../components/WorkParagraph/WorkParagraph";
import AnimatedLink from "../../../components/AnimatedLink/AnimatedLink";

export default function Regular() {
  return (
    <>
      <WorkLayout
        title="Riflessioni Programmate"
        desc="Interactive Installation for IED Milano   "
      >
        <WorkImage
          cols="full"
          src="/assets/images/work/riflessioniprogrammate/IMG-20250204-WA0003.jpg"
        />
        <WorkParagraph>
          Riflessioni Programmate (Automated Thoughts) is an interactive totem
          that uses AI to remuginate on its own answers, after an initial input
          from the user.
        </WorkParagraph>
        <WorkImage
          cols="6"
          src="/assets/images/work/riflessioniprogrammate/IMG-20250204-WA0002.jpg"
        />
        <WorkImage
          cols="6"
          src="/assets/images/work/riflessioniprogrammate/IMG-20250204-WA0010.jpg"
        />
        <WorkParagraph>
          The concept draws from the ancient greek definition of leisure, when
          free time was dedicated to studying. <br />
          <br /> The infinite iteration of answers as questions brings the
          machine to drift between the most diverse topics, always drawing a
          hint from the previous self-answer,
        </WorkParagraph>
        <WorkImage
          cols="full"
          src="/assets/images/work/riflessioniprogrammate/IMG-20250204-WA0005.jpg"
        />
        <WorkImage
          cols="6"
          src="/assets/images/work/riflessioniprogrammate/IMG-20250204-WA0011.jpg"
        />
        <WorkImage
          cols="6"
          src="/assets/images/work/riflessioniprogrammate/IMG-20250204-WA0012.jpg"
        />
        <WorkParagraph>
          The first and only user interaction happens throught a keyboard, the
          anwers get printed on a CRT monitor and a pepper ghost glass effect
          displays a sound reactive oscilloscope that mimics an hypothetical
          machine brain.
        </WorkParagraph>
        <WorkImage
          cols="full"
          src="/assets/images/work/riflessioniprogrammate/IMG-20250204-WA0007.jpg"
        />
      </WorkLayout>
    </>
  );
}

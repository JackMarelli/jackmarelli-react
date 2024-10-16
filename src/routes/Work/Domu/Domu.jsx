import BaseLayout from "../../../layouts/BaseLayout/BaseLayout";
import WorkLayout from "../../../layouts/WorkLayout/WorkLayout";
import WorkImage from "../../../components/WorkImage/WorkImage";
import WorkParagraph from "../../../components/WorkParagraph/WorkParagraph";

export default function Domu() {
  return (
    <BaseLayout>
      <WorkLayout
        title="Domu"
        desc="Front-end desig and development for a condo management app and website"
      >
        <WorkImage
          cols="full"
          src="/assets/images/work/domu/domuCover2.png"
          aspect="square"
        />
        <WorkImage
          cols="6"
          src="/assets/images/work/domu/domu4.png"
          aspect="none"
        />
        <WorkImage cols="6" src="/assets/images/work/domu/domu3.png" />
        <WorkParagraph>
          Domu is a modern, all-in-one platform designed to simplify condominium
          living. Developed by a team of three full-stack developers, including
          myself, Domu seamlessly integrates essential features to enhance
          residential management.
          <br />
          <br />
          From effortless rent payments to organizing community activities,
          managing complaints, and tracking deliveries, Domu is crafted for
          convenience.
        </WorkParagraph>
        <WorkImage
          cols="full"
          src="/assets/images/work/domu/branding_post.jpg"
        />
        <WorkImage cols="full" src="/assets/images/work/domu/domu2.png" />
        <WorkImage cols="6" src="/assets/images/work/domu/domu5.png" />
        <WorkParagraph>
          The app’s intuitive design prioritizes user experience, ensuring
          smooth navigation across both mobile and web platforms. Every aspect
          of Domu, from the clean interface to its secure infrastructure,
          reflects our commitment to creating a tool that builds stronger
          communities and streamlines day-to-day tasks for residents and
          managers alike.
        </WorkParagraph>
        <WorkImage
          cols="full"
          src="/assets/images/work/domu/domu1.png"
          cn="aspect-auto h-auto"
        />
      </WorkLayout>
    </BaseLayout>
  );
}

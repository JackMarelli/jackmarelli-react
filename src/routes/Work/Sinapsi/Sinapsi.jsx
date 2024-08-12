import BaseLayout from "../../../layouts/BaseLayout/BaseLayout";
import WorkLayout from "../../../layouts/WorkLayout/WorkLayout";
import WorkImage from "../../../components/WorkImage/WorkImage";
import WorkParagraph from "../../../components/WorkParagraph/WorkParagraph";

export default function Sinapsi() {
  return (
    <BaseLayout>
      <WorkLayout
        title="Sinapsi"
        desc="Logo design for a newborn tech company."
      >
        <WorkImage
          cols="full"
          src="/assets/images/work/sinapsi/banner_horizontal_negative.png"
          cn="aspect-none h-auto"
        />
        <WorkImage
          cols="full"
          src="/assets/images/work/sinapsi/banner_logotype.png"
          cn="aspect-none h-auto"
        />
        <WorkImage
          cols="full"
          src="/assets/images/work/sinapsi/banner_logotype_negative.png"
          cn="aspect-none h-auto"
        />
        <WorkParagraph>
          Sinapsi is a newborn electronic components company, i got asked for a
          logo that reminds the concept of "synapse": this is what i came out
          with.
          <br />
          <br /> The final result is based off a sketch made by the company
          founder. Since the scientific definition of a "synapse" is not known
          by many, the rapresentation of two ideal neurons running after each
          other, should be enough to depict the concept.
        </WorkParagraph>
        <WorkImage
          cols="6"
          src="/assets/images/work/sinapsi/banner_vertical_negative.png"
        />
        <WorkImage
          cols="6"
          src="/assets/images/work/sinapsi/propic_negative.png"
        />
        <WorkImage
          cols="full"
          src="/assets/images/work/sinapsi/banner_horizontal.png"
          cn="aspect-auto h-auto"
        />
      </WorkLayout>
    </BaseLayout>
  );
}

import BaseLayout from "../../../layouts/BaseLayout/BaseLayout";
import WorkLayout from "../../../layouts/WorkLayout/WorkLayout";
import WorkImage from "../../../components/WorkImage/WorkImage";
import WorkParagraph from "../../../components/WorkParagraph/WorkParagraph";

export default function MadeInBergamo() {
  return (
    <BaseLayout>
      <WorkLayout
        title="Made in Bergamo"
        desc="Website design and development for a research thesis."
        link="https://made-in-bergamo.com/"
      >
        <WorkImage
          cols="full"
          src="/assets/images/work/madeinbergamo/00.jpg"
          cn="aspect-none h-auto"
        />
        <WorkParagraph>
          The request was to design and develop a website that could display a
          shortened version of a graduation thesis.
          <br />
          <br />
          To ensure readability and user engagement, the design adopts a
          repetitive, structured layout, which helps break up the dense academic
          content. By focusing on simplicity and clarity, the website allows
          users to navigate the material smoothly without distractions, ensuring
          the core ideas of the thesis are easy to digest.
        </WorkParagraph>
        <WorkImage cols="6" src="/assets/images/work/madeinbergamo/01.jpg" />
        <WorkImage cols="6" src="/assets/images/work/madeinbergamo/02.jpg" />
        <WorkParagraph>
          The website's navigation is simple and intuitive, consisting of two
          main pages to organize the content effectively. One page is dedicated
          to the shortened version of the thesis, presenting the academic
          material in a clean, easy-to-follow format.
          <br />
          <br />
          The second page features interviews with stylists, offering a more
          dynamic and conversational aspect to complement the thesis. This
          clear, two-page structure allows users to effortlessly switch between
          the more formal research content and the more engaging, real-world
          perspectives, making the overall experience more cohesive and
          user-friendly.
        </WorkParagraph>
        <WorkImage
          cols="full"
          src="/assets/images/work/madeinbergamo/03.jpg"
          cn="aspect-auto h-auto"
        />
      </WorkLayout>
    </BaseLayout>
  );
}

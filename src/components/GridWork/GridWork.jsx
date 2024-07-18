import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function GridWork(props) {
  const navigate = useNavigate();
  const handleClick = () => {
    if (props.link.startsWith("http")) {
      window.location.href = props.link;
    } else {
      navigate(props.link);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`h-fit col-span-full md:col-span-${props.cols} grid grid-cols-12 gap-2 md:block relative cursor-pointer`}
    >
      <div className="md:hidden col-span-6 flex flex-col justify-start items-start">
        <hr className="md:hidden w-full h-0.5 md:h-def bg-dark mb-2" />
        <h3 className="font-sans">{props.title}</h3>
      </div>
      <div className="col-span-6 md:col-span-full">
        {props.image && <img src={props.image} alt="project preview" />}
        {props.video && (
          <video src={props.video} alt="project preview" autoPlay={true} />
        )}
      </div>
      <div className="absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center bg-dark/75 opacity-0 hover:opacity-100 pointer-events-none md:pointer-events-auto">
        <h3 className="font-serif text-5xl text-light">{props.title}</h3>
      </div>
    </div>
  );
}

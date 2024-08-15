import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createPortal } from "react-dom";
import AnimatedLink from "../AnimatedLink/AnimatedLink";

export default function GridWork(props) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (props.link.startsWith("http")) {
      window.open(props.link, "_blank");
    } else {
      // Use window.location.href to force a full page reload
      window.location.href = props.link;
    }
  };

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const renderPreview = () => {
    if (isHovered) {
      if (props.image) {
        return (
          <img
            className="fixed w-64 aspect-square object-cover pointer-events-none z-50"
            src={props.image}
            alt="project preview"
            style={{
              left: mousePos.x,
              top: mousePos.y,
              transform: "translate(-50%, -50%)",
            }}
          />
        );
      }
      if (props.video) {
        return (
          <video
            muted
            autoPlay={"autoplay"}
            preload="auto"
            loop
            className="fixed w-64 aspect-square object-cover pointer-events-none z-50"
            src={props.video}
            alt="project preview"
            style={{
              left: mousePos.x,
              top: mousePos.y,
              transform: "translate(-50%, -50%)",
            }}
          />
        );
      }
    }
    return null;
  };

  // List view display
  if (props.viewType === "list") {
    return (
      <div
        className="col-span-full hover:border-b-2 border-dark py-1 grid grid-cols-12 relative cursor-pointer"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <AnimatedLink
          to={props.link}
          content={props.title}
          className="col-span-11 w-full"
        />
        {createPortal(renderPreview(), document.getElementById("portal-root"))}
        {props.favourite && (
          <span className="col-span-1 text-xl md:text-4xl font-simbola leading-none tracking-none flex justify-end items-center">
            ⯎
          </span>
        )}
      </div>
    );
  }

  // Default display
  return (
    <div
      onClick={handleClick}
      className={`h-fit col-span-full md:col-start-${props.start} md:col-span-${
        props.cols
      } md:aspect-square grid grid-cols-12 gap-2 md:block relative cursor-pointer mb-4 lg:mb-8 ${
        props.cn && props.cn
      }`}
    >
      <div className="md:hidden col-span-6 flex flex-col justify-start items-start">
        <hr className="md:hidden w-full h-0.5 md:h-1 bg-dark mb-2" />
        <h3 className="font-sans">{props.title}</h3>
      </div>
      <div className="col-span-6 aspect-square md:w-full">
        {props.image && (
          <img
            className="w-full h-full object-cover"
            src={props.image}
            alt="project preview"
          />
        )}
        {props.video && (
          <video
            muted
            autoPlay={"autoplay"}
            preload="auto"
            loop
            className="w-full h-full object-cover"
            src={props.video}
            alt="project preview"
          />
        )}
      </div>
      <div className="absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center bg-dark bg-opacity-95 opacity-0 hover:opacity-100 pointer-events-none md:pointer-events-auto p-8 flex flex-col gap-2">
        <h3
          className={`font-serif ${
            props.cols < 4 ? "text-4xl lg:text-5xl" : "text-6xl"
          } text-light text-center`}
        >
          {props.title}
        </h3>
        <h4
          className={`text-gray text-center ${props.cols < 4 && "text-2xl"}`}
        >
          {props.exp}
        </h4>
      </div>
      {props.favourite && (
        <div className="w-8 md:w-20 h-8 md:h-20 absolute right-3 md:right-8 bottom-3 md:bottom-8 rounded-full mix-blend-difference bg-light flex justify-center items-center">
          <span className="w-fit h-fit text-xl md:text-6xl font-simbola leading-none tracking-none">
            ⯎
          </span>
        </div>
      )}
    </div>
  );
}

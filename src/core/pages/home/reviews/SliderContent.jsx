import { Divider, Typography } from "@mui/material";
import React from "react";
import Rating from "./Rating";


function SliderContent({ activeIndex, reviewItems }) {

  return (
    <section className="p-5 bg-white">
      {reviewItems?.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <div className="h-full">

          <div className="w-full h-[30%] flex justify-between text-gray-900">
           
            <div className="flex flex-col">
              <Typography className="font-bold text-2xl whitespace-nowrap"> {slide.name} </Typography>
              <Typography className="text-gray-600"> {slide.time} </Typography>
            </div>
            <div className="w-1/2 flex justify-end">
              <Rating height="1rem" width="1rem" />
            </div>
          </div>
            <Divider className="bg-gray-200 h-[1px]"/>
            <div className="mt-5">
            <Typography className="text-gray-900" > {slide.review} </Typography>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default SliderContent;

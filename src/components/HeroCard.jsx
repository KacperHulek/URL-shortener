import React from "react";

const HeroCard = ({ rowStart, imgSrc, title, description }) => {
  return (
    <div
      className={`${rowStart} row-span-6 bg-white px-9 relative rounded-lg shadow-sm z-10`}
    >
      <div className="bg-darkViolet w-fit p-5 rounded-full relative -translate-y-10">
        <img src={imgSrc} alt="" />
      </div>
      <h2 className="text-2xl font-bold text-veryDarkBlue mb-4">{title}</h2>
      <p className="text-md text-grayishViolet text-pretty">{description}</p>
    </div>
  );
};

export default HeroCard;

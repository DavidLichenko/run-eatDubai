import React from "react";

const FeatureCard = ({  title }) => {
  return (
    <div className="flex gap-4 bg-secondary_text text-white text-center items-center justify-center py-4 px-8 rounded-sm shadow-md transition-colors duration-200 hover:cursor-pointer">
      <h3 className="text-xl text-center font-bold">{title}</h3>
    </div>
  );
};

export default FeatureCard;

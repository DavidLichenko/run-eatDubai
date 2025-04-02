import React from "react";

const FeatureCard = ({ icon: Icon, title }) => {
  return (
    <div className=" flex gap-4 border-text border-2 items-center justify-between  p-4 rounded-lg shadow-md transition-colors duration-200 hover:cursor-pointer">
      <Icon size={34} />
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h3>
    </div>
  );
};

export default FeatureCard;

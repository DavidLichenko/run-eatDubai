import React from "react";
import Link from "next/link";

const FeatureCard = ({title,link}) => {
  return (
    <div className="flex gap-4 bg-secondary_text text-background text-center items-center justify-center py-4 px-8 rounded-sm shadow-md transition-colors duration-200 hover:cursor-pointer">
      <Link href={link} className="text-xl text-center font-bold ">{title}</Link>
    </div>
  );
};

export default FeatureCard;

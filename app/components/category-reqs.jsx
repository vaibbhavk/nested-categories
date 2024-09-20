"use client";

import Requirement from "./requirement";

const CategoryRequirements = ({ cat }) => {
  return (
    <div className="bg-white rounded-md py-4">
      <div className="space-y-4 flex flex-col">
        <p className="font-semibold">{cat.c_name}</p>
        <div>
          {cat.requirements.map((r, index) => (
            <Requirement r={r} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryRequirements;

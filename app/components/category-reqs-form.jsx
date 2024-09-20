"use client";

import { useEffect, useState } from "react";
import Button from "./button";
import RequirementForm from "./requirement-form";

const CategoryRequirementsForm = ({ cat, handleCategoryChange }) => {
  return (
    <div className="bg-white rounded-md px-8 py-4">
      <div className="space-y-4 flex flex-col">
        <div className="py-2 mb-3 flex gap-6">
          <p className="font-semibold">Category</p>
          <input
            id={cat.c_id}
            type="text"
            value={cat.c_name}
            onChange={handleCategoryChange}
            className="border border-gray-500 rounded-md px-2"
          />
        </div>
        <div>
          {cat.requirements.map((r, index) => (
            <RequirementForm r={r} key={index} />
          ))}
        </div>

        <Button text="Add Requirement" />
      </div>
    </div>
  );
};

export default CategoryRequirementsForm;

"use client";

import Button from "./button";
import RequirementForm from "./requirement-form";

const CategoryRequirementsForm = ({
  cat,
  handleCategoryChange,
  data,
  setData,
}) => {
  const addRequirement = (e, catId) => {
    const updatedData = data.map((category) => {
      if (category.c_id == catId) {
        return {
          ...category,
          requirements: [
            ...category.requirements,
            {
              req_id: category.requirements.length + 1,
              req_name: "New Requirement",
            },
          ],
        };
      }

      return category;
    });

    setData(updatedData);
  };

  const handleRequirementChange = (e, catId, reqId) => {
    const newName = e.target.value;

    const updatedData = data.map((category) => {
      if (category.c_id == catId && newName.length > 0) {
        return {
          ...category,
          requirements: category.requirements.map((req) =>
            req.req_id == reqId
              ? {
                  ...req,
                  req_name: newName,
                }
              : req
          ),
        };
      }

      return category;
    });

    setData(updatedData);
  };

  const removeRequirement = (e, catId, reqId) => {
    const updatedData = data.map((category) => {
      if (category.c_id == catId) {
        return {
          ...category,
          requirements: category.requirements.filter(
            (req) => req.req_id != reqId
          ),
        };
      }

      return category;
    });

    setData(updatedData);
  };

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
            <RequirementForm
              r={r}
              key={index}
              catId={cat.c_id}
              handleRequirementChange={handleRequirementChange}
              removeRequirement={removeRequirement}
            />
          ))}
        </div>

        <Button
          text="Add Requirement"
          onClick={(e) => addRequirement(e, cat.c_id)}
        />
      </div>
    </div>
  );
};

export default CategoryRequirementsForm;

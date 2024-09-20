"use client";

import { useState } from "react";
import CategoryRequirementsForm from "./category-reqs-form";
import CategoryRequirements from "./category-reqs";
import Button from "./button";

const AppContainer = () => {
  const [data, setData] = useState([
    {
      c_id: 1,
      c_name: "Government IDs",
      requirements: [
        {
          req_id: 1,
          req_name: "Passport",
        },
        {
          req_id: 2,
          req_name: "Birth Certificate",
        },
      ],
    },
    {
      c_id: 2,
      c_name: "Bills",
      requirements: [
        {
          req_id: 1,
          req_name: "Water",
        },
      ],
    },
  ]);

  const addCategory = () => {
    setData([
      ...data,
      {
        c_id: data.length + 1,
        c_name: "New Category",
        requirements: [],
      },
    ]);
  };

  const handleCategoryChange = (e) => {
    const newName = e.target.value;
    const catId = e.target.id;

    const updatedData = data.map((category) => {
      if (category.c_id == catId && newName.length > 0) {
        return { ...category, c_name: newName };
      }

      return category;
    });

    setData(updatedData);
  };

  const exportData = async () => {
    try {
      const response = await fetch("/api/export", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log("success!");
      } else {
        console.error("failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="grid grid-cols-12 px-16 py-12 gap-16">
      <div className="col-span-8 space-y-6 flex flex-col">
        {data.map((cat, index) => (
          <CategoryRequirementsForm
            cat={cat}
            key={index}
            handleCategoryChange={handleCategoryChange}
            data={data}
            setData={setData}
          />
        ))}

        <Button text="Add Category" onClick={addCategory} />
      </div>

      <div className="col-span-4 bg-white rounded-md px-8 py-4 flex flex-col self-start">
        {data.length > 0 ? (
          <>
            {data.map((cat, index) => (
              <CategoryRequirements cat={cat} key={index} />
            ))}
            <Button text="Export" onClick={exportData} />
          </>
        ) : (
          <p>Your categories will appear here.</p>
        )}
      </div>
    </div>
  );
};

export default AppContainer;

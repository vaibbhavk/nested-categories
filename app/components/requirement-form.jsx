"use client";

const RequirementForm = ({ r, handleRequirementChange, catId }) => {
  return (
    <div className="p-3 border border-black rounded-md mb-3 flex gap-6">
      <p className="font-semibold">Requirement</p>
      <input
        id={r.req_id}
        type="text"
        value={r.req_name}
        onChange={(e) => handleRequirementChange(e, catId, r.req_id)}
        className="border border-gray-500 rounded-md px-2"
      />
    </div>
  );
};

export default RequirementForm;

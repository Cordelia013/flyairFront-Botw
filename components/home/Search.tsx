import React from "react";

type FieldBlock = {
  label: string;
  placeholder: string;
  type: "text" | "date" | "number";
  showIcon?: boolean;
  displayPlaceholder?: string;
};

const fields: FieldBlock[] = [
  { label: "From", placeholder: "Search...", type: "text", showIcon: true },
  { label: "To", placeholder: "Search...", type: "text", showIcon: true },
  { label: "Departure", placeholder: "DD/MM/YY", type: "date", displayPlaceholder: "DD/MM/YY" },
  { label: "Return", placeholder: "DD/MM/YY", type: "date", displayPlaceholder: "DD/MM/YY" },
  { label: "Passenger", placeholder: "Number...", type: "number", showIcon: true },
];

const separator = (
  <div className="w-0.5 h-36 opacity-20 bg-zinc-300 rounded-[101px]" />
);

const Search: React.FC = () => {
  return (
    <div className="w-full h-[160px] px-8 py-2 text-[20px] rounded-[40px] inline-flex justify-between items-center gap-4" style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}>
      {/* Mapping through each field in the fields array */}
      {fields.map((field, idx) => (
        <React.Fragment key={field.label}>
          {/* Container for each field block */}
          <div className="w-44 inline-flex flex-col justify-start items-start gap-4">
            {/* Label section */}
            <div className="self-stretch h-7 justify-start text-white  font-normal font-['PP_Neue_Montreal'] mb-4">
              {field.label}
            </div>
            {/* Input container with conditional styling based on field type */}
            <div
              className={
                field.type === "date"
                  ? "self-stretch px-4 py-2 bg-neutral-50/80 rounded-[20px] flex flex-col justify-start items-start gap-4"
                  : "self-stretch px-4 py-2 bg-neutral-50/80 rounded-[20px] inline-flex justify-between items-center"
              }
            >
              {/* Placeholder text */}
              <div className="justify-center text-black  font-thin font-['PP_Neue_Montreal'] " style={{ backgroundColor: "rgba(250, 250, 250, 0.8)" }}>
                {field.displayPlaceholder || field.placeholder}
              </div>
              {/* Optional icon for certain field types */}
              {field.showIcon && (
                <div className="w-2.5 h-1.5 bg-black" />
              )}
            </div>
          </div>
          {/* Add separator between fields except for the last one */}
          {idx < fields.length - 1 && separator}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Search;

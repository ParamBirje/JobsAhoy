"use client";

export default function Option({
  option,
  checked,
  onChange,
}: {
  option: JobTypeType;
  checked: boolean;
  onChange: (id: number) => void;
}) {
  return (
    <div className="duration-100 group w-full flex items-center justify-start gap-3 hover:bg-primary-lightest rounded-md px-3 py-1">
      <input
        checked={checked}
        onChange={() => {
          onChange(option.id);
        }}
        type="checkbox"
        id={option.type_name}
      />

      <label className=" whitespace-nowrap" htmlFor={option.type_name}>
        {option.type_name}
      </label>
    </div>
  );
}

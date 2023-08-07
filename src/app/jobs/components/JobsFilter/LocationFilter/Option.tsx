"use client";

export default function Option({
  option,
  checked,
  onChange,
}: {
  option: LocationType;
  checked: boolean;
  onChange: VoidFunction;
}) {
  return (
    <div className="duration-100 group w-full flex items-center justify-start gap-3 hover:bg-primary-lightest rounded-md px-3 py-1">
      <input checked={checked} onChange={onChange} type="checkbox" id={option.location_name} />

      <label className=" whitespace-nowrap" htmlFor={option.location_name}>
        {option.location_name}
      </label>
    </div>
  );
}

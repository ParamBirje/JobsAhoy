"use client";

export default function Option({
  option,
  checked,
  onChange,
}: {
  option: VisaStatusType;
  checked: boolean;
  onChange: VoidFunction;
}) {
  return (
    <div className="duration-100 group w-full flex items-center justify-start gap-3 hover:bg-primary-lightest rounded-md px-3 py-1">
      <input checked={checked} onChange={onChange} type="checkbox" id={option.id.toString()} />

      <label className=" whitespace-nowrap" htmlFor={option.id.toString()}>
        {option.is_visa_sponsored ? "Visa Sponsored" : "Visa Available"}
      </label>
    </div>
  );
}

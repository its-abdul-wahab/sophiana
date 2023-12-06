import clsx from "clsx";
import React from "react";

interface Iprops {
  label: string;
  className?: any;
  type?: string;
  disabled?: boolean;
  id?: string;
  name?: string;
}

const FormCheck = ({ label, className, type, disabled, id, name }: Iprops) => {
  return (
    <div className={clsx(className, "mb-1 flex items-center gap-1.5")}>
      <input
        type={type ? type : "checkbox"}
        className={clsx(
          "h-3 w-3  rounded border-none bg-[#D9D9D9] text-primary focus:ring-primary/50 disabled:cursor-not-allowed",
          type === "radio" && "!rounded-full"
        )}
        name={name}
        id={`default-${id}`}
        disabled={disabled}
      />
      <label
        htmlFor={`default-${id}`}
        className="inline-block text-[10px] text-primary font-inter-extraLight"
      >
        {label}
      </label>
    </div>
  );
};

export default FormCheck;

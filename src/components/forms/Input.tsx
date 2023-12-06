import { clsx } from "clsx";
import InputError from "./InputError";

interface SsProps {
  sm: string;
  lg: string;
  md: string;
}

interface Iprops {
  placeholder: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  type?: string;
  spanClass?: string;
  name?: string;
  rest?: any;
  register?: any;
  value?: any;
  onChange?: Function;
  max?: any;
  min?: any;
  step?: any;
  prefix?: any;
  pattern?: any;
  title?: string;
  disabled?: boolean;
  error?: any;
  autoFocus?: boolean;
}

const sizeStyles: SsProps = {
  sm: "p-2 text-xs",
  md: "px-4 py-3 text-base",
  lg: "px-5 py-4 text-lg",
};

const Input = ({
  placeholder,
  size = "sm",
  className,
  value,
  onChange,
  type,
  register,
  max,
  min,
  pattern,
  title,
  disabled,
  error,
  autoFocus,
  ...rest
}: Iprops) => {
  return (
    <>
      <input
        type={type ? type : "text"}
        className={clsx(
          className,
          sizeStyles[size],
          "block w-full border border-borderColor tracking-widest bg-transparent text-primary placeholder:text-[10px] font-inter-extraLight  outline-none placeholder:text-[#333232] !focus:ring-[0.5] !ring-black focus:border-black focus:shadow-[0_0_0_0.01rem] disabled:cursor-not-allowed disabled:bg-[#e9ecef]"
        )}
        pattern={pattern}
        max={max}
        title={title}
        min={min}
        value={value}
        onChange={onChange}
        {...(register !== undefined && { ...register(rest.name) })}
        placeholder={placeholder}
        disabled={disabled}
        {...rest}
      />
      {error && <InputError error={error} />}
    </>
  );
};

export default Input;

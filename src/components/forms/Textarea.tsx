import { clsx } from "clsx";
import InputError from "./InputError";

interface SsProps {
  sm: string;
  lg: string;
  md: string;
}

interface IProps {
  placeholder: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  type?: string;
  spanClass?: string;
  name: string;
  error?: string | null;
  rest?: React.InputHTMLAttributes<HTMLInputElement>;
  // eslint-disable-next-line no-unused-vars
  value?: string;
  title?: string;
  disabled?: boolean;
  autoFocus?: boolean;
  maxLength?: number | undefined;
  minLength?: number | undefined;
  defaultValue?: string;
  rows?: number;
  cols?: number;
  parentClass?: string;
}

const sizeStyles: SsProps = {
  sm: "p-2 text-xs",
  md: "px-4 py-3 text-base",
  lg: "px-5 py-4 text-lg",
};

const Textarea: React.FC<IProps> = ({
  placeholder,
  size = "sm",
  className,
  value,
  type,
  title,
  disabled,
  error,
  name,
  maxLength,
  minLength,
  rows,
  cols,
  ...rest
}) => {
  return (
    <>
      <textarea
        className={clsx(
          className,
          sizeStyles[size],
          `  focus:shadow-outline relative z-30 block w-full tracking-widest placeholder:text-[10px] font-inter-extraLight border border-borderColor bg-transparent text-primary focus:border-black focus:outline-none focus:ring-0`
        )}
        rows={rows}
        cols={cols}
        title={title}
        maxLength={maxLength}
        minLength={minLength}
        value={value}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        {...rest}
      />
      {error && <InputError error={error} />}
    </>
  );
};

export default Textarea;

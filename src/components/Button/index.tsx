import clsx from "clsx";
import { ImSpinner9 } from "react-icons/im";
import { BsProps, IButtonProps, SsProps, VsProps } from "./button.interface";

const baseStyles: BsProps = {
  solid:
    "inline-flex justify-center items-center whitespace-nowrap tracking-[3px] font-inter-medium disabled:cursor-not-allowed",
  outline:
    "inline-flex justify-center items-center outline-none whitespace-nowrap tracking-[3px] font-inter-medium border disabled:cursor-not-allowed",
};

const variantStyles: VsProps = {
  solid: {
    primary:
      "text-white border border-primary bg-primary hover:bg-primary/80 active:bg-primary/90 active:text-white/80 disabled:opacity-30 disabled:hover:bg-primary",
    secondary:
      "text-black border border-secondary bg-secondary hover:bg-secondary/80  active:bg-secondary/90 active:text-black/80 disabled:opacity-30 disabled:hover:bg-secondary",
  },
  outline: {
    primary:
      "border-primary text-primary hover:border-primary/70 hover:bg-primary/10 active:border-primary/20 active:bg-primary/10 active:text-primary/70 disabled:opacity-40 disabled:hover:border-primary disabled:hover:bg-transparent",
    secondary:
      "border-secondary text-secondary hover:border-secondary/70 hover:bg-secondary/10 active:border-secondary/20 active:bg-secondary/10 active:text-secondary/70 disabled:opacity-40 disabled:hover:border-secondary disabled:hover:bg-transparent",
  },
};

const sizeStyles: SsProps = {
  sm: "px-2.5 py-1 text-xs",
  md: "px-3 py-3 text-base",
  lg: "px-7 py-2 text-base",
};
export const Button = ({
  variant = "solid",
  color = "secondary",
  size = "md",
  className,
  type,
  disabled,
  isLoading,
  children,
  loaderClass,
  ...props
}: IButtonProps) => {
  return (
    <button
      className={clsx(
        baseStyles[variant],
        variantStyles[variant][color],
        sizeStyles[size],
        className,
        isLoading &&
          "relative !cursor-wait !text-transparent hover:!text-transparent"
      )}
      type={type ? type : "button"}
      disabled={disabled ? true : false}
      {...props}
    >
      {isLoading && (
        <div className="absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 text-black">
          <ImSpinner9 className={clsx("animate-spin text-sm ", loaderClass)} />
        </div>
      )}
      {children}
    </button>
  );
};
export default Button;

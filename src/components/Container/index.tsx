import clsx from "clsx";

interface Iprops {
  className?: string;
  size?: "sm" | "md";
  children?: React.ReactNode;
}

interface SsProps {
  sm: string;
  md: string;
}

const sizeStyles: SsProps = {
  sm: "mx-auto px-4 max-w-[824px] xl:max-w-[1028px]",
  md: "mx-auto px-4 md:max-w-[1248px]",
};

export function Container({ size = "sm", className, ...props }: Iprops) {
  return <div className={clsx(sizeStyles[size], className)} {...props} />;
}

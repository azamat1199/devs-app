import { ComponentPropsWithoutRef, FC } from "react";
import { twMerge } from "tailwind-merge";

interface HelperTextProps
  extends Omit<ComponentPropsWithoutRef<"p">, "className"> {
  className?: string;
  variant?: "error" | "helper";
}

const HelperText: FC<HelperTextProps> = (props) => {
  const { className, children, variant = "helper", ...computedProps } = props;

  return (
    <p
      {...computedProps}
      className={twMerge([
        "text-b-2-r text-c_neutral-500",
        variant === "error" && "text-c_error-500",
        className,
      ])}
    >
      {children}
    </p>
  );
};

export default HelperText;

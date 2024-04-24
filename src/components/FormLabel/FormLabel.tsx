import { ComponentPropsWithoutRef, FC } from "react";
import { twMerge } from "tailwind-merge";

interface FormLabelProps extends ComponentPropsWithoutRef<"label"> {
  disabled?: boolean;
}

const FormLabel: FC<FormLabelProps> = (props) => {
  const { children, className, ...computedProps } = props;
  return (
    <label
      {...computedProps}
      className={twMerge([
        "text-b-2-m text-c_neutral-800 font-medium",
        className,
      ])}
    >
      {children}
    </label>
  );
};

export default FormLabel;

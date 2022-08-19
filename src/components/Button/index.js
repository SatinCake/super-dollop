import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder6: "rounded-radius6",
  RoundedBorder9: "rounded-radius947",
};
const variants = { FillBlueA700: "bg-blue_A700 text-white_A700" };
const sizes = {
  sm: "lg:p-[13px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px]",
  md: "lg:p-[25px] xl:p-[29px] 2xl:p-[33px] 3xl:p-[39px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["RoundedBorder6", "RoundedBorder9"]),
  variant: PropTypes.oneOf(["FillBlueA700"]),
  size: PropTypes.oneOf(["sm", "md"]),
};
Button.defaultProps = { className: "", shape: "", variant: "", size: "" };

export { Button };

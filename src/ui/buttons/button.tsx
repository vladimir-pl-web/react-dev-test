import { FC } from "react"
import { IButton } from "./types"
import clsx from "clsx"
import classes from "./button.module.scss"
import { IBtnVariant } from "../../types"

const Button: FC<IButton> = ({
  variant,
  title,
  onClick,
  className,
  ...rest
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx("btn", classes.button, {
        [classes.buttonA]: variant === IBtnVariant.A,
        [classes.buttonB]: variant === IBtnVariant.B,
        [classes.buttonC]: variant === IBtnVariant.C,
      })}
      {...rest}
    >
      {title}
    </button>
  )
}

export default Button

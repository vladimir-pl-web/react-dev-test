import { FC } from "react"
import { IButton } from "./types"
import clsx from "clsx"
import classes from "./button.module.scss"
import { IBtnVariant } from "../../types"
import { useActions } from "../../hooks/useActions"


const Button: FC<IButton> = ({
  variant,
  title,
  onClick,
  className,
  ...rest
}) => {
  const {fetchContacts,setParams } = useActions()
  
  const onClickHandler = () => {
    if (variant === IBtnVariant.B) {
      setParams({ key: "countryId", value: 226 })
      fetchContacts()
    }
    if (variant === IBtnVariant.A) fetchContacts()
    onClick()
  }
  return (
    <button
      type="button"
      onClick={onClickHandler}
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

import { FC } from "react"
import { IButton } from "./types"
import clsx from "clsx"
import classes from "./button.module.scss"
import { IBtnVariant, IContact } from "../../types"
import { useActions } from "../../hooks/useActions"

const Button: FC<IButton> = ({
  variant,
  title,
  onClick,
  className,
  ...rest
}) => {
  const { fetchContacts, setParams, setDeatils } = useActions()

  const onClickHandler = () => {
    if (variant === IBtnVariant.B) {
      setParams({ key: "countryId", value: 226 })
      fetchContacts()
    }
    if (variant === IBtnVariant.A) {
      setParams({ key: "countryId", value: null })
      fetchContacts()
    }
    onClick()
    setDeatils({} as IContact)
    setParams({ key: "query", value: null })
    setParams({ key: "page", value: 1 })
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

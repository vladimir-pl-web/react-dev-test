import { FC, useMemo } from "react"
import { IButtonsList } from "./types"
import { NavLink } from "react-router-dom"
import Button from "./button"
import { allButtons } from "../../constants"
import clsx from "clsx"

const ButtonList: FC<IButtonsList> = ({
  onClick,
  order,
  position = "center",
}) => {
  const btns = useMemo(() => {
    return allButtons.map(({ open, variant, title, to }, index) => {
      const shown = order && order + 1 === index ? "none" : "flex"

      return (
        <div
          key={index}
          className={clsx(
            "col-sm flex py-2 px-0",
            `justify-content-${position}`
          )}
          style={{ display: shown }}
        >
          <NavLink to={to}>
            <Button
              variant={variant}
              onClick={() => onClick(open)}
              title={title}
            />
          </NavLink>
        </div>
      )
    })
  }, [onClick, order, position])
  return <>{btns}</>
}

export default ButtonList

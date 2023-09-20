import { FC, useMemo } from "react"
import { IButtonsList } from "./types"
import { NavLink } from "react-router-dom"
import Button from "./button"
import { allButtons } from "../../constants"


const ButtonList: FC<IButtonsList> = ({ onClick, order }) => {
  const btns = useMemo(() => {
    return allButtons.map(({ open, variant, title, to }, index) => {
      const shown = order && order + 1 === index ? "none" : "flex"

      return (
        <div
          className="col-sm flex justify-content-center py-2"
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
  }, [onClick, order])
  return <>{btns}</>
}

export default ButtonList

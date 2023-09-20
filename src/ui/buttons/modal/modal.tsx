import ButtonList from "../buttons/buttonList"
import classes from "./modal.module.scss"
import { IModal } from "./types"
import { FC, PropsWithChildren, useState } from "react"

const Modal: FC<PropsWithChildren<IModal>> = ({
  isOpen,
  children,
  setOpen,
}) => {
  const [checked, setChecked] = useState<boolean>(false)

  const onCheckHandle = () => {
    setChecked(!checked)
  }
  
  if (!isOpen) return null
  return (
    <div className={classes.overlay}>
      <div className={classes.window}>
        <div>{children}</div>
        <div className="row d-flex pt-5 justify-content-between">
          <div className="form-check d-flex align-items-center">
            <input
              className="form-check-input"
              type="checkbox"
              checked={checked}
              onChange={onCheckHandle}
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Only even
            </label>
          </div>

          <div className="w-75 d-flex">
            <ButtonList onClick={setOpen} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Modal

import { FC, useMemo } from "react"
import classes from "./list.module.scss"
import clsx from "clsx"
import { IDetail } from "./types"
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg"
import { useTypedSelector } from "../../hooks/useTypedSelector"

const ContactDetails: FC<IDetail> = ({ onClose, className, ...rest }) => {
  const details = useTypedSelector((state) => state.contacts.currentContact)

  const detailsList = useMemo(() => {
    return (
      <ul className="py-3 pl-4">
        <li className="d-flex py-2">
          <span>
            <b>Phone:</b> {details?.phone_number}
          </span>
        </li>
        <li className="d-flex py-2">
          <span>
            <b>Email:</b> {details?.email ? details.email : "-"}
          </span>
        </li>
        <li className="d-flex py-2">
          <span>
            <b>Address:</b> {details?.address ? details.address : "-"}
          </span>
        </li>
      </ul>
    )
  }, [details])
  return (
    <div
      {...rest}
      className={clsx(
        "d-flex flex-column pt-5 justify-start flex-wrap",
        classes.details,
        className
      )}
    >
      <button className={clsx(classes.button)} onClick={onClose}>
        <CloseIcon />
      </button>
      {detailsList}
    </div>
  )
}

export default ContactDetails

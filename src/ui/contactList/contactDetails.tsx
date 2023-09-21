import { FC } from "react"
import classes from "./list.module.scss"
import clsx from 'clsx'
import { IDetail } from "./types"
import {ReactComponent as CloseIcon} from '../../assets/icons/close.svg'

const ContactDetails: FC<IDetail> = ({onClose, className,...rest}) => {
 return (
  <div
   {...rest}
   className={clsx("d-flex flex-column pt-5 justify-start flex-wrap", classes.details, className)}
  >
   <button
    className={clsx(classes.button)}
    onClick={onClose}>
     <CloseIcon/>
   </button>
   <div>eferwg gerg</div>
   <div>eferwg gerg</div>
   <div>eferwg gerg</div>
   <div>eferwg gerg</div>
  </div>
 )
}

export default ContactDetails
import { useActions } from "../../hooks/useActions"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { IContact } from "../../types"
import ButtonList from "../buttons/buttonList"
import ContactList from "../contactList/list"
import Search from "../search/search"
import classes from "./modal.module.scss"
import { IModal } from "./types"
import { FC, PropsWithChildren, useMemo, useState } from "react"

const Modal: FC<PropsWithChildren<IModal>> = ({ isOpen, setOpen, title }) => {
  const [checked, setChecked] = useState<boolean>(false)
  const { contacts } = useTypedSelector((state) => state.contacts)

  const filteredContacts = useMemo(() => {
    return contacts.filter((contact) => contact.id % 2 === 0)
  }, [contacts])

  const onCheckHandle = () => {
    setChecked(!checked)
  }

  if (!isOpen) return null
  return (
    <div className={classes.overlay}>
      <div className={classes.window}>
        <h6>{title}</h6>
        <div>
          {<ContactList data={checked ? filteredContacts : contacts} />}
        </div>
        <div className="row px-3">
          <Search />
        </div>
        <div className="row d-flex py-1 mt-1 px-3 justify-content-between border-top align-items-center">
          <div className="form-check d-flex align-items-center pt-3">
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
          <div className="d-flex pt-3 flex-wrap w-75 justify-content-between">
            <ButtonList onClick={setOpen} position="end" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Modal

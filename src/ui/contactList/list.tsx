import { FC, useCallback, useMemo, useState } from "react"
import { titleNames } from "./mocked"
import clsx from "clsx"
import classes from "./list.module.scss"
import { useActive } from "../../hooks/activeItem"
import ContactDetails from "./contactDetails"
import { useActions } from "../../hooks/useActions"
import { IContact } from "../../types"
import { IContactList } from "./types"
import Scrollbars from "react-custom-scrollbars"
import { useTypedSelector } from "../../hooks/useTypedSelector"

const ContactList: FC<IContactList> = ({ data }) => {
  const { active, setActive } = useActive()
  const [details, setDetails] = useState<boolean>(false)
  const { params, contacts, isScroll } = useTypedSelector(
    (state) => state.contacts
  )
  const { fetchContacts, setParams, setScroll } = useActions()

  const onActive = useCallback(
    (index: number) => {
      setActive(index)
      setDetails(false)
      setDetails(true)
    },
    [setActive]
  )
  const onScroll = (top: number) => {
    if (top === 1 && !isScroll) {
      const { page } = params
      setParams({ key: "page", value: page + 1 })
      setScroll(true)
      fetchContacts()
    }
  }

  const titles = useMemo(() => {
    return titleNames.map((title, index) => {
      const border = index === 0 ? "none" : "border-left"
      return (
        <h6 key={index} className={clsx("col w-25 text-left", border)}>
          {title}
        </h6>
      )
    })
  }, [])

  const { setDeatils } = useActions()

  const onClickHandler = useCallback(
    (index: number, contact: IContact) => {
      onActive(index)
      setDeatils(contact)
    },
    [onActive, setDeatils]
  )

  const content = useMemo(() => {
    return data.map((contact, index) => {
      const { last_name, first_name, country, id } = contact
      return (
        <div
          key={id}
          onClick={() => onClickHandler(index, contact)}
          className={clsx(
            "h-auto list-group-item d-flex flex-wrap pl-4",
            classes.listItem,
            {
              [classes.active]: index === active,
            }
          )}
        >
          <div className="col w-25 text-left">{first_name}</div>
          <div className="col w-25 text-left">{last_name}</div>
          <div className="col w-25 text-left">{country}</div>
        </div>
      )
    })
  }, [active, data, onClickHandler])

  return (
    <>
      <div className="p-4 d-flex flex-wrap h-auto">{titles}</div>
      <Scrollbars
        disabled
        onScrollFrame={(value) => onScroll(value.top)}
        autoHeight
        hideTracksWhenNotNeeded
        className={clsx(
          "list-group list-group-flush mb-5 mt-2 bg-primary",
          classes.list
        )}
      >
        {content}
      </Scrollbars>
      {isScroll && <div>Loading...</div>}
      {!contacts.length && <div>No contacts found</div>}
      <ContactDetails
        className={!details ? classes.close : classes.open}
        onClose={() => setDetails(false)}
      />
    </>
  )
}

export default ContactList

import { FC, useCallback, useMemo } from "react"
import { contactMocked, titleNames } from "./mocked"
import clsx from 'clsx'
import classes from './list.module.scss'
import { useActive } from "../../hooks/activeItem"

const ContactList: FC= () => {
 const {active,setActive} = useActive()

 const onActive = useCallback((index:number) => {
  setActive(index)
 },[setActive])

 const titles = useMemo(() => {
  return titleNames.map((title, index) => {
   const border = index === 0 ? "none" : "border-left"
   return (<h6 className={clsx("col w-25 text-left", border)}>{title}</h6>)
  })
 }, [])

 const content = useMemo(() => {
  return contactMocked.map(({last_name, first_name, email, phone_number},index) => {
   return (
    <li
     onClick={()=>onActive(index)}
     className={clsx("h-auto list-group-item d-flex flex-wrap pl-4", classes.listItem, {
     [classes.active]: index === active
    })}>
     <div className="col w-25 text-left">{first_name}</div>
     <div className="col w-25 text-left">{last_name}</div>
     <div className="col w-25 text-left">{email? email : "-"}</div>
     <div className="col w-25 text-left">{phone_number}</div>
    </li>
   )
  })
 },[active, onActive])
 
 return (
  <>
   <div className="p-4 d-flex flex-wrap h-auto">{titles}</div>
  <ul className={clsx("list-group list-group-flush mb-5 mt-2", classes.list)}>
   {content}
   </ul>
   </>
 )
}

export default ContactList
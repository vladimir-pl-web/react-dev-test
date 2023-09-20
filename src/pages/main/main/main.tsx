import { FC, useMemo } from "react"
import { allButtons } from "../../../constants"
import Button from "../../../ui/buttons/button"
import { NavLink } from "react-router-dom";


const Main: FC = () => {
 const btns = useMemo(() => {
  return allButtons.slice(0,-1).map(({open,variant,title,to}) => (
    <div className="col-sm">
    <NavLink to={to}>
    <Button
     variant={variant}
     onClick={() => console.log(open)}
     title={title}
      />
        </NavLink>
  </div>
 ))
},[])
 
 return (
  <div className="container d-flex flex-column justify-center align-items-center vh-100 py-5">
  <h1 className="">Main Page</h1>
   <div className="row w-50 d-flex pb-5 align-items-center justify-center  h-100">
    {btns}
  </div>

  </div>
 )
}

export default Main
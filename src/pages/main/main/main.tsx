import { FC, useEffect, useState } from "react"
import { useModal } from "../../../hooks/modal"
import ButtonList from "../../../ui/buttons/buttonList"

const Main: FC = () => {
  const { onOpen } = useModal()

  useEffect(() => {}, [])

  return (
    <>
      <div className="container d-flex flex-column justify-center align-items-center vh-100 py-5">
        <h1 className="">Main Page</h1>
        <div className="row w-50 d-flex pb-5 align-items-center justify-between  h-100">
          <ButtonList order={1} onClick={onOpen} />
        </div>
      </div>
    </>
  )
}

export default Main

import { FC } from "react"
import { useModal } from "../../hooks/modal"
import Modal from "../../ui/modal/modal"

const All: FC = () => {
  const { open, onOpen } = useModal()
  console.log(open, "open")
  return (
    <div>
      <Modal
         title="All"
        isOpen={true}
        setOpen={onOpen}
      />

    </div>
  )
}

export default All

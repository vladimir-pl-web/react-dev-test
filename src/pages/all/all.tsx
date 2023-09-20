import { FC } from "react"
import { useModal } from "../../hooks/modal"
import Modal from "../../ui/modal/modal"


const All: FC = () => {
  const { open, onOpen } = useModal()
  console.log(open, "open")
  return (
    <div>
      <Modal isOpen={true} setOpen={onOpen}>
        <div>content All</div>
      </Modal>
    </div>
  )
}

export default All

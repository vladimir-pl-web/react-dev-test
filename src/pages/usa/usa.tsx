import { FC } from "react"
import { useModal } from "../../hooks/modal"
import Modal from "../../ui/modal/modal"

const USA: FC = () => {
  const { open, onOpen } = useModal()
  console.log(open, "open")
  return (
    <div>
      <Modal isOpen={true} setOpen={onOpen}>
        <div>content USA</div>
      </Modal>
    </div>
  )
}

export default USA

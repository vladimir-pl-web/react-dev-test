import { FC } from "react"
import { useModal } from "../../hooks/modal"
import Modal from "../../ui/modal/modal"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import Loader from "../../ui/loader/loader"

const All: FC = () => {
  const { onOpen } = useModal()
  const { isLoading} = useTypedSelector((state) => state.contacts)
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <Modal
        title="USA"
        isOpen={true} setOpen={onOpen}
      />
      )}

    </div>
  )
}

export default All

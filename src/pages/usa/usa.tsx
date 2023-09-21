import { FC, useEffect } from "react"
import { useModal } from "../../hooks/modal"
import Modal from "../../ui/modal/modal"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import Loader from "../../ui/loader/loader"
import { useActions } from "../../hooks/useActions"

const USA: FC = () => {
  const { onOpen } = useModal()
  const { isLoading, isScroll } = useTypedSelector((state) => state.contacts)
  const { fetchContacts, setParams } = useActions()
  useEffect(() => {
    setParams({ key: "countryId", value: 226 })
    fetchContacts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div>
      {!isScroll && isLoading ? (
        <Loader />
      ) : (
        <Modal title="USA" isOpen={true} setOpen={onOpen} />
      )}
    </div>
  )
}

export default USA

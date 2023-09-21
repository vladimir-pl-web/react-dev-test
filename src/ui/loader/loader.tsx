import { FC } from "react"
import { ReactComponent as Spinner } from "../../assets/icons/spinner.svg"

const Loader: FC = () => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <Spinner />
    </div>
  )
}

export default Loader

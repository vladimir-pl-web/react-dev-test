import { ChangeEvent, FC, useEffect, useState } from "react"
import classes from "./search.module.scss"
import { ReactComponent as SearchLogo } from "../../assets/icons/glass.svg"
import { useDebounce } from "../../hooks/debounce"
import { useActions } from "../../hooks/useActions"

const Search: FC = () => {
  const [term, setTerm] = useState<string>("")
  const debouncedValue = useDebounce(term, 1000)
  const { setParams, fetchContacts } = useActions()

  const onTermSet = (event: ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value)
  }

  const onSearch = () => {
    setParams({ key: "query", value: term })
    fetchContacts()
  }

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      onSearch()
    }

    if (event.key === "Escape") {
      setTerm("")
    }
  }
  useEffect(() => {
    if (debouncedValue) onSearch()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue, term])
  return (
    <div onKeyDown={(e) => onKeyDown(e)} className="input-group mb-3">
      <input
        onChange={(e) => onTermSet(e)}
        type="text"
        className="form-control"
        placeholder="Search..."
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        value={term}
      />
      <div className="input-group-append">
        <button
          className="btn btn-outline-secondary flex align-items-center justify-content-center"
          type="button"
        >
          <SearchLogo onClick={onSearch} className={classes.searchBtn} />
        </button>
      </div>
    </div>
  )
}

export default Search

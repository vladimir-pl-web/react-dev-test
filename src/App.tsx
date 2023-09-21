import { BrowserRouter, Route, Routes } from "react-router-dom"
import classes from "./app.module.scss"
import Main from "./pages/main/main/main"
import All from "./pages/all/all"

import USA from "./pages/usa/usa"
import ContactsService from "./services/contactsService"
import { useEffect } from "react"
function App() {
  useEffect(() => {
    const getResult = async () => {
      const res = await ContactsService.getContacts()
    }
   console.log(getResult(),"res")

  }, [])

  return (
    <div className={classes.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/all" element={<All />} />
          <Route path="/usa" element={<USA />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

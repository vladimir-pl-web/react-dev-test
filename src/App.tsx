import { BrowserRouter, Route, Routes } from "react-router-dom"
import classes from "./app.module.scss"
import Main from "./pages/main/main/main"
import All from "./pages/all/all"
import US from "./pages/us/us"
function App() {
  // useEffect(() => {
  //   const getResult = async () => {
  //     const res = await ContactsService.getContacts()
  //     console.log(res,"res")
  //   }
  //  console.log(getResult(),"res")

  // }, [])

  return (
    <div className={classes.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/all" element={<All />} />
          <Route path="/us" element={<US />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

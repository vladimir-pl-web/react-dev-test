import React, { useEffect } from 'react';
import ContactsService from './services/contactsService';
import Main from './pages/main/main';
import classes from './app.module.scss'
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
     <Main />
    </div>
  );
}

export default App;



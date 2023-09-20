import React, { useEffect } from 'react';
import './App.css';
import ContactsService from './services/contactsService';

function App() {


  useEffect(() => {
    const getResult = async () => {
      const res = await ContactsService.getContacts()
      console.log(res,"res")
    }
   console.log(getResult(),"res")
    
  }, [])
  
  return (
    <div className="App">
      Hello from pastor line test
    </div>
  );
}

export default App;



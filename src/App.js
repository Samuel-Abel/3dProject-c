import React, { useEffect, useState } from 'react';
import './App.css';
import Auth from './components/auth/Auth';
import Sitebar from './components/Navbar/Navbar'
import Homepg from './components/forumcomponents/ForumHome'


function App() {

  const [sessionToken, setSessionToken] = useState('')

  useEffect(()=>{
    if(localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'))
    }
  }, [])

  const clearToken = () =>{
    localStorage.clear()
    setSessionToken('')
  }

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken)
    setSessionToken(newToken)
    console.log(newToken);
  }

  const protectedViews = () => {
    return localStorage.getItem('token') === sessionToken ?<Homepg token={sessionToken}/> : <Auth updateToken={updateToken}/>
  }

  return (
    <div className="App">
      <Sitebar clicklogout={clearToken}/>
      {protectedViews()}
    </div>
  );
}

export default App;
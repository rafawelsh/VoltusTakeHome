import React, {useState, useEffect} from 'react'
import './App.css'
import SearchOrg from './searchOrganization/SearchOrg'

function App() {
  const [organization, setOrg] = useState({});

  useEffect(() => {
      lookUpOrganization()
      
  }, [setOrg])

  async function lookUpOrganization() {
      await fetch(`http://challenge.voltus.co/facilities/1`)
      .then(response => response.json())
      .then(data => {
          console.log(data)
          setOrg(data)
      })
      .catch(err => console.error(err))
  }

  const {facilities, name} = organization

  return (
    <div>
      <header style={{height:'5vh', backgroundColor:'gray', color:'white'}}>{name}</header>
      <SearchOrg facilities={facilities}/>
      
    </div>
  )
}

export default App

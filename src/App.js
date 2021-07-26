import React, {useState, useEffect} from 'react'
import './App.css'
import SearchOrg from './searchOrganization/SearchOrg'

function App() {
  const [organization, setOrg] = useState({});

  useEffect(() => {
      lookUpOrganization()
      
  }, [setOrg])

  async function lookUpOrganization() {
      await fetch(`http://challenge.voltus.co/facilities/1
      `)
      .then(response => response.json())
      .then(data => {
          setOrg(data)
      })
      .catch(err => console.error(err))
  }

  const {facilities, name} = organization

  return (
    <main>
      <header style={{ backgroundColor:'gray', color:'white'}}>
        <h1>{name}</h1>
      </header>
      <SearchOrg facilities={facilities}/>
      
    </main>
  )
}

export default App

import React, {useState, useEffect} from 'react'

function SearchOrg() {
    const [organization, setOrg] = useState({});

    useEffect(() => {
        lookUpOrganization()
    
    }, [setOrg])

    async function lookUpOrganization() {
        await fetch(`http://challenge.voltus.co/facilities/1`)
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            setOrg(data)
        })
        .catch(err => console.error(err))
    }
    

    //destructe organization data
    const {id, facilities, name} = organization
    console.log(id)
    console.log(facilities)
    console.log(name)

    return (
        <div>
            Hi
        </div>
    )
}

export default SearchOrg

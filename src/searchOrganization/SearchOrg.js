import React, {useState, useEffect} from 'react'
import WrappedMap from '../mapView/MapView'

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
            <div style={{ width: '100vw', height: '100vh'}}>
                <WrappedMap googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBCaIQ2eJA8DGOi50k26FbMZsgwCWJny68'}
                loadingElement={<div style={{ height: '100%' }} />}
                containerElement={<div style={{ height: '100%' }} />}
                mapElement={<div style={{ height: '100%' }} />}
                />
            </div>
        </div>
    )
}

export default SearchOrg

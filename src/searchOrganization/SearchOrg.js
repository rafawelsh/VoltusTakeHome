import React, {useState, useEffect} from 'react'
import WrappedMap from '../mapView/MapView'
import LeftPanel from '../leftPanel/LeftPanel'

function SearchOrg() {
    const [organization, setOrg] = useState({});

    useEffect(() => {
        lookUpOrganization()
    
    }, [setOrg])

    async function lookUpOrganization() {
        await fetch(`http://challenge.voltus.co/facilities/1`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            return setOrg(data)
        })
        .catch(err => console.error(err))
    }
    

    //destructe organization data
    console.log(organization)
    const {id, facilities, name} = organization
    // for (const {name: n} of Object.values(facilities)[0]) {
    //     console.log(n)
    // }

    return (
        <div style={{display: 'flex', justifyContent: 'space-between'}}>

            
            <LeftPanel facilities={facilities} />
            

            <div style={{ width: '75vw', height: '100vh'}}>
                <WrappedMap facilities={facilities}
                googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBCaIQ2eJA8DGOi50k26FbMZsgwCWJny68'}
                loadingElement={<div style={{ height: '100%' }} />}
                containerElement={<div style={{ height: '100%' }} />}
                mapElement={<div style={{ height: '100%' }} />}
                />
            </div>
        </div>
    )
}

export default SearchOrg

import React from 'react'
import WrappedMap from '../mapView/MapView'
import LeftPanel from '../leftPanel/LeftPanel'

function SearchOrg(facilities) {
    if (!facilities.facilities) return null
    
    //extracting from nested object
    facilities = facilities.facilities
    
    return (
        <div style={{display: 'flex', justifyContent: 'space-between'}}>

            <LeftPanel facilities={facilities} />            

            <div style={{ width: '75vw', height: '93vh'}}>
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

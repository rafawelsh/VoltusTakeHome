import React, {useState} from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps'

function Map(facilities) {
    const [selectedPark, setSelectedPark] = useState(null)
    if (!facilities) return null
    // facilities = [...facilities]
    // console.log(facilities)
    // console.log([facilities])
    // console.log(Object.values(facilities)[0])
    // console.log(Object.values(facilities))
    
    // console.log(facilities.facilities)
    const places = Object.values(facilities)[0]
    for (const {name: n, coord: c, id: idx, threshold: t} of Object.values(facilities)[0]) {
        console.log(n)
    }
    
    return (
        <GoogleMap 
            defaultZoom={10} 
            defaultCenter={{lat:33.749, lng:-84.388}}
        >
            {places.map((facility) => (
                <Marker 
                    key={facility.id}
                    position={{
                        lat: facility.coord[0],
                        lng: facility.coord[1]
                    }}
                    onClick={() => {
                        setSelectedPark(facility)
                    }}
                />
            ))}
        </GoogleMap>
    );
}
/**
 [
    0: {name: "Atlanta", coord: Array(2), id: 1, threshold: 200}
    1: {name: "Savannah", coord: Array(2), id: 2, threshold: 150}
    2: {name: "Montgomery", coord: Array(2), i
 ]
 */
const WrappedMap = withScriptjs(withGoogleMap(Map));

export default WrappedMap

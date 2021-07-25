import React, {useState} from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps'

function Map(facilities) {
    const [selectedPark, setSelectedPark] = useState(null)
    if (!facilities.facilities) return null

    const places = Object.values(facilities)[0]
    // console.log(facilities)
    // console.log(typeof places)
    // console.log(places)
    // for (const {name: n, coord: c, id: idx, threshold: t} of Object.values(facilities)[0]) {
    //     console.log(n)
    // }
    
    return (
        <GoogleMap 
            defaultZoom={6} 
            defaultCenter={{lat:places[0].coord[0], lng:places[0].coord[1]}}
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

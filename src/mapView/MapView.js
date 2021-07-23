import React from 'react'
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'

function Map() {
    return (
        <GoogleMap defaultZoom={10} defaultCenter={{lat:33.749, lng:-84.388}} />
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default WrappedMap

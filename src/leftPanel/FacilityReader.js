import React from 'react'

function FacilityReader(name) {
    if (!name) return null
    return (
        <div>
            <p>{name}</p>
        </div>
    )
}

export default FacilityReader

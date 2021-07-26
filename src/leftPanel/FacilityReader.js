import React, {useState} from 'react'

function FacilityReader(places, updateFacility) {
    const [location, setLocation] = useState('')
    const [input, setInput] = useState('')
     
    if (!places.places) return null

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleSelect = (e) => {
        setLocation(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(input)
        console.log(location)
        updateFacility(location, input)
    }

    return (
        <form onSubmit={handleSubmit}>
            <select name="cars" id="cars" value={location} onChange={handleSelect}>
                <option value="none" defaultValue>
                    Select
                </option>
            {places.places.map(location => {
                return (
                    <option key={location.id} value={location.name} >{location.name}</option>
                )
            })}
            </select>

            <input type="text" value={input} placeholder="kw" onChange={handleChange} />
            <input type="submit" value="Submit" />
        </form>
    )
}

export default FacilityReader

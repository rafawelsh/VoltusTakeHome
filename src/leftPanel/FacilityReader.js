import React, {useState} from 'react'

function FacilityReader(places) {
    const [input, setInput] = useState('')
    const [location, setLocation] = useState('')
    if (!places.places) return null
    console.log(places)

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleSelect = (e) => {
        setLocation(e.target.value)
    }

    const handleSubmit = (e) => {
        console.log(input)
        console.log(location)
        e.preventDefault()
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

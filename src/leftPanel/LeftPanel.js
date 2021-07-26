import React, {useState} from 'react'
// import FacilityReader from './FacilityReader'

function LeftPanel(facilities) {
    const [places, setPlaces] = useState(Object.values(facilities)[0])
    const [location, setLocation] = useState('')
    const [input, setInput] = useState('')
    const [kw, setKW] = useState(0)
    let totalKW = 0
   
    if (!facilities.facilities) return null

    places.map((place) => {
        if (!place.kilowatts) {
            place.kilowatts = 0
        }
        if (!place.lastUpdate) {
            const date = new Date("2018-07-25T11:00:00.000Z")
            place.lastUpdate = date.toUTCString()
        }
    })

   
    const handleChange = (e) => {
        setInput(e.target.value)
        const number = parseInt(e.target.value)
        setKW(number)
    }

    const handleSelect = (e) => {
        setLocation(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        let date = new Date()
        date = date.toUTCString()
       
        const newPlaces = places.map((place) => {
            if (place.name === location) {
                place.kilowatts = kw
                place.lastUpdate = date
            }
            return place
        })
        setPlaces(newPlaces)
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent:'space-around', minWidth: '25vw'}}>
            <form onSubmit={handleSubmit}>
                <select name="locations" id="locations" value={location} onChange={handleSelect}>
                    <option value="none" defaultValue>
                        Select
                    </option>
                {places.map(location => {
                    return (
                        <option key={location.id} value={location.name} >{location.name}</option>
                    )
                })}
                </select>

                <input type="text" value={input} placeholder="kw" onChange={handleChange} />
                <input type="submit" value="Submit" />
            </form>

            <table style={{height: '50vh'}}>
                <thead>
                    <tr>
                        <th>Facility</th>
                        <th>Reading</th>
                        <th>Last Update</th>
                    </tr>
                </thead>
                <tbody>
                {places.map((facility) => {
                    totalKW += facility.kilowatts
                    return (
                        <tr key={facility.id} 
                        style={ facility.id%2===0 ? { backgroundColor:'white'} : {backgroundColor:'#007eff47'}}>
                            <td>{facility.name}</td>
                            <td>{facility.kilowatts} kw</td>
                            <td>{facility.lastUpdate}</td>
                        </tr>
                    )        
                })}
                </tbody>
                <tfoot style={{backgroundColor: 'limegreen'}}>
                    <tr>
                        <td>All</td>
                        <td>{totalKW} kw</td>
                        <td> </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
    
}

export default LeftPanel

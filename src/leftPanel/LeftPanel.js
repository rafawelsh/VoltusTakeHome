import React, {useState} from 'react'
// import FacilityReader from './FacilityReader'

function LeftPanel(facilities) {
    const [places, setPlaces] = useState(Object.values(facilities)[0])
    const [location, setLocation] = useState('')
    const [input, setInput] = useState('')
    const [kw, setKW] = useState(0)
   
    if (!facilities.facilities) return null
  
    places.map((place) => {
        place.kilowatts = 0
    })

    /*
    * Attmpting to set `kw` to the input to then update the place.kilowatts
    */
    const handleChange = (e) => {
        setInput(e.target.value)
        const number = parseInt(e.target.value)
        setKW(number)
    }

    const handleSelect = (e) => {
        setLocation(e.target.value)
    }

    /*
     * This handleSubmit would be the place where the Reading and Time are updated.
     * Difficulties writing the code to update those props
     * It's suppose to find the matching place and then we updated the whole Array of `places` 
     * and update with setPlaces
     */
    const handleSubmit = (e) => {
        e.preventDefault()
        const newPlaces = places.map((place) => {
            if (place.name === location) {
                const updatedPlace = {
                    ...place,
                    kilowatts: {kw}
                }
                return updatedPlace
            }
            return place
        })
        setPlaces(newPlaces)
    }
    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent:'space-around'}}>
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
                    return (
                        <tr key={facility.id} 
                        style={ facility.id%2===0 ? { backgroundColor:'white'} : {backgroundColor:'#007eff47'}}>
                            <td>{facility.name}</td>
                            <td>{facility.kilowatts} kw</td>
                            <td>time</td>
                        </tr>
                    )        
                })}
                </tbody>
                <tfoot style={{backgroundColor: 'green'}}>
                    <tr>
                        <td>All</td>
                        <td>0 kw</td>
                        <td> </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
    
}

export default LeftPanel

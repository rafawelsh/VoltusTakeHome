import React, {useState, useEffect} from 'react'
import FacilityReader from './FacilityReader'
/**
 * Top panel
 * 
 * 
 * 
 * Bottom panel:
 *  Needs the facility names (props from SearchOrg.js)
 * 
 */
function LeftPanel(facilities) {
    const [kilowatts, setKilowatts] = useState(0)
    if (!facilities.facilities) return null

    const places = Object.values(facilities)[0]

    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent:'space-around'}}>
            <FacilityReader places={places} style={{height: '50vh'}}/>
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
                        style={ facility.id%2===0 ? { backgroundColor:'white'} : {backgroundColor:'#007eff47'} }>
                            <td>{facility.name}</td>
                            <td>{kilowatts} kw</td>
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

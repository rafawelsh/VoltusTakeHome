import React, {useState} from 'react'
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
    if (!facilities.facilities) return null

    const places = Object.values(facilities)[0]
    console.log('facilities @ 16 ', facilities)
    console.log(typeof places)
    console.log(places)
    // for (const {name: n, coord: c, id: idx, threshold: t} of Object.values(facilities)[0]) {
    //     console.log(n)
    // }

        return (
            <div>
            {/* <FacilityReader /> */}
                <table>
                    <tr>
                        <th>Facility</th>
                        <th>Reading</th>
                        <th>Last Update</th>
                    </tr>
                    {places.map((facility) => {
                        return (
                            <tr key={facility.id}>
                                <td>{facility.name}</td>
                                <td>0 kw</td>
                                <td>Hello</td>
                            </tr>
                        )        
                    })}
                    <tr>
                        <td>All</td>
                        <td>0 kw</td>
                        <td> </td>
                    </tr>
                </table>
            </div>
        )
    
}

export default LeftPanel

import React from 'react'
import './CityNav.css'

import { useCityContext } from '../../Usercontext'


const CityNav = () => {

    const { setMainCity } = useCityContext();


    return (
        <div>
            <div className="cityNav-container">
                <li onClick={() => setMainCity('banglore')} >Banglore</li>
                <li onClick={() => setMainCity('hydrabad')} >
                    Hydrabad
                </li>
            </div>
        </div>
    )
}

export default CityNav

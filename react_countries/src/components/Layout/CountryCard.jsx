import React from 'react'
import { NavLink } from 'react-router-dom';

const CountryCard = ({ country }) => {
    const { flags, name, population, region, capital} = country;
    return (
        <li className='country-card card'>
            <div className='container-card bg-white-box'>
                <img src={flags.png} alt={name.common} className='banner-image' />
                <div className='countryInfo'>
                    <p className='card-title'>{name.common.length > 10 ? name.common.slice(0,10) + "...": name.common}</p>
                    <p>
                        <span className='card-description'>population: </span>
                        {population.toLocaleString()}
                    </p>
                    <p>
                        <span className='card-description'>region: </span>
                        {region}
                    </p>
                    <p>
                        <span className='card-description'>capital: </span>
                        {capital[0]}
                    </p>
                    <NavLink to={`/country/${name.common}`}>
                    <button>Read more</button>
                    </NavLink>
                </div>
            </div>
          
        </li>
    )
}

export default CountryCard

import React from 'react'
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';

const Searchfilter = ({ search, setSearch, filter, setFilter,countries, setCountries }) => {
    const handleSelectChange = (e) => {
        event.preventDefault();
        setFilter(e.target.value);
    }

    const sortCountries = (value) => {
        const sortCountry = [...countries].sort((a, b) => {
            if (value === "asc") {
                return a.name.common.localeCompare(b.name.common); 
            } else {
                return b.name.common.localeCompare(a.name.common); 
            }  
        });
        setCountries(sortCountry);
    }

    return (
        <section className='section-searchFilter container'>
            <div>

                <input type="text" placeholder='Search' value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>

                <div>
                    <button onClick={()=> sortCountries("asc")}>
                        <FaLongArrowAltLeft />
                    </button>
                </div>
                <div>
                    <button onClick={()=> sortCountries("des")}>
                        <FaLongArrowAltRight />
                    </button>
                </div>
            <div>
                <select name="" id="" className='select-section' value={filter} onChange={handleSelectChange}>
                    <option value="all">All</option>
                    <option value="africa">Africa</option>
                    <option value="americas">America</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="oceania">Oceania</option>
                </select>
            </div>
        </section>
    )
}

export default Searchfilter

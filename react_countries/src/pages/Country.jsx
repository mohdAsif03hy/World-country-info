import React, { useEffect, useState, useTransition } from 'react'
import { getCountryData } from '../api/postApi';
import Loader from '../components/UI/Loader';
import CoountryCard from '../components/Layout/CountryCard';
import Searchfilter from '../components/UI/Searchfilter';
const Country = () => {


  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);

  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountries(res.data);
    })
  }, [])

  if (isPending) return <Loader />

// here is the main login for search and filter
const searchCountry = (country) => {
  if(search){
    return country.name.common.toLowerCase().includes(search.toLowerCase());
  }
  return true;
};

const filterRegion = (country) => {
  if(filter === "all"){
    return country;
  }return country.region.toLowerCase() === filter.toLowerCase();
  
}



const filterCoountries = countries.filter((country) => searchCountry(country) && filterRegion(country));


  return (

    <section className='country-section'>
 
      <Searchfilter search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} countries={countries} setCountries={setCountries} />


      <ul className='grid grid-four-cols'>
        {
          filterCoountries.map((country, index) => {
            return <CoountryCard key={index} country={country} />
          })
        }
      </ul>
    </section>
  )
}

export default Country

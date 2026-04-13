import axios from "axios";

const api = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

// http get method
export const getCountryData = async () => {
  return api.get(
    "/all?fields=name,flags,capital,population,region,subregion,currencies,languages,tld,borders",
  );
};


export const getCountryIndData = (name) => {
  return api.get(
    `/name/${name}?fullText=true&fields=name,flags,capital,population,region,subregion,currencies,languages,tld,borders`
  );
};
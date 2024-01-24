const baseURL = "http://tra.webtw.xyz:8888/zz_data";
const environment = "dev";
const method = "";


export const getFlightsData = async (iata, direction) => {
  let data = await fetch(
    `${baseURL}/${environment}/flights?iata=${iata}&direction=${direction}`
  );
  data = await data.json();
  return data.flights.Flights;
};
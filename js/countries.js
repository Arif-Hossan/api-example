const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCounties(data));
};
const displayCounties = (countries) => {
  const countryContainer = document.getElementById("countries-container");
  // for (const country of countries){
  //     console.log(country);
  // }
  countries.forEach((country) => {
    // console.log(country);
    const countryDiv = document.createElement("div");
    countryDiv.classList.add("country");
    countryDiv.innerHTML = `

    <h5>Name : ${country.name.common}</h5>
    <P>Official Name: ${country.name.official}</P>
    <P>Country : ${country.capital ? country.capital[0] : "No Capital"}</P>
    <button onClick="loadCountryDetail('${country.cca2}')"">Detail</button>`;
    countryContainer.appendChild(countryDiv);
  });
};
const loadCountryDetail = (code) => {
  // https://restcountries.com/v3.1/alpha/{code}
  const url = `https://restcountries.com/v3.1/alpha/${code}`;
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayDetails(data[0]));
};
const displayDetails = (country) => {
  const detailsContainer = document.getElementById("details");
  detailsContainer.innerHTML=`
  <img style=" height:50px" src="${country.flags.png}">
  <P>Country : ${country.capital ? country.capital[0] : "No Capital"}</P>
  `;
};
loadCountries();

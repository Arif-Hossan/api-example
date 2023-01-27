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
    console.log(country);
    const countryDiv = document.createElement("div");
    countryDiv.innerHTML = `
    <img style="min-width:2%;" src="${country.flags.png}">
    <h5>Name : ${country.name.common}</h5>
    <P>Offical Name: ${country.name.official}</P>
    <P>Country : ${country.capital ? country.capital[0] : "No Capital"}</P>
    `;
    countryContainer.appendChild(countryDiv);
  });
};
loadCountries();

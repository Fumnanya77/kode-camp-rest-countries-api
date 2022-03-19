window.addEventListener('load', getCountries);
const countries = document.getElementById('countries-list');
const details = document.getElementById('details-section');
const countryBody = document.querySelector('.countries-body');
const regions = document.querySelectorAll('.dropdown-item');
const countryRegion = document.getElementsByClassName('country-region');

const mode = document.querySelector('.mode');
const body = document.querySelector('body');
mode.addEventListener('click', ()=>{
  toggleMode();
});


function toggleMode() {
  
  if (body.classList === ('dark-mode')) {
    body.classList.toggle('dark-mode')
  } else {
    body.classList.toggle('dark-mode')
  }
}

function getCountries() {

  const XHR = new XMLHttpRequest();

  XHR.open('GET', 'https://restcountries.com/v2/all', true);

  XHR.onload = function() {

  if (this.status === 200) {
    const response = JSON.parse(this.responseText);
    console.log(response);
    response.forEach(function(element) {
      pasteCountries(element);
    });

      } else {

      }
  }

  XHR.send();
}

function pasteCountries(country) {
  const eachCountry = document.createElement('div');
  eachCountry.classList.add('card', 'countries-body', 'shadow-c',);
  eachCountry.innerHTML = ` 
         <div class="flag card-img-top"><img src="${country.flag}"></div>
         <div class="card-body">
           <h5 class="country-name card-title fw-bold">${country.name}</h5>
           <div class="country-property card-text">
             <p class="country-population"><strong>Population: </strong>${country.population}</p>
             <p class="country-region"><strong>Region: </strong>${country.region}</p>
             <p class="country-capital"><strong>Capital: </strong>${country.capital}</p>
           </div>
         `
  countries.appendChild(eachCountry);
  eachCountry.addEventListener('click', function() {
    getDetailPage(country);

  });


}




function getDetailPage(country) {
  
  details.classList.toggle("switch");
  details.innerHTML = `
  <div class="top-header shadow-sm">
    <div class="container">
        <div class="top-text-holder p-3 mb-5 d-flex justify-content-between align-items-center">
            <h3 class="fw-bold text-white">Where in the world?</h3>
            <a href="#" class="mode text-black"><i class="far fa-moon"></i> Dark Mode</a>
        </div>
    </div>
  </div>

  <div class="container">
    <div class="row col-md-1 my-5">
      <buttun class="btn btn-primary bg-white text-black border-0 shadow-c back-btn"> <i class="fa fa-arrow-left"></i> Back</a>
    </div>
    <div class="row details">
      <div class="flag-display col-md-6"><img src="${country.flag}" alt=""></div>
      <div class="detail-display col-md-6">
        <div class="row">
          <div class="right-detail col-md-6">
            <p><strong>Native Name: </strong>${country.name}</p>
            <p><strong>Population: </strong>${country.population}</p>
            <p><strong>Region: </strong>${country.region}</p>
            <p><strong>Sub-region: </strong>${country.subregion}</p>
            <p><strong>Capital: </strong>${country.capital}</p>
          </div>
          <div class="left-detail col-md-6">
            <p><strong>Top Level Domain: </strong>${country.topLevelDomain}</p>
            <p><strong>Currencies: </strong>${country.currencies}</p>
            <p><strong>Languages: </strong>${country.languages}</p>
          </div>
        </div>
        <br><br><br>
        <div class="border-countries row">
          <p class="col-md-3"><strong>Border Countries:</strong></p>
          <div class="col-md-6">
          <a href="#" class="btn btn-primary bg-white border-0 shadow-c text-black">yyyyyyy</a>
          <a href="#" class="btn btn-primary bg-white border-0 shadow-c text-black">bbbbbbb</a>
          <a href="#" class="btn btn-primary bg-white border-0 shadow-c text-black">ccccccc</a>
          </div>
        </div>
      </div>
    </div>
  </div> `
  const back = details.querySelector(".back-btn");
  back.addEventListener('click', function() {
  details.classList.toggle("switch");
})
}

regions.forEach(function(region) {
  region.addEventListener('click', function() {
    Array.from(countryRegion).forEach(function(countryReg) {
      if(countryReg.innerText.includes(region.innerText) || region.innerText == 'All') {
        countryReg.parentElement.parentElement.parentElement.style.display = 'grid';
      } else {
        countryReg.parentElement.parentElement.parentElement.style.display = 'none';
      }
      // console.log(countryReg.innerText);
    });

  });
});

const search = document.querySelector('.search-input');
const countryName = document.getElementsByClassName('country-name');
search.addEventListener('input', ()=> {
  console.log(search.value.toLowerCase());
  Array.from(countryName).forEach(function(countryReg) {
    if(countryReg.innerText.toLowerCase().includes(search.value.toLowerCase())){
      countryReg.parentElement.parentElement.style.display = 'grid';
    } else {
      countryReg.parentElement.parentElement.style.display = 'none';
    }
  });
})



// }

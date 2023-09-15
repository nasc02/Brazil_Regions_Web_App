async function fetchStatesDataByRegion(code) {
    try {
        const response = await fetch(
            `https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${code}/estados`
        );
        const data = await response.json();

        const states = data;
        const federativeUnitsDiv = document.getElementById("federativeUnits");
        federativeUnitsDiv.innerHTML = "";

        let countOfStates = 0;
        states.forEach((state) => {
            const stateElement = document.createElement("div");
            stateElement.classList.add("state");
            stateElement.innerHTML = `
                <h3>${state.nome}</h3>
                <p>ID: ${state.id}</p>
                <p>Acronym: ${state.sigla}</p>
                <p>Region: ${state.regiao.nome}</p>
            `;

            countOfStates += 1;

            
            stateElement.addEventListener("click", () => {
                fetchCitiesDataByState(state.sigla); 
            });

            federativeUnitsDiv.appendChild(stateElement);
        });

        const countOfStatesDiv = document.getElementById("countOfStates");
        countOfStatesDiv.innerHTML = `Count of states: ${countOfStates}`;

    } catch (error) {
        console.error("Error fetching states data:", error);
    }
}



async function fetchCitiesDataByState(state) {
    try {
        const response = await fetch(
            `https://brasilapi.com.br/api/ibge/municipios/v1/${state}?providers=dados-abertos-br,gov,wikipedia`
        );
        const data = await response.json();

        const cities = data;
        const citiesDiv = document.getElementById("cities");
        citiesDiv.innerHTML = "";

        let countOfCities = 0;
        cities.forEach((city) => {
            const cityElement = document.createElement("div");
            cityElement.classList.add("city");
            cityElement.innerHTML = `
                <h3>${city.nome}</h3>
                <p>IBGE code: ${city.codigo_ibge}</p>
            `;

            countOfCities += 1;

            citiesDiv.appendChild(cityElement);
        });

        const countOfCitiesDiv = document.getElementById("countOfCities");
        countOfCitiesDiv.innerHTML = `Count of cities: ${countOfCities}`;

    } catch (error) {
        console.error("Error fetching cities data:", error);
    }
}


document.getElementById("stateForm").addEventListener("submit", function (event) {
        event.preventDefault();

        const stateInput = document.getElementById("state");
        const stateValue = stateInput.value;

        fetchCitiesDataByState(stateValue);
    });
    


const regionButtons = document.querySelectorAll("#regionButtons button");
regionButtons.forEach((button) => {
    button.addEventListener("click", function () {
        const regionCode = button.id;
        fetchStatesDataByRegion(regionCode);
    });
});


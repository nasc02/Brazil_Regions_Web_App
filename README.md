# Brazil_Regions_Web_App

This Brazil Regions App is a web application that allows users to retrieve information about Brazilian states and cities. It provides functionality to fetch and display data related to states and their respective cities within those states adn regions.

<h2>Usage</h2>
To use the Brazil Data App, you need an internet connection and a web browser. The application fetches data from two external APIs to provide information about Brazilian states and cities. The user interface includes a form to input a state, buttons to select regions, and sections to display state and city information.
You just need to simple open the index.html

## Project Structure

The project consists of HTML, JavaScript, and CSS files. The core logic is contained in the JavaScript file (script.js), which interacts with the HTML structure defined in index.html and is styled using the stylesheet.css file.

## Key Functions

### `fetchStatesDataByRegion`

This function fetches data about Brazilian states based on a region code and displays it in the web app. It also adds click event listeners to each state for further interaction.

### `fetchCitiesDataByState`

This function fetches data about cities within a specific Brazilian state and displays it in the web app. It is triggered when a state is clicked.

## Event Listeners

- `submit` event listener on the stateForm: Triggers the `fetchCitiesDataByState` function when the user submits the state form to search for cities.
- `click` event listeners on state elements: Trigger the `fetchCitiesDataByState` function when a state is clicked to show the cities within that state.

## Usage

1. Select a region by clicking on one of the region buttons (North, Northeast, Central-West, Southeast, South).
2. The states within the selected region will be displayed, and you can click on a state to view information about the cities within that state.
3. Alternatively, you can use the "Write the state to see the cities" form to directly search for cities within a specific state.

## Styling

The CSS (stylesheet.css) defines the visual appearance of the web app, including colors, fonts, and layout. It can be customized to match your design preferences.

Please note that the code may require additional modifications to resolve issues with the `fetchOnlyCitieDataByState` function and to adapt the styling to your specific requirements.

## Notes

The Web app its not formatted to have responsiviness with small screens and does no have any sofisticated frameworkds, its a app just to show functionality,  maybe in the future some features can be added.

The API's used in this project are:
https://brasilapi.com.br/
https://servicodados.ibge.gov.br/api/docs/

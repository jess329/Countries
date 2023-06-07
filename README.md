# Country Search App

This is a React application that allows users to search for countries and display information about them. It utilizes an API to fetch data about countries based on user input.

## Features

- User can enter a country name in the search input field.
- When the user clicks the search button, the application fetches data about the country from an API.
- The fetched country data is displayed in the UI, showing information such as population, capital, languages, and more.
- The application stores the fetched data, allowing the user to search for multiple countries without making additional API requests.
- If the user performs a search with an empty query, the application resets and displays data for all countries.

## Installation

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd country-search-app`
3. Install the dependencies: `npm install`

## Usage

1. Start the development server: `npm start`
2. Open the browser and visit `` to view the application.
3. Enter a country name in the search input field and click the search button.
4. The application will fetch and display data about the searched country.
5. To search for another country, enter a new name and click the search button.
6. If you want to reset the search and display data for all countries, leave the search input field empty and click the search button.

## API Used

This application utilizes the [Country API](https://country-facts.p.rapidapi.com/all) to fetch data about countries. The API provides information about countries such as population, capital, languages, flag and more.

Please note that you may need to replace the API endpoint in the code with the actual endpoint you're using.

## Contributing

Contributions are welcome! If you find any issues or want to enhance the application, feel free to submit a pull request.


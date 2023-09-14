# Movie Discovery Web Application

![Movie Discovery](link_to_screenshot_or_logo.png)

## Table of Contents
- [Objective](#objective)
- [Requirements](#requirements)
- [User Interface](#user-interface)
- [Movie Search](#movie-search)
- [Movie Details](#movie-details)
- [API Integration](#api-integration)
- [Error Handling](#error-handling)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Objective

Create a movie discovery web application that allows users to search for movies, view details about them, and save their favorite movies. You'll be consuming data from the TMDB API.

## Requirements

### User Interface

- Create a responsive and visually appealing user interface for the application. [Design Link](https://www.figma.com/file/tVfgoNfhYkQaUkh8LGqRab/MovieBox-(Community)?type=design&node-id=1220-324&mode=design&t=6998DWtjQrxz8mOf-0)
- List the top 10 movies on the homepage.
- Display them in a grid layout with their movie posters.
- The Card component should display the movie title and release date.

### Movie Search

- Implement a search feature that allows users to search for movies by title.
- Display search results, including movie posters, titles, and release dates.
- Show a loading indicator while fetching search results.

### Movie Details

- When I go to /movies/:id route (where :id is the movie ID), I should see the movie details page.
- Display the following movie details:
  - Title - [data-testid: movie-title]
  - Release date (in UTC) - [data-testid: movie-release-date]
  - Runtime (in minutes) - [data-testid: movie-runtime]
  - Overview - [data-testid: movie-overview]

### API Integration

- Consume the TMDB API to fetch movie data.
- Use the following API endpoint to fetch movie details: [TMDB API Movie Details](https://api.themoviedb.org/3/movie/{movie_id})

### Error Handling

- Implement error handling to display meaningful error messages to users in case of API failures or other issues.

## Installation

1. Clone this repository: `https://github.com/iroatu08/hng_task_2.git`
2. Change to the project directory: `cd hng_task_2`
3. Install dependencies: `npm install`

## Usage

1. Start the development server: `npm start`
2. Open your web browser and visit: `http://localhost:3000`

## Contributing

Contributions are welcome! If you have any ideas, bug reports, or feature requests, please create an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

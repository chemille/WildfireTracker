# WildfireTracker

## Overview

This respository contains the source code for the WildfireTracker application. The development of this web application aims to assist individuals in checking for nearby wildfires and offering relevant resources such as hospitals, lodging, and safe havens. 

## Getting Started

## Prerequisites

Before you begin, ensure you have the following dependencies installed:

1. [google-map-react](https://www.npmjs.com/package/google-map-react)
   ```bash
   npm install google-map-react
  
2. @geoapify/geocoder-autocomplete
    ```bash
    npm install @geoapify/geocoder-autocomplete

3. react-router-dom
    ```bash
    npm install react-router-dom

4. Axios library
   ```bash
   npm install axios

## Installation

To run the WildfireTracker locally, follow these steps:

1. Clone this repository to your local machine.
### `git clone https://github.com/chemille/WildfireTracker.git`

2. Navigate to the project directory.
### `cd wildfiretracker`
### `cd frontend`

3. Install the required dependencies using npm.
### `npm install`

4. Start the development server.
### `npm start`

5. Open your browser and visit [http://localhost:3000](http://localhost:3000) to access the WildfireTracker application.

### 1. Interactive Location Input

- Users can input their location through an interactive interface.
- Location input supports autocomplete suggestions for ease of use.

### 2. Location Submission

- Upon clicking the submit button with the selected location, users are seamlessly routed to a new page for further information.

### 3. Dynamic Map Display

- The new page features a dynamic map displaying the user's selected location.
- Fire markers are placed on the map to indicate the presence of wildfires.

### 4. Fire Marker Interaction

- Users can click on fire markers to access detailed information about specific wildfires in the area.

### 5. Resource Access

- Clicking on a fire marker provides users with access to essential resources, including:
  - Hospitals
  - Lodging
  - Safe havens

### 6. User-Friendly Interface

- The application is designed with a user-friendly interface to enhance the overall experience.
- Intuitive navigation ensures that users can easily input their location and access relevant information.

## Technologies Used

React: A popular JavaScript library for building user interfaces.

HTML: The standard markup language for creating web pages.

CSS: The styling language used to design the visual presentation of the application.

JavaScript: The programming language used to add interactivity and functionality to the frontend.

Axios: A library for making HTTP requests to the backend API.

React Router: A routing library for managing navigation within the application.

## APIs Used

- **Geoapify Geocoding API:** Used for location autocomplete and geocoding.
- **Google Maps API:** Integrated to display maps and fire markers.
- **NASA Fire Information for Resource Management System (FIRMS) API:** Utilized to pull event data for wildfires.

## Team

Meet the awesome team behind this project:

### [Farrah U.]([https://github.com/Farrah-Unger])

### [Tazmeen A.]([https://github.com/TazA01])

### [Michelle O.]([[https://github.com/chemille])


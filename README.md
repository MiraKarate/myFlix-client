# myFlix-client

## Objective

The myFlix Client-Side application is a web-based movie application built using React.
It interacts with a server-side application, which provides a RESTful API for managing and retrieving movie data.  
The interface the users use when making requests to—and receiving responses from—the server-side is being created. The
client-side of the myFlix app includes several interface views (built using the React library) that will
handle data through the (previously defined) REST API endpoints.  
This README provides an overview of the project structure and instructions for getting started with the client-side application.




## Essential Views & Features:

### Main view

+ Returns ALL movies to the user (each movie item with an image, title, and description)
+ Filtering the list of movies with a “search” feature
+ Ability to select a movie for more details
+ Ability to log out
+ Ability to navigate to Profile view

<img width="1511" alt="myflix-app" src="https://github.com/MiraKarate/myFlix-client/assets/124045048/42c441a2-0018-4cf1-9e3d-bdeaba1a6011">


### Single Movie view
+ Returns data (description, genre, director, image) about a single movie to the user
+ Allows users to add a movie to their list of favorites

<img width="1508" alt="myflix-app-detail" src="https://github.com/MiraKarate/myFlix-client/assets/124045048/904e1e6d-2900-4a9f-87c8-c6e3a6762ab0">

### Signup view
+ Allows new users to register (username, password, email, date of birth)

### Login view
+ Allows users to log in with a username and password

<img width="1014" alt="myflix-app-login" src="https://github.com/MiraKarate/myFlix-client/assets/124045048/d0aaa7fb-17b6-47dc-a365-c402593eb83a">


### Profile view
+ Displays user registration details
+ Allows users to update their info (username, password, email, date of birth)
+ Displays favorite movies
+ Allows users to remove a movie from their list of favorites
+ Allows existing users to deregister

<img width="1501" alt="myfliy-app-profile" src="https://github.com/MiraKarate/myFlix-client/assets/124045048/49482eb0-b0c0-4aba-98c4-72fd3c665f23">


## About React

This project is built using [React](https://reactjs.org/), a popular JavaScript library for building user interfaces. React makes it easier to create interactive and dynamic web applications with reusable components and a virtual DOM. 

React is used extensively in this client-side application to create a responsive and user-friendly interface. If you're new to React, you might find it beneficial to explore the React documentation to gain a better understanding of how the client-side of this application is structured and how components are used to build the user interface.

For more information and resources about React, visit the [official React website](https://reactjs.org/).

## Getting Started

To run the myFlix client-side application locally, follow these steps:
 
Clone this repository to your local machine:

```bash
git clone https://github.com/your-username/myFlix-client.git
```

Navigate to the project directory:

```bash
cd myFlix-client
```

Install project dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Open your web browser and access the client-side application at http://localhost:3000.

Explore the application's features, interact with it, and customize it to your specific project requirements.

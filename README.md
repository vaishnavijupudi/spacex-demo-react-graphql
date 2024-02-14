# Getting Started with  App

This project consists of a small peek into the spaceX demo. This project has Home Page which allows the user to navigate to two pages one being upcoming-missions and other being launches. The user can view the page and if he is intrested to learn more he can click on learn to be navigated to individual launch details. There is a filter for date in launches page which allows user to filter out the launches based on the dates.

## Authors

- [Sai Vaishnavi Jupudi]- _(Developer)_

### Prerequisites

To have a local copy of this tutorial up and running on your local machine, you will first need to install the following software / libraries / plug-ins
​
```
Node Package Manager (NPM)
A browser (ex:chrome)
A code editor(ex: vscode)
Git Bash
```

### Installing

Follow the below steps to install and run the application in the local environment

```
git clone https://github.com/vaishnavijupudi/spacex-demo-react-graphql.git
cd spacex-demo-react-graphql
npm install
npm start
```

```
Check the URL: http://localhost:3000 for the demo
```

## Built With

- [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) - Node Package manager
- [ReactJs](https://reactjs.org/docs/create-a-new-react-app.html) - The frontend framework
- [MaterialUI](https://mui.com/material-ui/) - The styling framework used.
- [GraphQl](https://studio.apollographql.com/public/SpaceX-pxxbxen/variant/current/home) - The api for data

## Home Page
- The page consists of two buttons one navigates to launches and other navigates to upcoming launches
- The page is responsive

## Launches Page
- The page consists of all launches with an option to read mnore about the individual launch
- The page also has two dates start date and end date with which the data belonging to that particular dates can be rendered
- The data with with no images have a default image in the page
- The page is responsive

## Upcoming-Launches Page
- The page consists of all upcoming launches with an option to read mnore about the individual launch
- The page also has a sneak peak to the rocket description. It is replaced with ... after 150 characters to maintain consistency
- The data with with no images have a default image in the page
- The page is responsive

## Launche Details Page
- The page consists of information related to the particular launche with an option to read more about the individual launch articles and users are given a option to view the video to
- The page consists of details like mission description, rocket details. if there is no data related to them then it is not displayed
- The data with with no images have a default image in the page
- The page is responsive

## Nav
- The Icon on the nav bar navigates to home page when clicked on it
- It is displayed in all pages
- It is responsive


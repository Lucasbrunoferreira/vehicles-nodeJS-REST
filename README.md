# Vehicles - Express REST API - Node.JS + MySQL (Oficina5 Test)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) ![node](https://img.shields.io/node/v/express)

## Getting Started

This is a project developed as a test for the company: *Oficina5*.
The project is a REST API, with vehicle theory, using NodeJS and persisting the data in the MySQL database.


### Prerequisites

In order to use this project, you must have the following requirements:

* NODE
* NPM

### Structure

Project structure:

```
src
  ├── api                     --->  API Layer
  │   │
  │   ├── controllers         --->  Handler Requests and call the models.
  │   │
  │   ├── middlewares         --->  Resquests interceptors.
  │   │
  │   ├── routes              --->  The routes of the application.
  │   │
  │   └── validators          --->  Validations and entry rules.
  │
  ├── config                  --->  The configs and loaders.
  │
  │
  ├── persistence             --->  Persistence Data Layer
  │   │
  │   ├── migrations          --->  Management of incremental, reversible changes and version control to relational database schemas.
  │   │
  │   └── models              --->  Models of the Entities
  │
  │
  └── utils                   --->  Helpers and global codes.

```

### Environment

Set the variables according to your environment.
You can follow the env.example file.

| ENV               | Default          | Description                         |
|-------------------|------------------|-------------------------------------|
| PORT              | 8080             | The port to run application         |
| LOG_LEVEL         | debug            | Level of application logs           |
| DATABASE_USER     | root             | User to access database             |
| DATABASE_PASSWORD |                  | Password to access database         |
| DATABASE_HOST     | 127.0.0.1        | Host of the database                |
| DATABASE_PORT     | 3306             | Port of the database                |
| DATABASE          | VehiclesDatabase | Name of database to application use |


### Installing and Running

So you can run your project in your environment, follow these steps:

Clone the project in your preferred folder.


```
cd vehicles-nodeJS-REST
```

```
npm install
```

```
npm run migrate
```

```
npm start
```

And ready! The application will be running on the port defined in your env "PORT"

### Routes


| Method               | Path                                             | Description                         |
|----------------------|--------------------------------------------------|-------------------------------------|
| GET                  | /api/vehicles                                    | Fetch all vehicles                  |
| GET                  | /api/vehicles/:id                                | Fetch vehicle by ID                 |
| GET                  | /api/vehicles/search?key=value&key=value         | Search vehicles by query params     |
| POST                 | /api/vehicles                                    | Create new Vehicle                  |
| PUT                  | /api/vehicles/:id                                | Update complete object vehicle      |
| PATCH                | /api/vehicles/:id                                | Update partly object Vehicle        |
| DELETE               | /api/vehicles/:id                                | Delete one vehicle by id            |


Object to handler Vehicle - (POST, PUT and PATCH -> Body Request)

```json
{
  "vehicle": "Gol GT",
  "brand": "FIAT",
  "year": 2010,
  "sold": false,
  "description": "Awesome vehicle"
}
```


## Running the tests

This application has unit tests using the [Jest](https://jestjs.io/) framework.

To run unit tests:

```
npm run test
```

To run unit tests with coverage:

```
npm run coverage
```


### And coding style tests

So that we can write cleaner and more beautiful code, we can adopt linear frameworks like [Eslint](https://eslint.org/).

```
npm run lint
```

## Deployment


If you want to enjoy the application in production, you can use the [Docker](https://www.docker.com/).

For this, the project has the Dockerfile configuration file, so that it can generate the project image.

```
docker build --name nodejs-api .
```

```
docker run -d -p 8080:8080 nodejs-api
```

## Built With

* [Express](https://expressjs.com/pt-br/) - The web framework used
* [Sequelize](https://sequelize.org/) - Promise-based Node.js ORM for SQL databases.
* [Express-Validator](https://express-validator.github.io) - Set of validations to handler requests.
* [Jest](https://jestjs.io/) - Is a delightful JavaScript Testing Framework
* [Eslint](https://eslint.org/) - The pluggable linting utility for JavaScript
* [EditorConfig](https://editorconfig.org/) - Helps maintain consistent coding styles


## Authors

*  [Lucas Bruno Ferreira](https://github.com/Lucasbrunoferreira)

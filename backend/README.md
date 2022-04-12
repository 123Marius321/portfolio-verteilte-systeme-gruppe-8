# 🍳 REST-API Restaurant Service 🍳

Hierbei handelt es sich um REST-API, die Restaurants in ihr System einbinden können. Diese ermöglicht es Gerichte aus der Speisekarte eines Restaurants, dessen Lieferanten und Mitarbeiter zu erfassen und mit diesen Daten zu arbeiten.  


## Inbetriebnahme

- Run 'cd backend' to switch to backend-folder
- Run 'npm i' to install needed packages
- Run 'docker-compose up --build' to start server and MongoDB


## API calls

#### food collection

- GET /food
    -> Get all food from the system
- GET /food/{number}
    -> Get a specific food by number in menu 
- PUT /food/update/{number}
    -> Update a specific food by number
- POST /food/add
    -> Add a new food
- DELETE /food/remove/{number}
    -> Delete food by number

#### employee collection

- GET /employee
    -> Get all employees from the system
- GET /employee/{number}
    -> Get a specific employee by number in menu 
- PUT /employee/update/{number}
    -> Update a specific employee by number
- POST /employee/add
    -> Add a new employee
- DELETE /employee/remove/{number}
    -> Delete employee by number

#### supplier collection

- GET /supplier
    -> Get all suppliers from the system
- GET /supplier/{number}
    -> Get a specific supplier by number in menu 
- PUT /supplier/update/{number}
    -> Update a specific supplier by number
- POST /supplier/add
    -> Add a new supplier
- DELETE /supplier/remove/{number}
    -> Delete supplier by number

#### Documentation

- Go to http://localhost:4000/api 


## Files & Folders

#### API

- **index.js**: app entry point
- **./routes**: contains all available routes
- **./controllers**: contains functions for each route as well as validators
- **./models**: contains the data model to be persisted in MongoDB
- **package.json**: contains all app dependencies, as well as scripts and meta information

#### Docker

- **Dockerfile**: Docker Image definition for the backend
- **.dockerignore**: Files to be ignored by docker

#### Swagger

- **swaggerDocs.js** contains OpenAPI specification



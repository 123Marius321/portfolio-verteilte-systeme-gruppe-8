const swaggerDocs = {
  swagger: "2.0",
  info: {
    version: "1.0.0",
    title: "Example REST API Restaurant Service",
    description: "API for restaurants",
    license: {
      name: "MIT",
      url: "https://opensource.org/licenses/MIT",
    },
  },
  host: "localhost:4000",
  tags: [
    {
      name: "Food",
      description: "food in the database",
    },
    {
      name: "Employee",
      description: "employees in the database",
    },
    {
      name: "Supplier",
      description: "suppliers in the database",
    },
  ],
  consumes: ["application/json"],
  produces: ["application/json"],
  paths: {
    "/food": {
      get: {
        tags: ["Food"],
        summary: "Get all food in the system",
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "#/definitions/Food",
            },
          },
        },
      },
    },
    "/food/{number}": {
      get: {
        tags: ["Food"],
        summary: "Get a specific food by number in menu",
        parameters: [
          {
            name: "number",
            in: "path",
            description: "Number of the food searched for",
            schema: {
              $ref: "#/definitions/Food",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "#/definitions/Food",
            },
          },
          400: {
            description: "Bad Request",
            schema: {
              $ref: "#/definitions/Food",
            },
          },
        },
      },
    },
    "/food/update/{number}": {
      put: {
        tags: ["Food"],
        summary: "Update a specific food by number",
        parameters: [
          {
            name: "number",
            in: "path",
            description: "Number of the food searched for",
            schema: {
              $ref: "#/definitions/Food",
            },
          },
          {
            name: "food",
            in: "body",
            description: "food will be updated",
            schema: {
              $ref: "#/definitions/Food",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "#/definitions/Food",
            },
          },
          400: {
            description: "Bad Request",
            schema: {
              $ref: "#/definitions/Food",
            },
          },
        },
      },
    },
    "/food/add": {
      post: {
        tags: ["Food"],
        summary: "Add a new food",
        parameters: [
          {
            name: "food",
            in: "body",
            description: "Food to be added",
            schema: {
              $ref: "#/definitions/Food",
            },
          },
        ],
        responses: {
          201: {
            description: "Created",
            schema: {
              $ref: "#/definitions/Food",
            },
          },
          400: {
            description: "Bad Request",
            schema: {
              $ref: "#/definitions/Food",
            },
          },
        },
      },
    },
    "/food/remove/{number}": {
      delete: {
        tags: ["Food"],
        summary: "Delete food by number",
        parameters: [
          {
            name: "number",
            in: "path",
            description: "Number of the food searched for",
            schema: {
              $ref: "#/definitions/Food",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "#/definitions/Food",
            },
          },
          400: {
            description: "Bad Request",
            schema: {
              $ref: "#/definitions/Food",
            },
          },
        },
      },
    },
    "/employee": {
      get: {
        tags: ["Employee"],
        summary: "Get all employee in the system",
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "#/definitions/Employee",
            },
          },
        },
      },
    },
    "/employee/{number}": {
      get: {
        tags: ["Employee"],
        summary: "Get a specific employee by number in menu",
        parameters: [
          {
            name: "number",
            in: "path",
            description: "Number of the employee searched for",
            schema: {
              $ref: "#/definitions/Employee",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "#/definitions/Employee",
            },
          },
          400: {
            description: "Bad Request",
            schema: {
              $ref: "#/definitions/Employee",
            },
          },
        },
      },
    },
    "/employee/update/{number}": {
      put: {
        tags: ["Employee"],
        summary: "Update a specific employee by number",
        parameters: [
          {
            name: "number",
            in: "path",
            description: "Number of the employee searched for",
            schema: {
              $ref: "#/definitions/Employee",
            },
          },
          {
            name: "Employee",
            in: "body",
            description: "employee will be updated",
            schema: {
              $ref: "#/definitions/Employee",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "#/definitions/Employee",
            },
          },
          400: {
            description: "Bad Request",
            schema: {
              $ref: "#/definitions/Employee",
            },
          },
        },
      },
    },
    "/employee/add": {
      post: {
        tags: ["Employee"],
        summary: "Add a new employee",
        parameters: [
          {
            name: "employee",
            in: "body",
            description: "Employee to be added",
            schema: {
              $ref: "#/definitions/Employee",
            },
          },
        ],
        responses: {
          201: {
            description: "Created",
            schema: {
              $ref: "#/definitions/Employee",
            },
          },
          400: {
            description: "Bad Request",
            schema: {
              $ref: "#/definitions/Employee",
            },
          },
        },
      },
    },
    "/employee/remove/{number}": {
      delete: {
        tags: ["Employee"],
        summary: "Delete employee by number",
        parameters: [
          {
            name: "number",
            in: "path",
            description: "Number of the employee searched for",
            schema: {
              $ref: "#/definitions/Employee",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "#/definitions/Employee",
            },
          },
          400: {
            description: "Bad Request",
            schema: {
              $ref: "#/definitions/Employee",
            },
          },
        },
      },
    },
    "/supplier": {
      get: {
        tags: ["Supplier"],
        summary: "Get all supplier in the system",
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "#/definitions/Supplier",
            },
          },
        },
      },
    },
    "/supplier/{number}": {
      get: {
        tags: ["Supplier"],
        summary: "Get a specific supplier by number in menu",
        parameters: [
          {
            name: "number",
            in: "path",
            description: "Number of the supplier searched for",
            schema: {
              $ref: "#/definitions/Supplier",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "#/definitions/Supplier",
            },
          },
          400: {
            description: "Bad Request",
            schema: {
              $ref: "#/definitions/Supplier",
            },
          },
        },
      },
    },
    "/supplier/update/{number}": {
      put: {
        tags: ["Supplier"],
        summary: "Update a specific supplier by number",
        parameters: [
          {
            name: "number",
            in: "path",
            description: "Number of the supplier searched for",
            schema: {
              $ref: "#/definitions/Supplier",
            },
          },
          {
            name: "Supplier",
            in: "body",
            description: "Supplier will be updated",
            schema: {
              $ref: "#/definitions/Supplier",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "#/definitions/Supplier",
            },
          },
          400: {
            description: "Bad Request",
            schema: {
              $ref: "#/definitions/Supplier",
            },
          },
        },
      },
    },
    "/supplier/add": {
      post: {
        tags: ["Supplier"],
        summary: "Add a new supplier",
        parameters: [
          {
            name: "supplier",
            in: "body",
            description: "Supplier to be added",
            schema: {
              $ref: "#/definitions/Supplier",
            },
          },
        ],
        responses: {
          201: {
            description: "Created",
            schema: {
              $ref: "#/definitions/Supplier",
            },
          },
          400: {
            description: "Bad Request",
            schema: {
              $ref: "#/definitions/Supplier",
            },
          },
        },
      },
    },
    "/supplier/remove/{number}": {
      delete: {
        tags: ["Supplier"],
        summary: "Delete supplier by number",
        parameters: [
          {
            name: "number",
            in: "path",
            description: "Number of the supplier searched for",
            schema: {
              $ref: "#/definitions/Supplier",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "#/definitions/Supplier",
            },
          },
          400: {
            description: "Bad Request",
            schema: {
              $ref: "#/definitions/Supplier",
            },
          },
        },
      },
    },
  },
  definitions: {
    Food: {
      required: ["number", "name", "price", "course"],
      properties: {
        _id: {
          type: "string",
          uniqueItems: true,
        },
        number: {
          type: "integer",
          uniqueItems: true,
        },
        name: {
          type: "string",
        },
        price: {
          type: "number",
        },
        course: {
          type: "string",
        },
      },
    },
    Employee: {
      required: ["number", "firstname", "lastname", "job", "salary"],
      properties: {
        _id: {
          type: "string",
          uniqueItems: true,
        },
        number: {
          type: "integer",
          uniqueItems: true,
        },
        firstname: {
          type: "string",
        },
        lastname: {
          type: "string",
        },
        job: {
          type: "string",
        },
        salary: {
          type: "number",
        },
      },
    },
    Supplier: {
      required: ["number", "companyName", "delivery", "deliveryDay"],
      properties: {
        _id: {
          type: "string",
          uniqueItems: true,
        },
        number: {
          type: "integer",
          uniqueItems: true,
        },
        companyName: {
          type: "string",
        },
        delivery: {
          type: "array",
          items: {
            type: "string",
          },
        },
        deliveryDay: {
          type: "string",
        },
      },
    },
  },
};

export default swaggerDocs;

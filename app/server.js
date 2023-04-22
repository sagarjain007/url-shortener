const fileName = "server.js";

require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const routes = require("./action-module/routes");
const mongoose = require("mongoose");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
var cors = require('cors')

process.on("uncaughtException", function (err) {
  console.log(`uncaughtException in FILE: ${fileName}`);
  console.log(err);
  process.exit(1);
});
process.on("unhandledRejection", function (err) {
  console.log(`unhandledRejection in FILE: ${fileName}`);
  console.log(err);
  process.exit(1);
});

const mongoConnect = () => {
  let options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  let url = process.env.MONGO_URL || "mongodb://localhost:27017/Url-Manager";

  mongoose.connect(url, options, (err, client) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Connected to MongoDB");
  });
  
};

mongoConnect();

mongoose.connection.on("connected", () => {
  console.log("Mongoose Connected");
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose disconnected");
});

mongoose.connection.on("reconnected", () => {
  console.log("Mongoose reconnected");
});


// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: "1.0.0",
      title: "Customer API",
      description: "Customer API Information",
      contact: {
        name: "Amazing Developer"
      },
      servers: ["http://localhost:3000"]
    }
  },
  apis: ['./action-module/*.js']
};

app.use(cors())
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(bodyParser.json());
app.use(routes);

let server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Server listening at http://localhost:${server.address().port}`);
});

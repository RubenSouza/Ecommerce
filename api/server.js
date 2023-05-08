const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");

//Start express

const app = express();

//.Env files

dotenv.config();

//Mongo DB connection

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Db connection is working!"))
  .catch(error => {
    console.log("Error: ", error);
  });

// JSON

app.use(express.json());

//Helmet

app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

//Morgan

app.use(morgan("common"));

//Body Parser

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Cors

app.use(cors());

//Models

require("./models");

//Routes

app.use("/", require("./routes"));

//APP Listen

app.listen(3001, error => {
  if (error) throw error;
  console.log(`Server is working in http://localhost:${3001}`);
});

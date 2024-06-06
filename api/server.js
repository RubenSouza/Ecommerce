const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");

//Start express

const app = express();

//PORT

const PORT = process.env.PORT || 3001;

//.Env files

dotenv.config();

//Mongo DB connection

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Db connection is working!");
  } catch (error) {
    console.log("Error: ", error);
    process.exit(1);
  }
};

// JSON

app.use(express.json());

//Helmet

app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

//Morgan

app.use(morgan("common"));

//Body Parser

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Cors

app.use(cors());

//Models

require("./models");

//Routes

app.use("/", require("./routes"));

//APP Listen

connectDB().then(() => {
  app.listen(PORT, error => {
    if (error) throw error;
    console.log(`Server is working in http://localhost:${PORT}`);
  });
});

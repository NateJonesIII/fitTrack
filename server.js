// Dependencies 
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const PORT = process.env.PORT || 3000;

// Initialize express app
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//allow static files to be served
app.use(express.static("public"));
//Pull in routes
app.use(require("./routes/api-routes.js"));
app.use(require("./routes/html-routes.js"));

// Connect to mongo db
mongoose.connect(
	process.env.MONGODB_URI || "mongodb://localhost:27017/fitnesstracker",
	{
		useNewUrlParser: true,
		useFindAndModify: false,
		useUnifiedTopology: true,
		useCreateIndex: true,
	}
);


// start up the server 
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

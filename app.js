//Server Variables
const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4444;

//Using js and css files
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//setting database connection
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

//setting up html router
const htmlRoutes = require("./routes/htmlRoutes.js")(app);
//setting up api router
const apiRoutes = require("./routes/apiRoutes.js")(app);

//starting server
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
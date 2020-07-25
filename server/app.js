require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//run server

app.listen(PORT, () => console.log("Server running on port " + PORT));

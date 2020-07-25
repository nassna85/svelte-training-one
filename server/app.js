require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const postsRoute = require("./routes/postsRoute");

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use("/api/posts", postsRoute);

//run server

app.listen(PORT, () => console.log("Server running on port " + PORT));

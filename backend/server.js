const express = require("express");

const bodyParser = require("body-parser");

const cors = require("cors");

const sequelize = require("./config/database");

const bookRoutes = require("./routes/bookRoutes");

const app = express();
const PORT = 4000;

// Define routes
app.get("/", (req, res) => {
  res.send("Welcome to the Book Inventory System");
});

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/books", bookRoutes);

// Sync the database and start the server
sequelize.sync().then(() => {
  app.listen(PORT, console.log(`Server running on http://localhost:${PORT}`));
});

const express = require("express");
const dotenv = require("dotenv");
const routes = require("./routes");
const mongoose = require("mongoose");
const path = require("path");

// dotenv.config();

// mongoose.connect(process.env.MONGO_URI, (err, res) => {
//   if (err) {
//     console.log(`something went wrong while connecting to Database`);
//   }
//   console.log(
//     `connected to ${path.basename(process.env.MONGO_URI)} Successfully`
//   );
// });
const app = express();

app.use(express.json());
app.use("/api/backend", routes);

app.get("/", (req, res) => {
  const params = req.params;
  const endpoint = req.baseUrl;
  const fullPoint = req.url;
  return res.send(`Backend @ ${endpoint} was hit`);
});

app.all("*", (req, res) => {
  res.status(404).json({ err: `endpoint @ ${req.url} not found` });
});

app.listen(process.env.PORT, (req, res) => {
  console.log(`Server sstarted on port ${process.env.PORT}`);
});

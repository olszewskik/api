const config = require("config");
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const mongoose = require("mongoose");

const port = config.get("port");

const genresRoutes = require("./routes/genres");

const app = express();

mongoose
  .connect("mongodb://localhost/plauground", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Conected to MongoDB ..."))
  .catch((err) => console.error("Could not connect to MongoDB ...", err));

app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use("/api/genres", genresRoutes);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
  console.log(`Env: ${process.env.NODE_ENV}`);
});

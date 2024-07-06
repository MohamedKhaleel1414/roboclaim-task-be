require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const cors = require("cors");
const bodyParser = require("body-parser");
const tradeRoutesRouter = require('./routes/sendHubRouter');

app.use(cors({ origin: true, credentials: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api/v1", tradeRoutesRouter)

app.listen(port, () => console.log(`I'm listening to port ${port}!`));
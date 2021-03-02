const express = require("express");
const app = express();
//ENV
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
//CORS
const cors = require("cors");
app.use(cors());

const routes = require("./routes/mainRoutes");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

routes(app);

app.get("/newRoute", function (req, res, next) {
    res.json({ msg: "This is CORS-enabled for all origins!" });
});
app.get("/api", function (req, res) {
    res.send("Hello SERVER");
});

//mongo connection
mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    })
    .then((err, client) => {
        console.log("conectado no MarcosDB");
    });

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`consolando a porta ${port}`);
});

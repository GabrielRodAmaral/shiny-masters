const express = require("express");
const path = require("path");
const app = express();

const port = 8080;

app.use(express.static(__dirname + '/public'));

app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.set("views", path.join(__dirname, "/views"));

app.listen(port, () => {
    console.log("Servidor iniciado na porta " + port)
});


const indexRouter = require("./routes/indexRouter");
const siteRouter = require("./routes/siteRouter");
const cadastroRouter = require("./routes/cadastroRouter");


app.use("/", indexRouter);
app.use("/", siteRouter);
app.use("/", cadastroRouter);
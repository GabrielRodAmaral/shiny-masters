const express = require("express");

const app = express();

const port = 8080;

app.listen(port, () => {
    console.log("Servidor iniciado na porta " + port)
});

app.use(express.static(__dirname + '/public'));

const indexRouter = require("./routes/indexRouter");
const siteRouter = require("./routes/siteRouter");
const cadastroRouter = require("./routes/cadastroRouter");


app.use("/", indexRouter);
app.use("/", siteRouter);
app.use("/", cadastroRouter);
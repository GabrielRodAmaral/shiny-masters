const express = require("express");
const path = require("path");
const app = express();
const Swal = require('sweetalert2')

const port = 8080;

app.use(express.static(__dirname + '/public'));

app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.set("views", path.join(__dirname, "/views"));

app.listen(port, () => {
    console.log("Servidor iniciado na porta " + port)
});


const indexRouter = require("./src/routes/indexRouter");
const siteRouter = require("./src/routes/siteRouter");
const cadastroRouter = require("./src/routes/cadastroRouter");
const loginRouter = require("./src/routes/loginRouter");
const shinyBoxRouter = require("./src/routes/shinyBoxRouter");
const loginNaoEncontrado = require("./src/routes/loginNaoEncontradoRouter");

app.use("/", indexRouter);
app.use("/site", siteRouter);
app.use("/cadastro", cadastroRouter);
app.use("/login", loginRouter);
app.use("/ShinyBox", shinyBoxRouter);
app.use("/loginNaoEncontrado", loginNaoEncontrado);
let express = require("express");
let data = require("./to-do-list");
const { checkBodyContent } = require("./middleware");
const { createItem, findId, updateItem, deleteByID } = require("./to-do-list");
let app = express();

app.use(express.json()); //body parser

//GET - POST
//Endpoint /items

app.get("/items", (req, res) => {
    let items = data.listaItems;
    res.status(200);
    res.json(items);
});

app.get("/items/:id", (req, res) => {
    let id = req.params.id;
    let result = findId(id);
    if (!result) {
        res.status(404).send({
            sucess: false,
            message: "No se encontró el id",
        });
    } else {
        res.status(200).send(result);
    }
});

app.post("/items", checkBodyContent, (req, res) => {
    let content = req.body;
    createItem(content);
    res.status(201).send(content);
});

app.put("/items/:id", (req, res) => {
    let id = req.params.id;
    let content = req.body;
    let result = findId(id);
    if (!result) {
        //si no encuentra el ID, crear el elemento
        createItem(content);
        res.status(201).send({ success: true, message: "Item creado" });
    } else {
        updateItem(content, id);
        res.status(200).send({ success: true, message: "Item actualizado" });
    }
});

app.delete("/items/:id", (req, res) => {
    let id = req.params.id;
    let result = findId(id);
    if (!result) {
        res.status(404).send({
            sucess: false,
            message: "No se encontró el ID",
        });
    } else {
        deleteByID(id);
        res.status(200).send({ success: true, message: "Item eliminado" });
    }
});

app.use((err, req, res, next) => {
    if (!err) {
        return next();
    } else {
        res.status(500).send("Error inesperado =(");
    }
});

app.listen(3000, () => {
    console.log("Server init port 3000");
});

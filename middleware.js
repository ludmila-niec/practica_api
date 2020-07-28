//checkear body content (title - completed)
function checkBodyContent(req, res, next) {
    let data = req.body;
    let title = data.titulo;
    let completed = data.completed;

    if (!title) {
        res.status(400).send("No se indico la propiedad 'titulo'");
        return;
    }
    if (completed == undefined) {
        res.status(400).send("No se indico la propiedad 'completed'");
        return;
    }

    next();
}

//agregar middleware para verificar que existe el ID del item solicitado

module.exports = { checkBodyContent: checkBodyContent };

let listaItems = [
    { id: 1, title: "Hacer actividad API REST", completed: false },
];

let listaID = 2;

function createItem(data) {
    data.id = listaID++;
    listaItems.push(data);
    return listaItems;
}

function updateItem(data, id) {
    let itemIndex = listaItems.findIndex((item) => item.id == id);
    console.log(itemIndex);
    data.id = id;
    listaItems[itemIndex] = data;
    console.log(listaItems[itemIndex]);
    return listaItems;
}

function findId(id) {
    let tarea = listaItems.find((item) => item.id == id);
    return tarea;
}

function deleteByID(id) {
    let data = listaItems.findIndex((item) => item.id == id);
    listaItems.splice(data, 1);
    return listaItems;
}

module.exports = {
    listaItems: listaItems,
    createItem: createItem,
    findId: findId,
    updateItem: updateItem,
    deleteByID: deleteByID,
};

module.exports = (sequelize, type) => {
    return sequelize.define('libro',{
        idLibro: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        autor: type.STRING,
        editorial: type.STRING,
        imagen: type.STRING,
        titulo: type.STRING,
        genero: type.STRING,
        precio: type.INTEGER,
        stock: type.INTEGER
    })
}
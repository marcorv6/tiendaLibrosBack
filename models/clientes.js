module.exports = (sequelize, type) => {
    return sequelize.define('cliente',{
        idCliente: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: type.STRING,
        password: type.STRING
    })
}
const Sequelize = require('sequelize');

const LibroModel = require('./models/libros');
const ClienteModel = require('./models/clientes');

const sequelize = new Sequelize('prueba','root','123',{
    host: 'localhost',
    dialect: 'mariadb',
});

const Libro = LibroModel(sequelize, Sequelize);
const Cliente = ClienteModel(sequelize, Sequelize);

sequelize.sync( {force: false})
    .then(() => {
        console.log('Tablas sincronizadas')
    })

module.exports = {
    Libro,
    Cliente
}
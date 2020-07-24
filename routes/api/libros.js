const router = require('express').Router();
const app = require('express');

const { Libro } = require('../../bd');

router.get('/', async (req, res) => {
    const libros = await Libro.findAll();
    res.json(libros);
});

router.post('/', async (req, res) =>{
    const libro = await Libro.create(req.body);
    res.json(libro);
});

router.put('/:idLibro', async (req, res) => {
    await Libro.update(req.body, {
        where: { idLibro: req.params.idLibro }
    });
    res.json({success: 'Se ha modificado'});
});

router.delete('/:idLibro', async (req, res)=> {
    await Libro.destroy({
        where: {idLibro: req.params.idLibro}
    });
    res.json({success: 'Se ha borrado el libro'});
});

module.exports = router;

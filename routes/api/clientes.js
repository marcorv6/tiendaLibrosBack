const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { Cliente } = require('../../bd');
const { check, validationResult } = require('express-validator');
const moment = require('moment');
const jwt = require('jwt-simple');


router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('email','El correo electrónico no es correcto').isEmail(),
    check('password','La contraseña es obligatoria').not().isEmpty()
], async (req, res) =>{
    
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({errores: errors.array()})
    }

    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const cliente = await Cliente.create(req.body);
    let message = 'Se ha registrado correctamente';
    res.json(message);
});

router.post('/login', async (req, res) =>{
    const cliente = await Cliente.findOne({ where: { email : req.body.email } });
    if(cliente){
        const iguales = bcrypt.compareSync(req.body.password, cliente.password);
        if(iguales){
            res.json({ success: createToken(cliente) });
        }else {
            res.json({ error: 'Error en usuario y/o contraseña'});
        }
    }
    else{
        res.json({ error: 'Error en usuario y/o contraseña'});
    }
});

const createToken = (cliente) => {
    const payload = {
        usuarioId: cliente.idCliente,
        createdAt: moment().unix(),
        expiredAt: moment().add(30, 'minutes').unix()
    }
    return jwt.encode(payload, 'frase secreta');
}

module.exports = router;

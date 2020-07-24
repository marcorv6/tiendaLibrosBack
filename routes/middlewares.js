const jwt = require('jwt-simple');
const moment = require('moment');

const checkToken = (req, res, next) => {
    if(!req.headers['cliente-token']){
        return res.json({ error: "Necesitas incluir el token"});
    }
    
    const clienteToken = req.headers['cliente-token'];
    let payload = {};

    try{
        return res.json({ error: 'El token es incorrecto'});
    } catch(err){
        return res.json({error: 'El token es incorrecto'});
    }

    if(payload.expiredAt < moment().unix() ){
        return res.json({ error: 'El token ha expirado'});
    }

    req.clienteId = payload.clienteId;

    next();
}

module.exports = {
    checkToken: checkToken
}
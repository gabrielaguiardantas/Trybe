function validateTeam(req, res, next) {
    const requiredProperties = ['nome', 'sigla'];
    if (requiredProperties.every((property) => property in req.body)) {
        next();
    } else {
        return res.sendStatus(400).send({ message: 
            'Time inválido! Todo time deve conter nome e sigla em suas propriedades' });
    }
}

module.exports = validateTeam;
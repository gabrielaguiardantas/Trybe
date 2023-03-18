const teams = [
    { id: 1, nome: 'São Paulo Futebol Clube', sigla: 'SPF' },
    { id: 2, nome: 'Sociedade Esportiva Palmeiras', sigla: 'PAL' },
  ];

const existingId = (req, res, next) => {
    const id = Number(req.params.id);
    if (Number.isNaN(id)) {
        return res.status(400).send({ message: 'Id inválido! Deve ser passado um id numérico' });
    } 
    if (teams.find((t) => t.id === id) === undefined) {
        return res.status(404).send({ message: 'Time não encontrado' });
    }
    next();
};

module.exports = existingId;
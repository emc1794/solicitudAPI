const { Pago , Atencion} = require('./../models');
class PagoController {
    create(req, res) {
        const data = req.body;
        Pago.create(data)
            .then(newPago => {
                Atencion.update({estado:'P'},{where:{id:newPago.atencionId}})
                    .then(()=>{
                        res.status(201);
                        res.json(newPago);
                    })
            })
            .catch(err => {
                console.log(err);
                res.status(500);
                res.end(err);
            })
    }
}

module.exports = PagoController;
const { Atencion , DetalleAtencion, Cliente, Producto, Pago} = require('./../models');

class AtencionController {

    getAll(req, res) {
        Atencion.findAndCountAll({include: [
            {
                model: Cliente,
                as: 'cliente'
            }
        ],
        order:[['id', 'DESC']]})
            .then(result => {
                res.status(200);
                res.json(result);
            })
            .catch(error => {
                console.log(error);
                res.status(500);
                res.send(error);
            })
    }

    getById(req, res) {
        const id = req.params.id;
        const options = {
            include : [
                {
                    model: DetalleAtencion,
                    as: 'detalles',
                    include: [
                        {
                            model: Producto,
                            as: 'producto'
                        }
                    ]
                },
                {
                    model: Cliente,
                    as: 'cliente'
                },
                {
                    model: Pago,
                    as: 'pago'
                }
            ]
        };
        Atencion.findByPk(id, options)
            .then(result => {
                res.status(200);
                res.json(result);
            })
            .catch(error => {
                console.log(error);
                res.status(500);
                res.send(error);
            })
    }

    create(req, res) {
        const data = req.body;
        Atencion.create(data)
            .then(atencion => {
                res.status(201);
                res.json(atencion);
            })
            .catch(error => {
                console.log(error);
                res.status(500);
                res.send(error);
            })
    }

    addDetalles(req, res) {
        const detalles = req.body;
        DetalleAtencion.bulkCreate(detalles)
            .then(data => {
                res.status(201);
                res.json(data);
            })
            .catch(err => {
                res.status(500);
                res.send(err);
            })
    }

    deleteDetalle(req, res) {
        const id = req.params.id
        DetalleAtencion.destroy({where:{id}})
            .then(() => {
                res.status(200);
                res.end();
            })
            .catch(error => {
                console.log(error);
                res.status(500);
                res.send(error);
            })
    }

    update(req, res) {
        const id = req.params.id;
        const data = req.body;
        Atencion.update(data, {where:{id}})
            .then(() => {
                res.status(200);
                res.end();
            })
            .catch(error => {
                console.log(error);
                res.status(500);
                res.send(error);
            })
    }

    updateDetalle(req, res) {
        const atencionId = req.params.atencionId;
        const productoId = req.params.productoId;
        const data = req.body;
        DetalleAtencion.update(data, {where:{
            atencionId,
            productoId
        }})
            .then(() => {
                res.status(200);
                res.end();
            })
            .catch(error => {
                console.log(error);
                res.status(500);
                res.send(error);
            })
    }

    updateTotal(req, res) {
        const id = req.body.id;
        DetalleAtencion.findAll({where:{atencionId:id}})
        .then(detalles => {
            let total = 0;
            detalles.forEach(detalle => {
                total += detalle.precio * detalle.cantidad
            });
            return total;
        })
        .then(total => {
            return Atencion.update({total},{where:{id}})
        })
        .then(() => {
            res.status(200);
            res.end();
        })
        .catch(err => {
            console.log(err);
            res.status(500);
            res.send(err);
        })
    }

    delete(req, res) {
        const id = req.params.id;
        Atencion.destroy({where:{id}})
            .then(() => {
                res.status(200);
                res.end();
            })
            .catch(error => {
                console.log(error);
                res.status(500);
                res.send(error);
            })
    }
}
module.exports = AtencionController;
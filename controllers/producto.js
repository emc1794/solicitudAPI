const { Producto } = require('./../models');
const { filter } = require('../handlers');

class ProductoController {
    getAll(req, res) {
        const options = req.body.sequelizeOptions;
        options.order = [['id', 'DESC']]
        if(req.query.search){
            const condition = filter(req.query.search, ['nombre']);
            Object.assign(options,condition);
        }
        Producto.findAndCountAll(options)
            .then(data =>  {
                data.page = req.query.page;
                data.pageSize = req.query.pageSize
                res.json(data);
            })
            .catch(error => {
                console.log(error);
                res.send(error);
            })
    }

    create(req, res) {
        const data = req.body;

        Producto.create(data)
            .then(data=> {
                res.status(201); 
                res.json(data);
            })
            .catch(error => {
                res.status(500);
                res.end();
                console.log(error)})
    }

    getById(req, res) {
        const id = req.params.id
        Producto.findByPk(id)
            .then(result =>  {
                res.json(result);
            })
            .catch(error => {
                console.log(error);
                res.status(error);
                res.send(error);
            })
    }

    update(req, res) {
        const id = req.params.id;
        const data = req.body;
        Producto.update(data, {where:{id}})
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

    delete(req, res) {
        const id = req.params.id;
        Producto.destroy({where:{id}})
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
module.exports = ProductoController;
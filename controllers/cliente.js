const { Cliente } = require('../models');
const { filter } = require('../handlers');

class ClienteController {

    find(req, res) {
        const options = req.body.sequelizeOptions;
        if(req.query.search){
            const condition = filter(req.query.search, ['nombre','app', 'apm']);
            Object.assign(options,condition);
        }
        options.order = [['id', 'DESC']]
        Cliente.findAndCountAll(options)
            .then(data => {
                data.page = req.query.page;
                data.pageSize = req.query.pageSize
                res.json(data);
            })
            .catch(error=>console.log(error));
    }

    create(req, res) {
        const data = req.body;

        Cliente.create(data)
            .then(data=> {
                res.status(201); 
                res.json(data);
            })
            .catch(error => console.log(error))
    }

    update(req, res) {
        const id = req.params.id;
        const data = req.body;
        Cliente.update(data, {where:{id}})
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
        Cliente.destroy({where:{id}})
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

module.exports = ClienteController;
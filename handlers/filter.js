const { Op } = require("sequelize");
//es una funcion de utilidad 
function filter (search, fields) {
    const options = {
        where: {
            [Op.or]:[]
        }
    }
    fields.forEach(field => {
        options.where[Op.or].push({
            [field]: {
              [Op.like]: `%${search}%`
            }
          })
    });
    return options;
}
module.exports = filter;
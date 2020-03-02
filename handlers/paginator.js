//es middleware mas info. http://expressjs.com/en/guide/using-middleware.html
function paginator(req, res, next) {
    const page = parseInt(req.query.page) || 1
    const pageSize = parseInt(req.query.pageSize) || 10


    const options = {
        limit: pageSize,
        offset: (page - 1) * pageSize 
    }

    req.body.sequelizeOptions = options;
    req.query.page = page;
    req.query.pageSize = pageSize;
    next();
}

module.exports = paginator;
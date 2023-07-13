const DB = require ("../../database/models")
const Op = DB.Sequelize.Op;

module.exports = {
    list: (req, res) => {
        DB.Movie.findAll()
        .then(movies => {
            return res.status(200).json({
                total: movies.length,
                data: movies,
                status: 200
            })
        })
    },
    show: (req, res) => {
        DB.Movie.findByPk(req.params.id)
        .then(movie => {
            return res.status(200).json({
                data: movie,
                status: 200
            })
        })
    },

    store: async (req, res) => {
        const newMovie = {
            title: req.body.title,
            rating: req.body.rating,
            release_date: req.body.release_date,
            awards: req.body.awards,
            length: req.body.length
        }
        try {
        const datos = await DB.Movie.create(newMovie) ;
        res.send(datos);
        } catch (error) {
            console.log(error)
        }
    },

    delete: (req, res) => {
        DB.Movie.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(response => {
            return res.json(response)
        })
    },

    update: async (req, res) => {
        const newMovie = {
            title: req.body.title,
            rating: req.body.rating,
            release_date: req.body.release_date,
            awards: req.body.awards,
            length: req.body.length
        }
        try {
        const datos = await DB.Movie.update(newMovie, {
            where: {
                id: req.params.id
            }
        }) ;
        res.send(datos);
        } catch (error) {
            console.log(error)
        }
    },
    search: (req, res) => {
        DB.Movie.findAll({
            where: {
                title: {[Op.like]: '%' + req.query.keyword + '%'}
            }
        })
        .then(movies => {
            if(movies.length > 0){
            return res.status(200).json(movies)}
            return res.status(200).json('no existen películas')
        })
    }
}
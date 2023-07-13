const { Genre } = require ("../../database/models")

module.exports = {
    getAll: async (req, res) => {
        const genres = await Genre.findAll({
            raw: true
        }) 
        res.json(genres)
    },

    getDetail: async (req, res) => {
        const genre = await Genre.findByPk(req.params.id, {
            raw: true
        })
        res.json(genre)
    },

    create: async (req, res) => {
        const newGenre = {
            name: req.body.name,
            ranking: req.body.ranking,
            active: req.body.active,
            created_at: req.body.created_at
        }
        try {
        const datos = await Genre.create(newGenre) ;
        res.send(datos);
        } catch (error) {
            console.log(error)
        }
    }
}
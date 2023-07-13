const fetch = require ('node-fetch')
const db = require('../database/models');
const Op= db.Sequelize.Op;


const imdbmovieController = {
    list: async (req, res) => {
        fetch('https://www.omdbapi.com/?i=tt3896198&apikey=ea7983​')
        .then(response => response.json())
        .then(provinces => {
            return res.json(provinces)
        })
    },
    getExtraMovie: async (req,res) => {
        try {
            if(!req.query.search){
                return res.status(200).json({
                    msg: 'No se ingresó ningún valor'
                })
            }
            let query = req.query.search;

            let searchedMovie = await db.Movie.findOne({
                where: {
                    title: {[Op.like]: query}
                }
            });
            if(searchedMovie) {
                return res.redirect(`/movies/detail/${searchedMovie.id}`)
            }else{
                let endpoint = `https://www.omdbapi.com/?i=tt3896198&apikey=ea7983&t=${query}`;
                let extraMovie = await fetch(endpoint);

                console.log(extraMovie.data);
                return res.render('extraMovieSearch', {
                    movie: extraMovie.data
                })
            }
        } catch(error) {
            console.log(error);
        }
    }
}

module.exports = imdbmovieController;
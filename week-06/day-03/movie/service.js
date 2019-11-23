const url = require('url');

var movies = [
    {
        "id": 12,
        "title": "Forrest Gump",
        "genre": "drama"
    },
    {
        "id": 23,
        "title": "Mission Impossible 18",
        "genre": "action"
    },
];

exports.getMovieList = function (req, res) {
    var response = {
        "movies": movies
    };

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response));
};



exports.getMovieByGenre = function (req, res) {
    const reqUrl = url.parse(req.url, true);

    const genre = reqUrl.query.genre;
    const result = [];

    movies.forEach(element => {
        if (element.genre === genre) {
            result.push(element);
        }
    })

    if (!result[0]) {
        res.statusCode = 404;
        res.write("This genre does not exist!");
        res.end(JSON.stringify(response));
    } else {
        var response = {
            "filteredMovies": result
        };

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(response));
    }
}

// exports.getMovieById = function (req, res) {

// }

// exports.postMovie = function (req, res) {

// };
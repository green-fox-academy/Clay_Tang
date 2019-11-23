const http = require('http');
const url = require('url');
const service = require('./service.js');


module.exports = http.createServer((req, res) => {
  const reqUrl = url.parse(req.url, true);
  
  if(req.method == 'GET' && reqUrl.query.genre == null && reqUrl.pathname == '/movies') {
    service.getMovieList(req, res);
  }
  else if (req.method == 'GET' && reqUrl.query.genre != null && reqUrl.pathname == '/movies') {
    service.getMovieByGenre(req, res);
  } 

});
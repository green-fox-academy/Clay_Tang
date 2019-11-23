const data = require('./data/data');

module.exports = function(app){
  app.get('/', function(req, res){
    res.render('home', {
      forecasts: data.forecasts
    })
  })

  app.get('/cities/:city', function(req, res){
    data.forecasts.forEach(forecast => {
      if(forecast.city === req.params.city){
        res.render('details', {
          forecasts: forecast
        })
      }
    })
  })
};

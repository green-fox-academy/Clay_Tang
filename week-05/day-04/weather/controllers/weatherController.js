const data = require('./data/data');

module.exports = function(app){
  app.get('/', function(req, res){
    res.render('home', {
      forecasts : data.forecasts
    })
  })

  app.get('/cities/:city', function(req, res){
    let selectedCity;
    data.forecasts.forEach(value => {
      if(value.city == req.params.city){
        selectedCity = value;
        res.render('details', {
          forecasts : selectedCity
        })
      }
    })
    
  })
};


module.exports = function(app){
  app.get('/', function(req, res){
    res.render('home', {name : req.query.name || 'Guest'});

  })
};
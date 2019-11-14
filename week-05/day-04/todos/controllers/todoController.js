module.exports = function(app){
  app.get('/', function(req, res){
    const todos = [
      'get up',
      'survive',
      'go back to bed',
    ];
    res.render('home', {todos: todos});

  })
};
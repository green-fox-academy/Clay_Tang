const express = require('express');

const app = express();

const PORT = 3000;

const path = require('path');

app.use(express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
  const input = req.query;
  if(!input){
    res.send({error:'Please provide an input!'});
  } else{
    res.send({
      received:input,
      result: input * 2
    });
  }
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
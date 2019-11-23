const port = 3000;

const app = require('./controller.js');

app.listen(port, () => {
    console.log(`Server is listening at port: ${port}`);
});
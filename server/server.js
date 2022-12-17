const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const toDoListRouter = require('./routes/to.do.list.router.js')


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));

// ROUTES
app.use('/toDoList', toDoListRouter)

app.listen(PORT, () => {
console.log('listening on port', PORT);
});
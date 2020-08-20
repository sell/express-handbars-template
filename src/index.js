const express = require('express');
const chalk = require('chalk');
const handlebars = require('express-handlebars');
const cors = require('cors');
const helmet = require("helmet");
const api = require('./routes')
const path = require('path');

require('dotenv').config();

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.engine('handlebars', handlebars({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.set("views", path.join(__dirname, "views"));

app.get('/', (req, res) => res.render('index', {
    text: 'members'
}));

// setting path views as static
app.use(express.static(path.join(__dirname, 'views')));

app.use('/api', api)

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(chalk.cyanBright('[Server Started] ' + `http://localhost:${port}`));
})
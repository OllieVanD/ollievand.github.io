const express = require('express');
const app = express();
const port = 3000;
const expressLayouts = require('express-ejs-layouts')
require('dotenv').config()
const methodOverride = require('method-override')
const {Login} = require('./models')
const session = require("express-session")
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"))

app.use(express.static('public'));

const loadRouter = require('./routers/loadPage.js');
app.use('/', loadRouter);

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});

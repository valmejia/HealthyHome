// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

// Handles the handlebars
// https://www.npmjs.com/package/hbs
const hbs = require("hbs");
// standarise request body
var bodyParser = require('body-parser')

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

hbs.registerPartials(__dirname + '/views/partials', function (err){
    console.log(err)
  })


app.use(bodyParser.urlencoded({ extended: false }))

const capitalized = require("./utils/capitalized");
const projectName = "HealthyHome";

app.locals.appTitle = `${capitalized(projectName)} created with IronLauncher`;

// 👇 Start handling routes here
const landingPage = require("./routes/landing_page.routes");
app.use("/", landingPage);

//start
const tasks = require('./routes/tasks.routes')
app.use("/tasks", tasks);

// roooms
const rooms = require('./routes/rooms.routes')
app.use("/rooms", rooms);

//auth
const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);

//testrooms**********
const testroom = require("./routes/testroom.routes");
app.use("/testroom", testroom)

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;

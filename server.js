// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

const DB_IP = process.env.DB_IP || 'localhost';
const DB_USER = process.env.DB_USER || 'bs';
const DB_PASS = process.env.DB_PASS || 'bs';

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var Sequelize = require('sequelize');

var db = new Sequelize('bluesky', 'bs', 'bs',{
    host: DB_IP,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
});

var members = db.import(__dirname + '/models/members.js');
var song_list = db.import(__dirname + '/models/song_list.js');
var shows = db.import(__dirname + '/models/shows.js');

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', (req, res) => {
    res.json({ message: 'hooray! welcome to our api!' });
});


router.route('/members')
    .get((req, res) => {

        console.log('hit members route...');
        db.models.members.findAll().then(m => res.json(m));

    });
router.route('/song_list')
    .get((req, res) => {

        console.log('hit song_list route...');
        db.models.song_list.findAll().then(m => res.json(m));

    });

router.route('/shows')
    .get((req, res) => {

        console.log('hit shows route...');
        db.models.shows.findAll().then(m => res.json(m));

    });

router.route('/members')
    .post((req, res) => {
        console.log('one');
        const first_name = req.body.first_name;
        const last_name = req.body.last_name;
        const role = req.body.role;
        const data = {
            first_name: first_name,
            last_name: last_name,
            role: role
        };
        console.log('two');
        db.models.members.upsert(data)
            .then(res.json(data));

        console.log('three');
    });
// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
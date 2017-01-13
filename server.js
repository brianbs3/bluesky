// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var Sequelize = require('sequelize');

var db = new Sequelize('bluesky', 'bs', 'bs',{
    host: '192.168.0.99',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
});

var members = db.import(__dirname + '/models/members.js');
var song_list = db.import(__dirname + '/models/song_list.js');

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});


router.route('/members')
    .get(function(req, res) {

        console.log('hit members route...');
        var data = db.query("SELECT * from members", {type: db.QueryTypes.SELECT}).then(function(data){
            res.json(data);
        });

    });
router.route('/song_list')
    .get(function(req, res) {

        console.log('hit song_list route...');
        var data = db.query("SELECT * from song_list", {type: db.QueryTypes.SELECT}).then(function(data){
            res.json(data);
        });

    });

router.route('/:id')
    .put(function (req, res) {
        const {id} = req.params;
        //const {prop, value} = req.body.data;
        console.log(id);
        // console.log(prop);
        // console.log(value);
        res.json({message: req.body.data});
    });
// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
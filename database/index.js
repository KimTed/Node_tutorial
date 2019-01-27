'use strict';

const Mongoose 	= require('mongoose');

let dbURI = "mongodb://" +
    process.env.DBHOST + ":" +
    process.env.DBPORT + "/" +
    process.env.DBNAME;

Mongoose.connect(dbURI, { useNewUrlParser: true });

// Throw an error if the connection fails
Mongoose.connection.on('error', function(err) {
    if(err) throw err;
});

Mongoose.Promise = global.Promise;

module.exports = { Mongoose,
    models: {
        detectword: require('./schema/detectword')
    }
};

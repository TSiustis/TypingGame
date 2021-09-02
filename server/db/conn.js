const {MongoClient} = require('mongodb');
const Db = process.env.ATLAS_URI;

const client = new MongoClient(Db, {
    useUnifiedTopology: true,
});

var _db;


module.exports = {
    connectToServer: function(callback){
        client.connect(function(err, db){
            if(db){
                _db = db.db('Typing');
                console.log('Successfully connected to the database');

            }
            return callback(err);
        });
    },
    getDb: function(){
        return _db;
    }
}
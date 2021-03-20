// Connect to Database
import {mongoose} from 'mongoose'
import  Sequelize  from 'sequelize';
import _ from 'lodash';
import casual from 'casual';
 
// Mongo Connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/friends',{
    useMongoClient: true
});

const friendsSchema = new mongoose.Schema({

    firstName : {
        type: String
    },
    lastName : {
        type: String
    },
    gender : {
        type: String
    },
    age : {
        type: Number
    },
    language : {
        type: String
    },
    email : {
        type: String 
    },
    contacts : {
        type: Array
    },

});

const Friends = mongoose.model('friends',friendsSchema);


// SQL

const sequelize = new Sequelize('database',null,null,{
    dialect : 'sqlite',
    storage : './aliens.sqlite',
});

const Aliens = sequelize.define('aliens',{
    firstName : { type: Sequelize.STRING},
    lastName : { type: Sequelize.STRING},
    planet : { type: Sequelize.STRING},

});


Aliens.sync({ force: true}).then(() =>{
     _.times(10, (i) => {
         Aliens.create({ 
                firstName: casual._first_name,
                lastName : casual._last_name,
                planet : casual._word,

         });
     });
});

export { Friends,Aliens};

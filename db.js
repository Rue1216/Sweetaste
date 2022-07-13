const mongoose = require('mongoose');

module.exports = connection = async() =>{
    try{
        const connectionParams = {
            useNewUrlParser: true,
            // useCreateIndex: true, deprecated
            useUnifiedTopology: true,
        };
        await mongoose.connect(process.env.DB_URL, connectionParams);
        console.log('Connected to database.');
    }
    catch(error){
        console.log(error, 'Cannot connect to database.')
    }
}


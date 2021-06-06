let mongoose = require('mongoose');

module.exports = {
    connect: ()=>{
        let db = mongoose.connection;
        
        mongoose.connect('mongodb://localhost/quiz');
        
        db.on('error', ()=>{
            console.log('failed to connect to db');
        });
        db.once('open', ()=>{
            console.log('connected to db');
        });
    },
    makeModel: ()=>{
        let modelSchema = new mongoose.Schema({
            name: String,
            id: String,
            questionCounter: {type: Number, default: 0}, 
            questionAnsweres: [], 
            foreignAnsweres: [] 
        });
        
        return  mongoose.model('user', modelSchema); 
    }
}

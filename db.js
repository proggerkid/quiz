let mongoose = require('mongoose');

module.exports = {
    connect: ()=>{
        let db = mongoose.connection;
        
        mongoose.connect('mongodb://localhost/quiz', {useNewUrlParser: true, useUnifiedTopology: true});
        
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
            questionCounter: {type: Number, default: 0}, 
            questionAnsweres: [], 
            guessAnsweres: [],
            guessQuestionCounter: {},
            a: Object,
            b: {type: {foo: String}},
            c: {type: Number, default: 0},
            d: []
        });
        
        return  mongoose.model('user', modelSchema); 
    }
}

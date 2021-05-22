let db = require('../db');
let User = db.makeModel();

module.exports = {
    returnQuestionNumber: (name)=>{
        return new Promise((resolve, reject)=>{
            User.findOne({name: name}, (err, user)=>{
                if(err){}
                else{
                    resolve(user.questionCounter); 
                }
            });
        });
    },
    addUser: (name)=>{
        let User = db.User; 
        let user = User({
            name: name,
            questionCounter: 0,
        });
        
        user.save();
    }
};

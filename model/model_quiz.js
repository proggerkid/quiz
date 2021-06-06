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
        let user = new User({
            name: name,
            questionCounter: 0,
        });
        
        user.save();
    },
    setDecision: (name, answere)=>{
      return new Promise((resolve, reject)=>{
        User.findOne({name: name}, (err, user)=>{
          if(err){
            reject("fail");
          }
          else{
            user.questionCounter++;
            user.questionAnsweres.push(answere);
            user.save();
            resolve("success");
          }
        })
      });
    },
    getAnsweres: (name)=>{
        return new Promise((resolve, reject)=>{
            User.findOne({name: name}, (err, user)=>{
                if(err){
                }
                else{
                    resolve(user.questionAnsweres);            
                }
            })
        });
    },
    getID: (name)=>{
        return new Promise((resolve, reject)=>{
            User.findOne({name: name}, (err, user)=>{
                if(err){}
                else{
                    resolve(user._id);
                }
            })
        });
    }
};

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
    },
    guessAnswere: (name, userID, answerer)=>{
        return new Promise((resolve, reject)=>{
            User.findOne({_id: userID}, (err, user)=>{
                if(err){
                }
                else{
                    if(!user.guessQuestionCounter.hasOwnProperty(name)){
                        user.guessQuestionCounter.name = 0
                    }
                    else{
                        user.guessQuestionCounter.name += 1
                    }
                     user.guessAnsweres.append({
                        name: answere, 
                        questionNumber: user.guessQuestionCounter.name 
                    })
                    user.save()
                    resolve(user)
                }
            })
        })
    },
    returnGuessQuestionCounter: (name, UserID)=>{
        return new Promise((resolve, reject)=>{
            user.findOne({_id: UserID}, (err, user)=>{
                if(err){
                }
                else{
                    resolve(user.guessQuestionCounter.name)
                }
            })
        })
    }
};

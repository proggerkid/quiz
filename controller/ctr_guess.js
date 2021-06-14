let questions = require('../questions');
let model_quiz = require('../model/model_quiz');

module.exports = {
    renderGuess: (req, res)=>{
      if(!req.cookies.name){
        res.render('registration');
      }
      else{
        res.render('guess', {
          question: questions[0]
        }); 
      }
    },
    guessAnsweres: (req, res)=>{
        let name = req.cookies.name;
        let userID = req.query.id;
        console.log(req.query);
        let answere = req.body.answere; 
        let test = JSON.stringify({
            username: name,
            userid: req.query,
            theAnswere: answere
        });

        res.send(test)
        model_quiz.guessAnswere(name, userID, answere);
    }
};

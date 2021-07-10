let questions = require('../questions');
let model_quiz = require('../model/model_quiz');

async function makeGuess(res, name, userID, answere){
    let user = await model_quiz.guessAnswere(name, userID, answere);
    let guessQuestionNumber = await model_quiz.returnGuessQuestionCounter(name, userID)
    let currQuestion = questions[guessQuestionNumber];
    res.send(currQuestion)
}

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
        let userID = req.body.id;
        let answere = req.body.answere; 
        
        makeGuess(res, name, userID, answere)
   }
};

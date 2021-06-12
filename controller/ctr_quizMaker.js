let model_quiz = require('../model/model_quiz'); 
let questions = require('../questions');

module.exports = {
    answereQuestion: (req, res)=>{
        let name = req.cookies.name;
        let answere = req.body.answere;
		
        model_quiz.setDecision(name, answere).then((result)=>{

          model_quiz.returnQuestionNumber(name).then((result)=>{
            let currQuestion = questions[result]; 
            let question = {
              question: currQuestion 
            };
            
            model_quiz.getID(name).then((result)=>{
               let userID = result;

                if(result >= 4){
                  res.set("Content-Type", "text/html");
                  res.render('index', {
                      userID: userID,
                      answeres: [] 
                  });
                }
                else{
                  res.send(question);
                }
            })
        })    
    })
  }
};

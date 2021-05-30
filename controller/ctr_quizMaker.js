let model_quiz = require('../model/model_quiz'); 

module.exports = {
    answereQuestion: (req, res)=>{
        let name = req.cookies.name;
        let answere = req.body.answere;

        model_quiz.setDecision(name, answere);    
    }
};

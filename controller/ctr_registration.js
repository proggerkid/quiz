let questions = require('../questions');
let model_quiz = require('../model/model_quiz');

module.exports = {
    renderRegistration: (req, res)=>{
        if(!req.cookies.name){
            res.render('registration');
        }
        else{
            let name = req.cookies.name;
            
            model_quiz.returnQuestionNumber(name).then((result)=>{
                let questionNumber = result;
                
                res.render('quizCreation', {
                    question: questions[questionNumber]
                });
            });
        }
    },
    registrateUser: (req, res)=>{
        let name = req.body.name;
        
        model_quiz.addUser(name);
        res.cookie('name', name); 
        res.render('quizCreation', {
            question: questions[0]
        });
    }
};

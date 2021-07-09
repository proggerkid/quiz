let questions = require('../questions');
let model_quiz = require('../model/model_quiz');

async function renderIndexOrQuizCreation(name, res){
    let questionNumber = await model_quiz.returnQuestionNumber(name);
    if(questionNumber >= 4){
        let questionAnsweres = await model_quiz.getAnsweres(name);
        let id = await model_quiz.getID(name);
        res.render('index', {
            answeres: questionAnsweres,
            userID: id
        })
    }
    else{
        res.render('quizCreation', {
            question: questions[questionNumber]
        })
    }
}

module.exports = {
    renderRegistration: (req, res)=>{
        //if there is no cookie for identifying the user, render registration
        if(!req.cookies.name){
            res.render('registration');
        }
        //if all questions answered, render index or render quizCreation
        else{
            name = req.cookies.name;
            renderIndexOrQuizCreation(name, res)
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



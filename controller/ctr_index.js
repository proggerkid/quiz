model_quiz = require('../model/model_quiz')

module.exports = {
    renderIndex: (req, res)=>{
        name = req.cookies.name

        if(name){
            model_quiz.getID(name).then((id)=>{
                res.render('index', {
                    answeres: [],
                    userID: id
                })
            })
        }
        else{
            res.render('index', {
                answeres: [],
                userID: ""
            });
        }
    }
}

module.exports = {
    guessAnsweres: (req, res)=>{
        let quizID = req.query.id;
                    
        res.render('guess')
    }
};

module.exports = {
    answereQuestion: (req, res)=>{
        console.log(req.body);
        let answere = JSON.stringify(req.body);

        res.send(answere);
    }
};

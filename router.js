let router = require('express').Router();
let ctr_index = require('./controller/ctr_index.js');
let ctr_registration = require('./controller/ctr_registration');
let ctr_quizMaker = require('./controller/ctr_quizMaker');
let ctr_guess = require('./controller/ctr_guess');

module.exports = router;

router.get('/', ctr_index.renderIndex);
router.get('/registration', ctr_registration.renderRegistration);
router.post('/registration', ctr_registration.registrateUser);
router.post('/quizCreation', ctr_quizMaker.answereQuestion);
router.get('/guess', ctr_guess.renderGuess);
router.post('/guess', ctr_guess.guessAnsweres);

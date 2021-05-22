let router = require('express').Router();
let ctr_index = require('./controller/ctr_index.js');
let ctr_registration = require('./controller/ctr_registration');
let ctr_quizMaker = require('./controller/ctr_quizMaker');

module.exports = router;

router.get('/', ctr_index.renderIndex);
router.get('/registration', ctr_registration.renderRegistration);
router.post('/registration', ctr_registration.registrateUser);
router.post('/quizCreation', ctr_quizMaker.answereQuestion);

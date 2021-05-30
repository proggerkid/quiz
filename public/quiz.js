let btn_true = document.getElementById('btn_true');
let btn_false = document.getElementById('btn_false');
let question = document.getElementById('question');

btn_true.addEventListener('click', sendDecision);
btn_false.addEventListener('click', sendDecision);

function sendDecision(e){
    let xhr = new XMLHttpRequest();
    let decision;
    
    if(e.target.id == "btn_true"){
        decision = true; 
    }
    else{
        decision = false;
    }
    
    let answere = JSON.stringify({answere: decision});

    xhr.open('post', '/quizCreation');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = ()=>{
      let currQuestion = JSON.parse(xhr.responseText);
      
      question.innerHTML = currQuestion.question;
    };
    xhr.send(answere);
}

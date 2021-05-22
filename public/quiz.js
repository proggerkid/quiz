let btn_true = document.getElementById('btn_true');
let btn_false = document.getElementById('btn_false');
let question = document.getElementById('question');

btn_true.addEventListener('click', sendDecision);
btn_false.addEventListener('click', sendDecision);

function sendDecision(e){
    let xhr = new XMLHttpRequest();
    let tmp = {"name": "test"};
    tmp = JSON.stringify(tmp);
    
    xhr.open('post', '/quizCreation');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = ()=>{
        console.log(xhr.response);
    };
    xhr.send(tmp);
}

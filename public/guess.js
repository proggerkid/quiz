let btn_true = document.getElementById('btn_true');
let btn_false = document.getElementById('btn_false');

btn_true.addEventListener('click', makeDecision)
btn_false.addEventListener('click', makeDecision)

function makeDecision(e){
    let decision
    let xhr = new XMLHttpRequest();

    if(e.target.id == 'btn_true'){
        decision = true;
    }
    else{
        decision = false;
    }

    let sendDecision = JSON.stringify({answere: decision});

    xhr.open('post', '/guess')
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.send(sendDecision)
    xhr.onload = ()=>{
        console.log(xhr.responseText);
    }
}

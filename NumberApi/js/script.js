let fact = document.querySelector('#fact');
let factText = document.querySelector('#factText');

let numberInput = document.querySelector('#numberInput');

numberInput.addEventListener('input', getFetchApi);

//Using AJAX
// function getFactAjax() {
//     let number = numberInput.value;
    
//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', 'http://numbersapi.com/'+number);
//     xhr.onload = function() {
//         if(this.status == 200 && number != '') {

//             // console.log(this.responseText)
//             fact.style.display = 'block';
//             factText.innerText = this.responseText;
//         }
//     }
//     xhr.send();
// }

//Using Fetch API
function getFetchApi() {
    let number = numberInput.value;
    fetch('http://numbersapi.com/'+number)
    .then(res => res.text())
    .then(data => {
        if(number != '') {
            fact.style.display = 'block';
            fact.innerText = data;
        }
    }).catch(err => console.log(err));


}


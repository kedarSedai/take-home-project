var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');


    button.addEventListener('click', () => {
        fetch('https://samples.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=bf1a79a3261761fbf73b837ca42afd9d')
        .then(res => res.json())
        .then(data =>  {
            var nameValue = data['name'];
            var tempValue = data['main']['temp'];
            var descValue = data['weather'][0]['description'];

            name.innerHTML = nameValue;
            temp.innerHTML = tempValue;
            desc.innerHTML = descValue;

        })
        .catch(err => alert('Error City Name'));
    });
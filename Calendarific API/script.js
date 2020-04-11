var btn = document.querySelector('#btn');
var para = document.querySelector('#para');

btn.addEventListener('click', function (){

    var newRequest = new XMLHttpRequest();
    newRequest.open('GET','https://calendarific.com/api/v2/holidays?&api_key=<myKey>&country=NP&year=2020')
    newRequest.onload = function () {
        var ourData = JSON.parse(newRequest.responseText);
        // para.innerHTML = ourData.response.holidays[407].name
        //  console.log(ourData.response.holidays[407].name)
         renderHTML(ourData)
    }
newRequest.send();

});

function renderHTML(data) {
    var htmlString = '';

    for (var i = 0; i < data.response.holidays.length; i ++) {
        htmlString += '<p>' +'<b>' + data.response.holidays[i].name  + '</b>' + "" + '<i>' +  data.response.holidays[i].description + '</i>' + '</p>'
   }
    //i want to show inside paragraph whose id is para
    para.insertAdjacentHTML('beforeend', htmlString)
}

  
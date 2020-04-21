var myTable = document.getElementById('myTable');
var start = document.getElementById('start');
var stop = document.getElementById('stop');
var sort = document.getElementById('sort');
var looper;

function genRand(){
    data.forEach(object => {
        object = Math.floor(Math.random() * 11);
    });
}

start.addEventListener('click', function(){
    looper = setInterval(insertData, 1000)
    console.log('Start')
});

stop.addEventListener('click', function(){
    clearInterval(looper);
    console.log('Stopped')
});

sort.addEventListener('click', function() {
    console.log('sort')
    data.sort((a, b) => {
        if(a.state < b.state) { return 1; }
        if(a.state > b.state) { return -1; }
        return 0;
    });
    insertData()
})

insertData();
function insertData(){

    myTable.innerHTML = ''
    genRand()

    data.sort((a, b) => (a.rand > b.rand) ? 1 : -1);
    myData = data
    for (let i = 0; i < myData.length; i++ ){
         var row = `<tr>
                <td>${myData[i].city}</td>
                <td>${myData[i].state}</td>
                <td>${myData[i].population}</td>
                <td>${myData[i].land_area}</td>`

        myTable.innerHTML += row
    }
}
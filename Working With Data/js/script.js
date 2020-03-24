//Getting data with AJAX
// myArray = [];

// $.ajax({
//     method: 'GET',
//     url: 'https://reqres.in/api/users',
//     success: function(response) {
//         myArray = response.data;
//         builtTable(myArray)
//     }
// });

$('#search-input').on('keyup', function(){
    // var value = e.target.value
    var value = $(this).val()
    var data = searchTable(value, myArray);
    builtTable(data)
});

$('th').on('click', function(){
    var column = $(this).data('column');
    var order = $(this).data('order');

    var text = $(this).html();
    text = text.substring(0, text.length - 1)

    if (order == 'desc') {
        $(this).data('order', "asc");
        myArray = myArray.sort((a, b) => a[column] > b[column] ? 1 : -1)

        text += '&#9660'

    } else {
        $(this).data('order', "desc");
        myArray = myArray.sort((a, b) => a[column] > b[column] ? 1 : -1);
        text += '&#9650'
    }
    $(this).html(text)
    builtTable(myArray)
})


//Search By NAME
function searchTable(value, data){
    var filterData = [];

    for (var i = 0; i < data.length; i++){
        value = value.toLowerCase();
        var name = data[i].name.toLowerCase()

        if (name.includes(value)){
            filterData.push(data[i])
        }
    }
    return filterData;
}

builtTable(myArray);

function builtTable(data) {
    var table = document.getElementById('myTable');
    table.innerHTML = ''
    for (var i = 0; i < data.length; i++ ){
        var row = `<tr>
                      <td>${data[i].name}</td>
                      <td>${data[i].age}</td>
                      <td>${data[i].Subject}</td>
                </tr>`

            table.innerHTML += row;
    }
}






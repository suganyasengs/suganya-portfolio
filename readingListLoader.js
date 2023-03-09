$(document).ready(function(){

    var jsonTable='[{"Name":"Trust","author":"Hernan Diaz"},{"Name":"The Revolutionary: Samuel Adams","author":"Stacy Schiff"},{"Name":"South to America: A Journey Below the Mason-Dixon Line to Understand the Soul of America","author":"Imani Perry"},{"Name":"Sea of Tranquility","author":"St. John Mandel"}]';

    jsonTable = JSON.parse(jsonTable);

    for(var i=0;i<5;i++){
       var book=jsonTable[i];
        var bookIndex = (i+1);
        var rowValue = '<tr><td>'+(bookIndex)+'</td><td>'+book.Name+"</td><td>"+book.author+"</td></tr>";

        $('#myReadinListTable tr:last').after(rowValue);

    }
})


function getSlice () {

    var array = [];
    var size = 5;

    for (var i = 0; i<size; i++) {
        array[i] = prompt('Enter element' + (i+1));
    }


    
    array2= [];
    numberOfArrays = prompt();
   
    for (i=0; i<numberOfArrays; i++){
        array2[i] = array[i];
    }
    
    alert(array2);


}


getSlice();



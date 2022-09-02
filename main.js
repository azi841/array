

function getSlice (array, numberOfArrays) {

    var size = 5;
    array2= [];

    if (numberOfArrays==undefined) {
        array2=array[0];
    }
 
   else {
    for (i=0; i<numberOfArrays; i++){
        array2[i] = array[i];
    }
    }
    
    return array2;
}

var newArray = getSlice([1,2,3,4,5], 4);
console.log(newArray);



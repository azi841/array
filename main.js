

function getSlice (array, numberOfArrays) {

    array2= [];

    if (numberOfArrays==undefined) {
        array2=array[0];
    }
 
   else {
     for (i=0; i<numberOfArrays; i++){
        
        if (i<array.length) {
            array2[i] = array[i];
        }
     }
    }
    
    return array2;
}

let newArray = getSlice([1,2,3,4,5], 7);
console.log(newArray);



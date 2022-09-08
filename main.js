
function getSlice (array, numberOfArrays) {


    if (numberOfArrays==undefined) {
        return array[0];
    }
 
   else array = array.filter(arr => arr <= numberOfArrays);
   
   return array;
}

let newArray = getSlice([1,2,3,4,5], 4);
console.log(newArray);


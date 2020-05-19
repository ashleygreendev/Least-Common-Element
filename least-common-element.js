var smallestElements = [];

function findLeastCommonElement(arr) {
    for(var i = 1; i < arr.length; i++){
        if(arr[i] < arr.indexOf[0]){
            arr[0] = arr[i];
        }
    }
}

function joinSmallestCommonElements(arr1, arr2, arr3) {

    var i = 0;
    var j = 0;
    var k = 0;

    while(i < arr1.length && j < arr2.length && k < arr3.length){
        if(arr1.indexOf(i) === arr2.indexOf(j) && arr2.indexOf(j) === arr3.indexOf(k)){
            smallestElements.push(arr1.indexOf(i));
            i++; j++; k++;
        }else if(arr1.indexOf(i) < arr2.indexOf(j)){
            i++;
        }else if(arr2.indexOf(j) < arr3.indexOf(k)){
            j++;
        }else if(arr1.indexOf(i) > arr2.indexOf(j) && arr3.indexOf(k) < arr2.indexOf(j)){
            k++;
        }else{
            return false;
        }
    }   
    findLeastCommonElement(smallestElements);
    return smallestElements; 
           
}


joinSmallestCommonElements([1,2,3,5,6]
    ,[2,3,4,5,6]
    ,[4,5,6,7,8]);
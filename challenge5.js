function allNumbersPositive(array){
    var positive = true;
    for (var i = 0; i <array.length; i++){
        if(array[i] < 0){
            positive = false;
        }

    }

    return positive;
}

console.log(allNumbersPositive([2,4,5])); // returns true
console.log(allNumbersPositive([-5,4,6])); // returns false
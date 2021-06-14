let array = [2, 1, 7, 6, 8, 3, 4, 5]


function mergeSort(array) {
    let midpoint = array.length / 2;
    let firstHalf = array.slice(0, midpoint);
    let secondHalf = array.slice(midpoint, array.length)

    if (array.length < 2) {
        return array;
    } else {
        merge(mergeSort(firstHalf), mergeSort(secondHalf))
    }

}

function merge(firstHalf, secondHalf) {
    let sorted = [];
    while(firstHalf.length != 0 && secondHalf.length != 0) {
        let currentMin = findMinAndRemove(firstHalf, secondHalf);
        sorted.push(currentMin)
    }
    return sorted.concat(firstHalf).concat(secondHalf);
}

function findMinAndRemove(firstHalf, secondHalf){
    let minFirstHalf = firstHalf[0];
    let minSecondHalf = secondHalf[0];

    if(minFirstHalf < minSecondHalf){
        return firstHalf.shift();
    } else {
        return secondHalf.shift();
    }
}



mergeSort(array)
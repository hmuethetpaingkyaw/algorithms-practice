// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    //own solution
    // if(array.length <= size) {
    //     chunkedArr.push(array)
    //      return chunkedArr
    // }
    // const result = array.slice(0, size);
    // chunkedArr.push([...result]);
    // array.splice(0, size)
    // return chunk(array, size, chunkedArr)

    //solution 1 
    const chunkedArr = []; 
    for (let element of array) {
        const last = chunkedArr[chunkedArr.length - 1];
        if(!last || last.length === size) {
            chunkedArr.push([element])
        }
        else {
            last.push(element)
        }
    }
    return chunkedArr;
}

module.exports = chunk;

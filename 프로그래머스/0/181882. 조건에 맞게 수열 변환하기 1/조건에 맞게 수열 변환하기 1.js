function solution(arr) {
    arr.map((v, i) => {
        if(v >= 50 && v % 2 === 0 ) {arr[i] = arr[i] / 2}
        if(v < 50 && v % 2 === 1) {arr[i] = arr[i] * 2}
    });
    
    return arr
}
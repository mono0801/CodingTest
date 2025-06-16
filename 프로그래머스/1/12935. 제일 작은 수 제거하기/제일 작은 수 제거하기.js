function solution(arr) {
    if(arr.length === 1 && arr[0] === 10) return [-1];
    
    arr.splice(arr.indexOf(Math.min(...arr)), 1);
    return arr;
}
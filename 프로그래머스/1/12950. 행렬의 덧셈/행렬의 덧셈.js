function solution(arr1, arr2) {
    arr1.forEach((arr, i) => {
        arr.forEach((_, idx) => {
            arr1[i][idx] += arr2[i][idx];
        });
    });

    return arr1;
}
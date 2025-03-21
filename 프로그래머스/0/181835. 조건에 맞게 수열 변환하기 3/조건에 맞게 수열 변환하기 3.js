function solution(arr, k) {
    return k % 2
        ? arr.reduce((acc, cur) => {
              acc.push(cur * k);
              return acc;
          }, [])
        : arr.reduce((acc, cur) => {
              acc.push(cur + k);
              return acc;
          }, []);
}
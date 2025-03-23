function solution(array, n) {
//     const arr = array.map((v) => v - n);
//     const arrAbs = arr.map((v) => Math.abs(v));
//     const min = Math.min(...arrAbs);
//     const idx = arr.filter((v) => Math.abs(v) === min);
//     const i = arr.indexOf(Math.min(...idx));

//     return array[i];
      return array.sort((a, b) => Math.abs(n - a) - Math.abs(n - b) || a - b)[0];
}
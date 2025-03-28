// 유클리드 호제법 사용
const gcd = (numer, denom) =>
    numer % denom ? gcd(denom, numer % denom) : denom;

function solution(numer1, denom1, numer2, denom2) {
    let numer = numer1 * denom2 + numer2 * denom1;
    let denom = denom1 * denom2;

//     for (let i = 2; i <= numer; ) {
//         if (!(numer % i) && !(denom % i)) {
//             numer = numer / i;
//             denom = denom / i;
//             i = 2;
//         } else {
//             i++;
//         }
//     }

//     return [numer, denom];
    
    const euclid = gcd(numer, denom);

    return [numer / euclid, denom / euclid];
}
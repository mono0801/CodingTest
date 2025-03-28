function solution(numer1, denom1, numer2, denom2) {
    let numer = BigInt(numer1 * denom2 + numer2 * denom1);
    let denom = BigInt(denom1 * denom2);

    for (let i = 2n; i <= numer; ) {
        if (!(numer % i) && !(denom % i)) {
            numer = numer / i;
            denom = denom / i;
            i = 2n;
        } else {
            i++;
        }
    }

    return [Number(numer), Number(denom)];
}
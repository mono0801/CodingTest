function solution(k, d) {
    let count = 0;
    let limit = Math.floor(d / k);

    for (let a = 0; a <= limit; a++) {
        let x = a * k;
        let left = 0, right = limit, bestB = 0;
        
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            let y = mid * k;
            if (x * x + y * y <= d * d) {
                bestB = mid; 
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        count += bestB + 1;
    }

    return count;
}
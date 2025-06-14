const gcd = (a, b) => (!(a % b) ? b : gcd(b, a % b));

function solution(n, m) {
    return [gcd(n, m), (n * m) / gcd(n, m)];
}
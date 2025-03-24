const inclination = (x1, y1, x2, y2) => (x1 - x2) / (y1 - y2);

function solution(dots) {
    [a, b, c, d] = dots;

    if (inclination(...a, ...b) === inclination(...c, ...d)) return 1;
    if (inclination(...a, ...c) === inclination(...b, ...d)) return 1;
    if (inclination(...a, ...d) === inclination(...b, ...c)) return 1;
    
    return 0;
}
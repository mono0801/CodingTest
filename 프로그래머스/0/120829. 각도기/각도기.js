function solution(angle) {
    if(angle === 180) return 4;
    if(angle === 90) return 2;
    if(angle > 0 && angle < 90) return 1;
    return 3;
}
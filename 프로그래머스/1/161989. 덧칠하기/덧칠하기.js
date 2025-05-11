function solution(n, m, section) {
    let cnt = 0;
    let color = 0;

    for (let i = 0; i < section.length; i++) {
        if (section[i] <= color) continue;
        color = section[i] - 1 + m;
        cnt++;
    }

    return cnt;
}
function solution(num_list) {
    let answer = [0, 0];
    num_list.map((v) => (v % 2 ? answer[1]++ : answer[0]++));
    return answer;
}
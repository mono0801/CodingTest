const dfs = (graph, node, visited) => {
    if (visited[node]) return false;

    visited[node] = true;

    for (const el of graph[node]) {
        dfs(graph, el, visited);
    }

    return true;
};

function solution(n, computers) {
    const graph = Array.from({ length: n }, () => []);
    const visited = new Array(n).fill(false);
    let answer = 0;

    for (let i = 0; i < computers.length; i++) {
        for (let j = 0; j < computers.length; j++) {
            if (i === j) continue;
            if (computers[i][j] === 1) {
                if (!graph[i].includes(j)) graph[i].push(j);
                if (!graph[j].includes(i)) graph[j].push(i);
            }
        }
    }

    for (let i = 0; i < n; i++) {
        if (dfs(graph, i, visited)) answer++;
    }

    return answer;
}
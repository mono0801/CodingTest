const bfs = (graph, visited) => {
    const queue = [1];
    visited[1] = 1;

    while (queue.length != 0) {
        let cur = queue.shift();

        graph[cur].forEach((e) => {
            if (visited[e] == 0) {
                queue.push(e);
                visited[e] = visited[cur] + 1;
            }
        });
    }
};

function solution(n, edge) {
    const graph = new Array(n + 1).fill().map(() => []);
    const visited = new Array(n + 1).fill(0);

    edge.forEach(([a, b]) => {
        graph[a].push(b);
        graph[b].push(a);
    });

    bfs(graph, visited);
    const max = Math.max(...visited);

    return visited.filter((v) => v === max).length;
}
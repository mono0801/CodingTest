class MinHeap {
    constructor() {
        this.heap = [];
    }

    push([node, cost]) {
        this.heap.push([node, cost]);
        this._bubbleUp();
    }

    pop() {
        if (this.heap.length === 1) return this.heap.pop();
        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._bubbleDown();
        return top;
    }

    _bubbleUp() {
        let i = this.heap.length - 1;
        while (i > 0) {
            let parent = Math.floor((i - 1) / 2);
            if (this.heap[parent][1] <= this.heap[i][1]) break;
            [this.heap[i], this.heap[parent]] = [
                this.heap[parent],
                this.heap[i],
            ];
            i = parent;
        }
    }

    _bubbleDown() {
        let i = 0;
        const length = this.heap.length;
        while (true) {
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            let smallest = i;

            if (left < length && this.heap[left][1] < this.heap[smallest][1])
                smallest = left;
            if (right < length && this.heap[right][1] < this.heap[smallest][1])
                smallest = right;

            if (smallest === i) break;
            [this.heap[i], this.heap[smallest]] = [
                this.heap[smallest],
                this.heap[i],
            ];
            i = smallest;
        }
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}

const dijkstra = (start, node, graph) => {
    const dist = Array(node + 1).fill(Infinity);
    const prev = Array(node + 1).fill(-1);
    const pq = new MinHeap();

    dist[start] = 0;
    prev[start] = start;
    pq.push([start, 0]);

    while (!pq.isEmpty()) {
        const [cur, curCost] = pq.pop();

        if (dist[cur] < curCost) continue; 

        for (const [next, cost] of graph[cur]) {
            const newCost = curCost + cost;
            if (newCost < dist[next]) {
                dist[next] = newCost;
                prev[next] = cur;
                pq.push([next, newCost]);
            }
        }
    }

    return [dist, prev];
};

function solution(n, s, a, b, fares) {
    let graph = Array.from({ length: n + 1 }, () => []);
    fares.forEach(([n1, n2, cost]) => {
        graph[n1].push([n2, cost]);
        graph[n2].push([n1, cost]);
    });

    graph.forEach((arr) => {
        arr.sort((a, b) => a[0] - b[0]);
    });

    const A = dijkstra(a, n, graph);
    const B = dijkstra(b, n, graph);
    const Start = dijkstra(s, n, graph);
    let answer = [Infinity];

    for (let i = 1; i < n + 1; i++) {
        answer[i] = Start[0][i] + A[0][i] + B[0][i];
    }

    return Math.min(...answer);
}
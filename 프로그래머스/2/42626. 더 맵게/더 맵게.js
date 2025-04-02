class Heap {
    constructor(arr = []) {
        this.heapq = [];
        this.heapify(arr);
    }

    heapPush(num) {
        const heap = this.heapq;
        heap.push(num);

        let curIdx = heap.length - 1;

        while (curIdx > 0) {
            let parent = Math.floor((curIdx - 1) / 2);

            if (heap[parent] > heap[curIdx]) {
                [heap[curIdx], heap[parent]] = [heap[parent], heap[curIdx]];
                curIdx = parent;
            } else {
                break;
            }
        }
    }

    heapPop() {
        const heap = this.heapq;
        if (!heap.length) return "Empty Heap!";
        if (heap.length === 1) return heap.pop();

        let pop = heap[0];
        heap[0] = heap.pop();
        let curIdx = 0;

        while (true) {
            let left = curIdx * 2 + 1;
            let right = curIdx * 2 + 2;
            let smallest = curIdx;

            if (left < heap.length && heap[left] < heap[smallest])
                smallest = left;

            if (right < heap.length && heap[right] < heap[smallest])
                smallest = right;

            if (smallest === curIdx) break;

            [heap[curIdx], heap[smallest]] = [heap[smallest], heap[curIdx]];
            curIdx = smallest;
        }

        return pop;
    }

    heapify(arr) {
        arr.map((v) => this.heapPush(v));
    }
}

function solution(scoville, K) {
    const heap = new Heap(scoville);
    let ln = scoville.length;
    let cnt = 0;

    while (true) {
        if (ln === 1 && heap.heapq[0] < K) {
            cnt = -1;
            break;
        }
        if (heap.heapq[0] < K) {
            let first = heap.heapPop();
            let second = heap.heapPop();

            heap.heapPush(first + second * 2);
            cnt++;
            ln--;
        } else {
            break;
        }
    }

    return cnt;
}
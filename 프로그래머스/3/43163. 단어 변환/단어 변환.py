from collections import deque

def diff_one_chr(a, b):
    cnt = 0
    for i in range(len(a)):
        if a[i] != b[i]:
            cnt += 1
    return cnt

def solution(begin, target, words):
    if target not in words:
        return 0

    visited = [False] * len(words)
    queue = deque([(begin, 0)])

    while queue:
        print(queue)
        word, depth = queue.popleft()

        if word == target:
            return depth

        for idx, w in enumerate(words):
            if diff_one_chr(word, w) == 1 and not visited[idx]:
                queue.append((w, depth + 1))
                visited[idx] = True

    return 0
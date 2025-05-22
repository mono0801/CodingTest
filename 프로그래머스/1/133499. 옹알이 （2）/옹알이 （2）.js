class Node {
    constructor() {
        this.child = {};
        this.data = null;
    }
}

class Trie {
    constructor(data = null) {
        this.root = new Node();
        if (data) this.insertAll(data);
    }

    insert(word) {
        let node = this.root;

        for (const char of word) {
            node.child[char] = new Node();
            node = node.child[char];
        }

        node.data = word;
    }

    insertAll(arr) {
        arr.forEach((e) => this.insert(e));
    }

    isValid(word) {
        let node = this.root;

        let check = false,
            data = "";
        for (const char of word) {
            if (!node.child[char]) return false;
            node = node.child[char];

            if (node.data === data) return false;

            if (node.data) {
                check = true;
                data = node.data;
                node = this.root;
            } else {
                check = false;
            }
        }

        return check;
    }
}

function solution(babbling) {
    const trie = new Trie(["aya", "ye", "woo", "ma"]);
    return babbling.reduce((acc, cur) => (acc += trie.isValid(cur) ? 1 : 0), 0);
}
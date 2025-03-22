class Node {
    constructor(value = null) {
        this.data = value;
        this.children = {};
    }
}

class Trie {
    constructor() {
        this.head = new Node();
    }

    insert(str) {
        let cur_node = this.head;

        for (const char of str) {
            if (!cur_node.children[char]) {
                cur_node.children[char] = new Node();
            }
            cur_node = cur_node.children[char];
        }

        cur_node.data = str;
    }

    search(str) {
        let cur_node = this.head;

        for (const char of str) {
            if (cur_node.children[char]) {
                cur_node = cur_node.children[char];
            } else {
                return false;
            }
        }

        if (cur_node.data !== null) return true;
    }

    isValid(str) {
        let found = true;
        let i = 0;

        while (i < str.length) {
            let cur_node = this.head;
            let j = i;

            for (j; j < str.length; j++) {
                if (!cur_node.children[str[j]]) {
                    break;
                }
                cur_node = cur_node.children[str[j]];
            }

            if (cur_node.data != null) {
                i = j;
            } else {
                found = false;
                break;
            }
        }

        return found;
    }
}

function solution(babbling) {
    const trie = new Trie();
    const allowedWords = ["aya", "ye", "woo", "ma"];
    allowedWords.forEach((word) => trie.insert(word));

    return babbling.reduce((acc, cur) => (trie.isValid(cur) ? ++acc : acc), 0);
}
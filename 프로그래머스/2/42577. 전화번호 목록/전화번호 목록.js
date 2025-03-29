class Node {
    constructor() {
        this.data = null;
        this.next = {};
    }
}

class Trie {
    constructor() {
        this.head = new Node();
    }

    insert(str, data) {
        let curNode = this.head;

        for (const c of [...str]) {
            if (curNode.data) {
                data.answer = false;
                break;
            }
            if (!curNode.next[c]) curNode.next[c] = new Node();
            curNode = curNode.next[c];
        }

        curNode.data = str;
    }
}

function solution(phone_book) {
    // const set = new Set();
    // phone_book.sort();
    // let answer = true;

    // phone_book.map((v) => {
    //     for (let i = 1; i < v.length; i++) {
    //         let prefix = v.slice(0, i);
    //         if (set.has(prefix)) {
    //             answer = false;
    //             break;
    //         } else {
    //             set.add(prefix);
    //         }
    //     }
    // });

    // return answer;

    const data = {
        answer: true,
    };

    const trie = new Trie();
    for (const phone of phone_book.sort()) {
        trie.insert(phone, data);
        if (!data.answer) break;
    }

    return data.answer;
}
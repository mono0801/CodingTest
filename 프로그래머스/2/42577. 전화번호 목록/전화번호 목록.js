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

    // for (const phone of phone_book.sort()) {
    //     for (let i = 1; i < phone.length; i++) {
    //         let prefix = phone.slice(0, i);
    //         if (set.has(prefix)) {
    //             return false;
    //         }
    //         set.add(phone);
    //     }
    // }
    // return true;

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

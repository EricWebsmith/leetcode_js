class TrieNode {
    constructor() {
        this.children = new Map();
        this.index = -1;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * 
     * @param {string} word 
     * @param {number} index 
     */
    insert(word, index) {
        let current = this.root;
        for (const c of word) {
            if (!current.children.has(c)) {
                current.children.set(c, new TrieNode());
            }
            current = current.children.get(c);
            current.index = index;
        }
    }

    /**@param {string} prefix */
    find(prefix) {
        let current = this.root;
        for (const c of prefix) {
            if (!current.children.has(c)) {
                return -1;
            }
            current = current.children.get(c);
        }
        return current.index;
    }
}

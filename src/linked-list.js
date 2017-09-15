const Node = require('./node');

class LinkedList {

    constructor() {
        this.length = 0;
        this.node = new Node([], null, null);
    }

    // 1) should assign any nodes to this._head and this._tail if list is empty
    // 2) should add new data to the end of list
    append(data) {

        if (this.length == 0) {
            this._tail = new Node();
            this._head = new Node();
        }

        this.node.data.push(data);

        this.length++;

        return this;
    }

    // 3) should return data from the this.head
    head() {
        if (this.length == 0) return null;

        return this.node.data[0];
    }

    // 4) should return data from the this.tail
    tail() {
        if (this.length == 0) return null;

        return this.node.data[this.length - 1];
    }

    // 5) should return Node.data by index
    at(index) {
        if (this.length == 0) return null;

        return this.node.data[index];
    }

    // 6) should insert data by index
    insertAt(index, data) {
        this.node.data.splice(index, 0, data);
        this.length++;
        return this;
    }

    // 7) should return true if list is empty
    isEmpty() {
        return this.length == 0 ? true : false;
    }

    //  8) should clear the list
    clear() {
        this.node.data = [];
        this.length = 0;
        return this;
    }

    // 9) should delete element by index
    deleteAt(index) {
        this.node.data.splice(index, 1);
        this.length--; 
        return this;
    }

    // 10) should reverse the list
    reverse() {
        this.node.data.reverse();
        return this;
    }

    // 11) should return index of element if data is found
    // 12) should return -1 if data not found
    indexOf(data) {
        return this.node.data.indexOf(data);
    }
}

module.exports = LinkedList;

const Node = require('./node');

class LinkedList {
    constructor() { 
        this.length = 0;
		this._head = null;
        this._tail = null;
    }

    append(data) {
    	var node = new Node(data);
    	if(this.length != 0) {
    		node.prev = this._tail;
            this._tail.next = node;
    		this._tail = node;
    	} else {
            this._head = node;
            this._tail = node;
		}
    	this.length++;
    	return this;
    }

    head() { 
        return this._head.data; 
    }

    tail() { 
        return this._tail.data; 
    }

    at(index) {
    	var count = 0;
    	var currentNode = this._head;
    	while (count < this.length) {
        	if (count == index) { return currentNode.data; }
        	else { currentNode = currentNode.next; count++; }
	    }
    }

    insertAt(index, data) {
    	var node = new Node(data);
    	if (index == 0) {
    		node.next = this._head;
            this._head.prev = node;
    		this._head = node;
    	} else if (index < this.length && index > 0) {
    		var count = 0;
    		var currentNode = this._head;
    		while (count < index) { currentNode = currentNode.next; count++; }
        	currentNode.data = data;
    	} else { return this; }
    }

    isEmpty() { 
        return (this.length == 0) ? true : false; 
    }

    clear() {
    	var node = new Node();
    	this._head = node;
        this._tail = node;
        this.length = 0;
    	return this;
    }

    deleteAt(index) {
    	var currentNode = this._head;
    	if (index == 0) {
		    this._head = currentNode.next;
			currentNode.prev = null;
    	} else if (index < this.length && index > 0) {
    		var count = 0;
    		while (count < index) { 
				currentNode = currentNode.next; count++; 
			}
           currentNode.prev.next = currentNode.next; 
			currentNode.next.prev = currentNode.prev;
    	} else { 
			return this; 
		}
    	this.length--;
    	return this;
    }

    reverse() {
    	var count = 0;
    	var len = this.length/2;
    	var head = this._head;
    	var tail = this._tail;
    	while (count < len) {
    		var rev = tail.data;
    		tail.data = head.data;
    		head.data = rev;
    		tail = tail.prev;
    		head = head.next;
    		count++;
    		
    	}
    	return this;
    }

    indexOf(data) {
    	var currentNode = this._head;
    	var count = 0;
    	while (count < this.length) {
    		if (currentNode.data == data) { return count; }
		    currentNode = currentNode.next;
		    count++;
	    }
		return -1;
    }
}

module.exports = LinkedList;

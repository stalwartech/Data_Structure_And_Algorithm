class Node {
    constructor(value){
        this.value = value
        this.next = null;
    }
}

class LinkedListQueue{
    constructor(){
        this.front = front;
        this.rear = rear;
        this.length = 0;
    }
}

// Enqueue(item) = insert at rear 
Enqueue(element){
    let newNode = new Node(element);
    console.log(`I have successfully enqueue ${element}`)
     if(this.rear === this.front && this.length === 0){
        return
     }
     else{
        let current = this.rear.next 
        this.rear = newNode
     }
     length++
}

// Dequeue = remove from front 
// Peek = View the front element without removing 
// isEmpty = Check of the list is empty 
// size = Check the number of the elements 
// Print = 

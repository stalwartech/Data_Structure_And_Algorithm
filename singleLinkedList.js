// Creating a Node class
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

// See this as an array but not neccessarily an array 
class SingleLinkedList{
    constructor(){
        this.head = null; // This is moreless like the first element of an array 
        this.tail = null; // This is moreless like the last element of an array 
        this.length = 0;  //This is the length of the array(but kind of)
    }

    // Push = Adds to the end of the array list 
    Push(data){
        let newNode = new Node(data); // create a new node with the data passed in the parameter
        if(this.head === null){ // If the array list is empty
            this.head = newNode; // Make this the head
            this.tail = newNode; // Make this the tail which means only only one data
        }
        else{
            let current = this.tail;
            current.next = newNode;
            this.tail = newNode;
        }
        this.length++
    }
// Pop = Removes the last item of the array list 
    Pop(){
        if(this.head === null){
            return
        }
        else{
            let toRemove = this.tail
            toRemove = null;
            let result = this.head;
        }
        this.length--
    }

// Reverse list.
    Reverse() {

    // [1,2,3,4] → [4,3,2,1]

    if (!this.head || this.length === 1) return this;

    let prev = null;
    let current = this.head; // 1

    // Set tail.
    this.tail = this.head;

    while (current) {

        // Save next.
        const next = current.next;

        // Reverse link.
        current.next = prev;

        // Move prev.
        prev = current;

        // Move current.
        current = next;
    }

    // Set head.
    this.head = prev;

    return this;
    }

}

let myArrayList = new SingleLinkedList();
myArrayList.Push("hello");
myArrayList.Push("hi");

// console.log(myArrayList);

// Shift = Removes the first item in the array list 
// Unshift = Adds an item at the beginning of an array list 
// InsertAt 
// Get
// Remove Duplicate from sorted list
// 
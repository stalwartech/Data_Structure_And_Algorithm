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
        let newNode = new Node(data)
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.tail.next = newNode
            this.tail = newNode
        };
        this.length++
    }

// Pop = Removes the last item of the array list 
    Pop(){
        if(!this.head){
            return
        }
        else{
            let current = this.head
            while (current.next !== this.tail) {
                current = current.next
            }
            this.tail = current
            this.tail.next = null;
            // return this.tail
        }
        this.length--
    }

// Shift = Removes the first item in the array list 
    Shift(){
     if(this.head === this.tail){
         this.head = this.tail = null
     }
     else{
        let current = this.head.next
        this.head = current
     }
     this.length--
    }

// Unshift = Adds an item at the beginning of an array list 

// Reverse list. = Rverse a list from [1,2,3,4] to [4,3,2,1]

// InsertAt 

// Get

// Remove Duplicate from sorted list


}


// *********************** Console here **********************

let myArrayList = new SingleLinkedList();
myArrayList.Push("One");
// myArrayList.Push("Two");
// myArrayList.Push("Three");
// myArrayList.Push("Four");
// myArrayList.Pop()
myArrayList.Shift()
console.log(myArrayList);

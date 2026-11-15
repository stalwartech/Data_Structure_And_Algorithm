// Undo 
const stck = [];
stck.push("Car");
stck.push("Suv");
stck.push("Truck")

function Undo(){
   stck.pop()
   console.log(stck)
}
Undo()


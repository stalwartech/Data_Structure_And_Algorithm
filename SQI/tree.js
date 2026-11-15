class TreeNode{
    constructor(value){
        this.value = value;
        this.children = [];
    }
}
const root = new TreeNode("root");
root.children.push(new TreeNode("branch1"))
root.children.push(new TreeNode("branch2"))

// console.log(root);

root.children[0].children.push(new TreeNode("leaf1"))
// console.log(root);

class BinaryTreeNode{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const binaryRoot = new BinaryTreeNode("woman");
binaryRoot.left = new BinaryTreeNode("Boy");
binaryRoot.right = new BinaryTreeNode("Girl");

binaryRoot.left.left = new BinaryTreeNode("boyChild");
binaryRoot.left.right = new BinaryTreeNode("Girlchild");

binaryRoot.left.left.right = new BinaryTreeNode("Boyfriend");
binaryRoot.left.left.left = new BinaryTreeNode("Girlfriend");


console.log(binaryRoot);





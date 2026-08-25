// Creating stack using Class based JS.
// Implementing Stack using Classes in JS:
class Stack {
  constructor() {
    // store stack items inside an array.
    this.items = [];
  }

  // push: Add an item to top of the stack.
  push(value) {
    this.items.push(value);
  }
  // pop: Remove Top item from Stack.
  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.pop();
  }

  // peek: View Top Item without removing it.
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.items.length - 1];
  }

  // check Is Stack Empty or not
  isEmpty() {
    // The stack is Empty when the stack length is zero.
    return this.items.length === 0;
  }

  // See the Length of Stack.
  size() {
    return this.items.length;
  }
}

// Using Stack:
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek()); // performing peek operation
// 30

console.log(stack.pop()); // performing pop element.
// 30

console.log(stack.peek()); // seeing the top element using peek function.
// 20

console.log(stack.size()); // using size function to see the length of stack.
// 2

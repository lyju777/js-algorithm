import { Queue } from "./Queue.mjs";

let queue = new Queue();

console.log("===== enqueue() 세번 호출 =====");
queue.enqeue(1);
queue.enqeue(2);
queue.enqeue(3);

console.log(queue.front());

console.log("===== enqueue() 네번 호출 =====");
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

console.log(`isEmpty: ${queue.isEmpty()}`);

import { HashSet } from "./HashSet.mjs";

let hashSet = new HashSet();

console.log(`isEmpty: ${hashSet.isEmpty()}`);

console.log("===== 데이터 삽입 =====");
hashSet.add(1);
hashSet.add(1);
hashSet.add(123);
hashSet.add(512);
hashSet.printAll();
console.log(`isEmpty: ${hashSet.isEmpty()}`);

console.log("===== 데이터 체크 1 =====");
console.log(`isContain: ${hashSet.isContain(1)}`);

console.log("===== 데이터 제거 1 =====");
hashSet.remove(1);
hashSet.printAll();
console.log(`isEmpty: ${hashSet.isEmpty()}`);

console.log("===== 데이터 체크 2 =====");
console.log(`isContain: ${hashSet.isContain(1)}`);

console.log("===== clear =====");
hashSet.claer();
hashSet.printAll();
console.log(`isEmpty: ${hashSet.isEmpty()}`);

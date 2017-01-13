class Person {
   constructor(name) {
      this.name = name;
      this.id = Person.nextId++;
   }
}
Person.nextId = 0;
const jamie = new Person("Jamie"),
   juliet = new Person("Juliet"),
   peter = new Person("Peter"),
   jay = new Person("Jay");
const arr = [jamie, juliet, peter, jay];
// option 1: direct comparison of ID:
console.log(arr.find(p => p.id === juliet.id));        // returns juliet object
// option 2: using "this" arg:
console.log(arr.find(p => p.id === this.id, juliet));  // returns juliet object

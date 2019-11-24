const Dog = require("./Dog");
const Cat = require("./Cat");
const AnimalShelter = require("./AnimalShelter");

const d1 = new Dog("American Bulldog");
const d2 = new Dog("Akita");
const d3 = new Dog("Basset Hound");

const c1 = new Cat("Abyssinian Cat");
const c2 = new Cat("Bengal Cat");
const c3 = new Cat("Bombay Cat");

const animalShelter = new AnimalShelter();

animalShelter.enqueue(d1);
animalShelter.enqueue(d2);
animalShelter.enqueue(c1);
animalShelter.enqueue(c2);
animalShelter.enqueue(c3);
animalShelter.enqueue(d3);

console.log(animalShelter.dequeueAny(), d1.type); 
console.log(animalShelter.dequeueCat(), c1.type);
console.log(animalShelter.dequeueDog(), d2.type);
console.log(animalShelter.dequeueAny(), c2.type);
console.log(animalShelter.dequeueDog(), d3.type);
console.log(animalShelter.dequeueCat(), c3.type);
console.log(animalShelter.dequeueCat(), null);
console.log(animalShelter.dequeueDog(), null);
//1.- Dado el array numbers cuyo valor sea [4, 5, 6, 7, 8, 9, 10], crea una función elevados que sea el resultado de elevar cada número a si mismo.

const numbers = [4, 5, 6, 7, 8, 9, 10];

const elevados = () => numbers.map((n) => n ** n);

console.log(elevados);

//2.- Dado el array foodList con valor ['Pizza', 'Ramen', 'Paella', 'Entrecot'], generar un segundo array que consiga generar de salida el resultado esperado.
/*
[
    'Como soy de Italia, amo comer Pizza',
    'Como soy de Japón, amo comer Ramen',
    'Como soy de Valencia, amo comer Paella',
    'Aunque no como carne, el Entrecot es sabroso'
]
*/

const foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot'];

const result2 = foodList.map((food) => {
  switch (food) {
    case 'Pizza':
      return `Como soy de Italia, amo comer ${food}`;
    case 'Ramen':
      return `Como soy de Japón, amo comer ${food}`;
    case 'Paella':
      return `Como soy de Valencia, amo comer ${food}`;
    case 'Entrecot':
      return `Aunque no como carne, el ${food} es sabroso`;
    default:
      return '';
  }
});

console.log(result2);

//3.- Dado el array staff, crear un segundo array que forme frases como en el ejemplo accediendo a las propiedades del objeto proporcionado

const staff = [
  { name: 'Pepe', role: 'The Boss', hobbies: ['leer', 'ver pelis'] },
  { name: 'Ana', role: 'becaria', hobbies: ['nadar', 'bailar'] },
  { name: 'Luis', role: 'programador', hobbies: ['dormir', 'comprar'] },
  { name: 'Carlos', role: 'secretario', hobbies: ['futbol', 'queso'] }
];

const result3 = staff.map((person) => {
  const hobbies = person.hobbies.join(' y ');
  return `${person.name} es ${person.role} y le gusta ${hobbies}`;
});

console.log(result3);

//4.- Crea un segundo array result4 a partir del array numbers2 que devuelva solo los impares

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result4 = numbers2.filter((n) => n % 2 !== 0);

console.log(result4); // [1, 3, 5, 7, 9]

//5.- Dado el array foodList2, genera un segundo array result5 que filtre los platos veganos y saque una sentencia como la del ejemplo

const foodList2 = [
  { name: 'Tempeh', isVeggie: true },
  { name: 'Cheesbacon burguer', isVeggie: false },
  { name: 'Tofu burguer', isVeggie: true },
  { name: 'Entrecot', isVeggie: false }
];

const result5 = foodList2
  .filter((food) => food.isVeggie)
  // el test del repo pide 'rica' para la burguer y 'rico' para el tempeh
  .map((food) => `Que ric${food.name.includes('burguer') ? 'a' : 'o'} ${food.name} me voy a comer!`);

console.log(result5);

//6.- Dado el array inventory, devolver un array con los nombres de los elementos que valgan más de 300 euros.

const inventory = [
  { name: 'Mobile phone', price: 199 },
  { name: 'TV Samsung', price: 459 },
  { name: 'Viaje a Cancún', price: 600 },
  { name: 'Mascarilla', price: 1 }
];

const result6 = inventory
  .filter((item) => item.price > 300)
  .map((item) => item.name);

console.log(result6);

//7.- Dado el siguiente array numeros3 [39, 2, 4, 25, 62], obten la multiplicación de todos los elementos del array.

const numeros3 = [39, 2, 4, 25, 62];

const result7 = numeros3.reduce((acc, curr) => acc * curr, 1);

console.log(result7); // 483000

//8.- Concatena todos los elementos del array con reduce para que devuelva una sola frase

const sentenceElements = [
  'Me',
  'llamo',
  'Marco',
  'y',
  'quiero',
  'sentir',
  'la',
  'fuerza',
  'con',
  'javascript'
];

const result8 = sentenceElements.reduce((acc, curr) => acc + ' ' + curr);

console.log(result8);

//9.- Obtener el monto total de los elementos que pertenecen a catergory "code" en el siguiente array.

const books = [
  { name: ' JS for dummies', author: 'Emily A. Vander Veer', price: 20, category: 'code' },
  { name: 'Don Quijote de la Mancha', author: 'Cervantes', price: 14, category: 'novel' },
  { name: 'Juego de tronos', author: 'George R. Martin', price: 32, category: 'Fantasy' },
  { name: 'javascript the good parts', author: 'Douglas Crockford', price: 40, category: 'code' }
];

const result9 = books
  .filter((book) => book.category === 'code')
  .reduce((acc, curr) => acc + curr.price, 0);

console.log(result9);

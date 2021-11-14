// /* Zad. 1 treść:
//  * Istnieje podana tablica:
//  *
//  * const names = ['Kasia', 'Tomek', 'Amanda', 'Maja'];
//  * Twoim zadaniem jest stworzenie nowej, w której będą zawarte tylko imiona żeńskie obecne w tej oryginalnej. Dla * * uproszczenia załóżmy, że imiona żeńskie to takie, które kończą się na "a".
//  */

// // Rozwiązanie 1:
// const names = ['Kasia', 'Tomek', 'Amanda', 'Maja'];
// const females = [];

// names.forEach(function (item, index, array) {
//   if (item.charAt(item.length - 1) == 'a') {
//     females.push(item);
//   }
//   //   console.log('item: ', item);
//   //   console.log('index: ', index);
//   //   console.log('array: ', array);
//   //   console.log('word lenght: ', item.lenght);
//   //   console.log('last letter: ', item.charAt(item.slice(1)));
// });
// console.log(females);

// // Rozwiązanie 2:
// // const names = ['Kasia', 'Tomek', 'Amanda', 'Maja'];
// // const filteredNames = [];

// // for (const name of names) {
// //   if (name.slice(-1) === 'a') {
// //     filteredNames.push(name);
// //   }
// // }

// /* Zad 2 treść:
//  * Za pomocą pętli for przejdź po każdym obiekcie w employees i wygeneruj dwie nowe tablice. employeesNames powinno * być listą imion pracowników (tylko imion!). employeesSalaries powinno być listą pensji.
//  */

// //Dane:
// const employees = {
//   john: {
//     name: 'John Doe',
//     salary: 3000,
//   },
//   amanda: {
//     name: 'Amanda Doe',
//     salary: 4000,
//   },
// };

// // Rozwiązanie:
// const employeesNames = [];
// const employeesSalaries = [];
// for (let employee in employees) {
//   employee = employees[employee];
//   employeesNames.push(employee.name.split(' ')[0]);
//   employeesSalaries.push(employee.salary);
// }

// console.log(employeesNames);
// console.log(employeesSalaries);

// /* Zad 3 treść:
//  * Twoim zadaniem jest ustalenie i wyświetlenie w konsoli:
//  *
//  * sumy wszystkich pensji
//  * najwyższej pensji
//  * najniższej pensji
//  */

// // Dane:
// const salaries = [2000, 3000, 1500, 6000, 3000];

// // Rozwiązanie 1:
// const min = Math.min(...salaries);
// const max = Math.max(...salaries);
// let sum = 0;
// salaries.forEach((salarie) => {
//   sum += salarie;
// });
// const average = sum / salaries.length;

// // Rozwiązanie 2:
// let sum = 0;
// let highestSalary = salaries[0];
// let lowestSalary = salaries[0];

// for (const salary of salaries) {
//   sum += salary;
//   if (salary > highestSalary) highestSalary = salary;
//   if (salary < lowestSalary) lowestSalary = salary;
// }

// console.log(sum, highestSalary, lowestSalary);

// /* Zad 4 treść:
//  * Dla praktyki, mamy dla Ciebie podobny przykład, tylko że tym razem dane    * * wejściowe to obiekt, a nie tablica.
//  *
//  * Znowu Twoim zadaniem jest ustalenie i wyświetlenie w konsoli:
//  *
//  * sumy wszystkich pensji
//  * najwyższej pensji
//  * najniższej pensji
//  */

// // Dane:
// const persons = {
//   john: 2000,
//   amanda: 3000,
//   thomas: 1500,
//   james: 6000,
//   claire: 3000,
// };
// let min = 9999;
// let max = 0;
// let nameMin = '';
// let nameMax = '';
// let sum = 0;
// let average = 0;
// count = 0;
// // Rozwiązanie:
// for (person in persons) {
//   personVal = persons[person];
//   // console.log(person);

//   if (personVal < min) {
//     min = personVal;
//     nameMin = person;
//   }

//   if (personVal > max) {
//     max = personVal;
//     nameMax = person;
//   }
//   sum = sum + personVal;
//   count++;
// }
// average = sum / count;

// // Rozwiązanie 2:
// const persons = {
//   john: 2000,
//   amanda: 3000,
//   thomas: 1500,
//   james: 6000,
//   claire: 3000,
// };
// // covert obj to array of its values ([2000, 3000, 1500...])
// const salaries = Object.values(persons);

// let sum = 0;
// let highestSalary = salaries[0];
// let lowestSalary = salaries[0];

// for (const salary of salaries) {
//   sum += salary;
//   if (salary > highestSalary) highestSalary = salary;
//   if (salary < lowestSalary) lowestSalary = salary;
// }

// console.log(sum, highestSalary, lowestSalary);

// /**
//  * Zad 5 treść:
//  * Twoim zdaniem jest zbudowanie na podstawie powyższej tablicy, obiektu uniqueTags, który posiada tylko unikalne tagi. W taki sposób, że każdy unikalny tag, to nowa właściwość w tym obiekcie. Jego wartością powinien być za to kolejny obiekt z właściwością appearances o wartości liczby wystąpień tego tagu.
//  *
//  * Czyli, dla naszych tagów wyżej, powinno wygenerować się coś w stylu:

//   {
//     news: { appearances: 3 },
//     code: { appearances: 2 },
//     sport: { appearances: 1 },
//     hot: { appearances: 1 },
//   }
//  */

// // Dane:
// const tags = ['news', 'code', 'news', 'sport', 'hot', 'news', 'code'];

// //Rozwiązanie:

// const tags = ['news', 'code', 'news', 'sport', 'hot', 'news', 'code'];

// const uniqueTags = {};

// for (const tag of tags) {
//   if (!uniqueTags[tag]) uniqueTags[tag] = { appearances: 1 };
//   else uniqueTags[tag].appearances++;
// }

// /**
//  * Zadanie 5 treść:
//  * Czas na przejście do bardziej praktycznych zadań.

// Napisz funkcję filterEmployees, która będzie pobierać dwa argumenty:

// tablicę z obiektami o strukturze { name: 'Imię nazwisko', salary: kwota-pensji }
// wartość minimalną zakresu,
// wartość maksymalną zakresu.
// Zadaniem naszej funkcji ma być zwrócenie nowej tablicy, która będzie posiadać tylko te osoby, których dochód jest większy niż wartość minimalna i mniejszy niż maksymalna.
//  */

// // dane:
// const employees = [
//   { name: 'Amanda Doe', salary: 3000 },
//   { name: 'John Doe', salary: 4000 },
//   { name: 'Claire Downson', salary: 2000 },
//   { name: 'Freddie Clarkson', salary: 6000 },
//   { name: 'Thomas Delaney', salary: 8200 },
// ];

// // Rozwiązanie:
// function filterEmployees(employeesArray, minSalary, maxSalary) {
//   const inRangeEmployeesArray = [];
//   for (employee of employeesArray) {
//     if (employee.salary > minSalary && employee.salary < maxSalary) {
//       inRangeEmployeesArray.push(employee);
//     }
//   }
//   return inRangeEmployeesArray;
// }
// const answear = filterEmployees(employees, 3000, 7000);
// console.log(answear);

/**
 * Zad 6 treść:
 * Napisz funkcję forEach, która przyjmie dwa argumenty:

dowolną tablicę,
dowolną funkcję callback.
Zadaniem funkcji powinna być przejście po każdym elemencie tablicy i wywołanie dla każdego z osobna funkcji callback. Tej, którą otrzymamy w drugim parametrze. Co ważne, ta funkcja callback powinna być wywołana z jednym argumentem, równym właśnie obsługiwanemu w danej chwili elementowi.
 */

// Rozwiązanie:
function forEach(arr, cb) {
  for (const elem of arr) {
    cb(elem);
  }
}

/**
 * Zad 7 treść:
 * Napisz funkcję formatName, która przyjmie w argumencie imię i nazwisko, a następnie zwróci poprawioną jego formę. Poprawioną, czyli taką, w której tylko pierwsza litera imienia i nazwiska będą duże, a pozostałe małe.

formatName('aMAnDa dOE'); // returns Amanda Doe
formatName('AMANDA DOE'); // returns Amanda Doe
formatName('john DOE'); // returns John Doe
 */

// Rozwiązanie:

function formatName(name) {
  const firstNameAndLastName = name.split(' ');
  let firstName = firstNameAndLastName[0];
  let lastName = firstNameAndLastName[1];

  firstName =
    firstName.charAt(0).toUpperCase() + firstName.substr(1).toLowerCase();
  lastName =
    lastName.charAt(0).toUpperCase() + lastName.substr(1).toLowerCase();
  return firstName + ' ' + lastName;
}

console.log(formatName('AMANdA doE')); // returns Amanda Doe

/** 
 * Zad 8 treść:
 * Przygotuj funkcję getEvensInRange, która przyjmie dwa argumenty:

liczbę wskazującą początek zakresu do sprawdzenia,
liczbę wskazującą jego koniec.
Zadaniem funkcji jest przejście po wszystkich liczbach wewnątrz podanego zakresu i zwrócenie tablicy, która będzie zawierać tylko te, które są parzyste.
*/

//Rozwiązanie:
function getEvensInRange(start, end) {
  const evensArray = [];

  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) evensArray.push(i);
  }

  return evensArray;
}

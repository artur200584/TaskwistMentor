// 1) Напишіть функцію, що приймає масив чисел і повертає масив з їх квадратами (підносить кожен елемент до квадрату).

const arr = [1,2,3,4,5]

function step(arr) {
    let resalut = []
    for(let i = 0; i < arr.length; i++) {
        resalut.push(arr[i] * 2)
    }
    return resalut
}

console.log(step(arr))

// 2) Напишіть функцію, що приймає масив об’єктів з властивістю age і повертає масив тільки з тими об’єктами, де age більше 18 (Приклад такого масиву [{name: "Misha", age: 27}, {name: "Vlad", age: 21}] )

const people = [
    { name: "Misha", age: 27 },
    { name: "Vlad", age: 17 },
    { name: "Anna", age: 24 },
    { name: "Olga", age: 22 },
    { name: "Dmytro", age: 30 },
    { name: "Kateryna", age: 26 },
    { name: "Ihor", age: 14 },
    { name: "Yana", age: 23 },
    { name: "Serhii", age: 31 },
    { name: "Oksana", age: 25 },
    { name: "Oleh", age: 15 },
    { name: "Nazar", age: 20 },
    { name: "Sofia", age: 27 },
    { name: "Andriy", age: 2 },
    { name: "Marta", age: 24 },
    { name: "Ivan", age: 10 },
    { name: "Nadiia", age: 30 },
    { name: "Taras", age: 26 },
    { name: "Lyudmyla", age: 23 },
    { name: "Viktor", age: 32 }
];

function agePeople(people) {
    let resalutAge = []
    for(let i = 0; i < people.length; i++) {
        if(people[i].age > 18) {
            resalutAge.push(people[i])
        }
    }
    return resalutAge
}

console.log(agePeople(people))

// 3) Напишіть функцію, що приймає об’єкт з масивом чисел і повертає суму цих чисел.

const randomObject = {
    numbers: [7, 23, 15, 42, 89, 34, 56, 78, 12, 91]
};

function sumNumbers(randomObject) {
    let sum = 0
    for(let i = 0; i < randomObject.numbers.length; i++) {
        sum += randomObject.numbers[i]
    }
    return sum
}

console.log(sumNumbers(randomObject))

// 4) Напишіть функцію, що приймає масив рядків і повертає масив з довжинами цих рядків.

const strings = [
    "sun", "moon", "star", "sky", "cloud", "rain", "wind", "storm", "snow", "fog",
    "sun", "moon", "star", "sky", "cloud", "rain", "wind", "storm", "snow", "fog",
    "artur", "karina"
];


function sumStr(strings, lineSize = 10) {
   let resalutStr = []

   for(let i = 0; i < strings.length; i+= lineSize) {
    const line = strings.slice(i, i + lineSize)
    resalutStr.push(line.length)
   }
   return resalutStr
}

console.log(sumStr(strings))

// 5) Напишіть функцію, що приймає масив чисел і повертає масив тільки з тими числами, що більше 10.

const randomNumbers = [3, 15, 8, 22, 7, 12, 5, 18, 2, 30, 9, 11, 4, 25];

function arrNumbers(randomNumbers) {
    let resalutNum = []

    for(let i = 0; i < randomNumbers.length; i++) {
        if(randomNumbers[i] > 10) {
            resalutNum.push(randomNumbers[i])
        }
    }
    return resalutNum
}

console.log(arrNumbers(randomNumbers))

// 6) Напишіть функцію, що приймає масив об’єктів з властивостями name і age, і повертає масив рядків типу “Name is Age years old”.

const person = [
    { name: "Alice", age: 28 },
    { name: "Bob", age: 34 },
    { name: "Charlie", age: 25 },
    { name: "David", age: 42 },
    { name: "Eva", age: 30 },
    { name: "Frank", age: 50 },
    { name: "Grace", age: 27 },
    { name: "Hannah", age: 35 },
    { name: "Ian", age: 22 },
    { name: "Jack", age: 40 }
];

function personNameAndAge(person) {
    let resalutPerson = []

    for(let i = 0; i < person.length; i++) {
        resalutPerson.push(person[i].name + ' is ' + person[i].age + ' years old')
    }
    return resalutPerson
}

console.log(personNameAndAge(person))

// 7) Напишіть функцію, що приймає масив об’єктів з властивістю age і повертає масив об’єктів, відсортованих за age по зростанню.

const personAge = [
    { name: "Alice", age: 28 },
    { name: "Bob", age: 34 },
    { name: "Charlie", age: 25 },
    { name: "David", age: 42 },
    { name: "Eva", age: 30 },
    { name: "Frank", age: 50 },
    { name: "Grace", age: 27 },
    { name: "Hannah", age: 35 },
    { name: "Ian", age: 22 },
    { name: "Jack", age: 40 }
];

function sortAge(personAge) {
    return personAge.sort((a, b) => a.age - b.age)
}

console.log(sortAge(person))

// 8) Напишіть функцію, що приймає масив об’єктів з властивістю price і повертає масив об’єктів, відсортованих за зростанням ціни

const products = [
    { name: "Laptop", price: 1200 },
    { name: "Phone", price: 800 },
    { name: "Tablet", price: 400 },
    { name: "Monitor", price: 300 },
    { name: "Keyboard", price: 50 },
    { name: "Mouse", price: 30 },
    { name: "Headphones", price: 150 },
    { name: "Speaker", price: 200 },
    { name: "Webcam", price: 70 },
    { name: "Charger", price: 25 }
];


function productsSort(products) {
    return products.sort((a, b) => a.price - b.price)
}

console.log(productsSort(products))

// 9) Напишіть функцію, що приймає масив об’єктів з властивістю id і повертає об’єкт з певним id.

const peopleId = [
    { id: "alice", name: "Alice Johnson" },
    { id: "amelia", name: "Amelia Brown" },
    { id: "andrew", name: "Andrew Scott" },
    { id: "aaron", name: "Aaron Lewis" },
    { id: "anna", name: "Anna Clark" },
    { id: "bob", name: "Bob Smith" },
    { id: "charlie", name: "Charlie Green" },
    { id: "david", name: "David Wilson" },
    { id: "eva", name: "Eva Davis" },
    { id: "frank", name: "Frank Miller" }
];

function sortPeopleId(peopleId) {
    let resalutId = []

    for(let i = 0; i < peopleId.length; i++) {
        if(peopleId[i].id[0] === 'a') {
            resalutId.push(peopleId[i])
        }
    }
    return resalutId
}

console.log(sortPeopleId(peopleId))

// 10) Напишіть функцію, що приймає масив об’єктів з властивістю amount і повертає суму всіх amount.

const transactions = [
    { id: 1, amount: 150 },
    { id: 2, amount: 320 },
    { id: 3, amount: 45 },
    { id: 4, amount: 200 },
    { id: 5, amount: 500 },
    { id: 6, amount: 75 },
    { id: 7, amount: 180 },
    { id: 8, amount: 90 },
    { id: 9, amount: 350 },
    { id: 10, amount: 210 }
];

function sumTransactions(transactions) {
    let resalutTransactions = 0

    for(let i = 0; i < transactions.length; i++) {
        resalutTransactions += transactions[i].amount
    }
    return resalutTransactions
}

console.log(sumTransactions(transactions))

// 11) Напишіть функцію, що приймає масив об’єктів з властивістю category і повертає об’єкт, де ключі - це категорії, а значення - масиви об’єктів кожної категорії.

const products1 = [
    { id: 1, name: "Laptop", category: "Electronics" },
    { id: 2, name: "Sofa", category: "Furniture" },
    { id: 3, name: "T-shirt", category: "Clothing" },
    { id: 4, name: "Headphones", category: "Electronics" },
    { id: 5, name: "Watch", category: "Accessories" },
    { id: 6, name: "Desk", category: "Furniture" },
    { id: 7, name: "Jacket", category: "Clothing" },
    { id: 8, name: "Phone", category: "Electronics" },
    { id: 9, name: "Shoes", category: "Clothing" },
    { id: 10, name: "Lamp", category: "Furniture" }
];

function sumProduncts(products1) {
    let resalutProducts = {}
    let electronics = []
    let furniture = []
    let clothing =[]
    let accessories = []

    for(let i = 0; i < products1.length; i++) {
        if(products1[i].category === 'Electronics') {
            electronics.push(products[i])
        } else if(products1[i].category === 'Furniture') {
            furniture.push(products1[i])
        } else if(products1[i].category === 'Clothing') {
            clothing.push(products1[i])
        } else if(products1[i].category === 'Accessories') {
            accessories.push(products1[i])
        } 
    }

    resalutProducts.Electronics = electronics
    resalutProducts.Furniture = furniture
    resalutProducts.Clothing = clothing
    resalutProducts.Accessories = accessories

    return resalutProducts
}

console.log(sumProduncts(products1))

// 12) Напишіть функцію, що приймає масив об’єктів з властивістю status і повертає true, якщо всі об’єкти мають status “active”


const items = [
    { id: 1, name: "Task 1", status: "active" },
    { id: 2, name: "Task 2", status: "active" },
    { id: 3, name: "Task 3", status: "active" },
    { id: 4, name: "Task 4", status: "active" },
    { id: 5, name: "Task 5", status: "active" },
    { id: 6, name: "Task 6", status: "active" },
];

function verificationItems(items) {
    for(let i = 0; i < items.length; i++) {
        if(items[i].status !== 'active') {
            return false
        } 
    }
    return true
}

console.log(verificationItems(items))

// 13) Напишіть функцію, що приймає масив об’єктів з властивістю name і повертає true, якщо хоча б один об’єкт має name “Ihor”.

const names = [
    { id: 1, name: "Ihor" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
    { id: 4, name: "David" },
    { id: 5, name: "Eve" },
    { id: 6, name: "Frank" }
];


function verificationName(names) {
   for(let i = 0; i < names.length; i++) {
    if(names[i].name === 'Ihor') {
        return true
    }
   }
   return false
}

console.log(verificationName(names))

// 14)  Напишіть функцію, що приймає два масиви об’єктів і повертає один об’єднаний масив без дублікатів за властивістю id.

const array1 = [
    { id: 1, name: 'Dmytro' },
    { id: 2, name: 'Olha' },
    { id: 3, name: 'Iryna' }
];

const array2 = [
    { id: 2, name: 'Olha' },
    { id: 4, name: 'Pavlo' },
    { id: 5, name: 'Bohdan' }
];

function sumArray(array1, array2) {
    let combinedArray = array1.concat(array2);

    let resultArray = combinedArray.filter((item, index, self) =>
        index === self.findIndex((obj) => obj.id === item.id)
    )

    return resultArray;
}

console.log(sumArray(array1, array2))


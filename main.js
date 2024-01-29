// let obf1={}
// let obf2= new Object()
// let key = prompt('enter Key: ', 'adress')
// let val= prompt('enter val: ', 'value')
// const user = {
//     'name':'Vasya',
//     'age':12,
//     'isAdmin':false,
//     'like dogs':true,
//     [key+'_user']:val,
// }

// // user.key='sasas' //так нельзя

// user['login'] = 'User1'
// console.log(user)
// delete user.age
// console.log(user)
// console.log(user[key+'_user'])



// function makeUser(name, age){
//     return{
//         name:name,age:age,}
// }
// let user = makeUser('vasya', 0)
// console.log(user.name)

// let user = {
//     name: 'Vasya',
//     age: 16,
//     'is Admin':false,
// };

// let adress = {
//     'street':'ASASSAS'
// }

// // let admin = {};
// // for (let key in user){
// //     admin[key]=user[key]
// // }

// // let admin=Object.assign({},user, adress)

// // admin.name='admin'
// // admin['is Admin']=true
// // console.log(user)
// // console.log(admin)

// // for (let index in user){
// //     console.log(index, user[index])
// // }

// let user = {
    // name: 'Vasya',
    // age: 16,
    // 'is Admin':false,

    // hello(){
    //     console.log(`hello ${this.name}, ${this.age + 100}`) //this работает как self в питоне
    //     // f'hello {this.name}, {this.age + 100}'
    // }
// };

// function newUser(name, age){
//     return {name, age}
// }
// function hello(){
//     return(`hello ${this.name}, ${this.age + 100}`)
// }
// let meneger = new newUser('meneger', 23)
// meneger['is Admin']=false
// meneger['say_hello'] = hello
// console.log(hello())
// console.log(meneger.say_hello())

// let admin = Object.assign({},user)
// admin.name = 'admin'
// admin.age = 25
// console.log(admin)
// admin.say_hello()


// let user = {
//     name:'Vasya',
//     age:12,
//     adress:{
//         street:'street',
//         house:12,
//         flat:1,
//     }
// }
// console.log(user.adress.street)



////////////////////////////// массивы ...........
// let array = []
// let array2 = new Array()
// let array3 = [1,2,3,4,5]
// console.log(array3.length)
// console.log(array3[0])
// console.log(array3)
// array3[0]=100
// delete array3[1]
// array3[array3.length]=500
// array3[array3.length]=600
// console.log(array3)

// let arr = [1,'asd',[21,22],{name:'dsad', age:23}]
// console.log(arr)
// let arr = [
//     {name:'sasha', age:23},
//     {name:'admin', age:23},
//     {name:'dad', age:23},
// ]

// for (let i=0; i<=arr.length; i++){
//     console.log(arr[i])
// }

// for (let i in arr){
//     console.log(arr[i])
// }

// for (let i of arr){
//     console.log(i)
// }

//pop удалят ласт
//push добавляет в конец
//shift удаляет начало
//unshift добавляет в начало

// если их прописать внутри консоль лог то отобразится то, что удалилось, 
// а если ставить ЗА, то он сразу удалит и потом отобразит полученный результат если ввесьт консоль лог

// let arr = [
//     {name:'sasha', age:23},
//     {name:'admin', age:23},
//     {name:'dad', age:23},
// ]   

// let matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
// matrix[0]='asasa'
// console.log(matrix[0][2])
// matrix.splice(1,0,arr) // еслт указать третий параметр, то она добавит
// // delete matrix[0]
// console.log(matrix)

// let arr = [
//     {name:'sasha', age:23},
//     {name:'admin', age:23},
//     {name:'dad', age:15},
// ]

// for (let i=0; i<=arr.length; i++){
//     console.log(arr[i])
// }

// for (let i in arr){
//     console.log(arr[i])
// }

// for (let i of arr){
//     console.log(i)
// }

// arr.forEach(function(elem, index){
//     console.log(elem)
// })

// arr.forEach((elem) => console.log(elem))

// let arr = [12, 11,1,2,3,12,3,4,5,3,2,4,4,1]

// let el = arr.find(item => item == 12)
// console.log(el)

// let res = arr.filter((item) => item < 10)
// console.log(res)

// let res = arr.map((item, index) => item*2+index)
// console.log(res)


// function compareNum(a,b){
//     if (a>b) return 1;
//     if (a==b) return 0;
//     if (a<b) return -1;
// }
// console.log(arr.sort(compareNum).reverse()) //сортироет построчно

// let arr = [12,4,4,1]

// let str = 'dsdsldal,dfasdf,fsdfds,sasfsdf';
// let arr1 = str.split(',')
// console.log(arr.join('!  '));

// let sum = 0
// let res = arr.reduce((sum, item) => sum+item, 0)

// console.log(res)

/////////////////////////// ЗАДАНИЯ \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// 1
// let arr1 = ['Привет, ', 'мир', '!'];
// console.log(arr.join(''));

//2
// let arr2 = ['Привет, ', 'мир', '!'];
// let text = arr2.join('');
// console.log(text);

//3
// let arr3 = ['Привет, ', 'мир', '!']; 
// arr3.splice(0,1,'Пока') // еслт указать третий параметр, то она добавит
// console.log(arr3);

//4
// let obj = {
//     Петя: 50000,
//     Коля: 60000
//   };
//   console.log('Зарплата Пети:', obj['Петя']);
//   console.log('Зарплата Коли:', obj['Коля']);

//5
// let arr = {
//     ru: ['синий', 'красный', 'зеленый'],
//     en: ['blue', 'red', 'green']
//   };
// console.log(arr.ru[1]);

// 1
// let arr = ['a', 'b', 'c'];
// alert(arr);

// 2
// let arr = ['a', 'b', 'c'];
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);

// 3
// let arr = ['a', 'b', 'c', 'd'];
// let str = arr[0] + '+' + arr[1] + ', ' + arr[2] + '+' + arr[3];
// console.log(str);

// 4
// let arr = [2, 5, 3, 9];
// let result = arr[0] * arr[1] + arr[2] * arr[3];
// console.log(result);


// 1
// var obj = {a: 1, b: 2, c: 3};

// console.log(obj['c']); // Вывод через квадратные скобки
// console.log(obj.c); // Вывод как свойство объекта

// 2
// var obj = {'Коля': '1000', 'Вася': '500', 'Петя': '200'};
// console.log('Зарплата Пети:', obj['Петя']);
// console.log('Зарплата Коли:', obj['Коля']);

// 3
// let daysOfWeek = {
//     1: 'понедельник',
//     2: 'вторник',
//     3: 'среда',
//     4: 'четверг',
//     5: 'пятница',
//     6: 'суббота',
//     7: 'воскресенье'
// };

// console.log('День недели:', daysOfWeek[1])

// 4
// let daysOfWeek = {
//     1: 'понедельник',
//     2: 'вторник',
//     3: 'среда',
//     4: 'четверг',
//     5: 'пятница',
//     6: 'суббота',
//     7: 'воскресенье'
// };
// let day = 3;  
// console.log('День недели:', daysOfWeek[day]);




// 1
// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// let number = arr[1][0];
// console.log(number);

// 2
// let obj = {js:['jQuery', 'Angular'], php: 'hello', css: 'world'};
// console.log(obj.js[0]);

// 3
// let daysOfWeek = {
//     ru: ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'],
//     en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
// };
// console.log('Понедельник по-русски:', daysOfWeek.ru[0]);
// console.log('Среда по-английски:', daysOfWeek.en[2]);

// 4
// let daysOfWeek = {
//     ru: ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'],
//     en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
// };

// let lang = 'ru';
// let day = 3;

// console.log(daysOfWeek[lang][day - 1]);
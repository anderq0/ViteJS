import './style.scss'
// ДЗ 2 задание 2
type checkType = {
    name: string,
    count: number,
    cost: number,
}

const checkList: checkType[] = [
    {name:'cheese', count:1, cost:43},
    {name:'dog', count:1, cost:12},
    {name:'bread', count:2, cost:54},
    {name:'juice', count:1, cost:10},
]

const DZ2z2Ol = document.getElementById('DZ2z2') as HTMLOListElement
function printCheck(arr:checkType[]){
    let html = ''
    for (let el of arr) {
        html += `<li>${el.name} ${el.count} ${el.cost}</li>` 
    }
    DZ2z2Ol.innerHTML = html
  }
  
printCheck(checkList)

const DZ2z2H5Sum = document.getElementById('sumResult') as HTMLHeadElement
function getSum(arr:checkType[]){
    let sumResult = 0
    for(let el of arr){
        sumResult += el.cost
    }
    DZ2z2H5Sum.innerHTML += String(sumResult)
}
getSum(checkList)

const DZ2z2H5Max = document.getElementById('maxProductCost') as HTMLHeadElement
function getMaxProductCost(arr:checkType[]){
    let maxCost = 0
    let maxCostProduct = ''
    for(let el of arr){
        // el.cost > maxCost? maxCost = el.cost : maxCost = maxCost
        if( el.cost> maxCost){
            maxCost = el.cost
            maxCostProduct = el.name
        }
    }
    DZ2z2H5Max.innerHTML += maxCostProduct + ' '+String(maxCost)
}
getMaxProductCost(checkList)

const DZ2z2H5AverageCost = document.getElementById('midSum') as HTMLHeadElement
function getAverageCost(arr:checkType[]){
    let averageCostResult = 0
    for(let el of arr){
        averageCostResult += el.cost
    }
    averageCostResult = averageCostResult / arr.length
    DZ2z2H5AverageCost.innerHTML += String(averageCostResult)
}
getAverageCost(checkList)


//ДЗ2 задание 4

// Создать массив аудиторий академии. Объект-аудитория со-
// стоит из названия, количества посадочных мест (от 10 до 20) и
// названия факультета, для которого она предназначена.

type audienceArrayType = {
    audienceName: string,
    placeQuentity: number,
    facultyName: string,
}
const audienceArray: audienceArrayType[] = [
    {audienceName: 'first audience', placeQuentity:14, facultyName:'Math'},
    {audienceName: 'second audience', placeQuentity:15, facultyName:'Language'},
    {audienceName: 'third audience', placeQuentity:13, facultyName:'Biology'},
    {audienceName: 'fourth audience', placeQuentity:18, facultyName:'Chemistry'},
    {audienceName: 'fifth audience', placeQuentity:20, facultyName:'Math'},
    {audienceName: 'sixth audience', placeQuentity:20, facultyName:'Biology'},
]

// 1 Вывод на экран всех аудиторий.

const DZ2z4Ol = document.getElementById('DZ2z4') as HTMLOListElement
function getAllAudiences(arr:audienceArrayType[]){
    let html = ''
    for(let el of arr){
        html+= `<li>${el.audienceName}</li>`
    }
    DZ2z4Ol.innerHTML = html
}
getAllAudiences(audienceArray)

// 2  Вывод на экран аудиторий для указанного факультета.
const FindAudienceButton = document.getElementById('findAudience') as HTMLButtonElement
const findAudienceInput = document.getElementById('findAudienceInput') as HTMLInputElement
const audienceResultH5 = document.getElementById('audienceResult') as HTMLHeadElement

function findAudience(arr:audienceArrayType[], facultyNameString:string){
    let html = ''
    let isExist = false
    for(let el of arr){
        if(el.facultyName.toLowerCase() == facultyNameString.toLowerCase() ){
            html += `<p>${el.audienceName}</p>`
            isExist = true
        }
    }
    if(!isExist){
        console.log('ok')
        html+= `<p style="color: red">No such audience 😞</p>`
    }
    audienceResultH5.innerHTML += html
} 
FindAudienceButton.addEventListener('click', function() {
    audienceResultH5.innerHTML = ''
    findAudience(audienceArray, findAudienceInput.value)
    findAudienceInput.value = ''
})


// 3 Вывод на экран только тех аудиторий, которые подходят для
// переданной группы. Объект-группа состоит из названия,
// количества студентов и названия факультета.
const findAudienceForGroupButton = document.getElementById('findAudienceForGroupButton') as HTMLButtonElement
const findAudienceForGroupInput = document.getElementById('findAudienceForGroupInput') as HTMLInputElement
const AudienceForGroupResult = document.getElementById('AudienceForGroupResult') as HTMLHeadElement

type groupType = {
    groupName: string,
    studentQuentity: number,
    facultyName: string,
}

const groups:groupType[] = [
    {groupName:'genius', studentQuentity:13, facultyName:'Math'},
    {groupName:'good', studentQuentity:13, facultyName:'Language'},
    {groupName:'middle', studentQuentity:13, facultyName:'Biologu'},
    {groupName:'bad', studentQuentity:13, facultyName:'Math'},
    {groupName:'worse', studentQuentity:13, facultyName:'Chemistry'},
]

function findAudienceForGroup(arr:audienceArrayType[], arr2:groupType[], groupName:string){
    let html = ''
    let isExist = false
    for (let key in arr2){
        if(groupName == arr2[key].groupName){
            for(let el of arr){
                if(groupName == arr2[key].groupName&&arr2[key].studentQuentity <= el.placeQuentity && arr2[key].facultyName == el.facultyName){
                    html += `<p>${el.audienceName}</p>`
                    AudienceForGroupResult.innerHTML = html
                    isExist = true
                }
                
            }
        }
    }
    
    if(!isExist){
        html+= `<p style="color: red">No such audience 😞</p>`
        AudienceForGroupResult.innerHTML += html
    }
} 

findAudienceForGroupButton.addEventListener('click', function() {
    AudienceForGroupResult.innerHTML = ''
    findAudienceForGroup(audienceArray, groups, findAudienceForGroupInput.value)
    findAudienceInput.value = ''
})

let someArray = [32,53,1,77,3]
someArray.sort((a,b) => a-b)
console.log(someArray)


// ===========================================================

// 1.1.  Написать функцию возвращающюю массив целых чисел от 0 до 10
const arrayOfNums:number[] = []
function addArrayOfNums(arr:number[], start=0, end= start+10){
    for(let i=0; i <= 10; i++){
         i == 0? arr.push(start) : i == 10 ? arr.push(end) : arr.push(i+start)
    }
    console.log(arr)
}
addArrayOfNums(arrayOfNums, 14)
// 1.2 - 1.3*. Написать функцию возвращающюю массив случайных целых чисел. Функция принимает 1 параметр, количество элементов в будущем массиве
// Добавить в функцию параметры опциональные параметры начального и конечного значения массива
const ArrayOfRandomNums:number[] =[]
function addArrayOfRandomNums(arr:number[], arrayLength:number){
    for(let i= 0; i < arrayLength; i++){
        arr.push(Math.floor(Math.random() * 100 ))
    }
    console.log(arr)
}
addArrayOfRandomNums(ArrayOfRandomNums,9)

// 2.1 - 2.4
const someDiv = document.getElementById('someIdForDiv') as HTMLDivElement
function sayHelloToUser(name='user' ){
    // navigator.geolocation.getCurrentPosition(async (position) => {
    //     const { latitude: lat, longitude: lon } = position.coords;  // Ваши координаты определены!
    //     const res = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=ru`);
    //     const { city } = await res.json(); // И вот название вашего города!
    //     someDiv.innerHTML = `Привет, ${name}! Ваш город ${city}`
    //   });
      someDiv.innerHTML = `Привет, ${name}!`
}
sayHelloToUser('gaya')

// Есть массив объектов
type employeesType = {
    name:string,
    department: string,
    salary:number
}

const employees:employeesType[] = [
    { name: 'Федотова Арина Глебовна', department: 'ads', salary: 2100 },
    { name: 'Голикова Мария Филипповна', department: 'prog', salary: 3500 },
    { name: 'Панин Александр Германович', department: 'ads', salary: 2100 },
    { name: 'Романов Эмиль Макарович', department: 'prog', salary: 3100 },
    { name: 'Смирнов Никита Александрович', department: 'prog', salary: 3800 },
    { name: 'Александрова Майя Вячеславовна', department: 'prog', salary: 4500 },
    { name: 'Крылов Богдан Максимович', department: 'disign', salary: 2100 },
    { name: 'Мухина Айша Константиновна', department: 'disign', salary: 2100 },
  ]

// 3.1. Создать функцию, принимающую массив работников, и возвращающую массив уникальных отделов (department)
function departmentUnqiue(arr:employeesType[]){
    const departmentUniqueArray:string[] = []
    arr.forEach(el=>{
        if(!departmentUniqueArray.includes(el.department)){
            departmentUniqueArray.push(el.department)
        }
    })
    return departmentUniqueArray
}
console.log('Unique department: ',departmentUnqiue(employees))



// 3.2. Написать функцию, принимающую массив работников и ключ объекта, по которому сделать сортировку массива
// Учесть, что строковые параметры сортируются при помощи метода localeCompare, а числовые,- вычитанием
function sortEmployers(arr:employeesType[], key:'name' | 'department' | 'salary'){
    if(key == 'name' || key == 'department'){
        arr.sort((a,b) => a[key].localeCompare(b[key]))
    }else if( key == 'salary'){
        arr.sort((a,b) =>a.salary-b.salary)
    }
    console.log([...arr])
}
sortEmployers(employees, 'salary')

// 3.3. Написать функцию, аналогичную описанной в задании 2.2., но сортирующую в обратном порядке
function sortEmployersReverse(arr:employeesType[], key:'name' | 'department' | 'salary'){
    sortEmployers(arr, key)
    console.log([...arr.reverse()])
}
sortEmployersReverse(employees, 'salary')


// 3.4. Написать функцию, принимающую массив работников и имя, и возвращающую объект сотрудника или undefined
function findEmployerObject(arr:employeesType[], name:string){
    for(let el of arr){
        el.name == name ? console.log(el) : el.name
    }
}
findEmployerObject(employees, 'Федотова Арина Глебовна')
findEmployerObject(employees, 'sgudfyuew')
// 3.5. Написать функцию, принимающую массив работников и название отдела, и возвращающую новый массив, содержащий только сотрудников переданного отдела
function getAllEmployersByDepartment(arr:employeesType[], departmentTo:string){
    let AllEmployersByDepartment:employeesType[] = []
    for(let el of arr){
        el.department == departmentTo? AllEmployersByDepartment.push(el) : AllEmployersByDepartment
    }
    console.log(AllEmployersByDepartment)
    return AllEmployersByDepartment
}
getAllEmployersByDepartment(employees, 'prog')
// 3.6. Написать функцию, принимающую массив работников и возвращающую сумму зарплат. Вызвать функцию по каждому отделу и по общему массиву
let salaryArray = 0
function getSalaryOfEmployers(arr:employeesType[], departmentTo = 'any'){
    for(let el of arr){
        el.department == departmentTo ? salaryArray += el.salary : departmentTo == 'any' ? salaryArray = arr.reduce((sum, salary) => sum+ salary.salary, 0) : salaryArray
    }
    console.log(salaryArray)
}
getSalaryOfEmployers(employees, 'ads')
getSalaryOfEmployers(employees, 'prog')


// 3.7. В HTML создать div для кнопок, задать ему id и получить объект div'a в js, аналогично заданию 2.2.

// 3.8. Так же как в 3.7 создать ul (as HTMLUListElement) для вывода списка и div для вывода суммы зарплат
const tableForEmployeesZadanie = document.getElementById('tableForEmployees') as HTMLTableElement
const DivForSumSalaryZadanie = document.getElementById('DivForSumSalary') as HTMLDivElement
function getArrayOfEmployees(arr:employeesType[]){
    let salarySum = 0 
    let html = '<thead> <tr> <th>Имя</th> <th>Департамент</th> <th>Зарплата</th> </tr></thead><tbody>'
    for(let el of arr){
        html += `<tr><td>${el.name}</td>    <td>${el.department}</td>   <td>${el.salary} </td></tr>`
        salarySum += el.salary
    }
    tableForEmployeesZadanie.innerHTML = html + `</thead>`
    DivForSumSalaryZadanie.innerHTML = `<b>Final Sum Of Salaries: </b>` + String(salarySum)

}
getArrayOfEmployees(employees)

// 3.9. Используя массив, полученный в 3.1. Вывести кнопки с названиями отделов + кнопку "Все отделы"
//      использовать data-атрибут (data-dep), в который поместить название отдела. Для кнопки "Все отделы" data-dep="all"
const buttonDivs = document.getElementById('butDivs') as HTMLDivElement

function renderButtons(arr: string[]) {
  let html = ''
  for (let el of arr) {
    html += `<button style="background-color: #316680; width: 80px; color: white; border-color: #316680; border-width: 5px;
    margin-left: 20px; margin-bottom: 5px;" data-dep="${el}">${el.toUpperCase()}</button>`
  }
  html += `<button style="background-color: #316680; width: 80px; color: white; border-color: #316680; border-width: 5px;
  margin-left: 20px; margin-bottom: 5px;" data-dep="all">ALL</button>`
  buttonDivs.innerHTML = html
}

renderButtons(departmentUnqiue(employees))
buttonDivs.addEventListener('click', function (e) {
    const target = e.target as HTMLElement
    if (target.tagName == 'BUTTON' && target.dataset.dep) {
      if (target.dataset.dep == 'all') {
        getArrayOfEmployees(employees)
      } else {
        getArrayOfEmployees(getAllEmployersByDepartment(employees, target.dataset.dep))
      }
    }
  })

// 3.10. Используя div, полученный в задании 3.7
// div37.addEventListener('click', function (e) {
//   const target = e.target as HTMLElement
//   if (target.tagName == 'BUTTON' && target.dataset.dep) {
//      в зависимости от значения dep выводить в список (ul 3.8) тех сотрудников, которые работают в данном отделе, либо всех, если target.dataset.dep=='all'. Используем логическое ветвление и уже написанные функции
//      в div (3.8) выводить сумму зарплат
//   }
// })

//======================================================
const whatThreePointMean = ['hello', 'this', 'is', 'gaya']
console.log(...whatThreePointMean)
console.log(whatThreePointMean)
const numsForTest:number[] = [1,2,3,4,5,6,7,8,9]
console.log(Math.max(...numsForTest))

const fruits = ['kiwi', 'orange', 'kiwi', 'apple', 'orange']
console.log(fruits)
// function fruitCounter(list:string[]){
//     const count = {}

//     list.forEach(f => {
//         !count[f] ? count[f] = 1 : count[f]++
//         console.log(count[f])
//     })

//     return count
// }
// console.log(fruitCounter(fruits)
console.log(15..toString())

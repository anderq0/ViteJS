import './style.scss'
// ДЗ 2 задание 2
type checkType = {
    name: string,
    count: number,
    cost: number,
}
// document.designMode = "on";

const checkList: checkType[] = [
    { name: 'cheese', count: 1, cost: 43 },
    { name: 'dog', count: 1, cost: 12 },
    { name: 'bread', count: 2, cost: 54 },
    { name: 'juice', count: 1, cost: 10 },
]

const DZ2z2Ol = document.getElementById('DZ2z2') as HTMLOListElement
function printCheck(arr: checkType[]) {
    let html = ''
    for (let el of arr) {
        html += `<li>${el.name} ${el.count} ${el.cost}</li>`
    }
    DZ2z2Ol.innerHTML = html
}

printCheck(checkList)

const DZ2z2H5Sum = document.getElementById('sumResult') as HTMLHeadElement
function getSum(arr: checkType[]) {
    let sumResult = 0
    for (let el of arr) {
        sumResult += el.cost
    }
    DZ2z2H5Sum.innerHTML += String(sumResult)
}
getSum(checkList)

const DZ2z2H5Max = document.getElementById('maxProductCost') as HTMLHeadElement
function getMaxProductCost(arr: checkType[]) {
    let maxCost = 0
    let maxCostProduct = ''
    for (let el of arr) {
        // el.cost > maxCost? maxCost = el.cost : maxCost = maxCost
        if (el.cost > maxCost) {
            maxCost = el.cost
            maxCostProduct = el.name
        }
    }
    DZ2z2H5Max.innerHTML += maxCostProduct + ' ' + String(maxCost)
}
getMaxProductCost(checkList)

const DZ2z2H5AverageCost = document.getElementById('midSum') as HTMLHeadElement
function getAverageCost(arr: checkType[]) {
    let averageCostResult = 0
    for (let el of arr) {
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
    { audienceName: 'first audience', placeQuentity: 14, facultyName: 'Math' },
    { audienceName: 'second audience', placeQuentity: 15, facultyName: 'Language' },
    { audienceName: 'third audience', placeQuentity: 13, facultyName: 'Biology' },
    { audienceName: 'fourth audience', placeQuentity: 18, facultyName: 'Chemistry' },
    { audienceName: 'fifth audience', placeQuentity: 20, facultyName: 'Math' },
    { audienceName: 'sixth audience', placeQuentity: 20, facultyName: 'Biology' },
]

// 1 Вывод на экран всех аудиторий.

const DZ2z4Ol = document.getElementById('DZ2z4') as HTMLOListElement
function getAllAudiences(arr: audienceArrayType[]) {
    let html = ''
    for (let el of arr) {
        html += `<li>${el.audienceName}</li>`
    }
    DZ2z4Ol.innerHTML = html
}
getAllAudiences(audienceArray)

// 2  Вывод на экран аудиторий для указанного факультета.
const FindAudienceButton = document.getElementById('findAudience') as HTMLButtonElement
const findAudienceInput = document.getElementById('findAudienceInput') as HTMLInputElement
const audienceResultH5 = document.getElementById('audienceResult') as HTMLHeadElement

function findAudience(arr: audienceArrayType[], facultyNameString: string) {
    let html = ''
    let isExist = false
    for (let el of arr) {
        if (el.facultyName.toLowerCase() == facultyNameString.toLowerCase()) {
            html += `<p>${el.audienceName}</p>`
            isExist = true
        }
    }
    if (!isExist) {
        console.log('ok')
        html += `<p style="color: red">No such audience 😞</p>`
    }
    audienceResultH5.innerHTML += html
}
FindAudienceButton.addEventListener('click', function () {
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

const groups: groupType[] = [
    { groupName: 'genius', studentQuentity: 13, facultyName: 'Math' },
    { groupName: 'good', studentQuentity: 13, facultyName: 'Language' },
    { groupName: 'middle', studentQuentity: 13, facultyName: 'Biologu' },
    { groupName: 'bad', studentQuentity: 13, facultyName: 'Math' },
    { groupName: 'worse', studentQuentity: 13, facultyName: 'Chemistry' },
]

function findAudienceForGroup(arr: audienceArrayType[], arr2: groupType[], groupName: string) {
    let html = ''
    let isExist = false
    for (let key in arr2) {
        if (groupName == arr2[key].groupName) {
            for (let el of arr) {
                if (groupName == arr2[key].groupName && arr2[key].studentQuentity <= el.placeQuentity && arr2[key].facultyName == el.facultyName) {
                    html += `<p>${el.audienceName}</p>`
                    AudienceForGroupResult.innerHTML = html
                    isExist = true
                }

            }
        }
    }

    if (!isExist) {
        html += `<p style="color: red">No such audience 😞</p>`
        AudienceForGroupResult.innerHTML += html
    }
}

findAudienceForGroupButton.addEventListener('click', function () {
    AudienceForGroupResult.innerHTML = ''
    findAudienceForGroup(audienceArray, groups, findAudienceForGroupInput.value)
    findAudienceInput.value = ''
})

let someArray = [32, 53, 1, 77, 3]
someArray.sort((a, b) => a - b)
console.log(someArray)


// ===========================================================

// 1.1.  Написать функцию возвращающюю массив целых чисел от 0 до 10
const arrayOfNums: number[] = []
function addArrayOfNums(arr: number[], start = 0, end = start + 10) {
    for (let i = 0; i <= 10; i++) {
        i == 0 ? arr.push(start) : i == 10 ? arr.push(end) : arr.push(i + start)
    }
    console.log(arr)
}
addArrayOfNums(arrayOfNums, 14)
// 1.2 - 1.3*. Написать функцию возвращающюю массив случайных целых чисел. Функция принимает 1 параметр, количество элементов в будущем массиве
// Добавить в функцию параметры опциональные параметры начального и конечного значения массива
const ArrayOfRandomNums: number[] = []
function addArrayOfRandomNums(arr: number[], arrayLength: number) {
    for (let i = 0; i < arrayLength; i++) {
        arr.push(Math.floor(Math.random() * 100))
    }
    console.log(arr)
}
addArrayOfRandomNums(ArrayOfRandomNums, 9)

// 2.1 - 2.4
const someDiv = document.getElementById('someIdForDiv') as HTMLDivElement
function sayHelloToUser(name = 'user') {
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
    name: string,
    department: string,
    salary: number
}

const employees: employeesType[] = [
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
function departmentUnqiue(arr: employeesType[]) {
    const departmentUniqueArray: string[] = []
    arr.forEach(el => {
        if (!departmentUniqueArray.includes(el.department)) {
            departmentUniqueArray.push(el.department)
        }
    })
    return departmentUniqueArray
}
console.log('Unique department: ', departmentUnqiue(employees))



// 3.2. Написать функцию, принимающую массив работников и ключ объекта, по которому сделать сортировку массива
// Учесть, что строковые параметры сортируются при помощи метода localeCompare, а числовые,- вычитанием
function sortEmployers(arr: employeesType[], key: 'name' | 'department' | 'salary') {
    if (key == 'name' || key == 'department') {
        arr.sort((a, b) => a[key].localeCompare(b[key]))
    } else if (key == 'salary') {
        arr.sort((a, b) => a.salary - b.salary)
    }
    console.log([...arr])
}
sortEmployers(employees, 'salary')

// 3.3. Написать функцию, аналогичную описанной в задании 2.2., но сортирующую в обратном порядке
function sortEmployersReverse(arr: employeesType[], key: 'name' | 'department' | 'salary') {
    sortEmployers(arr, key)
    console.log([...arr.reverse()])
}
sortEmployersReverse(employees, 'salary')


// 3.4. Написать функцию, принимающую массив работников и имя, и возвращающую объект сотрудника или undefined
function findEmployerObject(arr: employeesType[], name: string) {
    for (let el of arr) {
        el.name == name ? console.log(el) : el.name
    }
}
findEmployerObject(employees, 'Федотова Арина Глебовна')
findEmployerObject(employees, 'sgudfyuew')
// 3.5. Написать функцию, принимающую массив работников и название отдела, и возвращающую новый массив, содержащий только сотрудников переданного отдела
function getAllEmployersByDepartment(arr: employeesType[], departmentTo: string) {
    let AllEmployersByDepartment: employeesType[] = []
    for (let el of arr) {
        el.department == departmentTo ? AllEmployersByDepartment.push(el) : AllEmployersByDepartment
    }
    console.log(AllEmployersByDepartment)
    return AllEmployersByDepartment
}
getAllEmployersByDepartment(employees, 'prog')
// 3.6. Написать функцию, принимающую массив работников и возвращающую сумму зарплат. Вызвать функцию по каждому отделу и по общему массиву
let salaryArray = 0
function getSalaryOfEmployers(arr: employeesType[], departmentTo = 'any') {
    for (let el of arr) {
        el.department == departmentTo ? salaryArray += el.salary : departmentTo == 'any' ? salaryArray = arr.reduce((sum, salary) => sum + salary.salary, 0) : salaryArray
    }
    console.log(salaryArray)
}
getSalaryOfEmployers(employees, 'ads')
getSalaryOfEmployers(employees, 'prog')


// 3.7. В HTML создать div для кнопок, задать ему id и получить объект div'a в js, аналогично заданию 2.2.

// 3.8. Так же как в 3.7 создать ul (as HTMLUListElement) для вывода списка и div для вывода суммы зарплат
const tableForEmployeesZadanie = document.getElementById('tableForEmployees') as HTMLTableElement
const DivForSumSalaryZadanie = document.getElementById('DivForSumSalary') as HTMLDivElement


const someSalarySum = employees.reduce((acumulator, currentValue) => acumulator + currentValue.salary, 0)
console.log(someSalarySum)

function getArrayOfEmployees(arr: employeesType[]) {
    let salarySum = 0
    let html = '<thead> <tr> <th>Имя</th> <th>Департамент</th> <th>Зарплата</th> </tr></thead><tbody>'
    for (let el of arr) {
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

// !======================================================================================================================
console.log(15..toString())


// Написать функцию, которая принимает 2 строки и сравнивает их длину. 
function wordLengthCompare(str1: string, str2: string) {
    let result = 0
    return str1.length > str2.length ? result = 1 : str1.length < str2.length ? result = -1 : result = 0
}
console.log(wordLengthCompare('wdjf', 'sfsfrs'))

// Написать функцию, которая переводит в верхний регистр первый символ переданной строки.
function firstWordToUpperCase(str: string) {
    str = str[0].toUpperCase() + str.slice(1)
    return str
}
console.log(firstWordToUpperCase('blablabla'))

// Написать функцию, которая считает количество гласных букв в переданной строке.
function countVowelLetter(str: string) {
    let count = 0
    const vowelLetter = /['eyuoai']/gi
    for (let i = 0; i < str.length; i++) {
        str[i].match(vowelLetter) ? count++ : count
    }
    return count
}
console.log(countVowelLetter('count this SHIT'))
// Написать функцию для проверки спама в переданной строке.
function spamIdentifier(str: string) {
    let spamArray = ['100% бесплатно', 'увеличение продаж', 'только сегодня', 'не удаляйте', 'xxx']
    for (let i = 0; i < spamArray.length; i++) {
        if (str.includes(spamArray[i])) {
            return true
        } else {
            return false
        }
    }

}
console.log(spamIdentifier('wfjoiwrfjow 100% бесплатно'))

// Написать функцию сокращения строки.
function splitStringByMaxSize(str: string, maxSize: number) {
    if (maxSize < str.length) {
        str = str.slice(0, maxSize) + '...'
        return str
    } else {
        return str
    }
}
console.log(splitStringByMaxSize('Hello, world', 8))
// Написать функцию, которая проверяет, является ли переданная строка палиндромом.
function palindromCheck(str: string) {
    let str2 = str.toLowerCase().split('').reverse().join('')
    return str2 == str.toLowerCase()
}
console.log(palindromCheck('ФЛлф'))

// Написать функцию, которая считает количество слов в предложении.
function countWordsInString(str: string) {
    return str.split(/[^-.'A-Za-zА-Яа-яЁё1-9]+/)
}
console.log(countWordsInString('Написать функцию, которая считает количество слов в предложении.'))

// Написать функцию, которая возвращает самое длинное слово из предложения.
function getTheMostLargeWordInString(str: string) {
    let strArray = str.split(/[^-'A-Za-zА-Яа-яЁё1-9]+/)
    return strArray.sort((a, b) => b.length - a.length)[0]
}
console.log(getTheMostLargeWordInString('Написать функцию, которая возвращает самое длинное слово из предложения.'))

// Написать функцию, которая считает среднюю длину слова в предложении.
function getAverageWordLength(str: string) {
    let strArray = str.split(/[^-'.A-Za-zА-Яа-яЁё0-9]+/).length
    let lengthCount = 0
    for (let el = 0; el < str.length; el++) {
        str[el].match(/[A-Za-zА-Яа-яЁё1-9]+/) ? lengthCount++ : lengthCount
    }
    return Math.floor(lengthCount / strArray)
}
console.log(getAverageWordLength('Написать функцию, которая считает среднюю длину слова в предложении.'))

// Написать функцию, которая принимает строку и символ и выводит индексы, по которым находится этот символ в
// строке. Также вывести, сколько всего раз встречается этот символ в строке.
function getSymbolId(str: string, sym: string) {
    let pos = -1
    let result = []
    while ((pos = str.indexOf(sym, pos + 1)) != -1) {
        result.push(pos)
    }
    return result + ' - ' + result.length
}
console.log(getSymbolId('итак4 первое поп4адание 4', '4'))

// ! Дз за 11 апреля

// Написать функцию, которая принимает строку и выводит
// статистику о ней: количество букв, количество цифр и
// количество других знаков.
const fingStringStatistic = document.getElementById('fingStringStatistic') as HTMLInputElement
const fingStringStatisticButton = document.getElementById('fingStringStatisticButton') as HTMLButtonElement
const listStatistic = document.getElementById('listStatistic') as HTMLUListElement

function stringStatictis(str: string) {
    let letterCounter = 0
    let numCounter = 0
    let otherSymbolCounter = 0
    for (let el = 0; el < str.length; el++) {
        str[el].match(/[A-Za-zА-Яа-яЁё]+/) ? letterCounter++ : letterCounter
        str[el].match(/[0-9]/) ? numCounter++ : numCounter
        str[el].match(/[^a-zA-Zа-яА-ЯЁё0-9 ]/) ? otherSymbolCounter++ : otherSymbolCounter
    }
    listStatistic.innerHTML = `<p>This is stat for: <br> ${str}</p><li>Nums quentity: ${numCounter}</.><li>Letters quentity: ${letterCounter}</li><li>Other symbols quentity: ${otherSymbolCounter}</li>`
}

fingStringStatisticButton.addEventListener('click', function () {
    stringStatictis(fingStringStatistic.value)
    fingStringStatistic.value = ''
})

// Написать функцию, которая принимает двузначное число
// и возвращает его в текстовом виде.Например: 35 – тридцать пять, 89 – восемьдесят девять,
// 12 – двенадцать.
function getStringNum(num: number) {
    let unitNum = ['один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять']
    let strangeDecades = ['десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семьнадцать', 'восемьнадцать', 'девятнацать']
    let decades = ['двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто']
    const isMinus = num < 0 ? 'минус ' : ''
    if (Math.abs(num) < 10) {
        return isMinus + unitNum[Math.abs(num) - 1]
    }
    else if (Math.abs(num) < 20 && Math.abs(num) > 9) {
        return isMinus + strangeDecades[Math.abs(num) - 10]
    } else if (Math.abs(num) >= 20 && Math.abs(num) <= 99) {
        if (Math.abs(num) % 10 == 0) {
            return isMinus + decades[(Math.abs(num) / 10) - 2]
        } else {
            return isMinus + decades[Math.floor(Math.abs(num) / 10) - 2] + ' ' + unitNum[Math.abs(num) % 10 - 1]
        }
    }
}
console.log(getStringNum(-1))
console.log(getStringNum(-32))
console.log(getStringNum(32))
console.log(getStringNum(-16))

// Написать функцию, которая заменяет в полученной строке
// большие буквы на маленькие, маленькие – на большие, а
// цифры – на знак нижнего подчеркивания.
function smallToLargetoSmall(str: string) {
    let newString = ''
    for (let el = 0; el < str.length; el++) {
        if (str[el].match(/[A-ZА-ЯЁ]+/)) {
            newString += str[el].toLowerCase()
        } else if (str[el].match(/[a-zа-яё]/)) {
            newString += str[el].toUpperCase()
        } else if (str[el].match(/[0-9]/)) {
            newString += '_'
        } else if (str[el].match(' ')) {
            newString += ' '
        }
    }
    return newString
}
console.log(smallToLargetoSmall('Some StrAnGe sENTence 423'))

// Написать функцию, которая преобразует названия css-стилей с дефисом в название в СamelСase 

function camelCaseConvert(str: string) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] == '-') {
            str = str.replace('-' + str[i + 1], str[i + 1].toUpperCase())
        }
    }
    return str
}
console.log(camelCaseConvert('cherepashka-ninja'))

// Написать функцию, которая принимает словосочетание
// и превращает его в аббревиатуру.
function getAbbreviation(str: string) {
    return str.split(' ').map(i => i[0].toUpperCase()).join('')
}
console.log(getAbbreviation('bla b bala'))

// Написать функцию, которая принимает любое количество строк, объединяет их в одну длинную строку и
// возвращает ее.
let getOneStrintArrow = (...str: string[]) => str.join(' ')
console.log(getOneStrintArrow('bla', 'bla', 'fehiofe', 'smsmsm', ' sjsj, sksk'))

function getOneStrint(...str: string[]) {
    return str.join(' ')
}
console.log(getOneStrint('bla', 'bla', 'fehiofe', 'smsmsm', ' sjsj, sksk'))

// Написать функцию – калькулятор. Функция принимает
// строку с примером, определяет, какое действие необходимо
// выполнить (+ - * /), переводит операнды в числа, решает
// пример и возвращает результат.
function stringCalcualtor(str: string) {
    let stringCalculate = str.split(/(\+|\-|\*|\/)/)
    for (let el = 0; el < stringCalculate.length; el++) {
        if (stringCalculate[el] == '+') {
            return +stringCalculate[el - 1] + +stringCalculate[el + 1]
        } else if (stringCalculate[el] == '-') {
            return +stringCalculate[el - 1] - +stringCalculate[el + 1]
        }
        else if (stringCalculate[el] == '/') {
            return +stringCalculate[el - 1] / +stringCalculate[el + 1]
        }
        else if (stringCalculate[el] == '*') {
            return +stringCalculate[el - 1] * +stringCalculate[el + 1]
        }
    }
}
console.log(stringCalcualtor('3678+45'))

// Написать функцию, которая получает url и выводит под-
// робную информацию о нем.
// Например: url “https://itstep.org/ua/about”, информация
// “протокол: https, домен: itstep.org, путь: /ua/about”.
function getInfoAboutUrl(str: string) {
    let newStr = str.split('://')
    console.log(newStr)
    let protocol = newStr[0]
    let domain = newStr[1].split('/')[0]
    let way = newStr[1].split('/').slice(1).join('/')
    return `протокол: ${protocol} домен: ${domain} путь-: /${way}`
}
console.log(getInfoAboutUrl('https://itstep.org/ua/about'))

// Написать функцию, которая принимает строку и раздели-
// тель и возвращает массив подстрок, разбитых с помощью
// указанного разделителя.
function splitStringWithoutSeparator(str: string, separator: string) {
    let splitedString = []
    let result = ''
    for (let el = 0; el < str.length; el++) {
        if (str[el] == separator) {
            splitedString.push(result)
            result = ''
        }
        if (str[el] != separator) {
            result += str[el]
        }
    }
    splitedString.push(result)
    return splitedString
}
console.log(splitStringWithoutSeparator('10/08/2020', '/'))

// Написать функцию вывода текста по заданному шаблону.
// Функция принимает первым параметром шаблон, в тексте
// которого может использоваться %, после символа % ука-
// зывается индекс входного параметра. При выводе вместо
// %индекс необходимо вывести значение соответствующего
// входного параметра.
// Например: print(“Today is %1 %2.%3.%4”, “Monday”, 10,
// 8, 2020) должна вывести “Today is Monday 10.8.2020”.
function stringByTemplate(template: string, ...str: string[]) {

    // for(let i = 0; i < template.length; i++){
    //     if(template[i] == '%'){
    //         let maybeNum = template[i+1]
    //         if (isFinite(parseInt(maybeNum))) {
    //             template = template.replace('%'+maybeNum, str[+maybeNum-1])
    //         }
    //     }
    // }
    for (let i = 0; i < str.length; i++) {
        template = template.replace('%' + (i + 1), str[i])
    }
    return template
}
console.log(stringByTemplate('Today is %1 %2.%3.%4', 'Monday', '10', '8', '2020'))
console.log(stringByTemplate('%1 is my %2 %3 %5', ...['JS', 'best', 'lang', 'dasda', 'sfdds']))

// !======================================================================================================================
// let user = {
//     name: "John",
//     age: 30,
//     sayHi() {
//       console.log( user.name )
//     } 
// }

// let admin = user
// user = null
// admin.sayHi()\


// ! ДЗ классы =====================================================
// ?Реализовать класс, описывающий простой маркер. В классе
// ?Реализовать класс, описывающий заправляющийся маркер,
// ?унаследовав его от простого маркера и добавив метод для заправки маркера.
const divClasses = document.getElementById('dzClasses') as HTMLDivElement
class Marker {

    color: string
    ink: number
    constructor(color: string, ink: number) {
        this.color = color
        this.ink = ink
    }
    print(str: string): void {
        let actualString = ''
        let html = ''
        for (let char of str) {
            if (this.ink - 0.5 >= 0) {
                if (char != ' ') {
                    actualString += char
                    this.ink = this.ink - 0.5
                } else {
                    actualString += char
                }

            }
        }
        html = `<p style="color:${this.color}; font-size: 20px"> ${actualString} </p>`
        divClasses.innerHTML += html
    }
}
let firstMarker = new Marker('black', 6)
firstMarker.print('Edgar is an Epic Brawler who could be unlocked for free ')

class RefuelingMarker extends Marker {
    refuel() {
        this.ink = 100
    }
}
let secondMarker = new RefuelingMarker('red', 10)
secondMarker.print('Leon is a Legendary Brawler who has moderate health and a high damage output at close range.')
secondMarker.refuel()
console.log(secondMarker.ink)

// Реализуйте класс ExtendedDate, унаследовав его от стандарт-
// ного класса Date и добавив следующие возможности:
class DateClass {
    day: number
    month: number
    year: number
    constructor(day: number, month: number, year: number) {
        this.day = day
        this.month = month
        this.year = year
    }
}
class ExtendedDate extends DateClass {
    dateToString() {
        return new Date(this.year, this.month - 1, this.day).toLocaleString('ru', { month: 'long', day: "numeric" })
    }
    isDateFuture() {
        return new Date(this.year, this.month, this.day) >= new Date() ? false : true
    }
    isLeapYear() {
        return this.year / 4 ? true : false
    }
}
const extData = new ExtendedDate(4, 5, 2024)
console.log(extData.dateToString())
console.log(extData.isDateFuture())
console.log(extData.isLeapYear())


// Реализовать класс, описывающий окружность. 
class Circle {
    radius: number
    constructor(radius: number) {
        this.radius = radius
    }
    getRadius() {
        return this.radius
    }
    setRadius(newRadius: number) {
        this.radius = newRadius
    }
    getDiametr() {
        return this.radius * 2
    }
    getSquare() {
        return 3.14 + Math.pow(this.radius, 2)
    }
    getLength() {
        return 3.14 + 2 * this.radius
    }
}
const firstCircle = new Circle(10)
console.log(firstCircle.getDiametr())
console.log(firstCircle.getLength())
console.log(firstCircle.getRadius())
console.log(firstCircle.getSquare())
firstCircle.setRadius(12)
console.log(firstCircle.getDiametr())
console.log(firstCircle.getLength())
console.log(firstCircle.getRadius())
console.log(firstCircle.getSquare())



{
    //*                         ДЗ 2.4

    class HtmlElement {
        tag: string
        isSingle: boolean
        text: string
        atributes = [] as any[]
        styles = [] as any[]
        elements = [] as HtmlElement[]
        constructor(tag: string, text = '') {
            const singleArr = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr']
            this.tag = tag
            this.text = text
            this.isSingle = singleArr.includes(tag) ? true : false
        }
        setAtribute(name: string, value: string) {
            this.atributes.push({ name, value })
        }
        setStyle(name: string, value: string) {
            this.styles.push({ name, value })
        }
        prepend(el: HtmlElement) {
            this.elements.unshift(el)
        }
        append(el: HtmlElement) {
            this.elements.push(el)
        }
        getHtml(): string {
            const styles = this.styles.map(el => el.name + ':' + el.value).join(';')
            const attrCopy = [...this.atributes]
            if (this.styles.length) {
                attrCopy.push({ name: 'style', value: styles })
            }
            if (this.isSingle) {
                if (this.text) {
                    attrCopy.push({ name: 'area-label', value: this.text })
                }
                const atributes = attrCopy.map(el => el.name + '="' + el.value + '"').join(' ')
                return `<${this.tag} ${atributes}>`
            } else {
                const atributes = attrCopy.map(el => el.name + '="' + el.value + '"').join(' ')
                return `<${this.tag} ${atributes}>${this.text}${this.elements.map(el => el.getHtml()).join('\n')}</${this.tag}>`
            }
        }
    }

    const wrapper = new HtmlElement('div')
    wrapper.setAtribute('id', 'wrapper')
    wrapper.setStyle('display', 'flex')

    const div = new HtmlElement('div')
    div.setStyle('width', '300px')
    div.setStyle('margin', '10px')

    const h3 = new HtmlElement('h3', 'Stranger')

    const img = new HtmlElement('img')
    img.setStyle('width', '100%')
    img.setAtribute('src', 'https://yt3.googleusercontent.com/bRxpLuKan-5TAGEdooDE35CTPXr-59xEhwlt_w1BHY2rzc1hQBdpfVLo0a95p9bYbBObUkmsfw=s900-c-k-c0x00ffffff-no-rj')
    img.setAtribute('alt', 'Stranger')

    const p = new HtmlElement('p', 'гений, миллиардер, плейбой, филантроп')
    p.setStyle('text-align', 'justify')

    const a = new HtmlElement('a', ' Who?...')
    a.setStyle('color', 'white')
    a.setStyle('font-size', '20px')
    a.setAtribute('href', 'https://en.wikipedia.org/wiki/Pavel_Durov')
    a.setAtribute('target', '_blank')

    p.append(a)

    div.append(img)
    div.append(p)
    div.prepend(h3)

    wrapper.append(div)
    wrapper.append(div)

    const heDiv = document.getElementById('he') as HTMLDivElement

    class CssClass {
        className: string
        stylesArray = [] as any[]
        elements = [] as CssClass[]
        constructor(className: string) {
            this.className = className
        }
        setStyle(name: string, value: string) {
            this.stylesArray.push({ name, value })
        }
        deleteStyle(name: string) {
            for (let el = 0; el < this.stylesArray.length; el++) {
                if (this.stylesArray[el].includes(name)) {
                    this.stylesArray.splice(el, 2)
                }
            }
        }
        append(el: CssClass) {
            this.elements.push(el)
        }
        getCss(): string {
            const styles = this.stylesArray.map(el => el.name + ':' + el.value).join(';\n')
            let html = ''
            if (this.elements.length > 0) {
                for (let i = 0; i < this.elements.length; i++) {
                    html += this.elements[i].getCss()
                }
            } else {
                html = this.className + '{\n' + styles + ';\n}\n'
            }
            return html


        }
    }
    const mainStyle = new CssClass('mainClass')
    const wrap = new CssClass('wrap')
    wrap.setStyle('display', 'flex')
    mainStyle.append(wrap)

    const block = new CssClass('block')
    block.setStyle('width', '300px')
    block.setStyle('margin', '10px')
    mainStyle.append(block)

    const imgCss = new CssClass('img')
    imgCss.setStyle('margin', '100px')
    imgCss.setStyle('width', '100px')
    mainStyle.append(imgCss)

    const text = new CssClass('text')
    text.setStyle('text-align', 'justify')
    mainStyle.append(text)

    class HtmlBlock {
        styleCollections: CssClass[]
        htmlRoot: HtmlElement
        constructor(styleCollections: CssClass[], htmlRoot: HtmlElement) {
            this.styleCollections = styleCollections
            this.htmlRoot = htmlRoot
        }
        getCode() {
            // document.head.insertAdjacentHTML("beforeend", `<style>${this.styleCollections}</style>`)
            let css = this.styleCollections.map(el => el.getCss())
            let html = `<style>${css}</style>`
            html += this.htmlRoot.getHtml()
            return html
        }
    }

    const result = new HtmlBlock([mainStyle], wrapper)
    heDiv.innerHTML = result.getCode()
    //console.log(result.styleCollections)

}
{
    function krestik(x:number){
        let sting = ''
        for( let i = 0; i <= x-1; i++){
            for(let j = 0; j <= x-1; j++){
                if(i==j ||i+j+1 == x ){
                    sting += '*'
                } 
                else{
                    sting += ' '
                }
            }
            sting += '\n'
        }
        return sting
    }
    console.log(krestik(20))
}

// ! TIMEOUT AND INTERVAL ---------------------------------------------------------------------------------------------------------------------
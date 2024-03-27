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
    {audienceName: 'first audience', placeQuentity:10, facultyName:'Math'},
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
            audienceResultH5.innerHTML += html
            isExist = true
        }
    }
    if(!isExist){
        console.log('ok')
        html+= `<p style="color: red">No such audience 😞</p>`
        audienceResultH5.innerHTML += html
    }
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
                for(let el2 of arr2){
                    if(groupName == el2.groupName&&el2.studentQuentity <= el.placeQuentity && el2.facultyName == el.facultyName){
                        html += `<p>${el.audienceName}</p>`
                        AudienceForGroupResult.innerHTML += html
                        isExist = true
                    }
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
// audienceArray.sort(function(a, b) {
//     return a.placeQuentity - b.placeQuentity;
//   });

// console.log(audienceArray)

// let numbers = prompt('Введите число');
// let arrNum = numbers.split('');






// task 1
// let num = $('.inp-val');
// let btn = $('.inp-btn');
// let sum = 0
// btn.on('click',function(){
//     num.val().split('').map(function(item){
//                 return sum += +item
//             })
            
//     })
//     console.log(num)



// task2
// let arr = prompt('Введите число');
// let arr2 = prompt('');
// let arrNum = arr.split('');
// let result = 0

// let arr = $('.inp-val');
// let arr2 = $('.inp-val-2');
// let result = 0;
// $('.inp-btn').on('click' , function(){
//     arr.val().split('').filter(item =>{
//         if(item == arr2.val()){
//             result++
//             return
//         }
//     })
//     console.log(result)
// })
// arrNum.filter(function(item){
//     if(item == arr2 )
//     {
//         result ++
//     }
// })
// console.log(result)

// // task 3
// let arr = $('.inp-val');
// let arr2 = $('.inp-val-2');
// let arr3 = $('.inp-val-3');
// let result = [];
// let arrSum = [];
// $('.inp-btn').on('click', function(){
//     for(let i = +arr.val();i <= arr2.val(); i++){
//      result.push(i)  
//     }
//     console.log(result)
//     result.map(function(item){
//         if(item % arr3.val() === 0){
//             arrSum.push(item)
//         }
//     })
//     console.log(arrSum)
//             let sum = arrSum.reduce(function(a,b){
//                 return a + b/arr3.val()
                
//             },0)
//             console.log(sum)
// })

// let arr = +prompt('Введите первоначальное число');
// let arr2 = +prompt('Введите конечное число');
// let arr3 = +prompt('Введите число на которое хотите поделить');
// let arrNum = [];
// let arrSum = [];
// let sum = 0;
//     while(arr <= arr2){  
//         // console.log(arr) 
//         arrNum.push(arr++)
//     }
//     console.log(arrNum)
// arrNum.map(function(item){
//     if(item % arr3 === 0) {
//         arrSum.push(item)
//     }
// })
// console.log(arrSum)
// arrSum.forEach(function(item){
//     sum += item / arr3   
// },0)                     
// console.log(sum)

// task 4
// let arrNum = $('.inp-val');
// let btn = $('.inp-btn');
// let arrNull = [];
// btn.on('click',function(){
//     for(let i = 0; i <= arrNum.val(); i++){
//         arrNull.push((Math.random() * 100 ).toFixed(2))
//     }
//     arrNull.sort((a,b) => {
//         return a-b
//     })
//    console.log(arrNull)
//    let min = arrNull[0];
//    let max = arrNull[arrNull.length-1];
//     const minValueIndex = arrNull.indexOf(min);
//     const maxValueIndex = arrNull.indexOf(max);
//     arrNull[minValueIndex] = max;
//     arrNull[maxValueIndex] = min;
//     console.log(arrNull)
//     console.log(`Минимальное число массива: ${min}`)
//     console.log(`Максимальное число массива: ${max}`)
// })
// let arr = [12,34,43,16,22];
// arr.sort(function(a,b){
    
    
//     return a-b
    
// })
// console.log(arr)
// let min = arr[0];
// let max = arr[4];
// const minValueIndex = arr.indexOf(min);
// const maxValueIndex = arr.indexOf(max);
// // const temp = min;
// arr[minValueIndex] = max;
// arr[maxValueIndex] = min;
// console.log(arr)
// for(let i = 0; i < arr.length; i++){

//     const maxValue = Math.max(arr)
// }
// console.log(maxValue)
    // task 5
let name = $('.inp-name');
let btn = $('.btn');
btn.on('click',function(){
    let namePerson = name.val().split(' ');
    let lastName = namePerson[0].toUpperCase();
    let firstName = namePerson[1].toLowerCase();
    let surname = namePerson[2].toLowerCase();
    console.log(`${lastName} ${firstName[0]}. ${surname[0]}. `)
    console.log(namePerson[0])
    // console.log(firstName)
    // console.log(lastName)
    // console.log(lastName + ' '+ firstName + ' ' + surname)
    
    // let lastName = namePerson.slice(0,1);
    // let firstLetterName = namePerson.splice(1,1);
    // let lastLetterName = namePerson.splice(1,2);
    // let last = lastName.join().toUpperCase();
    
    // let firstName = firstLetterName.join('')
    // let reversFirstName = firstName.split('').slice(0,1)
    // let reverslastName = lastLetterName.join('').toLowerCase()
    // let surName = reverslastName.split('').slice(0,1)
    // let firstNameL = reversFirstName.join().toLowerCase()
    // let lastNameL = surName.join()
    // console.log(`${last} ${firstNameL}. ${lastNameL}. `)
    // console.log(namePerson)
})


// let arr = ['Самат']
// let arr2 = arr.join().toLowerCase()
// console.log(arr2)
// let arr3 = arr2.split('')
// console.log(arr3)
// let firstWord = arr3

// function h(){
//     console.log('hello')
// }
// setInterval(h, 1000)


//variables
// x = 5
// x = 3.5
// x = false
// x = "marwa"
// x = 'm'
// var x = 6
// let y = "hello"
//  let y = 5
// const pi=3.14
// console.log(x, y, pi)
// console.log(z)
// let x =5, y =6, z
// var w =4

/* operators */
// arithmatic opertors
// + - * / % **
// let x =3 , y=10
// let sum = x+y
// console.log(x+y)
// console.log(x-y)
// console.log(x*y)
// console.log(x/y)
// console.log(x**y)
// console.log(x%y)

// inc and dec
// ++ --
// let z = 5
// z++  ++z  6
// console.log(z++)
// let w = (z++)

// let m = (5 + 2) * 3
// console.log()

// assignment operator

// x = 5
// x+=2  // x = x + 2
// x%=2 
// let f = 100
// let c = (f-32) * 5.0 / 9
// comparison operator
// == === != !== > < >= <=
// let x = 5
// let y = "5"
// console.log(x==y)

// console.log(x===y)

// let x = 5
// x%2==0 ? console.log("even") : console.log("odd")

// logical operator
// let gender = "m" , age =10
// && || !
// console.log( !(gender == "M" || age > 18) )
// console.log(!null)
// console.log(!0)
// console.log(!10)
// console.log(!undefined)

/* control flow */
// let age = 39
// if( age >= 21 ){
//     console.log("adult")
// }
// else{
//     console.log("kid")
// }

// let degree= 90, grade
// if(degree >= 90) grade = "A"
// else if(degree >=80) grade = "B"
// else if(degree >=70) grade = "C"
// else if(degree >=60) grade = "D"
// else  grade = "F"

// console.log(grade)

// let month = 1
// switch(month){
//     case 1: console.log("jan"); break;
//     case 2: console.log("f"); break;
//     case 3: console.log("m"); break;
//     case 4: console.log("a"); break;
//     case 5: console.log("m"); break;
//     case 6: console.log("j"); break;
//     case 7: console.log("jul"); break;
//     case 8: console.log("aug"); break;
//     case 9: console.log("s"); break;
//     case 10: console.log("o"); break;
//     case 11: console.log("n"); break;
//     case 12: console.log("d"); break;
//     default:console.log("hnhzr")
// }
//BOM
// let year = prompt("enter your birthyear")
// if(year >=1920 && year<=2024){
//     switch(year % 12){
//         case 0: console.log("monkey"); break;
//         case 1: console.log("rooster"); break;
//         case 2: console.log("dog"); break;
//         case 3: console.log("pig"); break;
//         case 4: console.log("rat"); break;
//         case 5: console.log("ox"); break;
//         case 6: console.log("tiger"); break;
//         case 7: console.log("rabbit"); break;
//         case 8: console.log("dragon"); break;
//         case 9: console.log("snake"); break;
//         case 10: console.log("horse"); break;
//         case 11: console.log("sheep"); break;
//     }
// }
// else{
//     // console.log("the birthyear must .... and you enter "+ year )
//     console.log(`you entered ${year} and not accepted`)
// }

// let age = 5
// if(true){
//     let age = 20
//     console.log(age)
// }
// console.log(age)


/* Loop */
// for
// for(let i=1; i<=10; i+=2){  // start, end, step
//     if(i==5) continue
//     console.log(i)
// }
// let i = 1
// for(;;){
//     if(i >=10) break;
//     console.log("hello")
//     i++
// }

// while
// let i = 1
// while(i<=10){
//     console.log(i)
//     i++
// }
// do while
// do{
//     console.log("hello")
// }while(false)
let ch
do{
    ch = prompt("enter your choice")
    if(ch != 1 && ch!=2 && ch!=3) 
        ch=prompt("new data")
}
while(ch!="exit")








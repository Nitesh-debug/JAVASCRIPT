// const score=400
// console.log(score)

// const balance =new Number(100)
// console.log(balance)

// console.log(balance.toString().length)//it become string
// console.log(balance.toFixed(3))  //100.000

// const otherNumber =123.8966
// console.log(otherNumber.toPrecision(3))//124
// console.log(otherNumber.toPrecision(4))//123.9

// const hundreds=100000
// console.log(hundreds.toLocaleString('en-IN'))


//+++++++++++++++++++++++++Maths+++++++++++++//

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(5.5))
console.log(Math.pow(2,3))
console.log(Math.min(2,3,4,1))
console.log(Math.max(2,3,8,5))
console.log(Math.floor(4.9))

console.log(Math.random())  // always gives value b/w 0 and 1
console.log((Math.random()*10)+1)
console.log(Math.random()+9) // 9 se 10 ke bich ka value randomly dega
console.log(Math.floor(Math.random()+5))// 5 always

const min =10
const max =20
console.log(Math.floor(Math.random()*(max-min+1)+min))// vvi for random generation

//premitive -->>7 types
//string , number,boolean,null,undefine,symbol,bigint   and all are call by value
//reference type(non premitive) ===>>> arrays ,objects,functions,



// const score =100
// const scoreValue =100.4
//  const isLoggedIn=false
//  const outsideTemp=null
// let userEmail;
// const id=symbol('123')
// const anotherId = symbol('123')
// console.log(id===anotherId)  //false
// console.log(score);


//const bigNumber=563126523526175n // n lagane se big ibnnt ban jata hai

/*const heros =["shaktiman","modi","amitshah"];
let myobj={
    name: "Nitesh",
    age: 20,
}
const myFunction=function()
{
    console.log("hello world");
}
console.log(typeof myFunction)*/   //function






//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//stack (premitive) , Heap(Non premitive)ye reference deta hai

//stack
// let mylove ="jaini"
// let anotherlove=mylove
// console.log(anotherlove); //jaini



let mylove ="jaini"
let anotherlove=mylove
anotherlove="KAjal"
console.log(anotherlove); //kajal
console.log(mylove);//jaini

//heap-->ye reference dete hai iska matlab jo v change hoga wo actual value ke andar he hoga
let user1=
{
    email:"nitesh@123",
    upi:7352694120,
}
let user2=user1
user2.email="jaini@123"
user2.upi=9596930117
console.log(user1.upi)
console.log(user1.email);
console.log(user2.email); // in this case both print jaini@123 bcz both have same reference







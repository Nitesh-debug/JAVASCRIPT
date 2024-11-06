// const name ="nitesh"
// const repoCount=50

// console.log(name+repoCount+"value");


//  console.log(`hello my name is ${name} and my repo count is ${repoCount}`);// use back tick
// const subhnam="sunny"
// const age=21
// console.log(`my name is ${subhnam} and my age is ${age}`)

 const gameName= new String('Nitesh')
// console.log(gameName[0]); //N
// console.log(gameName.__proto__); //{}

// console.log(gameName);
// console.log(gameName.length); //6

// console.log(gameName.toUpperCase());//NITESH

// console.log(gameName.charAt(2)); //t
// console.log(gameName.indexOf('t')); //2
// console.log(gameName.toLowerCase());//nitesh

const newString=gameName.substring(0,3)//0 1 2
console.log(newString)
console.log(gameName.substring(0,1))// both will work
console.log(gameName.substring(-8,4))


//trim
const newString1="  Kumar "
console.log(newString1)
console.log(newString1.trim())


const url="https://nitesh.com/nitesh%20Kumar"
console.log(url.replace('%20','-'))  //%20 replace with -

console.log(url.includes('nitest'))//false,,

const gname=('JAINI');
console.log(gname);
console.log(gname.toLowerCase());













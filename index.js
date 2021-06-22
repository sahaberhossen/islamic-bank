
const  login = document.querySelector("#login");


login.addEventListener("click", function(){
  //hide area
const hide = document.querySelector(".hideDiv")
hide.style.display ="none"

//show area
const show = document.querySelector(".show-area");

    show.style.display="block"
})



const deposit = document.querySelector(".deposit");
deposit.addEventListener("click", function(){

//  const depositValue = document.querySelector(".deposit-value").value;
// const depositValueNumber = parseFloat(depositValue);
const depositValueNumber= numberCompiler(".deposit-value")
// const depositAdd = document.querySelector(".deposit-add").innerText;
// const depositAddNumber = parseFloat(depositAdd);
//  const totalDeposit = depositValueNumber+depositAddNumber;
 
//  document.querySelector(".deposit-add").innerText = totalDeposit


spanText(".deposit-add",depositValueNumber)
// const depositAdd = document.querySelector(".deposit-add").innerText;
 document.querySelector(".deposit-value").value ='';

// const balanceAdd = document.querySelector(".balance-add").innerText
// const balanceAddNumber = parseFloat(balanceAdd);

// const totalBalance = depositValueNumber+balanceAddNumber

// document.querySelector(".balance-add").innerText = totalBalance;
spanText(".balance-add",depositValueNumber)

})



const withdraw= document.querySelector(".withdraw")

withdraw.addEventListener("click", function(){
    // const withdrawValue = document.querySelector(".withdraw-value").value;
    // const withdrawValueNumber = parseFloat(withdrawValue)
const withdrawValueNumber = numberCompiler(".withdraw-value")

// const withdrawBalance =document.querySelector(".withdraw-balance").innerText;
//   const withdrawBalanceNumber = parseFloat(withdrawBalance)

// const totalWithdraw = withdrawValueNumber +withdrawBalanceNumber
//   document.querySelector(".withdraw-balance").innerText = totalWithdraw;
spanText(".withdraw-balance",withdrawValueNumber)


  document.querySelector(".withdraw-value").value = '';


// const current = document.querySelector(".balance-add").innerText;
// const totalCurrentValue = current -withdrawValueNumber;
// document.querySelector(".balance-add").innerText = totalCurrentValue

spanText(".balance-add",-1*withdrawValueNumber)
  
})


function spanText(cls,withdrawValueNumber){
  
const withdrawBalance =document.querySelector(cls).innerText;
const withdrawBalanceNumber = parseFloat(withdrawBalance)

const totalWithdraw = withdrawValueNumber +withdrawBalanceNumber
document.querySelector(cls).innerText = totalWithdraw;
}

function numberCompiler(cls){
  const first = document.querySelector(cls).value;
  const convertNumber = parseFloat(first)
 return convertNumber
}















// let arr = [

//     {
//         a: "2333453223",
//         b:[22346434,233543,2334342]
//     },
//     {
//         a:'203424444',
//         b:[23332,24444,24444]
//     },
//     {
//         a:"23332399",
//         b:[233422,98765]
//     }
// ]

// var a =[],b=[];
// arr.map(ele=>{
//     if(ele.a)a.push(ele.a)
//     if(ele.b)b.push(ele.b)
// })
// console.log(a)
// console.log(b.flat())

// let obj ={
//     name: "anisul islma",
//     // age :{name:"rakib"},
//     student(){
//         // const {name,age}= this;
//         console.log("name",this.name,"age",this.age)
//     }

// }
// console.log(obj.age?.name)


// function Student(name,age){
//     this.name = name ,
//     this.age = age
    
// }

// class Student{
//     constructor(name,age){
//         this.name =name,
//         this.age =age
//     }
//         static details(rakib){
//         let {name,age}= rakib;
//       console.log("name",name,"age",age)
//     }
// }
// var rakib = new Student("rakib",23);
// Student.details(rakib)



// class Animal{
//     constructor(name){
//         this.name =name
//         // console.log("animal name",name)
//     }
//          eat(food){ //static use korla directly object ar num likta hoba
          
//          console.log("animal name",this.name,"eats",food)
//     }

// }
//     class Cat extends Animal { 
//         constructor(name,color){
//             super(name)
//             this.color = color;
//         }                 //
//         run(speed){
//             console.log(this.name, "run with",speed,"kilomiters","color",this.color)
//         }
//     }

// var cat = new Cat("cat","red");
// cat.run(10)


// console.log(res)











// module.exports.hello = function (num1,num2){
//     return num1*num2
// }

// module.exports.multiple = function(num,num4){
//     return num*num4
// }


// function hex(){
//     var res = parseInt(Math.random()* 0X10000); 
//     return res.toString(16);
// }

// function uni(){
//     return hex()+'-'+hex()+'-'+hex()+'-'+hex()
// }
// console.log(uni())


// var first = document.querySelector(".first");

// first.addEventListener("click", function(){

//     first.style.backgroundColor="green"
//     event.stopImmediatePropagation()
   
// })

// var second = document.querySelector(".container");

// second.addEventListener("click", function(){

//     second.style.backgroundColor="red"
//     event.stopPropagation()
 
    
// })

// var item = document.querySelectorAll(".item");
// item.addEventListener("click", function(){

//     item.style.display ="none"
// })



// var li = document.querySelectorAll(".item");

// for (let i = 0; i < li.length; i++) {
//     const element = li[i];
    
//     element.addEventListener("click",function(event){
//         // this.style.display ="none"
//         // container.removeChild(event.target)
//         event.target.parentNode.removeChild(event.target)
//     })
// }

var click = document.querySelector(".container");
click.addEventListener("click", function(event){
    event.target.parentNode.removeChild(event.target)
})
var addLi = document.querySelector(".addli")

addLi.addEventListener("click", function(){
    var before = document.querySelector(".container")

    // var be = document.querySelector(".first")
    
     var add = document.createElement("li");
     var textAdd = document.createTextNode("li element create korichi");
     add.appendChild(textAdd);
    before.appendChild(add)

  


})

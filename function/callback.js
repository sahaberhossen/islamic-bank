/// call back function 
function callback_explain(name,age,task){

    console.log("your name",name)
    console.log("your age",age)
    
    task()
}

function takeShwar(){
    console.log("take shawar immideately")
}
function takehand(){
    console.log("take hands immideately")
}

callback_explain("anisul islma",23,takehand)
callback_explain("rakibul islma",30,takeShwar)


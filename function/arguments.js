// arguments js explain

function argument(){

    // console.log(arguments[1])
//    return num1+num2

    var sum =0;
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
       
        sum+=element
        function hello(){
            console.log("hello")
        }
        hello()

    }
        // console.log(sum)
       

        return sum
}

var res =  argument(2,3,10,20)

console.log(res)
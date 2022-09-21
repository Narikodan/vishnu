function oddOrEven(){
    var a = prompt("Enter a Number: ")
    var b = parseInt(a)
    var c = b%2
    if(c>0){
        document.getElementById('oddeven').innerHTML = "odd"
}
else{
    document.getElementById('oddeven').innerHTML = "Even"
}
    }
    function largestOf2(){
        var a = prompt("Enter First Number: ")
        var b = prompt("Enter Second number")
        var c = parseInt(a)
        var d = parseInt(b)   
        if(c>d){
            document.getElementById('largest2').innerHTML = c
    }
    else{
        document.getElementById('largest2').innerHTML = d
    }
    }
    function largestOf3(){
        var a = prompt("Enter First Number: ")
        var b = prompt("Enter Second number")
        var c = prompt("Enter Third number")
        var d = parseInt(a)
        var e = parseInt(b)   
        var f = parseInt(c)
        if(d>f && d>e){
            
                document.getElementById('largest3').innerHTML = d
        }
            
            else{
                if(f>d && f>e){
                    document.getElementById('largest3').innerHTML = f
                }
                else{
                    document.getElementById('largest3').innerHTML = e
                }
         
            }
        }

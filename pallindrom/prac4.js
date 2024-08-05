function pall(){
    let val = document.getElementById("val").value;
    let rev = val.split("").reverse().join("");
    console.log(rev)
    if(val==""){
        alert("please insert some value")
    }
    else{
    
    if (val==rev){
        document.getElementById("result").innerHTML = "value is pallindrome.";
    }
    else{
        document.getElementById("result").innerHTML = "value is not pallindrome.";
    }
}
}
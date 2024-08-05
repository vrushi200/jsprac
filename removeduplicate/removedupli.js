let arr =[];
function removduplicate(){
    let x = document.getElementById("rem").value;
    arr.push(x)
let a = [...new Set(arr)]
console.log(a)
document.getElementById("result").innerHTML = a
}
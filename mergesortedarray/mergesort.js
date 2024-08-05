let arr = [];
let arr1 = [];
let main = [];
function mergeSort(){
    let num = document.getElementById("no").value;
    arr.push(num);
    let num1 = document.getElementById("no1").value;
    arr1.push(num1);
    let main = [...new Set(arr), ...new Set(arr1)];
    let sorted = main.sort(function(a,b){return a-b});
    document.getElementById("result").innerHTML = "two sorted array" + JSON.stringify(sorted);
}
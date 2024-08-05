let arr = [];
let arr1 = [];
function inter(){
let a = document.getElementById("no").value;
arr.push(a);
let b = document.getElementById("no1").value;
arr1.push(b);
let new_arr = arr.filter(
    (element) => arr1.includes(element)
);
console.log(new_arr);
document.getElementById("result").innerHTML = new_arr;
}
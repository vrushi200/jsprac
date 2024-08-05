let arr = [];
function indexarr(){
    let a = document.getElementById("no").value;
    arr.push(a);
    let val = arr[arr.length-1];
    let val1 = arr[0];
    console.log("first value of array is "+ val1);
    console.log("last value of array is "+ val);
}
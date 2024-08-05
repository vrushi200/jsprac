let arr = [];
let newarr = [];
function arrmap(){
     let num = document.getElementById("num").value;
     arr.push(num);
     let val = arr.map((doublevalue) => doublevalue*2);
     newarr.push(val);
     console.log("new array "+val);
}
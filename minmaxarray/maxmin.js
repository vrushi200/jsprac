let arr = [];
function minmax(){
    let number = document.getElementById("array").value;
    arr.push(number);
    let Sorted = arr.sort(function(a,b){return a-b});
    document.getElementById("result").innerHTML = "ascending order sort" +JSON.stringify(Sorted) ;
    //let Sorted1 = arr.sort(function(a,b){return b-a});
   // document.getElementById("result1").innerHTML = "descending order sort" + JSON.stringify(Sorted1);
    let min = arr[0];
    let max = arr[arr.length-1];
    console.log(min);
    console.log(max);
}
let arr = [];
function sumavg(){
    let num = parseInt(document.getElementById("num").value);
    arr.push(num);
    document.getElementById("result").innerHTML = "array" + arr;
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum+=arr[i];
    }
    let avg = sum/arr.length;
    document.getElementById("resu").innerHTML = "avg" + avg; 
    document.getElementById("res").innerHTML = "sum" + sum;
    console.log(sum);
}
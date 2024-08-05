let arrnum = [];
function sortingNum(){
    let number = document.getElementById("arr").value;
    //let number1 = document.getElementById("arr1").value;
    arrnum.push(number);
    let Sorted = arrnum.sort(function(a,b){return a-b});
    document.getElementById("result1").innerHTML = "ascending order sort" +JSON.stringify(Sorted) ;
    let Sorted1 = arrnum.sort(function(a,b){return b-a});
    document.getElementById("result2").innerHTML = "descending order sort" + JSON.stringify(Sorted1);
    document.getElementById("result").innerHTML = "main array" + JSON.stringify(arrnum);
}
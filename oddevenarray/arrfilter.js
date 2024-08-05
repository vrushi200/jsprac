let odd = [];
let even = [];
function arrfilter(){
    let num = document.getElementById("arr").value;
        if (num%2==0){
            even.push(num);
        }
        else{
            odd.push(num);
        }
        console.log("even number array "+even);
        console.log("odd number array "+odd);
}
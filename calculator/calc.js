function display(a){
    document.getElementById("inp").value+=a;
}
function clearscr(){
    document.getElementById("inp").value="";
}
function solve(){
    let a = document.getElementById("inp").value;
    let b = eval(a);
    document.getElementById("inp").value=b;
}
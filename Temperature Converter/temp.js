function celToFar(){
    let celsius = document.getElementById("celsius");
    let output = ( parseFloat(celsius.value) * 9/5 ) + 32;
    document.getElementById("fahrenheit").value=output;
}
  
function farToCel(){
    let fahrenheit = document.getElementById("fahrenheit");
    let output = ( parseFloat(fahrenheit.value) - 32) * 5/9;
    document.getElementById("celsius").value=output;
}
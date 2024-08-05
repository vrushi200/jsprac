function calc(){
    let a =parseInt( document.getElementById("amount").value);
    let t = document.getElementById("tip").value;
    let tip = a*t/100;
    console.log(tip);
    let gst = a*18/100;
    console.log(gst);
    let total =parseInt(a+tip+gst);
    console.log(total);
    document.getElementById("res").innerHTML = "Total Bill"
    document.getElementById("a").innerHTML = a;
    document.getElementById("ti").innerHTML = "amount";
    document.getElementById("t").innerHTML =  tip;
    document.getElementById("tu").innerHTML = "tip";
    document.getElementById("g").innerHTML = "gst";
    document.getElementById("gi").innerHTML =  gst;
    document.getElementById("o").innerHTML = "total bill ";
    document.getElementById("oi").innerHTML =  total;
}
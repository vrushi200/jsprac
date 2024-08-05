function bill(){
    let dec = document.getElementById("bname").value;
    let amount =document.getElementById("amount").value;
    let session = JSON.parse(sessionStorage.getItem("item"));
    let type = "";
    if(amount>=0){
    type = "income";
     }
    else{
       type = "expense";
    }
    if(session == null){
        session = [];
    }
    session.push({
        dec:dec,
        amount:amount,
        type:type
    });
    sessionStorage.setItem("item",JSON.stringify(session));
    console.log(JSON.parse(sessionStorage.getItem("item")));
    let sum = 0;
    session.forEach((x) => {
        sum+=parseInt(x.amount);
    });
    console.log(sum);
    document.getElementById("bal").innerHTML = sum;
    let history = document.createElement("li");
    let n = document.createTextNode(dec+" "+amount);

    history.appendChild(n)

    document.getElementById("history").appendChild(history);

    let income = 0;
    let expense = 0;
    session.forEach((x) => {
        if(x.type==="income"){
            income+=parseInt(x.amount);
        }
        else{
            expense+=parseInt(x.amount);
        }
    })
    document.getElementById("income").innerHTML=income;
    document.getElementById("expense").innerHTML=expense;
}
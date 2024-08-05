let info = [];
function objectc(){
    let name =  document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let con = document.getElementById("con").value;

    console.log(name);
    info.push (
        {
      Name : name,
      Age : age,
      Country : con
    }
);
    document.getElementById("result").innerHTML = "information" + JSON.stringify(info);
    console.log(info);
}
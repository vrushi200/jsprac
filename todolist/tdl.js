function sub(){
    let na = document.getElementById("n").value;
    let t = document.getElementById("ts").value;
    let s = document.getElementById("l").value;
    let d = document.getElementById("d").value;
    let session =JSON.parse(sessionStorage.getItem("item"));
    if (!session) {
        session = [];
    }
    session.push({
        name : na,
        task : t,
        situation : s,
        date : d
    });
    sessionStorage.setItem("item",JSON.stringify(session));
    console.log(JSON.parse(sessionStorage.getItem("item")));

    let r = document.createElement("tr");

    let nc = document.createElement("td");  
    nc.textContent = na;
    r.appendChild(nc);

    let tc = document.createElement("td");
    tc.textContent = t;
    r.appendChild(tc);

    let sc = document.createElement("td");
    sc.textContent = s;
    r.appendChild(sc);

    let dc = document.createElement("td");
    dc.textContent = d;
    r.appendChild(dc);

    document.getElementById("v").appendChild(r);
}   
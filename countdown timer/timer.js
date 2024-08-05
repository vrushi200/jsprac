function timer(){
    let d = new Date("july 27, 2024").getTime();

    let a = setInterval(function(){
        let now = new Date().getTime();
        let b = d - now;
        let days = Math.floor(b / (1000 * 60 * 60 * 24));
        let hours = Math.floor((b % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((b % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((b % (1000 * 60)) / 1000);

        document.getElementById("t").innerHTML =  days + " days " + hours + " hour " + minutes + " min "  + seconds + " second " ;
    })
}
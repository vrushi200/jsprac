function primeNum(){
const number = document.getElementById("num").value ;
let isPrime = true;


if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}


else if (number > 1) {

    
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number} is a prime number`);
        document.getElementById("result").innerHTML = "value is prime.";
    } else {
        console.log(`${number} is a not prime number`);
        document.getElementById("result").innerHTML = "value is not prime.";

    }
}

else {
    console.log("The number is not a prime number.");
    document.getElementById("result").innerHTML = "value is not prime.";

}
}    
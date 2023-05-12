let timezone = new Date();
document.getElementById("time").innerHTML = timezone;

function myFunction() {
    let timezone = new Date();
document.getElementById("time").innerHTML = timezone;

    const begunermath = document.getElementById("time").innerHTML;
    let initialValue = parseInt(document.getElementById("length").innerHTML);
   

    let currentCount = initialValue+1;



    document.getElementById("length").innerHTML = currentCount;

    document.getElementById("demo").innerHTML = "Now it is :"+begunermath.slice(15, 24)+" O'Clock";
    //      document.getElementById("demo").innerHTML;
    //   document.getElementById("demo").innerHTML =
    //   text.replace("Microsoft","W3Schools");
}

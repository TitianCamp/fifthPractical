document.querySelector(".E").innerHTML = Math.E;
document.querySelector(".PI").innerHTML = Math.PI;
document.querySelector(".LOG10E").innerHTML = Math.LOG10E;
document.querySelector(".LOG2E").innerHTML = Math.LOG2E;
document.querySelector(".LN10").innerHTML = Math.LN10;
document.querySelector(".LN2").innerHTML = Math.LN2;
document.querySelector(".SQRT2").innerHTML = Math.SQRT2;
document.querySelector(".SQRT1_2").innerHTML = Math.SQRT1_2;

document.querySelector(".task1").innerHTML = Math.atan(1);
document.querySelector(".task2").innerHTML = Math.E**2;
document.querySelector(".task3").innerHTML = Math.log(Math.E**2);
document.querySelector(".task4").innerHTML = Math.log10(100);
document.querySelector(".task5").innerHTML = Math.log2(8);

document.querySelector(".random").innerHTML = Math.random()*1;

function changeWindow(window_){
    window.location.href = window_;
}
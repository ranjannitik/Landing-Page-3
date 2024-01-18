let right=document.querySelector(".right");
let leftMidText=document.querySelector(".leftMidText");
let imgbox=document.querySelector(".imgbox");
let rightMid=document.querySelector(".rightMid");
let write=document.querySelector(".write");
let beauty=document.querySelector(".beauty");
let lt=document.querySelector(".lt");
let rt=document.querySelector(".rt");
let rigthtup=document.querySelector(".rightup");
let ltb=document.querySelector(".ltb");
let rtb=document.querySelector(".rtb");
let pl=document.querySelector(".pl");
let pa=document.querySelector(".pa");
let plb=document.querySelector(".pl");
let pab=document.querySelector(".pa");
let one=document.querySelector(".one");
let two=document.querySelector(".two");
let three=document.querySelector(".three");




function nit1(){
    two.style.borderBottom='';
    three.style.borderBottom='';
    two.style.opacity='';
    three.style.opacity='';
    right.style.backgroundColor='';
    leftMidText.style.color='';
    imgbox.style.backgroundImage='';
    rightMid.style.backgroundColor='';
    write.style.backgroundColor='';
    beauty.style.color='';
    beauty.innerHTML='NATURAL BEAUTY';
    lt.style.color='';
    rt.style.color='';
    pl.style.color='';
    pa.style.color='';
    one.style.borderBottom='2px solid white';
    one.style.opacity='1';

   


}

function nit2(){
    one.style.borderBottom='';
    three.style.borderBottom='';
    one.style.opacity='';
    three.style.opacity='';
    right.style.backgroundColor=' rgb(79, 206, 234)';
    leftMidText.style.color='rgb(104, 178, 186)';
    imgbox.style.backgroundImage='url("./image/bl2.jpg")';
    rightMid.style.backgroundColor='rgb(104, 178, 186)';
    write.style.backgroundColor='rgb(104, 178, 186)';
    beauty.style.color='rgb(104, 178, 186)';
    beauty.innerHTML='COOL VARIANT';
    lt.style.color='rgb(104, 178, 186)';
    rt.style.color='rgb(104, 178, 186)';
    pl.style.color='rgb(104, 178, 186)';
    pa.style.color='rgb(104, 178, 186)';
    two.style.borderBottom='2px solid white';
    two.style.opacity='1';


}
function nit3(){
    two.style.borderBottom='';
    one.style.borderBottom='';
    two.style.opacity='';
    one.style.opacity='';
    right.style.backgroundColor='rgba(250, 203, 48, 0.961)';
    
    leftMidText.style.color='rgba(208, 170, 45, 0.961)';
    imgbox.style.backgroundImage='url("./image/ye1.jpg")';
    rightMid.style.backgroundColor='rgba(208, 170, 45, 0.961)';
    write.style.backgroundColor='rgba(208, 170, 45, 0.961)';
    beauty.style.color='rgba(208, 170, 45, 0.961)';
    beauty.innerHTML='SUNRISE FEEL';
    lt.style.color='rgba(208, 170, 45, 0.961)';
    rt.style.color='rgba(208, 170, 45, 0.961)';
    pl.style.color='rgba(208, 170, 45, 0.961)';
    pa.style.color='rgba(208, 170, 45, 0.961)';
    three.style.borderBottom='2px solid white';
   three.style.opacity='1';

    

}
let count=0;

function but1(){
    count=(count+1)%3;
    callTurn();
    

}
function but2(){
    count=(count+2)%3;
    callTurn();
}






function callTurn() {
    if (count === 0) {
        nit1();
    } else if (count === 1) {
        nit2();
    } else if (count === 2) {
        nit3();
    }
}







let currentIndex = 0; // Track the current index for the loop
let intervalId; // To store the interval ID
function but3(){
    intervalId = setInterval(function() {
        callAppropriateNitFunction();
        currentIndex = (currentIndex + 1) % 3; // Increment index in a loop (0, 1, 2, 0, 1, 2, ...)
    }, 2000); // Interval set to 4 seconds, adjust as needed

}
function but4(){
    clearInterval(intervalId);
}




// Function to call the appropriate nit function based on the current index
function callAppropriateNitFunction() {
    if (currentIndex === 0) {
        nit1();
    } else if (currentIndex === 1) {
        nit2();
    } else if (currentIndex === 2) {
        nit3();
    }
}



const tapCalc=document.querySelector('#calcTap');
const drillCalc=document.querySelector('#calcDrill');
const endMillCalc=document.querySelector('#calcEndMill');



tapCalc.addEventListener("click", ()=>{
    console.log("He tapped me right here");
})

drillCalc.addEventListener("click", ()=>{
    console.log("He drilled me right here");
})

endMillCalc.addEventListener("click", ()=>{
    console.log("He endmilled me right here");
})
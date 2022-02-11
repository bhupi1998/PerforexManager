//buttons
const tapCalc=document.querySelector('#calcTap');
const drillCalc=document.querySelector('#calcDrill');
const endMillCalc=document.querySelector('#calcEndMill');

//tap inputs
const sfmTap=document.querySelector('#sfmTap');
const diameterTap=document.querySelector('#diameterTap');
const tapPitch=document.querySelector('#tapPitch');//TPI
//tap outputs
const tapRPMOutput=document.querySelector('#tapRPMOutput');
const tapGradientOutput=document.querySelector('#tapGradientOutput');

//drill inputs
const drillIPR=document.querySelector('#drillIPR');
//drill outputs
const drillZfeed=document.querySelector('#drillZFeed');

//endMill inputs
const endMillFeed=document.querySelector('#endMillFeed');
//endmill outputs
const millZFeed=document.querySelector('#millZFeed');

tapCalc.addEventListener("click", ()=>{
    let rpm=Math.round(((sfmTap.value*97.028)/diameterTap.value)*100)/100; //rounding
    let gradient=Math.round(((1/tapPitch.value)*25.4)*100)/100;
    if(isNaN(rpm))
        rpm=0;
    if(gradient==Infinity)
        gradient=0;
    tapRPMOutput.textContent=rpm;
    tapGradientOutput.textContent=gradient;
})

drillCalc.addEventListener("click", ()=>{
    let drillFeed=Math.round((drillIPR.value*25.40)*100)/100;
    drillZfeed.textContent=drillFeed;
})
//inch per minute to m/min
endMillCalc.addEventListener("click", ()=>{
    let millFeed=Math.round((endMillFeed.value/39.37)*100)/100;
    millZFeed.textContent=millFeed;
})
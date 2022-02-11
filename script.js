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
    let rpm=(sfmTap.value*97.028)/diameterTap.value;
    let gradient=(1/tapPitch.value)*25.4;
    tapRPMOutput.textContent=rpm;
    tapGradientOutput.textContent=gradient;
})

drillCalc.addEventListener("click", ()=>{
    let drillFeed=drillIPR.value*25.40;
    drillZfeed.textContent=drillFeed;
})
//inch per minute to m/min
endMillCalc.addEventListener("click", ()=>{
    let millFeed=endMillFeed.value/39.37;
    millZFeed.textContent=millFeed;
})
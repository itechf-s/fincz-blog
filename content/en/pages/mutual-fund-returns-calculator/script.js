"use strict";var sliderTI=document.getElementById("sliderTI");var inputTI=document.getElementById("inputTI");var sliderROI=document.getElementById("sliderROI");var inputROI=document.getElementById("inputROI");var sliderTenure=document.getElementById("sliderTenure");var inputTenure=document.getElementById("inputTenure");inputTI.innerHTML=sliderTI.value;inputROI.innerHTML=sliderROI.value;inputTenure.innerHTML=sliderTenure.value;sliderTI.oninput=function(){inputTI.innerHTML=this.value;};sliderROI.oninput=function(){inputROI.innerHTML=this.value;};sliderTenure.oninput=function(){inputTenure.innerHTML=this.value;};function showTotalInvestmentVal(newVal){sliderTI.value=newVal;calculateIt();}
function showExpectedReturnsVal(newVal){sliderROI.value=newVal;calculateIt();}
function showTimePeriodVal(newVal){sliderTenure.value=newVal;calculateIt();}
sliderTI.addEventListener("input",updateValueTotalInvestment);sliderROI.addEventListener("input",updateValueExpectedReturns);sliderTenure.addEventListener("input",updateValueTimePeriod);function updateValueTotalInvestment(e){inputTI.value=e.srcElement.value;calculateIt();}
function updateValueExpectedReturns(e){inputROI.value=e.srcElement.value;calculateIt();}
function updateValueTimePeriod(e){inputTenure.value=e.srcElement.value;calculateIt();}
AttachInputListeners();var initialLoad=true;var chart;getParams();calculateIt();function calculateIt(){let O_TI=document.getElementById("r1");let O_ER=document.getElementById("r2");let O_TV=document.getElementById("r3");let TI,ER,TV;TI=Number(inputTI.value);let ROI=Number(inputROI.value);let T=Number(inputTenure.value);if(TI>=500&&ROI>=1){TV=Math.round(Math.pow(1+ROI/100,T)*TI);ER=Math.round(TV-TI);O_TI.innerHTML="₹"+TI.toLocaleString('en-IN');O_ER.innerHTML="₹"+ER.toLocaleString('en-IN');O_TV.innerHTML="₹"+TV.toLocaleString('en-IN');if(!initialLoad){chart.destroy();}
DrawChart(TI,ER);initialLoad=false;}}
function DrawChart(TI,ER){var ctx=document.getElementById("myChart").getContext("2d");chart=new Chart(ctx,{type:"doughnut",data:{labels:["Total Investment","Est. Returns"],datasets:[{backgroundColor:["#5367ff","#00d09c"],data:[TI,ER],},],},options:{segmentShowStroke:false,responsive:true,},});}
function getParams(){let urlVal=window.location.href;let url=new URL(urlVal);let cta=url.searchParams.get("cta");let logo=url.searchParams.get("logo");if(cta==="hide"){let ctaDiv=document.getElementById("cta");ctaDiv.style.display="none";}
if(logo==="true"){document.getElementById("logo").style.display="block";}}
function AttachInputListeners(){inputTI.addEventListener("input",(e)=>{let val=e.target.value;if(val<0){inputTI.value=500;calculateIt();}
if(val>5000000){inputTI.value=5000000;calculateIt();}});inputROI.addEventListener("input",(e)=>{let val=e.target.value;if(val<0){inputROI.value=1;calculateIt();}
if(val>50){inputROI.value=50;calculateIt();}});}
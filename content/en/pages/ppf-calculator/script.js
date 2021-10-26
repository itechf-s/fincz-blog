"use strict";var totalInvestmentSlider=document.getElementById("myInvestmentPerYearAmount");var amountTotalInvestmentOutput=document.getElementById("inputInvestmentPerYear");var timePeriodSlider=document.getElementById("myTimePeriod");var timePeriodOutput=document.getElementById("inputTimePeriod");var roiInput=document.getElementById("inputRoi");amountTotalInvestmentOutput.innerHTML=totalInvestmentSlider.value;timePeriodOutput.innerHTML=timePeriodSlider.value;totalInvestmentSlider.oninput=function(){amountTotalInvestmentOutput.innerHTML=this.value;};timePeriodSlider.oninput=function(){timePeriodOutput.innerHTML=this.value;};function showInvestmentPerYearVal(newVal){totalInvestmentSlider.value=newVal;calculateIt();}
function showTimePeriodVal(newVal){timePeriodSlider.value=newVal;calculateIt();}
totalInvestmentSlider.addEventListener("input",updateValueTotalInvestment);timePeriodSlider.addEventListener("input",updateValueTimePeriod);function updateValueTotalInvestment(e){amountTotalInvestmentOutput.value=e.srcElement.value;calculateIt();}
function updateValueTimePeriod(e){timePeriodOutput.value=e.srcElement.value;calculateIt();}
AttachInputListener();var initialLoad=true;var chart;getParams();calculateIt();function calculateIt(){var o_ia=document.getElementById("r1");var o_ti=document.getElementById("r2");var o_mv=document.getElementById("r3");var YI=Number(amountTotalInvestmentOutput.value);var TP=Number(timePeriodOutput.value);var ROI=Number(roiInput.value);if(YI>=500&&TP>=15){var investedAmount=Math.round(YI*TP);var maturityValue=Math.round(((YI*(Math.pow(1+ROI/100,TP)-1))/(ROI/100))*(1+ROI/100));var totalInterest=maturityValue-investedAmount;o_ia.innerHTML="₹"+investedAmount.toLocaleString('en-IN');o_ti.innerHTML="₹"+totalInterest.toLocaleString('en-IN');o_mv.innerHTML="₹"+maturityValue.toLocaleString('en-IN');if(!initialLoad){chart.destroy();}
DrawChart(investedAmount,totalInterest);initialLoad=false;}}
function DrawChart(investedAmount,totalInterest){var ctx=document.getElementById("myChart").getContext("2d");chart=new Chart(ctx,{type:"doughnut",data:{labels:["Total Investment","Total Interest"],datasets:[{backgroundColor:["#5367ff","#00d09c"],data:[investedAmount,totalInterest],},],},options:{segmentShowStroke:false,responsive:true,},});}
function getParams(){let urlVal=window.location.href;let url=new URL(urlVal);let cta=url.searchParams.get("cta");let name=url.searchParams.get("name");if(cta==="hide"){let ctaDiv=document.getElementById("cta");ctaDiv.style.display="none";}
if(name!==null){let heading=document.getElementById("heading");heading.innerHTML=name+" PPF Calculator";}}
function AttachInputListener(){amountTotalInvestmentOutput.addEventListener("input",(e)=>{let val=e.target.value;if(val<0){amountTotalInvestmentOutput.value=500;calculateIt();}
if(val>150000){amountTotalInvestmentOutput.value=150000;calculateIt();}});}
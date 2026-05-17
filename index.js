const fromCurrency=document.querySelector("#Fromcurrency");
const toCurrency=document.querySelector("#Tocurrency");
const amount=document.querySelector("#amount");
const result = document.querySelector("#res");
const button= document.querySelector("#btn");
const Url = "https://open.er-api.com/v6/latest/";

let fromVal;
let toVal;
let amountVal;

const getRate = async()=>{
    fromVal = fromCurrency.value;
    toVal = toCurrency.value;

    let response =await fetch(Url+fromVal);
    let data = await response.json()
    // console.log(response);
    console.log(data);
    // console.log(data.rates);

    // console.log("from = ",data.rates[fromVal]);
    // console.log("To = ",data.rates[toVal]);
    amountVal = Number(amount.value);
    // console.log(amountVal,typeof(amountVal));
    let answer = amountVal*data.rates[toVal];
    result.innerHTML = answer.toFixed(2);
};


button.addEventListener("click",getRate);

for (let code in currencyToCountryName){
let option1 = document.createElement("option");
option1.value = code;

option1.innerText = currencyToCountryName[code];
document.querySelector("#inp1").appendChild(option1);
}


for (let code in currencyToCountryName){
let option2 = document.createElement("option");
option2.value = code;
option2.innerText = currencyToCountryName[code];
document.querySelector("#inp2").appendChild(option2);
}

document.querySelector("#inp1").addEventListener("change",function (){
    const selectedCountryName = this.value;
    for (let Cnames in currencyToCountryCode){
        if (Cnames == selectedCountryName){
            document.querySelector(".firstImage").src = `https://flagsapi.com/${currencyToCountryCode[Cnames]}/flat/64.png`;
            country = Cnames;
        }
    }
})

document.querySelector("#inp2").addEventListener("change",function (){
    const selectedCountryName = this.value;
        for (let Cnames in currencyToCountryCode){
        if (Cnames == selectedCountryName){
            document.querySelector(".secondImage").src = `https://flagsapi.com/${currencyToCountryCode[Cnames]}/flat/64.png`
            country2 = Cnames;
        }
    }
})

// Handle conversion on button click
document.querySelector(".calc").addEventListener("click", async function () {
  if (!country || !country2) {
    alert("Please select both currencies.");
    return;
  }
const url = "https://api.exchangerate-api.com/v4/latest/";
(async ()=>{
    try{
        let gettingData = await fetch(url + country);
        if (gettingData.ok){
            let convertData = await gettingData.json();
            let convertedData = convertData.rates;
            sendData(convertedData[country],convertedData[country2]);
        }else{
            console.log("error",gettingData.status);
        }
    }catch (error){
        console.log("error :",error);
    }
})();


function sendData(inp1,inp2){
    let numberOfCash = document.querySelector(".num").value;
    if (numberOfCash){
    document.querySelector(".result_text").innerText = `${numberOfCash} ${country}  =   ${inp2 * numberOfCash} ${country2}`;
    }else{
       document.querySelector(".result_text").innerText = `${inp1} ${country}   =    ${inp2} ${country2}`; 
    }
}
});





























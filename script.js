// old format------>>
// json = fetchJSON(`/currencies/{fromCurrency}/{toCurrency}`)
// rate = json[toCurrency]

// new format ------->>>
// json = fetchJSON(`/currencies/{fromCurrency}`)
// rate = json[fromCurrency][toCurrency]

BASE = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json"


let dropdowns = document.querySelectorAll("select");
let rate = document.querySelector("#rate");
let btn = document.querySelector("form button");
let fromCurrency = document.querySelector("#from select");
let toCurrency = document.querySelector("#to select");
let msg = document.querySelector("#msg p");

for (let select of dropdowns) {
    for (let currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;

        if (select.name === "From" && currCode === "USD") {
            newOption.selected = "selected";
        } else if (select.name === "To" && currCode === "PKR") {
            newOption.selected = "selected";
        }

        select.append(newOption);
    }
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });
}


const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}

const updateRate = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newRate = ``
}

btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    let amt = document.querySelector("#user-input input");
    let amtValue = amt.value;

    if (amtValue === "" || amtValue < 0) {
        amtValue = 1;
        amt.value = "1";
    }

    // console.log(fromCurrency.value.toLowerCase(), toCurrency.value.toLowerCase());

    let response = await fetch(BASE);
    let data = await response.json();
    let fromRate = data.eur[`${fromCurrency.value.toLowerCase()}`];
    let toRate = data.eur[`${toCurrency.value.toLowerCase()}`];
    let exrate = toRate / fromRate;

    // console.log(`EUR to ${fromCurrency.value}:`, fromRate);
    // console.log(`EUR to ${toCurrency.value4}:`, toRate);
    // console.log(`Rate: ${exrate}`);
    exrate = exrate.toFixed(3);

    rate.innerText = `1 ${fromCurrency.value} = ${exrate} ${toCurrency.value}`;
    let finalAmount = amt.value * exrate;
    console.log(finalAmount);
    msg.innerText = `${amtValue} ${fromCurrency.value} = ${finalAmount} ${toCurrency.value}`;
});
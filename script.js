// Base URLto calculate exchange rates from EUR to all Currencies
BASE = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json"

// Intialization of all HTML elements needed during the execution of the Program
let dropdowns = document.querySelectorAll("select");
let rate = document.querySelector("#rate");
let btn = document.querySelector("form button");
let fromCurrency = document.querySelector("#from select");
let toCurrency = document.querySelector("#to select");
let msg = document.querySelector("#msg p");
let date;

// Adding all options in the dropdown menus
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

// Updating flags properly according to the Currency Codes
const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}

// Function to calculate the updated rate
const updateRate = async () => {
    let response = await fetch(BASE);
    let data = await response.json();
    let fromRate = data.eur[`${fromCurrency.value.toLowerCase()}`];
    let toRate = data.eur[`${toCurrency.value.toLowerCase()}`];
    let exrate = toRate / fromRate;
    date = data.date;
    exrate = exrate.toFixed(3);
    return exrate;
}

// Check Amount Value and set to 1 if negative or empty
const checkVal = (amount) => {
    if (amount.value === "" || amount.value < 0) {
        amount.value = "1";
    }
}

// Update msg
const updateMsg = (exrate, amt) => {
    rate.innerText = `1 ${fromCurrency.value} = ${exrate} ${toCurrency.value}, (${date})`;
    let finalAmount = amt.value * exrate;
    msg.innerText = `${amt.value} ${fromCurrency.value} = ${finalAmount} ${toCurrency.value}`;
}

// Event Listner to perform exchange
btn.addEventListener("click", async (evt) => {
    // Prevent page from refreshing
    evt.preventDefault();
    let amt = document.querySelector("#user-input input");
    checkVal(amt);
    let exrate = await updateRate();
    updateMsg(exrate, amt);
});
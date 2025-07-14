# 🌐 Currency Converter – Real-time Web App 💱

This is a fully functional, real-time **Currency Converter** web application built using **HTML, CSS, and JavaScript**. It uses the latest exchange rates from an open API and allows users to convert amounts between any two supported currencies with live flag updates and conversion results.

## 🚀 Features

- 🔁 Convert between **any two currencies** (USD, PKR, EUR, etc.)
- 🌍 Live exchange rates from [Fawaz Ahmed's Currency API](https://github.com/fawazahmed0/currency-api)
- 🏳️ Dynamic country flag updates based on selected currencies
- 💬 Real-time conversion result display
- ✔️ Input validation (defaults to 1 if left empty or negative)
- 🔽 Pre-filled dropdowns with popular currencies (USD to PKR)

## 🛠️ Tech Stack

- **HTML5** – UI structure
- **CSS3** – Styling and layout
- **JavaScript** – Logic, API integration, and DOM manipulation
- **Currency API** – Live exchange rate data
- **FlagsAPI** – Dynamic flag display

## 📦 Functionality Breakdown

- **Dropdown Generation**: All currency codes are fetched from a predefined country list and injected into both "From" and "To" selectors.
- **Live Flag Updates**: Automatically updates country flags based on selected currency.
- **Exchange Rate Calculation**: Uses EUR as the base and calculates the rate using the formula:  
  `toRate / fromRate`
- **User Feedback**: Displays conversion rate and converted amount dynamically.
- **Validation**: Ensures a default value of 1 if user input is empty or invalid.

## 📸 Screenshots

Check the /docs folder to view the live demo of this project

## 🧪 To Do / Future Enhancements

- Add dark/light theme toggle  
- Support currency formatting (e.g., commas, symbols)  
- Cache results locally for offline usage  

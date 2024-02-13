const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");
const moedaConverter = document.querySelector(".moeda-a-converter");

convertButton.addEventListener("click", () => {
  if (moedaConverter.value == "real") {
    const imgCovert = document.querySelector(".img-a-converter");
    imgCovert.src = "./assets/brasil 2.png";

    const currency = document.querySelector(".currency");
    currency.innerHTML = "real";

    changeCurrency();
    convertValues();
  }
});

function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value;
  const currencyValue = document.querySelector(".currency-value");
  const currencyValueConvet = document.querySelector(".currency-value-convet");

  const dolarToday = 5.2;
  const euroToday = 6.2;
  const libraToday = 7.5;
  const bitToday = 1000;

  if (currencySelect.value == "real") {
    currencyValueConvet.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrencyValue);
  }

  if (currencySelect.value == "dolar") {
    currencyValueConvet.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarToday);
  }

  if (currencySelect.value == "euro") {
    currencyValueConvet.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / euroToday);
  }

  if (currencySelect.value == "libra") {
    currencyValueConvet.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue / libraToday);
  }

  if (currencySelect.value == "bit") {
    currencyValueConvet.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "BTC",
    }).format(inputCurrencyValue / bitToday);
  }

  currencyValue.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue);
}

function changeCurrency() {
  const currencyConvert = document.querySelector(".currency-convert");
  const imgCurrency = document.querySelector(".img-currency");

  if (currencySelect.value == "real") {
    currencyConvert.innerHTML = "Real";
    imgCurrency.src = "./assets/brasil 2.png";
  }

  if (currencySelect.value == "dolar") {
    currencyConvert.innerHTML = "Dolar";
    imgCurrency.src = "./assets/estados-unidos (1) 1.png";
  }

  if (currencySelect.value == "euro") {
    currencyConvert.innerHTML = "Euro";
    imgCurrency.src = "./assets/Design sem nome 3.png";
  }

  if (currencySelect.value == "libra") {
    currencyConvert.innerHTML = "Libra";
    imgCurrency.src = "./assets/libra 1.png";
  }

  if (currencySelect.value == "bit") {
    currencyConvert.innerHTML = "Bitcoin";
    imgCurrency.src = "./assets/bitcoin 1.png";
  }

  /*convertValues();*/
}

convertButton.addEventListener("click", () => {
  if (moedaConverter.value == "dolar") {
    const imgCovert = document.querySelector(".img-a-converter");
    imgCovert.src = "./assets/estados-unidos (1) 1.png";

    const currency = document.querySelector(".currency");
    currency.innerHTML = "Dólar";

    changeCurrency();
    convertDolar();
  }
});

function convertDolar() {
  const inputCurrencyValue = document.querySelector(".input-currency").value;
  const currencyValue = document.querySelector(".currency-value");
  const currencyValueConvet = document.querySelector(".currency-value-convet");

  const dolarToday = 5.2;
  const euroToday = 6.2;
  const libraToday = 7.5;
  const bitToday = 1000;

  if (currencySelect.value == "real") {
    currencyValueConvet.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrencyValue * dolarToday);
  }

  if (currencySelect.value == "dolar") {
    currencyValueConvet.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue);
  }

  if (currencySelect.value == "euro") {
    currencyValueConvet.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue * (dolarToday / euroToday));
  }

  if (currencySelect.value == "libra") {
    currencyValueConvet.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue * (dolarToday / libraToday));
  }

  if (currencySelect.value == "bit") {
    currencyValueConvet.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "BTC",
    }).format(inputCurrencyValue * (dolarToday / bitToday));
  }

  currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(inputCurrencyValue);
}

convertButton.addEventListener("click", () => {
  if (moedaConverter.value == "euro") {
    const imgCovert = document.querySelector(".img-a-converter");
    imgCovert.src = "./assets/Design sem nome 3.png";

    const currency = document.querySelector(".currency");
    currency.innerHTML = "Euro";

    changeCurrency();
    convertEuro();
  }
});

function convertEuro() {
  const inputCurrencyValue = document.querySelector(".input-currency").value;
  const currencyValue = document.querySelector(".currency-value");
  const currencyValueConvet = document.querySelector(".currency-value-convet");

  const dolarToday = 5.2;
  const euroToday = 6.2;
  const libraToday = 7.5;
  const bitToday = 1000;

  if (currencySelect.value == "real") {
    currencyValueConvet.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrencyValue * euroToday);
  }

  if (currencySelect.value == "dolar") {
    currencyValueConvet.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue * (euroToday / dolarToday));
  }

  if (currencySelect.value == "euro") {
    currencyValueConvet.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue);
  }

  if (currencySelect.value == "libra") {
    currencyValueConvet.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue * (euroToday / libraToday));
  }

  if (currencySelect.value == "bit") {
    currencyValueConvet.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "BTC",
    }).format(inputCurrencyValue * (euroToday / bitToday));
  }

  currencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(inputCurrencyValue);
}

convertButton.addEventListener("click", () => {
  if (moedaConverter.value == "libra") {
    const imgCovert = document.querySelector(".img-a-converter");
    imgCovert.src = "./assets/libra 1.png";

    const currency = document.querySelector(".currency");
    currency.innerHTML = "Libra";

    changeCurrency();
    convertLibra();
  }
});

function convertLibra() {
  const inputCurrencyValue = document.querySelector(".input-currency").value;
  const currencyValue = document.querySelector(".currency-value");
  const currencyValueConvet = document.querySelector(".currency-value-convet");

  const dolarToday = 5.2;
  const euroToday = 6.2;
  const libraToday = 7.5;
  const bitToday = 1000;

  if (currencySelect.value == "real") {
    currencyValueConvet.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrencyValue * libraToday);
  }

  if (currencySelect.value == "dolar") {
    currencyValueConvet.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue * (libraToday / dolarToday));
  }

  if (currencySelect.value == "euro") {
    currencyValueConvet.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue * (dolarToday / euroToday));
  }

  if (currencySelect.value == "libra") {
    currencyValueConvet.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue);
  }

  if (currencySelect.value == "bit") {
    currencyValueConvet.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "BTC",
    }).format(inputCurrencyValue * (libraToday / bitToday));
  }

  currencyValue.innerHTML = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(inputCurrencyValue);
}

convertButton.addEventListener("click", () => {
  if (moedaConverter.value == "bit") {
    const imgCovert = document.querySelector(".img-a-converter");
    imgCovert.src = "./assets/bitcoin 1.png";

    const currency = document.querySelector(".currency");
    currency.innerHTML = "Bitcoin";

    changeCurrency();
    convertBitcoin();
  }
});

function convertBitcoin() {
  const inputCurrencyValue = document.querySelector(".input-currency").value;
  const currencyValue = document.querySelector(".currency-value");
  const currencyValueConvet = document.querySelector(".currency-value-convet");

  const dolarToday = 5.2;
  const euroToday = 6.2;
  const libraToday = 7.5;
  const bitToday = 1000;

  if (currencySelect.value == "real") {
    currencyValueConvet.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrencyValue * bitToday);
  }

  if (currencySelect.value == "dolar") {
    currencyValueConvet.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue * (bitToday / dolarToday));
  }

  if (currencySelect.value == "euro") {
    currencyValueConvet.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue * (bitToday / euroToday));
  }

  if (currencySelect.value == "libra") {
    currencyValueConvet.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue * (euroToday / libraToday));
  }

  if (currencySelect.value == "bit") {
    currencyValueConvet.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "BTC",
    }).format(inputCurrencyValue);
  }

  currencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "BTC",
  }).format(inputCurrencyValue);
}
